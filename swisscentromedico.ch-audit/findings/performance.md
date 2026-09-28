# Performance / Core Web Vitals — swisscentromedico.ch

**Date:** 2026-09-28
**Data sources:** Lighthouse 13.5.0 lab runs (CLI JSON) for 3 URLs x 2 devices (`raw/lighthouse/{home,agopuntura,reumatologo}-{mobile,desktop}.json`), `raw/pages.json` (96 pages), `raw/links.json` (HEAD checks), `raw/visual.json` (third-party requests), `raw/rendered_contatti.html`, and live `curl` spot checks against the production origin.

## IMPORTANT CAVEAT — lab data only

**No CrUX field data and no PageSpeed Insights API data are available** (no Google API key configured; PSI returned HTTP 429 without a key). Every number below is **Lighthouse lab (simulated)** data from a single run per page/device, not real-user field data. Do not treat these as the field-based pass/fail Google actually uses for ranking; treat them as diagnostics. INP cannot be measured in the lab (Lighthouse never measured FID and does not measure INP either) — **Total Blocking Time (TBT) is used here as the INP proxy**, per instructions.

## Core Web Vitals summary (lab, insight-based Lighthouse 13.5.0)

| Page | Device | Perf score | LCP | LCP element | CLS | TBT (INP proxy) | Speed Index |
|---|---|---|---|---|---|---|---|
| Home | Mobile | 99 | 1.73s | `<p class="scm-lead">` (hero text) | 0.007 | 0ms | 2.43s |
| Home | Desktop | 98 | 0.91s | hero `<img>` (Zeljko photo) | **0.040** | 0ms | 1.25s |
| Agopuntura | Mobile | 99 | 1.54s | `<p class="scm-lead">` (hero text) | 0.014 | 0ms | 2.41s |
| Agopuntura | Desktop | 96 | 1.06s | hero `<img>` (agopuntura photo) | 0.0003 | 0ms | 1.30s |
| Reumatologo | Mobile | 98 | 2.04s | `<p class="scm-lead">` (hero text) | 0.014 | 0ms | 2.74s |
| Reumatologo | Desktop | 95 | 1.20s | hero `<img>` (collo photo) | 0.011 | 0ms | 1.35s |

**All six runs pass "Good" for LCP (≤2.5s) and CLS (≤0.1).** TBT is 0ms on every run (zero external JS shipped), a strong lab signal for good INP — but this is not a substitute for real INP field data. Lab-based performance score range: **95–99 / 100**.

### LCP element behaviour (notable, not a defect)
- **Desktop:** LCP element is always the hero `<img>` inside a `<picture>`. It is correctly `fetchpriority="high"`, `loading="eager"`, discoverable in the initial HTML, and (on the homepage) additionally `<link rel="preload" as="image">`'d with a `media` breakpoint. Lighthouse's `lcp-discovery-insight` checklist passes all three checks (priority hint applied, discoverable, not lazy) on every desktop run.
- **Mobile:** LCP element is instead the hero sub-headline paragraph (`p.scm-lead`), not the image — the stacked mobile layout means the text paints as the largest element before/instead of the image. This is a legitimate layout consequence, not a bug, but it means **all of the mobile LCP "element render delay" (538ms home / 751ms agopuntura / 915ms reumatologo) is attributable to the render-blocking CSS** (see below), since text-based LCP is blocked purely by CSSOM construction, not by an image download.

### CLS root cause (Home, Desktop, 0.040 — the highest CLS observed, still "Good")
`cls-culprits-insight` / `layout-shifts` audit: the hero `<picture>` block is the element that shifts, attributed to two sub-causes:
1. An unrelated icon further down the page (`/uploads/2026/01/scan.webp`, 50x62, in the "Diagnostica" tile) tagged **"Media element lacking an explicit size"** — even though the HTML does carry `width`/`height` attributes, so a CSS rule is likely overriding the intrinsic sizing (worth a CSS audit of `.scm-tile picture/img` rules for a missing `aspect-ratio`/fixed box).
2. **"Web font loaded"** — `/fonts/archivo/archivo-v25-latin.woff2`, causing a small reflow despite being preloaded.
Since 0.040 is well inside the 0.1 "Good" band, this is **Low** severity/informational, not a fix-now item.

## Third-party impact

`raw/visual.json` shows **`third_party_requests: []`** across all 12 sampled page/device combinations. No analytics, ads, chat widgets, or third-party JS were observed anywhere on the crawled site.

The only third-party embed on the whole site is the **Google Maps iframe on `/contatti/`**, and it is implemented well:
```html
<div class="scm-contact-map" data-map-src="https://www.google.com/maps/embed?...">
  ...<noscript><iframe ... loading="lazy" ...></iframe></noscript>
</div>
```
A same-page inline script builds the real `<iframe>` only via `IntersectionObserver` with `rootMargin: "300px 0px"` (see `raw/rendered_contatti.html` lines ~110-127) — i.e., it's a proper lazy facade that never costs anything on initial load, only loading Maps when the user scrolls near it. **No action needed; call this out as a positive pattern.**

## Resource weight, requests, DOM size (lab, per audited page — representative of the template)

| Page (mobile) | Requests | Transfer weight | Script bytes | DOM elements | DOM depth |
|---|---|---|---|---|---|
| Home | 7 | 93 KiB | 0 | 337 | 10 |
| Agopuntura | 6 | 100 KiB | 0 | 365 | 9 |
| Reumatologo | 6 | 120 KiB | 0 | 346 | 9 |

Every page ships **zero external JavaScript** (`resource-summary` script requestCount = 0 on all runs; only ~2-8KB of tiny inline scripts for the mobile nav toggle, the Maps facade, and click-tracking beacons). DOM size is well under the 1,500-element concern threshold. This is why TBT is 0ms everywhere — there is effectively nothing that could block the main thread, which is the best possible starting point for INP.

## Images

- All content images are delivered via `<picture><source type="image/webp" srcset="…">` with a JPEG/PNG `<img>` fallback (verified in live HTML for home, agopuntura, reumatologo, laserterapia-endovenosa, laserterapia-intra-articolare). The PNG/JPEG sizes seen in `raw/links.json` (e.g., `intravenous-laser-therapy.png` 292 KiB, `reumatologo-collo.jpg` 125 KiB) are **legacy `<img src>` fallbacks that modern (WebP-capable) browsers never download** — the actual served WebP resources are 9–65 KiB. This is not a live weight problem; do not "fix" the fallback files.
- Hero images have `width`/`height` set, `fetchpriority="high"` + `loading="eager"` on the LCP candidate, `loading="lazy"` everywhere else — correct pattern applied consistently.
- One concrete, quantified waste item: `image-delivery-insight` on **Reumatologo/mobile** flags **14.6 KiB (25%) of wasted bytes** on the hero image because the `srcset` only offers `960w` and `1024w` variants (`sizes="(min-width: 960px) 50vw, 100vw"`), so a 412px-wide mobile viewport still downloads the 960w/58 KB file. The same 2-breakpoint pattern (`960w`/`1024w` or `768w`/`1024w`) is used for every split-hero image site-wide, so this is a systemic, low-severity gap rather than a one-off.
- No AVIF in use (WebP only) — acceptable; AVIF would add marginal savings only, not a priority given the images are already tiny.

## Fonts

- Single font family (Archivo), one `woff2` request (~35-36 KB), `<link rel="preload" as="font" type="font/woff2" crossorigin>` present in `<head>` on every page (verified in `pages.json` "preloads" and live curl). `font-display-insight` passes (score 1) on every audited run — no FOIT. This is a well-implemented font-loading strategy; the only residual cost is the small CLS contribution noted above.

## CSS / render-blocking (the most consistent finding in this audit)

Single site-wide stylesheet, `/css/scm.css?v=13`, referenced identically on all 96 crawled pages (`pages.json`: `stylesheets` = `["/css/scm.css?v=13"]` for every URL). Confirmed via curl: **27,353 bytes raw → 6,100 bytes Brotli-compressed**, `cache-control: public, max-age=31536000, immutable` at the URL itself, with the `?v=13` query string used correctly as a cache-buster against the shorter-lived HTML cache (`max-age=3600`) — this versioning pattern is correct, not a problem.

However, **`render-blocking-insight` fails on all 6/6 audited reports** — the CSS is a classic render-blocking `<link rel="stylesheet">` with no critical-CSS inlining or async-loading:

| Report | Estimated FCP/LCP savings | Wasted ms on the CSS request |
|---|---|---|
| Home / Mobile | 420ms | 564ms |
| Home / Desktop | 230ms | 272ms |
| Agopuntura / Mobile | 350ms | 468ms |
| Agopuntura / Desktop | 330ms | 371ms |
| Reumatologo / Mobile | 480ms | 570ms |
| Reumatologo / Desktop | 380ms | 419ms |

Given all 96 pages reference the identical CSS file/pattern, this almost certainly reproduces site-wide. Note: the site's CSP is `style-src 'self'` (no `unsafe-inline`, no nonce/hash for styles) — any inline-critical-CSS fix must add a per-response nonce or hash to `style-src`, mirroring the hash-based approach already used for `script-src`.

## Server response time / TTFB

- Lighthouse `server-response-time` audit **fails** on Home/Desktop: observed 665ms (audit threshold ~600ms), costing an estimated 550ms of FCP/LCP.
- `lcp-breakdown-insight` TTFB subpart ranges **400–730ms** across the 6 lab runs (simulated network conditions vary by device preset, so these aren't directly comparable to each other).
- Live `curl` from this environment against `https://swisscentromedico.ch/` (3 samples): TTFB 0.49s, 0.51s, 0.76s. **Caveat: this traffic goes through the session's outbound proxy, so absolute values are not authoritative** — but the order of magnitude matches the lab data and supports that TTFB is a genuine, non-trivial contributor rather than a simulation artifact. For a static HTML file served by Apache with no visible backend computation, 500-700+ms is high; typical static-file TTFB should be well under 200ms. Investigate Apache config (keep-alive already enabled per response headers), backend/CMS templating overhead (if HTML is generated per-request rather than truly static), and physical/network distance between the origin server and users, and consider an edge CDN in front of the already-cacheable HTML (`max-age=3600`).

## Compression & caching (confirmed via curl + headers)

| Asset type | Compression | Cache-Control | Verdict |
|---|---|---|---|
| HTML | Brotli (`content-encoding: br`) | `public, max-age=3600, stale-while-revalidate=86400` (all 96 pages) | Good |
| CSS | Brotli | `public, max-age=31536000, immutable` | Good |
| Fonts (woff2) | none (already compressed format) | `public, max-age=31536000, immutable` | Good |
| Images (webp/jpg/png) | none (already compressed format) | `public, max-age=31536000, immutable` | Good |

HTTP/2 confirmed on the origin (`HTTP/2 200`). No `alt-svc` header observed, so no HTTP/3/QUIC advertised — minor, optional upgrade only.

---

## Findings, ranked by severity

### High

**H1. Render-blocking CSS delays first paint on every page (6/6 audited reports fail `render-blocking-insight`).**
- Impact: 230-570ms estimated FCP/LCP savings per page; on mobile it directly inflates the "element render delay" portion of LCP for the text-based hero LCP element (538-915ms).
- Recommendation: Inline a small critical-CSS subset (hero/above-the-fold rules only) in `<head>` and load the remainder of `scm.css` asynchronously (e.g. `<link rel="preload" as="style">` + swap via an externally-referenced `.js` file that satisfies the existing `script-src 'self'` CSP, or `media="print"` swap technique). Add a CSP nonce/hash to `style-src` to permit the inlined `<style>` block.
- **How we'd know it's fixed:** re-run Lighthouse; `render-blocking-insight` should score 1 (pass) with `wastedMs` near 0 for `scm.css`, and mobile LCP should drop by roughly the amount of the previous "element render delay" (hundreds of ms) on the home/agopuntura/reumatologo templates.

### Medium

**M1. Root document TTFB is high for a static site (~500-730ms lab and live).**
- Impact: `server-response-time` audit fails on Home/Desktop (665ms observed, ~550ms FCP/LCP cost estimated); TTFB is the single largest LCP subpart on several runs.
- Recommendation: Profile Apache response time for the document request in isolation (strip CSS/image time out); confirm HTML is served as a true static file (not regenerated per-request by a CMS); consider fronting with an edge CDN given the HTML is already cacheable for 1 hour.
- **How we'd know it's fixed:** `curl -w "%{time_starttransfer}"` against the origin (bypassing this session's proxy) consistently under ~200ms; Lighthouse `server-response-time` passes (<600ms threshold) and its `metricSavings` drops to 0.

**M2. Hero image `srcset` only offers 2 breakpoints, over-serving small mobile viewports.**
- Impact: quantified 14.6 KiB (25%) waste on Reumatologo/mobile hero image alone (`image-delivery-insight`); same 2-breakpoint pattern (`960w`/`1024w` or `768w`/`1024w` with `sizes="(min-width:960px) 50vw, 100vw"`) is used for every split-hero image site-wide, so the waste recurs across templates, though the per-page byte impact is small given overall page weight is already ~100-120 KiB.
- Recommendation: Add a narrower breakpoint (e.g. 480w or 640w) to the image pipeline for split-hero images so phones under 960px CSS width aren't forced to the 960w variant.
- **How we'd know it's fixed:** `image-delivery-insight` `wastedBytes` for hero images drops to ~0 in a mobile Lighthouse run; `curl -I` on the new smaller variant returns 200.

### Low

**L1. Small CLS (0.040, still "Good") on Home/Desktop traced to a webfont-load reflow plus an icon losing its explicit size under CSS.**
- Recommendation: audit `.scm-tile picture/img` CSS rules for a missing `aspect-ratio` or conflicting `width:auto` override on `/uploads/2026/01/scan.webp` and similar tile icons, even though the HTML `width`/`height` attributes are present.
- **How we'd know it's fixed:** `cls-culprits-insight` no longer lists "Media element lacking an explicit size" as a sub-cause for the hero picture shift; CLS stays ≤0.1 (already passing, so this is a polish item).

**L2. No HTTP/3/QUIC advertised (no `alt-svc` header).**
- Recommendation: optional; enabling HTTP/3 at the edge/CDN can help high-RTT and lossy mobile connections shave a connection round-trip.
- **How we'd know it's fixed:** `curl -sSI` shows an `alt-svc: h3=...` header, and a browser network panel shows `h3` as the protocol.

### Info / already well-optimized (no action needed)

- **I1.** Zero third-party requests site-wide; the one third-party embed (Google Maps on `/contatti/`) is a correctly-implemented `IntersectionObserver`-based facade (300px rootMargin) that only loads on scroll-proximity — textbook best practice, nothing to change.
- **I2.** Zero external JavaScript on any page; TBT is 0ms on all 6 lab runs — best-case starting point for INP (though real INP requires field data we don't have).
- **I3.** Images use WebP via `<picture>` with legacy fallback, correct `fetchpriority`/`loading` attributes on LCP vs. non-LCP images, all with explicit `width`/`height`.
- **I4.** Font preloaded correctly with `crossorigin`; `font-display-insight` passes.
- **I5.** Brotli compression confirmed on HTML and CSS; static assets (CSS/fonts/images) all carry `public, max-age=31536000, immutable`; the `?v=13` CSS query-string versioning is a correct cache-busting pattern against the shorter HTML cache lifetime.
- **I6.** DOM size (337-365 elements, depth 9-10) is far under the 1,500-element concern threshold.
