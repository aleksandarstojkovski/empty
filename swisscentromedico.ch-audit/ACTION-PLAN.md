# Action plan: swisscentromedico.ch

Companion to `FULL-AUDIT-REPORT.md` (2026-09-28). SEO Health Score **80/100**.

**Order of work: remove risk → align pages with intent → build proof → expand.** The technical base is already excellent, so almost every item here is content, entity or off-site work. New pages are scheduled *after* the claims clean-up because they will inherit the site's trust level.

Each item lists:
- **Why:** the first principle it rests on
- **Depends on / Unblocks:** its links to other items
- **Failed if:** how we'd know it didn't work
- **Watch:** a leading indicator to monitor without re-running the audit

Effort: S ≤ 1 day, M = 2–5 days, L > 1 week, each across all 4 languages unless stated.

---

## Phase 0: Measurement (Week 1, before content changes)

### 0.1 Verify Google Search Console and Bing Webmaster Tools; record baselines. S
- **Why:** rankings in this audit are directional (US-located). Without GSC, none of the "failed if" checks below can be run.
- **Unblocks:** every GSC-based check in this plan, plus IndexNow (2.9).
- **Do:**
  - Verify the domain property in GSC. Submit `sitemap.xml`. Export a 28-day query and page baseline.
  - Check the Pages report: are all 96 URLs indexed?
  - Verify Bing WMT, which feeds Copilot.
- **Failed if:** GSC shows fewer than 90 of 96 URLs indexed after 4 weeks, which would point to a quality or duplication issue (see 2.3).
- **Watch:** indexed page count; impressions for "terapia del dolore lugano", "agopuntura lugano", "reumatologo lugano" and "fisiatra lugano".

### 0.2 AI-answer baseline prompt panel. S
- **Why:** AI visibility can't be read from GSC.
- **Do:** run 20 prompts × IT/DE/EN × ChatGPT, Perplexity, Google AI Mode and Copilot (brand identity, "agopuntura Lugano", "PRP Lugano costo", "Akupunktur Lugano"). Record whether the site is cited, whether its facts are correct, and whether a competitor is cited instead (`findings/geo.md`).
- **Watch:** the same panel monthly.

### 0.3 Manual check of the HTTP→HTTPS redirect. S
- `curl -I http://swisscentromedico.ch/` should return a single 301 to https. This could not be verified in the audit environment.

---

## Phase 1: Critical and YMYL risk removal (Week 1)

### 1.1 Remove the systemic aPDT claims from `/terapia-fotodinamica/` (×4). Critical, S–M
- **Why:** on YMYL, unsupported therapeutic claims hurt page and site trust with Google's quality systems and with AI answer engines. They may also raise Swiss medical-advertising issues (unverified).
- **Do:**
  - Remove the infusion/IV-activated aPDT content, the "batteri, virus e parassiti" and "senza antibiotici sistemici" framing, and the curcumin/hypericin agent list.
  - Keep the page to topical PDT/aPDT uses that have cited evidence.
  - Rewrite the meta, OG, Twitter, JSON-LD `description` and llms.txt from the new body.
- **Unblocks:** 3.2 (a single PDT home), and outreach in 3.x. Don't send citation or PR traffic to the page until this is done.
- **Failed if:** any of "per infusione", "parassit", "antibiotici sistemici", "curcumin", "ipericin" (or the translations) still appear on the page or in `llms.txt`.
- **Watch:** the page's GSC impressions and CTR; AI panel answers to "photodynamic therapy Lugano".

### 1.2 Resolve the "Reumatologo / Rheumatologist" wording (×4). High, S
- **Why:** the doctor's FMH title is *Physical Medicine & Rehabilitation*. Presenting him as a "rheumatologist" misleads patients, GPs and AI entity models, and may conflict with the rules on using specialist titles.
- **Do:**
  - Ask the client to confirm the permitted wording with the FMH / Ordine dei medici del Cantone Ticino.
  - Then retitle, e.g. H1 "Reumatologia e dolori articolari a Lugano", subline "Visita del Dott. Djordjevic, specialista FMH in Medicina fisica e riabilitazione".
  - Consider moving the page to `/reumatologia/` with a 301, updating hreflang, the sitemap and internal links.
  - Add "Quando rivolgersi a un reumatologo FMH".
  - Align the schema `medicalSpecialty` and `description`.
- **Depends on:** the client's compliance confirmation. **Escalate to Critical** if the wording can't be substantiated.
- **Unblocks:** 2.6 (GBP category), 3.5 (fisiatra page).
- **Failed if:** after 8 weeks the page (or its successor) keeps "reumatologo lugano" impressions with CTR under about 1%, or callers still ask "è reumatologo FMH?".
- **Watch:** GSC CTR for the rheumatology query cluster; the AI panel's description of the doctor's specialty.

### 1.3 Fix the factual and disclosure errors. High, S
- Exosome page: "doppia membrana" → a single lipid bilayer. Add a box covering product origin, Swiss regulatory status and evidence level. Next to the Weber 2024 citation, add "studio preliminare; possibile conflitto d'interesse", or remove the citation.
- Move the ISLA and European Laser Clinics badges out of the credential position into a labelled "Rete / formazione laser" line. Put FMH, SGUM, SSIPM, SAMM and ASA first.
- **Failed if:** "doppia membrana" is still present; the Weber citation has no note; the `/laserterapia/` hero still lists "Membri ISLA e European Laser Clinics" as a trust point.

### 1.4 Rewrite the 5 overstating meta descriptions and regenerate the derived snippets. Medium, S
- `/laserterapia-dermatologica/`, `/medicina-rigenerativa/`, `/laserterapia-in-combinazione-…-prp…/`, `/laserterapia/`, `/terapia-fotodinamica/` (+ DE/FR/EN). See `findings/content.md` M1.
- **Governance:** generate the meta, OG, JSON-LD descriptions and `llms.txt` from one source per page.
- **Failed if:** any of these meta, OG or llms.txt strings makes a claim that isn't in its page body.

---

## Phase 2: Trust layer and quick wins (Weeks 2–4)

### 2.1 Editorial pass to remove editing notes (×4 languages). High, M
- **Why:** sentences aimed at a reviewer ("il sito attribuisce", "studi con DOI", "Perché non parlate più della colonna?", "Non affermiamo…", "sta sulla pagina gemella") read as machine-edited text on a YMYL site.
- **Do:** a human edit of the 11 affected Italian pages, then their translations. Replace "sta sulla pagina X" with one contextual link. Fix the "Cosa non promettiamo" heading that's followed by a promise. Rewrite the alt text "la foto non mostra un catetere".
- **Depends on:** 1.1–1.3, so the edits don't have to be redone.
- **Failed if:** the grep in `findings/content.md` H6 still returns more than 0 hits on the live site.

### 2.2 Tier the evidence on the acupuncture and invasive laser pages. High, M
- Acupuncture: split the indications into "evidenza solida" (chronic pain, headache and migraine prophylaxis, chemotherapy nausea) and "uso di supporto / evidenza limitata". Drop "preciso" for RAC diagnosis.
- IV, interstitial and intra-articular laser: an evidence-status line, indications, risks and contraindications, and sources. Merge them into one "Laserterapia invasiva" page if the unique content stays under about 400 words.
- **Failed if:** a claim on these pages has no source or evidence-status label.
- **Watch:** AI panel answers for "laser endovenoso Lugano" and "agopuntura diabete".

### 2.3 Consolidate cannibalising siblings. Medium, M
- Merge `/agopuntura-classica-del-corpo-con-aghi-o-laser/` into `/agopuntura/` with a 301 (all 4 languages, with hreflang, sitemap and llms.txt updated), or rewrite it around a distinct angle with at least 500 unique words.
- Cut `/medicina-rigenerativa/` down to a real hub with an evidence-level table and links out.
- Give PDT a single home (`/terapia-fotodinamica/`).
- **Failed if:** the shingle re-check shows any sibling pair with Jaccard above 0.20, or GSC shows two IT URLs sharing impressions for "agopuntura lugano" over 28 days.

### 2.4 Entity disambiguation. High, S
- Add one visible sentence per language on the home and contact pages: "Swiss Centro Medico è lo studio indipendente del Dott. med. univ. Zeljko Djordjevic, Via Alessandro Volta 1, Lugano; non fa parte di Swiss Medical Network / Centromedico."
- Schema:
  - Clinic: add `alternateName` and `description`.
  - Doctor: type `["Person","IndividualPhysician"]`, add `practicesAt`, add `identifier` (GLN 7601003315226), and use the plain `name` with the honorific in `honorificPrefix`.
  - Split `sameAs` by entity and localise the OneDoc URL. See the ready-to-paste graphs in `findings/schema.md` §6.
- Standardise the doctor's name to one on-site form (currently 6 variants).
- **Failed if:** brand prompts in the AI panel return Centromedico or Swiss Medical Network facts; Google's Rich Results Test or the schema.org validator reports errors.
- **Watch:** brand-prompt accuracy; GSC CTR for the "swiss centro medico" query; whether the site ranks #1 for the brand on google.ch.

### 2.5 NAP and citation clean-up. High, S–M
- local.ch: correct the hours (currently shows Mon/Wed/Fri 09:00–17:00) and the name.
- Standardise "Swiss Centro Medico" across GBP, EMR, local.ch, search.ch, Medicosearch and Comparis.
- Claim or verify doctorfmh.ch, MedReg and the society member directories (SAMM, SGUM, SSIPM, SACAM).
- On the Zürich-side OneDoc and Comparis profiles: add Lugano as a second location, and add Italian to the language list on praxis-sternen.ch.
- **Failed if:** the quarterly NAP audit across these listings finds any mismatch.
- **Watch:** number of consistent Tier-1 Swiss healthcare listings (target 8 or more).

### 2.6 Google Business Profile and OneDoc alignment. High, S
- GBP: primary category **Physiatrist**; secondary Acupuncturist and Pain management physician (confirm what's available in the dashboard). Add services, practice interior and exterior photos, and monthly Posts linked to the service pages.
- OneDoc: set the primary specialty to Medicina fisica e riabilitazione instead of "agopuntore". Create visit types (Prima visita dolore/reumatologica, Agopuntura, PRP/infiltrazione). Deep-link the "Prenota" buttons per service if OneDoc supports it.
- **Depends on:** 1.2 (the specialty wording).
- **Failed if:** GBP Insights shows flat local-pack impressions for pain and physiatry queries 6 weeks after the change.
- **Watch:** GBP calls, direction requests and website clicks per week; OneDoc bookings by visit type.

### 2.7 Start a reviews process. High, S to set up, then ongoing
- **Why:** reviews count for about 20% of local ranking. With zero visible reviews, the practice is at the bottom of the local-pack comparison set, and AI brand answers have nothing to quote.
- **Do:**
  - Send a post-visit request by SMS, WhatsApp or email within 24–48 h, using the existing `g.page/r/…/review` link.
  - Keep the wording outcome-neutral and compliant with Swiss medical rules: no incentives, no selective asking.
  - Aim for a steady pace rather than a burst.
  - Reply to every review without confirming that the reviewer is a patient.
- **Failed if:** the GBP review count is still 0–2 after 60 days.
- **Watch:** requests sent per week against reviews received per month.

### 2.8 Small on-page wins. S
- Homepage title and H1 area: add the doctor's name and "fisiatra / Medicina fisica e riabilitazione".
- Utility titles (Privacy, Contatti, Kontakt, Contact): add "Lugano".
- Pad the footer and "pill" links to at least 24 px tall.
- Add a line to the French pages saying consultations are in IT/DE/EN/SR/SL.
- Re-export `isla_logo.gif` as SVG or WebP.
- **Failed if:** the next crawl shows these unchanged.

### 2.9 Discovery plumbing. S
- IndexNow key file plus pings in the static build.
- `Content-Signal` line in robots.txt.
- `preload` in the HSTS header, once every subdomain is HTTPS-only.
- **Watch:** Bing WMT crawl and index counts.

---

## Phase 3: Align pages with intent (Months 2–3)

### 3.1 Costs and insurance page, plus a per-page "Costi e rimborso" box. High, M
- `/costi-e-assicurazioni/` (+ DE/FR/EN) with:
  - indicative CHF ranges for the first visit, acupuncture, ultrasound-guided infiltration, PRP and laser
  - a plain explanation of LAMal (basic) versus complementary coverage
  - the RME number and Visana recognition
  - a 3-step "come verificare con la sua cassa" checklist
- Replace the generic insurance FAQ answer repeated on about 80 pages with one treatment-specific sentence and a link to this page.
- **Depends on:** the client supplying price ranges and confirming whether basic insurance is billed.
- **Failed if:** after 8 weeks "quanto costa / rimborsa la cassa?" is still the top phone question, or the page gets under about 5% of service-page sessions.
- **Watch:** sessions on the costs page; OneDoc booking-to-attendance rate.

### 3.2 Build the `/terapia-del-dolore/` hub (×4). High, M
- Sections:
  - "Quali dolori trattiamo", as condition cards linking to 3.3
  - "Come si svolge la prima visita"
  - "Le terapie", linking to the injections, manual medicine, acupuncture, laser and PRP pages
  - "Quando il dolore richiede altro", covering red flags and when to go to EOC or the emergency department
  - the costs box, the doctor's credentials and a call to action
- Retitle `/terapia-interventistica-del-dolore/` to "Infiltrazioni ecoguidate per il dolore a Lugano" and make it a child of the hub, expanded with risks.
- Point the homepage "Terapia del dolore →" link at the hub. Shift the homepage title toward brand + doctor to avoid cannibalising the hub.
- **Depends on:** Phase 1–2 trust fixes.
- **Failed if:** 12 weeks after indexing, GSC still shows "terapia del dolore lugano" landing on `/`, or the hub's average position isn't better than the homepage baseline.

### 3.3 Condition layer: 4–6 hybrid pages, Italian first. High, L
- lombosciatalgia/ernia del disco, cervicalgia, artrosi del ginocchio (a knee page comparing PRP, hyaluronic acid and cortisone, with CHF ranges), cefalea/emicrania, tendinopatie di spalla, fibromialgia.
- Each follows "cos'è → quando preoccuparsi → cosa facciamo in studio → evidenze → costi → prenota", with the doctor's byline and cited sources. Translate once the IT version performs.
- **Failed if:** after 3 months the pages get impressions only for non-local queries (no "lugano/ticino" in GSC queries), or CTR stays under about 0.5% with no OneDoc clicks.
- **Watch:** impressions for local condition queries; the internal click-through rate from condition pages to service pages.

### 3.4 Physician profile page. Medium, M
- `/dott-zeljko-djordjevic/` (+ DE/FR/EN):
  - training (Vienna)
  - FMH and SIWF titles, with MedReg and GLN verification links
  - society memberships linked to their member directories
  - languages
  - both practice locations
- Link every byline to it, and set it as the `url` of the doctor's schema node.
- **Failed if:** after 8 weeks GSC shows no impressions for doctor-name queries on this page.

### 3.5 "Fisiatra a Lugano" targeting. Medium, S–M
- Either a dedicated page or a section in 3.4, using "fisiatra / fisiatria" naturally on the homepage and the rheumatology page.
- **Depends on:** 1.2.
- **Failed if:** zero GSC impressions for "fisiatra lugano" 8 weeks after indexing.

### 3.6 Make the passages quotable. Medium, M
- A 40–60-word definitional lead on the 17 service pages that open with fragments.
- FAQ questions that name the treatment and Lugano ("Quante sedute di agopuntura servono a Lugano?"), with answers whose first sentence restates the subject.
- A comparison table of the laser routes.
- **Failed if:** the AI panel citation rate for service queries doesn't improve over 2 monthly runs.

---

## Phase 4: Authority and iteration (ongoing)

### 4.1 Earn third-party corroboration. Medium, L
- 3–5 short physician videos (YouTube, with transcripts) on the top conditions and treatments.
- Profiles on society member directories.
- A GP-referral page with a HIN contact.
- Mentions from local health or USI/EOC-adjacent sources where they are appropriate.
- **Watch:** referring domains (use GSC Links while no backlink API is available); brand-prompt accuracy.

### 4.2 Performance hygiene, only if field data calls for it. Low
- Add a ~480w `srcset` candidate for content photos.
- Investigate TTFB from Switzerland and consider a CDN.
- Inline critical CSS with a CSP hash only if CrUX later shows LCP regressing.
- **Watch:** the CrUX LCP, INP and CLS p75 once there's enough traffic (GSC Core Web Vitals report).

### 4.3 Governance
- Every medical claim must trace to a cited source of adequate quality.
- Only the doctor changes the "verificata / aggiornata il" date, and only after an actual review.
- Generate metas, OG tags, JSON-LD descriptions and llms.txt from the page body.
- Re-run `/seo audit` quarterly. Capture a `/seo drift baseline` once the bundled fetchers can run in the environment.

---

## Dependency map

```
0.1 GSC/Bing ─────────────────────────────► all GSC-based "failed if" checks
1.1 PDT claims ─┬─► 1.4 metas/llms ─► 2.1 editorial pass ─► 2.3 consolidation
1.3 fixes ──────┘                                              │
1.2 Reumatologo ─► 2.6 GBP/OneDoc category ─► 3.5 fisiatra     ▼
                 └─► schema medicalSpecialty (2.4)        3.2 pain hub ─► 3.3 condition pages
2.4 entity ─► 2.5 NAP/citations ─► 4.1 corroboration     3.1 costs page ─┘
2.7 reviews (independent: start immediately, compounds over time)
```
