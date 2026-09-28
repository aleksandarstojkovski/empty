"""Screenshots, rendered DOM and accessibility snapshots via local Chromium.

Trusts only the session proxy's CA key (SPKI pin) instead of disabling TLS checks.
Usage: python capture.py <SPKI_B64>
"""
import json, os, sys
from playwright.sync_api import sync_playwright

SPKI = sys.argv[1]
PROXY = os.environ["HTTPS_PROXY"]
BASE = "https://swisscentromedico.ch"
PAGES = {
    "home": "/", "agopuntura": "/agopuntura/", "reumatologo": "/reumatologo/",
    "contatti": "/contatti/", "laserterapia": "/laserterapia/", "de-home": "/de/",
}
VIEWPORTS = {
    "desktop": {"viewport": {"width": 1440, "height": 900}, "device_scale_factor": 1},
    "mobile": {"viewport": {"width": 390, "height": 844}, "device_scale_factor": 2,
               "is_mobile": True, "has_touch": True,
               "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1"},
}
out = {}
with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/opt/pw-browsers/chromium",
                          proxy={"server": PROXY},
                          args=[f"--ignore-certificate-errors-spki-list={SPKI}"])
    for vp, opts in VIEWPORTS.items():
        ctx = b.new_context(locale="it-CH", **opts)
        for name, path in PAGES.items():
            pg = ctx.new_page()
            errors = []
            pg.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
            reqs = []
            pg.on("requestfinished", lambda r: reqs.append(r.url))
            pg.goto(BASE + path, wait_until="networkidle", timeout=60000)
            pg.screenshot(path=f"../screenshots/{name}-{vp}-fold.png")
            pg.screenshot(path=f"../screenshots/{name}-{vp}-full.png", full_page=True)
            info = pg.evaluate("""() => {
              const vh = innerHeight, vw = innerWidth;
              const inFold = el => { const r = el.getBoundingClientRect(); return r.top < vh && r.bottom > 0 && r.width > 0 && r.height > 0; };
              const h1 = document.querySelector('h1');
              const ctas = [...document.querySelectorAll('a,button')].filter(inFold).map(e => ({text: e.innerText.trim().slice(0,60), href: e.getAttribute('href'), w: Math.round(e.getBoundingClientRect().width), h: Math.round(e.getBoundingClientRect().height)}));
              const small = [...document.querySelectorAll('a,button')].filter(e => { const r = e.getBoundingClientRect(); return r.width>0 && r.height>0 && (r.height<24 || r.width<24); }).map(e => ({text: e.innerText.trim().slice(0,40), w: Math.round(e.getBoundingClientRect().width), h: Math.round(e.getBoundingClientRect().height)}));
              return {h1: h1 ? h1.innerText : null, h1_in_fold: h1 ? inFold(h1) : false,
                      fold_ctas: ctas, small_tap_targets: small.slice(0,30),
                      doc_width: document.documentElement.scrollWidth, vw, doc_height: document.documentElement.scrollHeight,
                      tel_links: [...document.querySelectorAll('a[href^="tel:"]')].length,
                      base_font: getComputedStyle(document.body).fontSize};
            }""")
            info["console_errors"] = errors
            info["third_party_requests"] = sorted({r.split('/')[2] for r in reqs if not r.startswith(BASE)})
            if vp == "mobile":
                open(f"rendered_{name}.html", "w").write(pg.content())
                try:
                    snap = pg.accessibility.snapshot()
                    json.dump(snap, open(f"a11y_{name}.json", "w"), indent=1, ensure_ascii=False)
                except Exception as e:
                    info["a11y_error"] = str(e)
            out[f"{name}-{vp}"] = info
            pg.close()
        ctx.close()
    b.close()
json.dump(out, open("visual.json", "w"), indent=1, ensure_ascii=False)
print(json.dumps(out, indent=1, ensure_ascii=False)[:6000])
