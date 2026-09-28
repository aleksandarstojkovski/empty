# Technical SEO Audit — swisscentromedico.ch

Audit date: 2026-09-28. Scope: crawlability, indexability, canonicals, hreflang, redirects/status codes, robots.txt, security headers, URL structure, mobile config, JS rendering, IndexNow. 96 URLs analyzed (24 pages × 4 languages: IT default `/`, DE `/de/`, FR `/fr/`, EN `/en/`).

Source data: `/home/user/empty/swisscentromedico.ch-audit/raw/pages.json` (96-page crawl with headers/meta/hreflang/links), `links.json`, `inlinks.json`, `robots.txt`, `sitemap.xml`, `lighthouse/*.json`, plus live `curl` spot checks through the session proxy on 2026-09-28.

An older SERP-only audit at `/home/user/empty/seo-audit/swisscentromedico.ch.md` (pre-rebuild) flagged thin indexation (only 2 URLs visible) and inner-page titles lacking location/brand template (e.g. `/agopuntura-auricolare-rac/` titled "Agopuntura auricolare RAC - Swiss Centro Medico"). **Both findings are stale**: the current site has 96 indexable URLs all in the sitemap, and that exact page now titles `"Agopuntura RAC a Lugano | Swiss Centro Medico"`, matching the consistent `{Servizio} a Lugano | Swiss Centro Medico` template used site-wide. Not repeated below.

## Technical Score: 93/100

Verdict: this is a very clean, well-engineered static site. No critical or high-severity issues found. The few points lost are polish items (HSTS preload flag, two long IT slugs, a handful of generic utility-page titles, no IndexNow).

---

## Category Pass/Fail Summary

| Category | Status | Notes |
|---|---|---|
| 1. Crawlability | PASS | robots.txt valid, sitemap complete & accurate, no accidental blocks |
| 2. Indexability | PASS | canonicals self-referential on all 96 pages, no noindex, no duplicate content |
| 3. Security | PASS (minor gap) | Full modern header suite; HSTS present but not preload-eligible (missing `preload` token) |
| 4. URL Structure | PASS (minor gap) | Trailing-slash 100% consistent; 2 IT slugs excessively long vs DE/FR/EN equivalents |
| 5. Mobile | PASS | Correct viewport, 44–48px touch targets, extensive responsive breakpoints |
| 6. Core Web Vitals (source-level) | PASS | LCP preload w/ responsive srcset + fetchpriority, no external JS, Lighthouse LCP 0.9–2.0s / CLS ≤0.04 across sampled pages |
| 7. Structured Data | OUT OF SCOPE | Deferred to schema sub-agent; JSON-LD present on all pages (Yoast-style graph), not validated here |
| 8. JavaScript Rendering | PASS | Zero external `<script src>`; raw vs. Playwright-rendered HTML near-byte-identical (fully SSR/static) |
| 9. IndexNow | FAIL (gap) | No key file, no reference to the protocol anywhere on the site |

---

## Detailed Findings

### 1. Crawlability

**robots.txt** (`raw/robots.txt`, confirmed live via `curl https://swisscentromedico.ch/robots.txt` → 200):
```
User-Agent: *
Allow: /
Disallow: /wp-json/
Disallow: /xmlrpc.php
Disallow: /wp-admin/
Disallow: /report/
Disallow: /domande/
Disallow: /admin/
Disallow: /prenota/
Disallow: /de/termin/
Disallow: /fr/rendez-vous/
Disallow: /en/book/
Disallow: /whatsapp/
Disallow: /e/
Sitemap: https://swisscentromedico.ch/sitemap.xml
```
- **Info/Pass** — `Allow: /` appearing before the `Disallow` lines is not a bug: RFC 9309 (the standardized Robots Exclusion Protocol, 2022) resolves conflicts by **longest matching rule**, not first-match, and both Googlebot and Bingbot implement this. Every `Disallow` entry here is longer/more specific than `Allow: /`, so each is correctly enforced. Confirmed no page under any disallowed path appears in the sitemap or is otherwise expected to be indexed.
- **Low / Info** — `/wp-json/`, `/xmlrpc.php`, `/wp-admin/` are WordPress artifacts; `/report/`, `/domande/`, `/admin/`, `/e/` are not linked from any of the 96 crawled pages (checked all `pages[*].links`). These look like legacy leftovers from a prior CMS or reserved paths for tooling that isn't publicly exposed. Harmless, but worth a housekeeping pass to confirm they're still needed.
  - *How we'd know it failed*: if any of these paths is linked internally/externally and still meant to be crawled, or if it 404s and the rule is dead weight.
- **Pass** — No global crawler block; the single `User-Agent: *` group applies to AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) as well, since no separate group restricts them. Consistent with the presence of `llms.txt` (GEO agent's lane, not re-validated here).
- **Pass** — Sitemap declared correctly (`Sitemap:` directive present, absolute URL, 200 OK).

**Sitemap.xml** (parsed via Python `xml.etree`):
- Exactly **96 `<url>` entries**, **zero duplicates**, **exact 1:1 match** with the 96 crawled URLs (no orphaned sitemap entries, no crawled page missing from sitemap).
- **Zero** sitemap URLs match any robots.txt `Disallow` pattern — the 5 booking/WhatsApp redirect endpoints are correctly excluded from the sitemap.
- All `<lastmod>` values are valid `YYYY-MM-DD`, none in the future relative to 2026-09-28.
- Every `<url>` carries full `xhtml:link rel="alternate"` hreflang annotations (it/de-CH/fr-CH/en/x-default) that are **byte-identical** to the on-page hreflang for all 96 pages — zero mismatches found.
- **Pass**, no action needed. *How we'd know it failed*: sitemap entry count diverging from live crawl count, or hreflang blocks in the sitemap disagreeing with in-page `<link>` tags.

**Disallowed internal redirect endpoints** (`/prenota/`, `/de/termin/`, `/fr/rendez-vous/`, `/en/book/`, `/whatsapp/`): each is linked from every page (92 occurrences for the booking links, 184 for WhatsApp, presumably because it appears twice per page in header+footer), all 302-redirecting straight to OneDoc/wa.me. **All 461 occurrences across the site consistently carry `rel="nofollow"`** in the anchor tag, in addition to the robots.txt disallow — belt-and-suspenders link-equity control, no leakage risk. This is well-handled, not a defect.

### 2. Indexability

- **Canonical tags**: present on all 96/96 pages; every canonical is **self-referential and byte-equal to `final_url`** (no cross-canonicalization, no canonical chains). Pass.
- **Meta robots**: identical directive on all 96 indexable pages: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`. No `noindex` anywhere it shouldn't be. No `X-Robots-Tag` HTTP header on any page (no conflict with the meta tag). Pass.
- **404 handling** (live check, `curl https://swisscentromedico.ch/this-page-does-not-exist-xyz123/`): returns real **HTTP 404**, page title `"Pagina non trovata | Swiss Centro Medico"`, `<meta name="robots" content="noindex, follow">`. Correctly implemented soft-404 protection. Minor/Info: the 404 response still carries `Cache-Control: public, max-age=3600` identical to normal pages — harmless since the 4xx status is preserved, but conventionally 404s are served with `no-store` or very short TTLs to avoid an intermediary caching a stale not-found state after a page is later published at that URL.
- **Duplicate content**: `text_hash` comparison across all 96 pages found **zero duplicate bodies**. Word count on `main` content is ≥150 words on every page (no thin-content pages).
- **Orphan pages / internal link depth**: BFS over the internal link graph from all 4 language homepages reaches **all 96/96 pages** — zero orphans. Depth distribution: every subpage is **1 click** from its language homepage (fully flat architecture); from the IT homepage alone (via the language switcher) max depth is 2 clicks. This is excellent, better than typical practice for a 96-URL site.
  - *How we'd know it failed*: a page present in the sitemap with 0 entries in `inlinks.json`, or BFS depth >3–4 from any homepage.
- **Duplicate titles** (Low): two coincidental pairs share an identical `<title>` because the word is spelled the same across languages — `"Privacy | Swiss Centro Medico"` on both `/privacy/` (IT) and `/en/privacy/`, and `"Contact | Swiss Centro Medico"` on both `/fr/contact/` and `/en/contact/`. These are legitimately different URLs (correctly hreflang-linked, not a canonical conflict), but combined with the fact that all 5 utility-page titles (`Privacy`, `Kontakt`, `Contact` ×2) are the shortest titles on the site (29 chars, well under the ~35–60 char sweet spot) and **omit "Lugano"** unlike every service page, this is a missed disambiguation/CTR opportunity rather than a technical defect.
  - *Recommendation*: `"Contatti | Swiss Centro Medico – Lugano"` style titles for the 5 utility pages (contact/privacy/legal notes across languages).
  - *How we'd know it failed*: re-check `pages[*].title` for `<40`-char titles lacking the city/brand disambiguator.
- No duplicate meta descriptions found (0 groups); all descriptions fall within 70–160 characters, all titles ≤60 characters.

### 3. Security Headers

Identical, strong header set on **all 96/96 pages** (verified in `pages.json` + live `curl -sI` on `/` and `/de/`):

| Header | Value | Assessment |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Good duration (1yr) + subdomains, but **missing `preload`** |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'sha256-...' ×3; style-src 'self'; img-src 'self' data:; font-src 'self'; frame-src https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'` | Strong — no `unsafe-inline`/`unsafe-eval`, hash-pinned inline scripts, `object-src 'none'`, `frame-ancestors 'self'` (clickjacking protection at CSP level too) |
| `X-Content-Type-Options` | `nosniff` | Pass |
| `X-Frame-Options` | `SAMEORIGIN` | Pass (redundant with `frame-ancestors` but harmless, aids legacy browsers) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Pass, good default for a medical site (limits URL leakage to third parties) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` | Pass, sensible lockdown |
| `Cross-Origin-Opener-Policy` / `-Resource-Policy` / `-Embedder-Policy` | absent | Not set (Low/Info — optional defense-in-depth, not required since the site has no cross-origin embedding needs) |

- **Medium — HSTS not preload-eligible**: hstspreload.org requires `max-age>=31536000`, `includeSubDomains`, **and `preload`** all present in the header. This site has the first two but not `preload`. Until that token is added (and the domain submitted to the HSTS preload list), first-time visitors typing `swisscentromedico.ch` without `https://` are vulnerable to SSL-stripping on that first request — relevant for a YMYL medical site.
  - *Recommendation*: add `preload` to the header, verify all subdomains (including `www`, which currently 301-redirects to apex — confirm it's also served over HTTPS-only) serve HTTPS, then submit to hstspreload.org.
  - *How we'd know it's fixed*: header reads `max-age=31536000; includeSubDomains; preload` and the domain shows "preloaded" status on hstspreload.org.
- `Server: Apache` is disclosed with no version string — acceptable, no actionable version-fingerprinting risk.
- **HTTP→HTTPS redirect could not be verified in this environment** — plain `http://` (port 80) is blocked with 403 by the session's outbound proxy. Not a finding against the site; flagging as **unverifiable**, recommend a manual check (`curl -I http://swisscentromedico.ch/`) outside this sandbox.

### 4. Caching Headers

- **HTML**: `Cache-Control: public, max-age=3600, stale-while-revalidate=86400` + `ETag` + `Last-Modified` on all 96 pages — sensible 1-hour freshness window with a 24-hour stale-while-revalidate cushion for a low-change-frequency brochure site. Pass.
- **Static assets** (images, CSS): `Cache-Control: public, max-age=31536000, immutable` (1-year) — correct long-cache pattern; CSS is version-busted via `?v=13` query string. Pass.
- No caching-related issues found.

### 5. URL Structure

- **Trailing slash**: 100% consistent. All 96 canonical URLs end in `/`; every internal `<a href>` across the whole site (excluding file assets) also uses the trailing-slash form. Confirmed live that `/agopuntura` (no slash) 301s to `/agopuntura/` in one hop. Pass.
- **www → apex, `/index.html` → `/`**: both confirmed live as single-hop 301s straight to the canonical form (no redirect chains). Pass.
- **Redirect hygiene**: no multi-hop chains found anywhere in the crawl (`redirects: []` on all 96 pages' `final_url`; the 5 disallowed booking/WhatsApp endpoints are also single-hop 302s straight to the external destination).
- **Medium — slug-length disparity, IT vs. DE/FR/EN**: two IT URLs are dramatically longer than their translated equivalents, confirmed in both `pages.json` and the sitemap:
  - `/laserterapia-in-combinazione-con-plasma-ricco-di-piastrine-prp-e-laser-per-il-ringiovanimento-cutaneo/` — **103 characters**, vs. `/de/prp-und-laser-hautverjuengung/` (34), `/fr/prp-et-laser-cutane/` (24), `/en/prp-and-skin-laser/` (23)
  - `/terapie-rigenerative-avanzate-con-pbm-ed-esosomi-stimolare-la-rigenerazione-cellulare/` — **87 characters**, vs. `/de/pbm-und-exosomen/` (21), `/fr/pbm-et-exosomes/` (20), `/en/pbm-and-exosomes/` (21)

  Both pages are healthy otherwise (200, indexed, sitemapped, correctly hreflang-linked), so this is not a crawlability defect, but 87–103-character slugs full of stop-words hurt readability in SERP snippets, get truncated in social shares/browser tabs, and dilute keyword prominence compared to the crisp DE/FR/EN versions. No other IT slug exceeds ~50 characters.
  - *Recommendation*: shorten to something like `/prp-e-laser-ringiovanimento-cutaneo/` and `/pbm-ed-esosomi/`, matching the concision of the other three languages, with a 301 from the old slug (single hop) and an updated sitemap/hreflang entry.
  - *How we'd know it failed*: re-crawl and check `len(urlparse(url).path)` outliers >60 chars against sibling-language equivalents.
- No query-string pollution, no uppercase/mixed-case paths, no double slashes, no non-ASCII/unencoded characters found in any of the 96 URLs. Pass.

### 6. Hreflang (full validation across all 96 pages)

- **Every page carries all 5 expected annotations** (`it`, `de-CH`, `fr-CH`, `en`, `x-default`) — 96/96, zero missing, zero extra/invalid codes.
- **x-default** consistently points to the IT (default, no-prefix) URL on all 96 pages — correct single choice, not ambiguous.
- **Full reciprocity**: for all 96 pages, every hreflang target resolves to a crawled page, and that target page links back to the origin page (bidirectional). Zero non-reciprocal pairs.
- **Cluster consistency**: grouped into 24 four-language clusters (96/4); every member of a cluster asserts the exact same 5-entry hreflang set as every other member. Zero divergence.
- **Sitemap ↔ on-page consistency**: the hreflang blocks embedded in `sitemap.xml` are byte-identical to the in-HTML `<link rel="alternate" hreflang>` tags for all 96 pages.
- **`<html lang>` vs. URL prefix**: 96/96 correct — IT pages use `lang="it"`, DE pages `lang="de-CH"`, FR pages `lang="fr-CH"`, EN pages `lang="en"`, matching their URL prefix exactly. Locale codes (`de-CH`, `fr-CH`) are valid BCP47 and appropriate for a Switzerland-targeted site (as opposed to generic `de`/`fr`, which would blur Swiss vs. Germany/France targeting).
- **Canonical/hreflang alignment**: canonical always equals the page's own hreflang self-entry (no page canonicalizes to a different language).

This is a textbook-clean hreflang implementation — no further hreflang sub-skill escalation needed; nothing to hand off.

### 7. Mobile Configuration

- **Viewport**: identical, correct tag on all 96 pages: `width=device-width, initial-scale=1, viewport-fit=cover`. No `user-scalable=no` / `maximum-scale=1` anywhere (zoom is not disabled — good accessibility practice). Pass.
- **Touch targets** (from `css/scm.css`, live-fetched): primary CTA buttons (`.scm-btn`) have `min-height: 48px`; the mobile menu toggle has `min-height: 44px`; nav links get `padding: 14px 0` — all meet or exceed the 44×44px WCAG/mobile guideline. Pass.
- **Responsive breakpoints**: 12 distinct `@media` breakpoints (from 479.98px to 1280px) covering phone/tablet/desktop transitions — genuine responsive design, not a single fixed-width layout with a viewport tag bolted on. Pass.
- No mobile-blocking issues found (no Flash, no fixed-width tables, no horizontal-scroll indicators in the markup).

### 8. Core Web Vitals (source-level + supplied Lighthouse data)

Source-level signals (HTML inspection):
- Hero/LCP image uses a proper responsive `<link rel="preload" as="image" imagesrcset="... .webp 768w, ... .webp 1024w" imagesizes="..." fetchpriority="high" media="(min-width: 720px)">` plus `fetchpriority="high"` on the actual `<img>` — correct modern LCP optimization pattern, gated by media query so mobile doesn't preload a desktop asset.
- Font preloaded with `as="font" ... crossorigin` — avoids FOIT/layout shift from late-loading web fonts.
- Below-fold images use `loading="lazy"`; only the hero image is `loading="eager"`.
- **Zero external `<script src>`** anywhere in the crawl — the only inline scripts are a `no-js` class removal (progressive enhancement), the JSON-LD graph, a ~2KB vanilla-JS mobile-menu toggle, and a Speculation Rules (`type="speculationrules"`) prefetch config that explicitly excludes `/admin/`, `/prenota/`, `/de/termin/`, `/fr/rendez-vous/`, `/en/book/`, `/whatsapp/`, `/e/` from prefetch — correctly aligned with the robots.txt disallow list. No CSS/JS frameworks, no third-party trackers detected in `<head>`/`<body>` script tags.

Supplied Lighthouse 13.5 (mobile + desktop, home/agopuntura/reumatologo):
- LCP range **0.90s–2.04s** across all 6 runs — every sample in the **Good** band (≤2.5s), including the slowest mobile run (reumatologo-mobile, 2.04s).
- CLS range **0.0003–0.040** — every sample well within **Good** (≤0.1).
- Total Blocking Time = 0ms on all 6 runs; Lighthouse doesn't report field INP (lab tool), consistent with the skill's guidance not to substitute FID/TBT for INP — field INP should be checked in CrUX/PageSpeed Insights separately (likely the performance agent's lane; flagging as **not independently field-verified here**).
- Lighthouse SEO category score = 100/100 on all sampled pages; Performance 95–99/100.
- Minor recurring Lighthouse insights flagged (not independently re-verified): `render-blocking-insight` on all 6 runs, `network-dependency-tree-insight` on all 6, `server-response-time`/`document-latency-insight`/`modern-http-insight` on home-desktop only — likely in the performance agent's remit; noted here only because they surfaced in the shared Lighthouse artifacts.

No CWV red flags from source inspection. Full RUM/CrUX field-data validation is out of scope for a source-level technical audit.

### 9. JavaScript Rendering

- **Pass — fully static/SSR, no CSR dependency.** `pages.json` shows `scripts: []` (no external JS files) on every one of the 96 pages; the only JavaScript is small inline UI-progressive-enhancement code.
- Cross-checked raw-crawl HTML vs. the supplied Playwright-rendered HTML for 5 sample pages (home, agopuntura, reumatologo, contatti, laserterapia): byte sizes differ by only 66–86 bytes (whitespace/DOM-serialization noise from Playwright), confirming the rendered DOM carries **no additional content** beyond what a non-JS crawler already sees. Googlebot's rendering queue is not a dependency for this site's indexability.
- `main_present: true` and `word_count_main ≥ 150` on all 96 pages in the raw (non-rendered) crawl — content is present without executing JS.

### 10. IndexNow Protocol

- **Gap (Low/Medium)** — no IndexNow key file found at the root (`/indexnow.txt` → live 404; `links.json` contains no `.txt` key-file entries), and no mention of IndexNow in `robots.txt`, `llms.txt`, or any crawled HTML (`grep -ri indexnow` across all 96 saved HTML files returned nothing).
- Given the site is static, low-frequency-change (per-page `lastmod` dates in the sitemap show content was touched within the last ~1–8 days as of the audit date), IndexNow would let Bing/Yandex pick up edits within minutes instead of waiting for the next crawl — a low-cost, high-leverage addition for a site that otherwise has no CMS-level auto-ping.
  - *Recommendation*: generate an IndexNow key, host `<key>.txt` at the root, and either wire it into the deploy pipeline (ping on publish) or run it manually after content updates (schema/content updates are likely to recur given `dateModified: 2026-09-21` fields seen in the JSON-LD).
  - *How we'd know it's fixed*: `<key>.txt` returns 200 at the domain root and a submission to `https://api.indexnow.org/indexnow?...` returns 200/202.

---

## Prioritized Issue List

| # | Issue | Severity | Category |
|---|---|---|---|
| 1 | HSTS header lacks `preload` token — not eligible for the HSTS preload list | Medium | Security |
| 2 | Two IT slugs (103 and 87 chars) far longer than DE/FR/EN equivalents | Medium | URL Structure |
| 3 | No IndexNow key file / protocol usage (Bing/Yandex/Naver instant indexing unused) | Low–Medium | IndexNow |
| 4 | 5 utility-page titles (`Privacy`, `Kontakt`, `Contact` ×2) are generic/short and omit "Lugano", unlike every service page | Low | Indexability |
| 5 | robots.txt disallows several paths (`/report/`, `/domande/`, `/admin/`, `/e/`, WP artifacts) not linked anywhere on the current site — likely legacy, worth a relevance review | Low / Info | Crawlability |
| 6 | 404 page served with the same 1-hour public cache as live pages, instead of `no-store`/short TTL | Low / Info | Indexability |
| 7 | No `Cross-Origin-*` isolation headers (COOP/CORP/COEP) | Info | Security |
| 8 | HTTP→HTTPS redirect on port 80 could not be verified in this sandboxed environment (proxy blocks plain HTTP) | Not verifiable here | Security |
| 9 | Field INP (CrUX) not independently checked here (Lighthouse is lab-only) — recommend cross-checking with the performance agent's PageSpeed Insights/CrUX data | Not verified here | Core Web Vitals |

## Confirmed Passes (no action needed)

- Hreflang: complete, reciprocal, consistent, valid codes, correct x-default — across all 96 pages and the sitemap.
- Canonicals: 100% self-referential, no conflicts.
- Sitemap: exact match to crawl, no disallowed URLs included, valid lastmod dates.
- No orphan pages; flat 1-click-from-home architecture.
- No duplicate page content (text-hash check).
- Meta robots consistent and correct on all pages; no accidental noindex.
- Security header suite (CSP with hash-pinned scripts, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) present and identical on all 96 pages.
- Trailing-slash and redirect hygiene: 100% consistent, all redirects single-hop.
- Viewport + touch targets (44–48px) + 12 responsive breakpoints.
- Zero reliance on client-side JS for indexable content (raw HTML ≈ rendered HTML).
- Lighthouse LCP/CLS in the "Good" band on all sampled pages.
