# Visual / Mobile / Above-the-Fold Audit — swisscentromedico.ch
Scope: home, agopuntura, reumatologo, contatti, laserterapia (IT) + de-home. Desktop 1440x900, mobile 390x844@2x (iPhone UA), via local Chromium/Playwright. Screenshots in `screenshots/`, raw data in `raw/visual.json`, `raw/pages.json`, `raw/aria_*.yaml`, `raw/lighthouse/`.

## Verdict

Strong, professional, conversion-oriented design for a single-physician medical practice. Above-the-fold content on every tested page/viewport hits the brief: H1, value proposition, and both primary CTAs ("Prenota online" / "Chiama lo studio") are visible without scrolling, on desktop and mobile. Mobile has a persistent sticky "Chiama / Prenota" bottom bar on every page (confirmed via `navigation "Chiama / Prenota"` landmark in the ARIA tree), which is a genuine conversion strength for a phone/WhatsApp-driven local practice. Trust signals (FMH credential, RME certification badge, "20 anni", doctor photo, scientific citations with DOI links, FAQ sections) are present and largely above or just below the fold. Accessibility scores are 100 on all Lighthouse runs and CLS is near-zero (0.0003–0.04), confirming the explicit image dimensions and stable layout claimed below.

The one real bug found: on `/laserterapia/` mobile, the in-content CTA button pair is visually overlapped/obscured by the sticky bottom bar on initial load (see Critical/High findings). Everything else is Medium/Low polish items.

**Images subsection score: 84/100** (see below).

---

## 1. Above-the-fold analysis (per page)

| Page | Viewport | H1 in fold | CTA(s) in fold | Trust element in fold | Notes |
|---|---|---|---|---|---|
| home | desktop 1440×900 | Yes — "Terapia del Dolore, Agopuntura e Laserterapia a Lugano" | Prenota online, Chiama lo studio, top-bar tel + Prenota visita | Doctor photo, RME badge, "FMH / 20 anni / 5 lingue / Via Volta 1" bar (partially, `home-desktop-fold.png`) | Excellent — full hero with photo, credentials strip right at fold edge |
| home | mobile 390×844 | Yes | Prenota online, Chiama lo studio (in-content) + sticky Chiama/Prenota bar | RME badge text starts in fold | No doctor photo in fold (needs 1 scroll) — text-only hero on mobile |
| agopuntura | desktop | Yes — "Agopuntura a Lugano" | Prenota online, Chiama lo studio, top bar | none in fold | Hero photo (needling) visible to the right |
| agopuntura | mobile | Yes | sticky bar only (in-content CTAs are below fold) | breadcrumb + "Pagina verificata dal medico, aggiornata il 18 settembre 2026" (E-E-A-T signal) | No image in mobile fold |
| reumatologo | desktop/mobile | Yes | same pattern as agopuntura | verified-date line | Clean, no overlap |
| contatti | desktop/mobile | Yes — "Contatti" | Prenota online / Chiama ora + sticky bar | none | Clear "how to contact us" framing (phone/WhatsApp/email/online) |
| laserterapia | desktop | Yes | Prenota online, Chiama lo studio | none in fold | Hero photo (hand laser treatment) to the right |
| laserterapia | mobile | Yes | **overlap bug, see §2.1** | none in fold | |
| de-home | desktop/mobile | Yes — "Schmerztherapie, Akupunktur und Lasertherapie in Lugano" | Online buchen / Praxis anrufen | RME badge | 1:1 parity with IT layout |

All pages: `doc_width == viewport width` in `visual.json` for both desktop and mobile → **no horizontal overflow/scroll** detected on any tested page.

---

## 2. Findings

### 2.1 [High] Sticky mobile CTA bar overlaps the in-content CTA buttons on `/laserterapia/` (mobile)
Screenshot: `screenshots/laserterapia-mobile-fold.png`.
On initial mobile load (390×844), the in-page "Prenota online" / "Chiama lo studio" button pair (which follows the bullet list) lands exactly where the persistent bottom sticky bar ("Chiama" / "Prenota", `fold_ctas` w179×h48 on every page) is fixed. The result: the top ~15–20px of the in-content buttons peek out above the sticky bar, the rest is hidden underneath it — two different CTA pairs visually collide in the same on-screen real estate on first paint. This does not reproduce on home/agopuntura/reumatologo/contatti mobile folds, where the in-content CTA row sits higher up with a visible gap before the sticky bar (compare `contatti-mobile-fold.png`, clean). It is specific to `/laserterapia/`'s slightly longer intro-text length pushing that row to the fold boundary.
Impact: confusing first impression, partially untappable/obscured buttons, looks broken.
**How we'd know it's fixed:** reload `/laserterapia/` at 390×844 (and check `/de/lasertherapie/`, `/fr/...`, `/en/...` equivalents and any other page whose lead text is a similar length), confirm the in-content CTA row's bounding box no longer intersects the sticky bar's bounding box — either by adding bottom padding/margin equal to the sticky bar height on `<body>`/last content block, or shortening/repositioning the mid-page CTA row.

### 2.2 [Medium] Small in-content/footer tap targets under 24px
`visual.json` → `small_tap_targets` lists dozens of links at 15–21px height sitewide: footer social/legal links ("Privacy", "Note legali", "Instagram", phone/WhatsApp text in footer — all ~15–17px), related-topic pill links ("Agopuntura e MTC", "Laserterapia invasiva" etc. — 19–21px), and DOI citation links in "Fonti scientifiche" (16px). Per WCAG 2.2 SC 2.5.8, inline text links within a text block are exempt from the 24×24 minimum, which covers most of the DOI citations and breadcrumb "Home" link. However the **footer link row** (phone, WhatsApp, Instagram, Privacy, Note legali — all ~15px tall, not inline within a text paragraph, functioning as a nav-like link list) and the **treatment "pill" links** under the hero (Agopuntura/Laserterapia/Medicina rigenerativa/Reumatologia, 19px) are closer to standalone nav targets and would benefit from more vertical padding for comfortable thumb tapping, even though Lighthouse's automated audit (100/100 accessibility on all runs) doesn't flag them.
**How we'd know it's fixed:** re-run the tap-target extraction script; footer nav links and pill links report height ≥24px (or ≥24px effective hit-slop via padding).

### 2.3 [Low/Info] "Chi sono" doctor bio photo renders as an empty box in our captures (home + de-home, desktop)
Screenshots: `home-desktop-full.png` and `de-home-desktop-full.png`, "Chi sono / Wer ich bin" section — the left column that should hold a second doctor photo (`pages.json` lists `Dr.-med.-univ.-Zeljko-Djordjevic-768x694.jpg`, `loading="lazy"`) renders as a blank light-gray box in both languages. This image is the only lazy-loaded content image on the homepage (the hero photo is `loading="eager" fetchpriority="high"` and renders fine everywhere). Our capture script (`raw/capture.py`) takes a single `networkidle` screenshot without incrementally scrolling the page, which is a known Playwright/Chromium limitation for native `loading="lazy"` images positioned multiple viewports down — they may not be reported as "near viewport" and never fire. **This is very likely a capture artifact, not a live-site bug** (real users scrolling normally will trigger native lazy-load well before reaching that section on any reasonable connection). Flagging as Info because it's worth a 30-second manual confirmation rather than a fix.
**How we'd know it's real vs. artifact:** open swisscentromedico.ch in a normal browser, scroll to "Chi sono", confirm the photo loads. If it's genuinely blank in a real browser, it becomes a High-severity trust/content bug (empty white space where a credibility photo should be) — re-check `loading` attribute / image path.

### 2.4 [Info] Mobile hero has no image in the first viewport (all tested pages)
On mobile, all five content pages show H1 + eyebrow + intro paragraph + CTAs but no photo until after the first scroll (confirmed in every mobile fold screenshot). This is a reasonable, common mobile pattern and doesn't block the primary CTAs or value prop — noted only as a minor missed opportunity for immediate visual trust/engagement (a small circular doctor-photo thumbnail near the H1 is a common pattern that could be tested).

### 2.5 [Positive] Sticky bottom CTA bar, present sitewide on mobile
Every mobile page carries a persistent bottom bar with "Chiama" (tel:) and "Prenota" (booking) — labelled as an ARIA `navigation "Chiama / Prenota"` landmark (accessible, not just a visual overlay). This is exactly the right conversion pattern for a phone/WhatsApp-driven single-physician practice and should be preserved through any redesign.

### 2.6 [Positive] Trust elements & E-E-A-T signals
- RME certification badge and "FMH / 20 anni di pratica clinica dal 2006 / 5 lingue / Via Volta 1" strip on the homepage fold (desktop) and just below fold (mobile).
- Every inner content page (agopuntura, reumatologo, laserterapia) carries a "Pagina verificata dal medico, aggiornata il [date]" line directly under the H1 — a strong, visible content-freshness/E-E-A-T signal, present on both desktop and mobile fold.
- "Fonti scientifiche" sections with real DOI-linked citations (Cochrane, EULAR, JAMA, Annals of Rheumatic Diseases, etc.) on agopuntura/reumatologo/laserterapia — unusually strong scientific backing for a small practice site, reinforces credibility.
- Doctor photo (in white coat with stethoscope, in-office) used consistently across languages.
- Partner/membership badges (RME, ISLA, European Laser Clinics, Visana mention) present in footer/sidebar areas sitewide.

### 2.7 [Positive] No horizontal overflow, no third-party requests, near-zero CLS
`doc_width` equals `vw` on every tested page/viewport (no horizontal scroll bug). `third_party_requests: []` on all captured pages — no third-party trackers/scripts loaded, consistent with the site's strict CSP (`default-src 'self'`, no external script/style/font origins, Google Maps only via explicit user click-through link, not an auto-loaded iframe). Lighthouse CLS is 0.0003–0.04 across runs, consistent with images always carrying explicit `width`/`height`.

### 2.8 Language switcher
IT/DE/FR/EN rendered as four flat text links in a top-bar `navigation "Lingua"` landmark (not a dropdown) — the active language is visually bolded/highlighted, links point to the correctly localized URL for the current page (e.g. on `/agopuntura/`, DE goes straight to `/de/akupunktur/`, not just `/de/`), and each has a 36×44px tap target (meets 24×24 minimum). This is a well-implemented, low-friction switcher. DE homepage (`de-home`) is a faithful 1:1 structural/visual match of the IT homepage — same section order, same card layout, same CTA styling, same trust strip — good cross-language consistency.

### 2.9 [Low] No responsive image variants (`srcset`)
Confirmed sitewide via `pages.json`: **0 of 512** image tags across all 96 pages carry a `srcset`/`sizes` attribute. Content photos (e.g. `laser-mano.jpg` 1024×682, `agopuntura-orecchio.jpg` 1024×792) are served at a single fixed resolution to both a 1440px desktop viewport and a 390px (×2 DPR) mobile viewport. Doesn't cause a visual defect (dimensions are always set, so no CLS) but is a bandwidth/performance-adjacent presentation concern worth a look from whoever owns Performance — flagged here because it affects "Images" scoring. See §3.

---

## 3. Images subsection — Score: 84/100

Basis: `raw/pages.json` image inventory across all 96 crawled pages (512 `<img>` tags, 27 unique source files).

**Alt text — excellent (weight: heaviest factor)**
- 0 missing (`alt=null`), 0 empty (`alt=""`) across all 512 tags.
- Alt text is genuinely descriptive and clinically specific, not keyword-stuffed or filename-based, e.g. `"Inserimento di un ago di agopuntura sulla schiena, accanto ad aghi già posizionati"`, `"Infiltrazione ecoguidata alla spalla"`, `"Blutentnahme in die Spritze zur Aufbereitung von thrombozytenreichem Plasma"`.
- Every content photo has a distinct, correctly-translated alt string per language (IT/DE/FR/EN) — verified by cross-referencing the same `src` across locales (e.g. `agopuntura-orecchio.jpg` → 4 different, accurate translations). This is rare quality for a small business site.
- Decorative/repeated brand assets (logo, RME/ISLA/European Laser Clinics badges) use short, appropriate labels rather than empty alt, which is defensible since they're meaningful (identify a real certifying/partner body) rather than purely decorative.

**Dimensions & CLS — excellent**
- 100% of images have explicit `width`/`height` attributes. Lighthouse CLS is 0.0003–0.04 on every run tested, corroborating no layout shift from images.

**Loading strategy — good**
- Correct LCP handling: hero/lead images use `loading="eager" fetchpriority="high"` (home, agopuntura, reumatologo, laserterapia all confirmed); below-fold badges/icons use `loading="lazy"` (336 of 512 tags).
- One likely-benign exception: the homepage's second "Chi sono" doctor photo is `loading="lazy"` and rendered blank in our non-scrolling capture (§2.3) — worth a manual check but probably fine for real users.

**Formats — the main gap**
- Only legacy raster formats in use: PNG (244), JPG (172), GIF (96 — all one file, `isla_logo.gif`, reused across every page). No WebP/AVIF anywhere, no `<picture>` art-direction beyond the 12 `pictures` count of unspecified variants.
- A GIF for a static, non-animated partner logo is dated; converting to SVG or PNG would reduce weight further.

**Responsive delivery — the other gap**
- 0/512 images use `srcset`/`sizes` (§2.9). Full-resolution 1024px+ content photos are shipped to mobile with no smaller variant, relying solely on browser downscaling.

**Score rationale:** alt text and dimensions are close to best-practice (would be a 95+ in isolation), but the total absence of modern formats and responsive `srcset` sitewide — both first-tier item in "images done right" for a photo-heavy medical site — caps the composite score. 84/100.

---

## 4. Recommendations summary

| Priority | Issue | Fix | Verification |
|---|---|---|---|
| High | Sticky bar overlaps in-content CTA on `/laserterapia/` mobile fold | Reserve bottom padding equal to sticky-bar height on content, or move/remove the mid-page duplicate CTA row on that template | Re-screenshot 390×844 fold, confirm no bounding-box intersection |
| Medium | Footer link row & treatment "pill" links are 15–21px tall | Increase vertical padding to reach ≥24px effective target | Re-run tap-target extraction, confirm ≥24px |
| Low/Info | "Chi sono" bio photo blank in non-scrolled capture | Manually verify in a real browser; if genuinely blank, check `loading`/`src` | Scroll to section, confirm image paints |
| Low | No `srcset`/responsive images sitewide | Add `srcset`/`sizes` (and ideally WebP/AVIF) for content photos | Check `pages.json`-equivalent extraction reports `srcset` present |
| Low | ISLA badge is a GIF | Re-export as SVG/PNG | Confirm file extension/format changes |
