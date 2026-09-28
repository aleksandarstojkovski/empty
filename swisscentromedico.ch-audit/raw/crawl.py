"""Crawl swisscentromedico.ch into local files for the audit.

Written for this audit because the bundled fetchers refuse the session's
loopback HTTPS proxy. Uses plain requests (honours HTTPS_PROXY + CA bundle).
Output: pages/<slug>.html, pages.json (per-page extracted SEO fields),
links.json (every internal link/asset target with status).
"""
import json, re, time, hashlib
from collections import deque
from urllib.parse import urljoin, urlparse, urldefrag
from urllib import robotparser

import requests
from bs4 import BeautifulSoup

BASE = "https://swisscentromedico.ch/"
HOST = "swisscentromedico.ch"
UA = "Mozilla/5.0 (compatible; claude-seo-audit/2.4; +https://claude.ai/code)"
OUT = "."
S = requests.Session()
S.headers["User-Agent"] = UA

RULES = [(l.split(":",1)[0].strip().lower(), l.split(":",1)[1].strip()) for l in open("robots.txt") if ":" in l and l.split(":",1)[0].strip().lower() in ("allow","disallow")]
def allowed(u):
    path = urlparse(u).path or "/"
    best = ("allow", "")
    for kind, pat in RULES:
        if pat and path.startswith(pat) and len(pat) >= len(best[1]):
            if len(pat) > len(best[1]) or kind == "allow":
                best = (kind, pat)
    return best[0] == "allow"

def norm(u):
    u, _ = urldefrag(u)
    return u

def slug(u):
    p = urlparse(u).path.strip("/") or "home"
    return re.sub(r"[^a-zA-Z0-9]+", "_", p)[:120]

sitemap_urls = re.findall(r"<loc>([^<]+)</loc>", open("sitemap.xml").read())
queue = deque([BASE] + sitemap_urls)
seen, pages, link_targets = set(), {}, {}
inlinks = {}

def extract(url, resp):
    soup = BeautifulSoup(resp.text, "lxml")
    d = {"url": url, "status": resp.status_code, "final_url": resp.url,
         "redirects": [r.status_code for r in resp.history],
         "bytes": len(resp.content),
         "headers": {k.lower(): v for k, v in resp.headers.items()}}
    html = soup.find("html")
    d["lang"] = html.get("lang") if html else None
    t = soup.find("title")
    d["title"] = t.get_text(strip=True) if t else None
    def meta(**kw):
        m = soup.find("meta", attrs=kw)
        return m.get("content") if m else None
    d["meta_description"] = meta(name="description")
    d["meta_robots"] = meta(name="robots")
    d["viewport"] = meta(name="viewport")
    c = soup.find("link", rel="canonical")
    d["canonical"] = c.get("href") if c else None
    d["hreflang"] = [(l.get("hreflang"), l.get("href")) for l in soup.find_all("link", rel="alternate") if l.get("hreflang")]
    d["og"] = {m.get("property"): m.get("content") for m in soup.find_all("meta") if (m.get("property") or "").startswith("og:")}
    d["twitter"] = {m.get("name"): m.get("content") for m in soup.find_all("meta") if (m.get("name") or "").startswith("twitter:")}
    d["headings"] = [(h.name, h.get_text(" ", strip=True)) for h in soup.find_all(re.compile(r"^h[1-6]$"))]
    d["jsonld"] = []
    for s in soup.find_all("script", type="application/ld+json"):
        try:
            d["jsonld"].append(json.loads(s.string or ""))
        except Exception as e:
            d["jsonld"].append({"_parse_error": str(e), "_raw": (s.string or "")[:500]})
    imgs = []
    for im in soup.find_all("img"):
        imgs.append({k: im.get(k) for k in ("src", "alt", "width", "height", "loading", "decoding", "srcset", "sizes", "fetchpriority")})
    d["images"] = imgs
    d["pictures"] = len(soup.find_all("picture"))
    links = []
    for a in soup.find_all("a", href=True):
        href = urljoin(resp.url, a["href"])
        links.append({"href": norm(href), "text": a.get_text(" ", strip=True)[:120], "rel": a.get("rel"), "target": a.get("target")})
    d["links"] = links
    d["scripts"] = [s.get("src") for s in soup.find_all("script") if s.get("src")]
    d["inline_scripts"] = len([s for s in soup.find_all("script") if not s.get("src")])
    d["stylesheets"] = [l.get("href") for l in soup.find_all("link", rel="stylesheet")]
    d["preloads"] = [(l.get("as"), l.get("href")) for l in soup.find_all("link", rel="preload")]
    d["iframes"] = [i.get("src") for i in soup.find_all("iframe")]
    body = soup.find("body")
    for tag in (body or soup).find_all(["script", "style", "noscript"]):
        tag.decompose()
    main = soup.find("main")
    text = (main or body or soup).get_text(" ", strip=True)
    d["main_present"] = main is not None
    d["word_count_main"] = len(text.split())
    d["word_count_body"] = len((body or soup).get_text(" ", strip=True).split())
    d["text_hash"] = hashlib.md5(text.encode()).hexdigest()
    d["main_text"] = text
    return d

while queue:
    u = norm(queue.popleft())
    p = urlparse(u)
    if p.netloc != HOST or u in seen or len(seen) >= 500:
        continue
    if not allowed(u):
        continue
    if re.search(r"\.(jpg|jpeg|png|webp|avif|gif|svg|pdf|css|js|ico|xml|txt|woff2?)$", p.path, re.I):
        continue
    seen.add(u)
    try:
        r = S.get(u, timeout=30, allow_redirects=True)
        if urlparse(r.url).netloc != HOST:
            pages[u] = {"url": u, "status": r.history[0].status_code if r.history else r.status_code,
                        "offsite_redirect_to": r.url}
            continue
    except Exception as e:
        pages[u] = {"url": u, "error": str(e)}
        continue
    ct = r.headers.get("content-type", "")
    if "html" not in ct:
        pages[u] = {"url": u, "status": r.status_code, "content_type": ct}
        continue
    open(f"{OUT}/pages/{slug(u)}.html", "w").write(r.text)
    d = extract(u, r)
    pages[u] = d
    for l in d["links"]:
        h = l["href"]
        if urlparse(h).netloc == HOST:
            inlinks.setdefault(h, set()).add(u)
            if h not in seen:
                queue.append(h)
    time.sleep(0.5)

# Check every internal link + asset target status (HEAD, fallback GET)
targets = set()
for d in pages.values():
    for l in d.get("links", []):
        if urlparse(l["href"]).netloc == HOST:
            targets.add(l["href"])
    for im in d.get("images", []):
        if im.get("src"):
            targets.add(urljoin(d["url"], im["src"]))
    for s in d.get("scripts", []) + d.get("stylesheets", []):
        targets.add(urljoin(d["url"], s))
for t in sorted(targets):
    if urlparse(t).netloc != HOST:
        continue
    try:
        r = S.head(t, timeout=20, allow_redirects=False)
        link_targets[t] = {"status": r.status_code, "location": r.headers.get("location"),
                           "content_type": r.headers.get("content-type"),
                           "content_length": r.headers.get("content-length"),
                           "cache_control": r.headers.get("cache-control")}
    except Exception as e:
        link_targets[t] = {"error": str(e)}
    time.sleep(0.1)

json.dump(pages, open(f"{OUT}/pages.json", "w"), indent=1, ensure_ascii=False)
json.dump(link_targets, open(f"{OUT}/links.json", "w"), indent=1, ensure_ascii=False)
json.dump({k: sorted(v) for k, v in inlinks.items()}, open(f"{OUT}/inlinks.json", "w"), indent=1, ensure_ascii=False)
print("pages crawled:", len(pages), "link/asset targets:", len(link_targets))
