# Local SEO Findings — swisscentromedico.ch
Audit date: 2026-09-28. Scope: GBP signals, NAP consistency, citations, reviews, local-relevant schema, on-site location signals, medical-practice-specific local factors. Deep schema-markup validation (subtype correctness, full property audit) is covered by a separate agent; only local-pack-relevant schema properties are assessed here.

Method: analysis of the crawled dataset (`raw/pages.json`, 96 pages × 4 languages: IT default, DE, FR, EN; `raw/llms.txt`; `raw/robots.txt`; `raw/sitemap.xml`) plus light live spot-checks via curl/WebFetch (OneDoc profile, local.ch listing, praxis-sternen.ch, Google Maps place page). SERP-derived claims from the prior off-site audit are labelled directional (not run from google.ch/Ticino).

---

## Local SEO Score: 63 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 65/100 | 16.3 |
| Reviews & Reputation | 20% | 25/100 | 5.0 |
| Local On-Page SEO | 20% | 85/100 | 17.0 |
| NAP Consistency & Citations | 15% | 67/100 | 10.1 |
| Local Schema Markup | 10% | 90/100 | 9.0 |
| Local Link & Authority Signals | 10% | 60/100 | 6.0 |
| **Total** | | | **63.3 ≈ 63** |

This is a substantial improvement over the pre-rebuild state audited in `/home/user/empty/seo-audit/swisscentromedico.ch.md` (which had no site access and flagged missing schema, no doctor/practice disambiguation, and a split Zürich/Lugano identity). The rebuild fixed nearly every structural item that audit could only guess at. What's now holding the score back is **review volume/velocity** and **incomplete use of the Swiss healthcare citation ecosystem**, both of which are business-process gaps rather than dev/on-page gaps.

---

## Business type & vertical

- **Business type: brick-and-mortar** (single practice location). Full visible street address on every page footer and the `/contatti/` page, embedded Google Map, "Apri in Google Maps" / "Visualizza il percorso" directions links, on-site parking mentioned. No service-area-only language.
- **Industry vertical: healthcare (physician / medical clinic)**, sub-vertical physical medicine & rehabilitation / pain management / acupuncture. Signals: FMH specialist title, RME/Visana insurance-billing certification, GLN number, RCC billing number, "Pagina verificata dal medico, aggiornata il [date]" medically-reviewed bylines, HIN (Health Info Net) secure email for referring physicians, patient-facing "preventivo" (cost estimate) language for base-insurance-only patients. This is a single-physician practice, not a multi-provider clinic — several "industry-specific" checks that assume a clinic group (provider directory, per-provider location pages) do not apply.

---

## NAP consistency audit

### On-site (schema-verified, all 96 pages / 4 languages)

Extracted every `MedicalClinic` JSON-LD node site-wide: **1 unique address, 1 unique phone, 1 unique geo pair, 1 unique openingHoursSpecification block** across all 96 pages. This is as clean as on-site NAP gets.

| Field | Value | Consistent across 96 pages/schema? |
|---|---|---|
| Name | Swiss Centro Medico | Yes |
| Street | Via Alessandro Volta 1 | Yes |
| City/PLZ | 6900 Lugano | Yes |
| Region/Country | Ticino / CH | Yes |
| Phone (visible + schema) | +41 91 921 04 27 | Yes (tel: links, schema, llms.txt all match) |
| WhatsApp | +41 78 605 33 72 | Yes |
| Geo | 46.0094834, 8.9584343 (7 decimals) | Yes — exceeds the 5-decimal recommendation |
| Hours | Mo/We 08:00–16:30, Fr 08:00–13:30 | Yes — matches brief exactly, in prose (`/contatti/`), schema (`openingHoursSpecification`), and `llms.txt` |
| Email | dr.djordjevic@hin.ch | Yes |

`llms.txt` NAP block matches the live site exactly (address, both phone numbers, hours, languages).

### On-site vs. off-site (spot-checked live)

| Source | Name shown | Address | Phone | Notes |
|---|---|---|---|---|
| Site (all pages) | Swiss Centro Medico | Via Alessandro Volta 1, 6900 Lugano | +41 91 921 04 27 | Baseline |
| OneDoc (`/it/agopuntore/lugano/pc0jl/…`, live-fetched) | "Dr. med. Zeljko Djordjevic" | Via Alessandro Volta 1, 6900 Lugano | 091 921 04 27 | **Matches** — this profile is now correctly the Lugano one (prior audit's Zürich-mismatch issue for this listing appears resolved). OneDoc's own category taxonomy for this profile is **"Agopuntore" (Acupuncturist)**, confirmed via its breadcrumb JSON-LD (`Agopuntore → Cantone Ticino → Lugano`), not "Fisiatra"/physiatrist or a pain-clinic category. |
| local.ch (live-fetched) | **"Swiss centro medico- Dr.med. Zeljko Djordjevic"** | Via Alessandro Volta 1 | 091 921 04 27 / WhatsApp 078 605 33 72 | Address/phone match; **name format still diverges** from the site's brand casing and uses "Dr.med." without the space/period style used on-site — same issue the prior audit flagged, not yet fixed on local.ch's end. |
| praxis-sternen.ch (Zürich, live-fetched) | Zeljko Djordjevic | (Zürich-Oerlikon) | — | Confirms **bidirectional cross-linking now exists**: swisscentromedico.ch homepage links to `praxis-sternen.ch`, and the Zürich site's personnel page links back to `swisscentromedico.ch/agopuntura/`. This directly resolves the prior audit's action item 2.4. |
| Comparis, Medicosearch, search.ch, doctorfmh.ch, MedReg | Not re-verified live this pass (time-boxed); prior audit found NAP consistent on these as of its date | — | — | **Unverified this pass** — flag for re-check, especially whether brand name/address were updated to match the rebuilt site's canonical casing. |

**Verdict:** on-site NAP is essentially perfect. The remaining inconsistency is external (local.ch name-format drift) and is a legacy issue, not something introduced by the rebuild.

---

## GBP (Google Business Profile) signals on-site

| Signal | Status | Evidence |
|---|---|---|
| Maps embed | Present | `<iframe>` on `/contatti/` pointing at the exact place ID (`0x47842d15d8a53e0d:0x57ac9e5e3aa067e1`) |
| Place/CID reference | Present | Same place ID reused in the `hasMap` schema property and in the "Apri in Google Maps" link |
| Short Maps link | Present | `maps.app.goo.gl/66zKdiuP1Ecmfxjd9` (directions) |
| **Google review link** | Present | `https://g.page/r/CeFnoDpenqxXEAI/review/` with visible CTA "Lascia una recensione su Google" — a `g.page/r/…/review` short link **only generates for a claimed, verified GBP listing**, so this is solid indirect proof the profile is claimed |
| Review carousel / widget showing actual reviews | **Absent** | No review count, star rating, or testimonial content anywhere on the crawled pages |
| GBP category | **Not verifiable from the site** (no live GBP access in this environment) | Recommend confirming live in GBP dashboard |
| GBP Posts indicator on-site | Not applicable/not visible | Posts don't surface in static HTML; unverified |
| Photo evidence | Partial | Doctor photo and logo present in schema `image`; no interior/exterior practice photo gallery found in the crawl |

### Recommended GBP primary/secondary categories

Given the FMH specialty (Physical Medicine & Rehabilitation) and the service mix (pain therapy, acupuncture, rheumatology consults, regenerative medicine), and the Whitespark 2026 finding that **primary category is the #1 ranking factor and wrong category is the #1 negative factor**:

- **Primary candidate: "Physiatrist"** — matches the FMH title exactly and is the least-contested, most differentiating category versus the many general "Medical clinic" competitors already dominating "terapia del dolore Lugano" per the prior audit's SERP snapshot.
- **Secondary candidates:** "Acupuncturist" (matches the OneDoc citation category, keeps continuity with existing NAP ecosystem), "Pain control clinic" / "Pain management physician" (matches the "terapia interventistica del dolore" service line, the practice's stated "secondo fuoco").
- Avoid "Rheumatologist" as primary unless FMH board-certified in rheumatology specifically — the schema/credentials shown are Physical Medicine & Rehabilitation with a rheumatologic focus area, not a rheumatology board certification; using the wrong specialty category risks the "#1 negative factor" penalty and could also raise a Swiss medical-advertising accuracy concern (titles must match FMH register).
- **This cannot be confirmed without live GBP dashboard access** — flag as a client action to verify/correct.

---

## Review health snapshot

| Metric | Value |
|---|---|
| Reviews visible on-site | 0 |
| aggregateRating in schema | Absent (appropriately — no fabricated/unverifiable rating was added, which is correct practice) |
| Review CTA present | Yes, new since rebuild (`/contatti/`: "È già stato in studio? Una recensione su Google aiuta altri pazienti a trovarci") |
| Review count/rating on OneDoc profile (live-fetched) | Not visible in the fetched HTML |
| SERP review snippets (prior audit, directional) | None found |
| Response pattern | Cannot assess — no reviews to respond to |

**18-day rule risk (Sterling Sky):** rankings can fall off a cliff after ~3 weeks without a new review. With **zero visible reviews and no evidence of a review-generation cadence**, this practice is fully exposed to that risk in the local pack, independent of how good the on-page content is. The new review CTA is a necessary first step but is passive (a link on the contact page) rather than an active post-visit ask.

**Swiss medical advertising compliance note:** Swiss rules (FMH Code of Deontology / Heilmittelgesetz advertising restrictions for medical services) constrain what can be solicited or displayed — testimonials that imply clinical outcomes/efficacy claims are risky; a neutral "leave a Google review about your experience" ask (which is what's currently on the page) is the compliant pattern, so the current implementation is directionally correct. Do not add star-rating schema, curated testimonial quotes about treatment outcomes, or before/after claims on-site — these cross into regulated territory in CH.

---

## Citation presence (Tier 1 + Swiss-healthcare-specific)

| Directory | Referenced in site's `sameAs`? | Status (from prior audit + this pass's live spot-checks) |
|---|---|---|
| OneDoc | Yes (`onedoc.ch/it/agopuntore/lugano/pc0jl/…`) | Live, address/phone match. Booking CTAs correctly deep-link to the **localized** OneDoc profile per language (verified via redirect check: `/en/book/` → `…/en/acupuncturist/…`, `/de/termin/` → `…/de/akupunkteur/…`, `/fr/rendez-vous/` → `…/fr/acupuncteur/…`). Minor: the JSON-LD `sameAs` value itself is hard-coded to the Italian URL on every language version (Low severity, schema-only). |
| EMR (RME certification body) | Yes (`emr.ch/terapeuta/zeljko.djordjevic`) | Referenced consistently |
| Instagram | Yes | `instagram.com/swisscentromedicolugano` |
| Facebook | Yes | Present in clinic `sameAs` |
| Comparis | Yes, but only in the **Physician** node, not the MedicalClinic node | Not re-verified live this pass |
| local.ch | **Not in site's `sameAs`** | Live, present, NAP matches except name-casing drift (see NAP table) |
| search.ch | **Not in site's `sameAs`** | Not re-verified live this pass |
| Medicosearch | **Not in site's `sameAs`** | Not re-verified live this pass |
| doctorfmh.ch / FMH Doctor Index | **Not linked anywhere on-site** | Not checked live — high-value citation for a solo FMH specialist, should be confirmed/claimed |
| MedReg (federal register) | **Not linked** | Not a "citation" in the marketing sense but a trust/legitimacy signal worth linking from the legal-notice pages |
| SAMM, SGUM, SSIPM, SACAM (professional societies named in `hasCredential`/`memberOf`) | Named as text, **not linked** | These are credential mentions, not citations — turning them into links to the societies' member directories (where the doctor is listed) would create additional authoritative, topically-relevant citations |
| BBB / Yelp | N/A | Not relevant directories for Swiss healthcare; correctly not pursued |

**Gap:** the site's own citation graph (`sameAs`) covers only 4 of the ~9 directories that matter for Swiss healthcare local SEO. Given the brief notes "3 of top 5 AI-visibility factors are citation-related," this is a concrete, low-effort opportunity: add local.ch, Medicosearch, search.ch, and doctorfmh.ch to `sameAs` (after confirming/claiming those listings), and link out to the SAMM/SGUM/SSIPM/SACAM member-directory profile pages next to each credential mention.

---

## Local schema markup (local-pack-relevant properties only)

Validated via `raw/pages.json` across all 96 pages.

| Property | Status |
|---|---|
| Type | `MedicalClinic` (present on 96/96 pages) — subtype correctness deferred to the schema-focused agent |
| `name`, `url` | Present, consistent |
| `address` (PostalAddress) | Present, complete, consistent (1 unique variant site-wide) |
| `telephone` | Present, consistent; secondary `ContactPoint` for WhatsApp with `contactType` |
| `geo` | Present, **7 decimal places** (exceeds 5-decimal recommendation) |
| `openingHoursSpecification` | Present, structured (`dayOfWeek`/`opens`/`closes`), matches visible hours exactly; also a simple `openingHours` string as fallback |
| `hasMap` | Present, correct place ID |
| `areaServed` | Present — Lugano, Mendrisio, Bellinzona, Locarno, Chiasso + Ticino (AdministrativeArea) |
| `medicalSpecialty` | Present but only `Rheumatologic` + `Musculoskeletal` enum values — doesn't fully capture the Physical Medicine & Rehabilitation / pain-management focus (flag for the schema agent; relevant here only insofar as it affects how Google may map specialty to local-pack categorization) |
| `availableService` | Present, one entry per service line with `@id` anchors to the actual service pages — strong internal linking of schema to content |
| `sameAs` | Present but incomplete (see citations section); also inconsistently locale-hardcoded (Low) |
| `aggregateRating` / `Review` | Absent — correct, since no real reviews exist yet; do **not** add fabricated ratings |
| Per-page consistency | Identical address/phone/geo/hours across all 96 pages/4 languages — no drift found |

---

## Location-page / on-page local relevance signals

Not a multi-location site, so the "doorway page swap test" and "unique content %" multi-location checks don't apply in their usual sense — but the equivalent single-location checks below are strong:

- **Landmarks:** USI (Università della Svizzera italiana) and EOC (Ospedale Regionale di Lugano) mentioned on 88/96 pages — strong hyper-local proximity signal, reinforced on `/contatti/` with "Nelle immediate vicinanze dell'Università della Svizzera italiana (USI) e dell'Ospedale Regionale di Lugano (EOC)."
- **Service-area language:** Mendrisio, Bellinzona, Locarno, Chiasso + "Ticino" appear on all 96 pages (footer/areaServed block) and are echoed in schema `areaServed`.
- **Cross-border patient targeting:** `/contatti/` explicitly addresses Italian patients ("Dall'Italia: collegamenti diretti da Milano e dalla Lombardia, anche da Como e Varese, in auto dall'A9/A2 e in treno fino a Lugano") — a smart, specific signal for a Lugano border practice, absent from the pre-rebuild site.
- **Transport/parking:** public transport ("a due passi dall'USI") and on-site parking ("parcheggio dello studio proprio di fronte") both called out.
- **Referring-physician workflow:** dedicated HIN secure-email path for referrals/second opinions — a B2B local-authority signal (referral network), not typically captured by generic local SEO checklists but relevant for medical practices.
- **Gap — micro-neighborhood terms:** Paradiso, Massagno, Viganello, Pregassona, Sorengo (immediately adjacent to Via Alessandro Volta) do **not** appear anywhere in the crawl. These are realistic "near me"-adjacent search terms for Lugano-area patients and cost little to add (e.g., one sentence on `/contatti/` or in the areaServed schema).
- **Dedicated service pages:** confirmed — one page per service/procedure (laser sub-types, acupuncture sub-types, PRP, regenerative medicine, rheumatology, manual medicine, MSK ultrasound), each with location-qualified titles ("X a Lugano") and meta descriptions. Per the brief, this is the **#1 local-organic and #2 AI-visibility factor** — this is now well covered, directly resolving the prior audit's top action item (2.1/2.2, thin indexation / no service pages).
- **E-E-A-T freshness:** each service page carries "Pagina verificata dal medico, aggiornata il [date]" (medically reviewed + dated) — resolves the prior audit's 2.6 recommendation.

---

## Zürich/Lugano split — handling assessment

This was a Medium-severity issue in the prior audit. Current state:

- Homepage explicitly discloses the second location: "Ricevo anche a Zurigo Oerlikon, nell'Arztpraxis Sternen" with an outbound link.
- `praxis-sternen.ch` links back to `swisscentromedico.ch/agopuntura/` (confirmed live) — genuine bidirectional, contextually relevant cross-linking.
- The Physician schema node's `sameAs` includes `praxis-sternen.ch`.
- OneDoc's Lugano profile (`pc0jl`) is confirmed live and correctly geo-tagged to Lugano — the prior audit's specific worry (a doctor-name search routing Lugano patients to a Zürich-only OneDoc profile) appears resolved for this profile.
- **Not re-verified this pass:** whether the doctor's Zürich-specific OneDoc/Comparis profiles (noted in the prior audit as `pckbd` for Zürich) now also list Lugano as a second location, and whether the "Dr. med." vs. "Dr. med. univ." naming is fully standardized across both cities' citations. Recommend a follow-up check.

**Verdict: substantially resolved**, with one open verification item.

---

## Top 10 prioritized actions

### Critical

1. **Establish an active review-generation process, not just a passive link.** *Why it matters:* zero visible reviews on a YMYL medical page, combined with the 18-day-rule ranking cliff, is the single biggest gap versus dimension weight (Reviews = 20%).
   - Action: post-visit SMS/WhatsApp/email ask (compliant, outcome-neutral wording) sent within 24–48h of each appointment; target a steady trickle rather than a batch.
   - How we'd know it failed: GBP review count stays at 0 (or stalls) 60 days from now; local-pack position for "terapia del dolore Lugano" / "agopuntore Lugano" doesn't improve despite the new service pages.
   - Leading indicator: number of review requests sent per week (process metric, trackable immediately) vs. reviews received per month.

### High

2. **Verify and, if needed, correct the live GBP primary category.** *Why it matters:* primary category is the #1 ranking factor and the #1 negative factor if wrong (Whitespark 2026); cannot be confirmed from crawled data.
   - Action: log into GBP, confirm primary = "Physiatrist" (or closest exact match), secondary categories = Acupuncturist / Pain management physician, remove any generic "Medical clinic" primary if currently set.
   - How we'd know it failed: local-pack impressions for physiatry/pain-therapy queries stay flat in GBP Insights after 4–6 weeks.
   - Leading indicator: GBP category field itself (one-time check, visible immediately in the dashboard).

3. **Expand `sameAs`/citations to local.ch, Medicosearch, search.ch, and doctorfmh.ch, and fix the local.ch name-casing drift.** *Why it matters:* 3 of the top 5 AI-visibility factors are citation-related; local.ch still shows "Swiss centro medico- Dr.med. Zeljko Djordjevic" instead of the canonical "Swiss Centro Medico" brand.
   - Action: claim/update these four listings to match on-site NAP exactly, then add them to the `MedicalClinic.sameAs` array.
   - How we'd know it failed: a future crawl of local.ch/Medicosearch/search.ch still shows the old name format or missing NAP fields.
   - Leading indicator: count of Tier-1-for-CH-healthcare directories present in `sameAs` (currently 4; target 8+).

4. **Re-verify the Zürich-side OneDoc/Comparis doctor profiles for the second-location listing and name standardization.** *Why it matters:* prior audit's specific concern (Lugano patients routed to a Zürich-only profile) was fixed on the Lugano side but not re-checked on the Zürich side this pass.
   - Action: pull up the `pckbd` Zürich OneDoc profile and the Zürich Comparis profile live; confirm Lugano appears as a second location and "Dr. med. univ." naming is used consistently.
   - How we'd know it failed: a Zürich-side profile still shows only Zürich, or a name variant search still surfaces the split identity.
   - Leading indicator: presence of a Lugano address/location entry on the Zürich-side profiles (binary, checkable in one visit).

### Medium

5. **Confirm GBP photo count/recency and Posts cadence live.** *Why it matters:* dimension not verifiable from static HTML in this pass; photo evidence on-site is limited to a headshot + logo, no interior/exterior gallery found in the crawl.
   - Action: audit GBP dashboard for photo count/freshness and whether Posts are used at all; if not, start monthly Posts tied to service pages.
   - How we'd know it failed: GBP photo count stays under ~10 or last photo upload is >6 months old at next review.
   - Leading indicator: photos-added and Posts-published counts per month (process metrics in GBP Insights).

6. **Link the named professional-society credentials (SAMM, SGUM, SSIPM, SACAM) to the doctor's actual member-directory profile pages.** *Why it matters:* currently text-only mentions; turning them into links creates additional authoritative, topically exact citations at near-zero cost.
   - Action: find/confirm the doctor's listing URL on each society's public directory (if one exists) and add as outbound links + `sameAs` entries.
   - How we'd know it failed: these remain plain text with no linked directory profile at next audit.
   - Leading indicator: count of professional-society directory links added.

7. **Add hyper-local neighborhood terms** (Paradiso, Massagno, Viganello, Pregassona, Sorengo) to `/contatti/` and/or `areaServed`. *Why it matters:* low-cost, currently zero coverage; plausible "near me"-adjacent queries for a Lugano-center practice.
   - How we'd know it failed: still zero mentions at next crawl.
   - Leading indicator: mention count of these terms site-wide (currently 0; target ≥1 contextual mention).

8. **Make the `sameAs` OneDoc reference locale-aware** (currently hard-coded to the Italian URL on DE/FR/EN pages, even though the actual booking-redirect links are correctly localized). *Why it matters:* Low functional impact (users aren't affected) but a cheap consistency fix for machine-readable entity data feeding AI answers.
   - How we'd know it failed: schema audit at next crawl still shows one hard-coded IT URL across all language variants.
   - Leading indicator: presence of per-language OneDoc URLs in each language page's `sameAs`.

### Low

9. **Broaden `medicalSpecialty` enum coverage** beyond Rheumatologic/Musculoskeletal to better reflect Physical Medicine & Rehabilitation, to the extent schema.org's enumeration allows — coordinate with the schema-focused agent's findings so this isn't done twice.
   - Leading indicator: enum values reviewed/updated at next schema pass.

10. **Add a small interior/exterior practice photo set to the site** (beyond the doctor headshot and logo) that can double as GBP photo uploads. *Why it matters:* supports both on-site trust and GBP photo-freshness signals with one asset shoot.
    - Leading indicator: number of practice photos published site-wide and cross-posted to GBP.

---

## Limitations disclaimer

- **No live Google Business Profile dashboard access** in this environment — category, Q&A, Posts history, photo count/freshness, and actual review count/rating could not be directly confirmed. All GBP-category and photo/posts recommendations above are inferred from on-site evidence (embed, place ID, `g.page` review short-link) and should be verified/actioned directly in GBP.
- **Google Maps place page was fetched raw (curl, no JS rendering)** — it returns a client-rendered shell with no usable rating/review-count data; this is a hard limitation of this environment, not a finding about the business.
- **SERP-derived claims are directional**, both those carried over from the prior off-site audit and any implied here — no search was run from google.ch with Ticino/IT localization in this pass either.
- **Comparis, Medicosearch, search.ch, doctorfmh.ch, MedReg, and the Zürich-side OneDoc/Comparis profiles were not re-fetched live in this pass** (time-boxed); status is carried over from the prior audit or flagged explicitly as unverified above. Re-check before treating those citation-consistency items as closed.
- **No paid local-rank-tracking, DataForSEO, or GBP Insights data was available** — review velocity, local-pack position, and impression/click data could not be measured directly; recommendations rely on structural/on-site evidence and the Whitespark/Sterling Sky ranking-factor research cited in the brief.
- Multi-location location-page quality checks (unique-content %, doorway-page swap test) are **not applicable** — this is a single-location practice; the Zürich presence is a separate physician website, not a location page on this domain.
