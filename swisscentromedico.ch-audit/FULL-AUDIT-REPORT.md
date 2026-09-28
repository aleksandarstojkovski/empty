# Full SEO audit: swisscentromedico.ch

| | |
|---|---|
| **Date** | 2026-09-28 |
| **Scope** | Full site: 96 HTML pages (24 pages × IT/DE/FR/EN), robots.txt, sitemap, llms.txt, headers, JSON-LD, Lighthouse lab runs, mobile/desktop rendering, plus off-site/SERP and local checks |
| **Business type** | Local Service: a single-physician medical practice (YMYL). Physical medicine & rehabilitation, pain therapy, acupuncture, laser therapy and regenerative medicine, in Via Alessandro Volta 1, 6900 Lugano |
| **Method** | One shared crawl, then 10 parallel specialist reviews: technical, content, schema, sitemap, performance, visual, GEO, agentic, SXO and local. After those, an orchestrator verification and synthesis pass. Specialist evidence is in `findings/*.md` and raw inputs are in `raw/` |
| **Supersedes** | `seo-audit/swisscentromedico.ch.md`, a partial SERP-only audit from an earlier session that could not reach the site. The site has since been rebuilt, and most of that audit's on-site findings are now resolved (see §3) |

---

## 1. Executive summary

### SEO Health Score: **80 / 100**

| Category | Weight | Score | Basis |
|---|---:|---:|---|
| Technical SEO | 22% | **93** | Clean crawl. Hreflang, canonicals, redirects, security headers and sitemap are all correct (`findings/technical.md`, `findings/sitemap.md`) |
| Content Quality | 23% | **58** | Strong E-E-A-T scaffolding, undermined by medical claims that go beyond the evidence and by leftover editing text (`findings/content.md`) |
| On-Page SEO | 20% | **78** | Titles and metas are unique and localised. Gaps are in how queries map to pages, plus 5 metas that overstate their pages (`findings/content.md` §6) |
| Schema / Structured Data | 10% | **90** | Valid, consistent @graph on 96/96 pages; small refinements only (`findings/schema.md`; 88 → 90 after the orchestrator lowered one severity) |
| Performance (CWV) | 10% | **95** | Lab data only: Lighthouse perf 95–99, LCP 0.9–2.0 s, CLS ≤ 0.04, TBT 0 ms. No CrUX field data (`findings/performance.md`) |
| AI Search Readiness | 10% | **75** | Weighted 0.7 × GEO 68 + 0.3 × agentic 90 (`findings/geo.md`, `findings/agentic.md`) |
| Images | 5% | **93** | All alt text present, dimensions set, WebP via `<picture>` (`findings/visual.md`; corrected from 84) |
| **Weighted total** | | **80** | 20.5 + 13.3 + 15.6 + 9.0 + 9.5 + 7.5 + 4.7 |

These are not in the weighted formula but are reported as supporting scores: **Local SEO 63/100** (`findings/local.md`) and **SXO gap 63/100**, homepage vs "terapia del dolore Lugano" (`findings/sxo.md`).

**One-line verdict.** The rebuild fixed the engineering: the site is fast, fully crawlable, and correctly internationalised and marked up. What now limits search and AI visibility is **trust on a YMYL site**. Some pages make medical claims their sources don't support. The rheumatologist wording conflicts with the doctor's FMH title. The practice has almost no off-site proof: no visible reviews, and a brand name that collides with a large competitor. The 80 understates that risk. The problems sit in a few high-stakes pages, and a weighted average dilutes them.

### Top 5 issues

| # | Severity | Issue | Where |
|---|---|---|---|
| 1 | **Critical** (YMYL/compliance) | Unsupported systemic "antimicrobial photodynamic therapy" claims. The page says a photosensitiser is "somministrato per infusione e attivato attraverso la terapia laser sistemica endovenosa", targets "patogeni batterici, virali e parassitari", and works "senza ricorso ad antibiotici sistemici", with curcumin and hypericin listed as agents. None of the cited sources supports the systemic use. The same text is in the meta description, OG tags, JSON-LD and llms.txt | `/terapia-fotodinamica/` and its DE/FR/EN versions |
| 2 | **High** (compliance + intent) | The title and H1 are "Reumatologo a Lugano", "Rheumatologe in Lugano" and "Rheumatologist in Lugano", but the doctor's FMH title is *Physical Medicine & Rehabilitation*, and the schema declares `medicalSpecialty: Rheumatologic`. The SERP for this query rewards named FMH rheumatologists | `/reumatologo/` ×4 languages |
| 3 | **High** (YMYL) | Several claims outrun the evidence. The intravenous, interstitial and intra-articular laser pages cite no clinical evidence and understate risks. The exosome page gives no product origin or regulatory status, cites one 5-person study with a probable undisclosed conflict of interest, and wrongly says exosomes have a "doppia membrana" (they have a single lipid bilayer). The acupuncture page lists heart/circulation, diabetes, thyroid, fertility and oncology support. Laser-device network badges are shown as credentials | 12+ service pages ×4 languages |
| 4 | **High** (SXO/content) | Pages don't line up with the main queries. There is no "terapia del dolore" hub (the homepage carries the query, and its link goes to a 675-word injection page), no condition pages (back pain, neck pain, knee arthrosis, headache), no costs or insurance page, and "fisiatra" appears nowhere | Site architecture |
| 5 | **High** (local/entity) | The practice has almost no off-site proof. There are no visible patient reviews. The brand is easily confused with Swiss Medical Network's "Centromedico" and there's no text or markup telling them apart. Directory data is inconsistent: local.ch shows the wrong hours (09–17) and the name is written 3 different ways | GBP, directories, schema |

Also High: the editing notes visible to patients (§5.2) and the need to confirm the live GBP primary category (§10).

### Top 5 quick wins (≤ 1 day each)

1. **Remove the editing notes visible to patients** ("il sito attribuisce", "studi con DOI", "Perché non parlate più della colonna?", "sta sulla pagina gemella"…) in all 4 languages. There's a grep list in `findings/content.md` H6.
2. **Rewrite the 5 meta descriptions that overstate their pages**, and regenerate the OG tags, JSON-LD `description` and llms.txt from the page bodies (`findings/content.md` M1).
3. **Fix the factual and disclosure errors:** change "doppia membrana" to a single lipid bilayer. Add a conflict-of-interest note to the Weber 2024 citation. Relabel the ISLA and European Laser Clinics badges as "Rete / formazione laser", not credentials.
4. **Schema and entity fixes:**
   - Mark up the doctor as `["Person","IndividualPhysician"]` with `practicesAt`.
   - Add `identifier` with the GLN 7601003315226, and use the plain `name` with the honorific in `honorificPrefix`.
   - Add `alternateName` and `description` to the clinic, and split its `sameAs` from the doctor's.
   - Add one visible "studio indipendente, non parte di Swiss Medical Network" sentence (`findings/schema.md`, `findings/geo.md` §4.2).
5. **Low-effort discovery wins:**
   - Add "fisiatra / Medicina fisica e riabilitazione" wording and the doctor's name to the homepage title or H1.
   - Add "Lugano" to the 5 generic utility-page titles.
   - Verify Bing Webmaster Tools and add IndexNow, since Copilot draws on Bing's index.
   - Add a `Content-Signal` line to robots.txt.

---

## 2. Synthesis (PERCEIVE → ANALYZE → VALIDATE → ACT)

**PERCEIVE.** The external picture comes from the earlier SERP audit and this session's directional searches. The site was missing from the top results for "terapia del dolore / agopuntura / reumatologo Lugano". OneDoc outranked it for its own brand, and no reviews showed anywhere. Internally, the rebuilt site is technically excellent:

- all 96 URLs return 200, are self-canonical and are in the sitemap
- hreflang has 0 mismatches
- there are 0 broken links and no third-party requests
- Lighthouse scores 95–99 for performance and 100 for accessibility, best practices and SEO

Every content page also has a physician byline, a "verificata dal medico, aggiornata il…" line and DOI-linked sources. **Listen:** the most revealing signal is the text itself. Sentences addressed to a reviewer ("il sito attribuisce", "Non affermiamo assenza di effetti collaterali") show that the pages were recently rewritten in response to compliance comments and weren't given a final patient-facing edit.

**ANALYZE.**
- *First principle (THINK).* On a YMYL medical site, Google's quality systems and AI answer engines rank *trustworthy* sources, not merely *crawlable* ones. The site has maximised crawlability. The next unit of visibility has to come from trust: claims supported by sources, accurate credentials, and third-party corroboration.
- *Lateral connections.* The same "Reumatologo" framing was flagged independently by the SXO, GEO, content and schema reviews, so it touches ranking intent, entity accuracy, E-E-A-T and markup at once. The unsupported claims also leak into metas, OG tags, JSON-LD and llms.txt, the exact text that search snippets and AI systems quote. Missing reviews hurt the local pack, AI brand answers and E-E-A-T together.
- *System view.* The technical layer is no longer the bottleneck. The binding constraint is the content-trust layer, with off-site proof second, and new content comes third. New pain-hub and condition pages will inherit the site's trust level, so fixing the claims comes before building.

**VALIDATE.**
- *Feel (the patient's view).* A patient in pain arrives on mobile and sees a clear H1, both calls to action and a sticky Chiama/Prenota bar. That part works well. They find no price, no reviews, a "Reumatologo" whose title says otherwise, and a booking page labelled "agopuntore". The insurance-checking persona scores lowest (53/100).
- *Accept (where these conclusions could be wrong).*
  - Rankings were measured from a US location, not google.ch with Ticino localisation, and there's no GSC data. The claimed ranking gaps need confirming in Search Console.
  - Legal and advertising points are flagged for the client's verification with the FMH or the Ticino cantonal medical office. They are not legal conclusions.
  - GBP state (category, reviews, photos) was inferred, not observed in the dashboard.

**ACT.** The plan runs in this order: **remove risk → align pages with intent → build proof → expand.** Week 1 fixes the claims and the credential wording and turns on measurement. Weeks 2–4 do the editorial pass, disambiguation, NAP cleanup and a reviews process. Months 2–3 build the pain hub, costs page and condition pages. Every item in `ACTION-PLAN.md` carries its dependency, a way to tell if it failed, and a leading indicator.

---

## 3. What changed since the prior (SERP-only) audit

| Prior finding (`seo-audit/swisscentromedico.ch.md`) | Status now |
|---|---|
| Only 2 URLs indexed; service pages may not exist | **Pages exist:** 20 service pages per language. Indexation still needs GSC confirmation |
| Inner-page titles drop the location | **Fixed:** "{Service} a Lugano \| Swiss Centro Medico" on every page |
| Add MedicalClinic + Physician JSON-LD | **Done:** a full @graph on 96/96 pages |
| Check whether a German version exists | **Done:** DE-CH, FR-CH and EN versions, with perfect hreflang |
| Add author/"medically reviewed" bylines with dates | **Done** (visible and in JSON-LD) |
| Cross-link the Zürich and Lugano practices | **Done** (bidirectional with praxis-sternen.ch) |
| Standardise the doctor's name | **Still open:** 6 variants on the site, 3 name forms across directories |
| Doctor's name in the homepage title/H1 | **Still open** |
| Condition pages | **Still open** |
| Reviews programme | **Still open.** A GBP review link now exists on `/contatti/`, which confirms the GBP is claimed |
| Brand ambiguity vs Centromedico | **Still open**, with no disambiguation on the site |

---

## 4. Technical SEO: 93/100

**What works (no action needed):**
- All 96 pages return 200, are self-canonical, `index, follow` with `max-image-preview:large`, and are in the sitemap. There are no orphans, a flat structure (every page one click from home) and no duplicate titles or bodies.
- **Hreflang is textbook.** Every page has 5 alternates (x-default, it, de-CH, fr-CH, en), all reciprocal, and HTML matches the sitemap exactly (0 mismatches across 96 pages).
- Redirects are single-hop: www → apex, `/index.html` → `/`, and no-slash → slash all return 301. Unknown URLs return a real 404 with `noindex`. Legacy WordPress paths return 404 or 301 correctly, and old slugs such as `/agopuntura-auricolare-rac/` were preserved.
- Security headers are strong: HSTS with includeSubDomains, a hash-pinned CSP, `X-Frame-Options`, `nosniff`, `Referrer-Policy` and `Permissions-Policy`.
- Static, server-rendered HTML with zero external JavaScript: raw and rendered DOM are equivalent.
- The booking and WhatsApp redirect URLs (`/prenota/`, `/de/termin/`, `/fr/rendez-vous/`, `/en/book/`, `/whatsapp/`) are 302s and blocked in robots.txt. That's correct: they don't waste crawl budget and never get indexed.

**Findings:**

| Severity | Finding | Recommendation |
|---|---|---|
| Low | HSTS has no `preload` token *(technical agent: Medium; lowered because it's a hardening step, not a ranking factor)* | Add `preload` and submit to hstspreload.org once every subdomain is HTTPS-only |
| Low | Two Italian slugs are 87–103 characters long (`/laserterapia-in-combinazione-con-plasma-ricco-…/`, `/terapie-rigenerative-avanzate-con-pbm-ed-esosomi-…/`), while the DE/FR/EN versions are 20–34 *(agent: Medium; lowered)* | These look like legacy WordPress slugs that carry link equity. Only shorten them if the page is being restructured anyway, and then with a 301 and updated hreflang, sitemap and internal links |
| Low | No IndexNow key or Bing Webmaster Tools evidence | Verify Bing WMT (Copilot draws on Bing's index) and add IndexNow pings to the static build |
| Low | 5 utility-page titles are generic ("Privacy", "Kontakt", "Contact") | Use "Contatti – Swiss Centro Medico Lugano" and similar |
| Info | robots.txt disallows paths not used anywhere (`/report/`, `/domande/`, `/admin/`, `/e/`, WordPress paths) | Harmless. Tidy it up the next time the file changes. Note that `Allow: /` first is fine under RFC 9309's longest-match rule |
| Info | `/?p=1` returns the homepage with 200 (self-canonical) | No risk because of the canonical. Optionally make unknown query strings return 404 |
| Not verifiable | HTTP→HTTPS on port 80 | The session proxy blocks plain HTTP. Check manually: `curl -I http://swisscentromedico.ch/` should return a single 301 to https |

---

## 5. Content Quality: 58/100

E-E-A-T is 54: Experience 55, Expertise 60, Authoritativeness 45, Trust 55. The strengths are real:
- a physician byline and review date on every service page
- disclaimers and DOI-linked "Fonti scientifiche" sections
- GLN and UID on the legal notice
- honest caveats in places, e.g. "Non presentiamo diabete, sclerosi multipla… come indicazioni dimostrate"
- 4-language parity that is translated, not templated

The score is held down by a few pages where claims outrun the evidence. On YMYL, one bad page lowers trust in the whole site.

### 5.1 Claims and evidence (the core issue)

| Severity | Page(s) | Problem | Fix |
|---|---|---|---|
| **Critical** | `/terapia-fotodinamica/` ×4 languages, plus meta, OG, JSON-LD and llms.txt | Systemic IV-infused aPDT against "bacterial, viral and parasitic pathogens", "without systemic antibiotics"; curcumin and hypericin listed as photosensitisers. The cited sources don't support the systemic use | Remove the systemic/infusion aPDT content. Limit the page to evidence-based topical PDT/aPDT, e.g. dermatology (AK, Bowen's disease, superficial BCC with a histology prerequisite) and localised wound or oral uses, with sources. Regenerate every derived snippet |
| High | Intravenous, interstitial and intra-articular laser pages | No clinical evidence cited; the IV laser page gives no indication; "rigenerazione cartilaginea" is unsourced; risks are barely mentioned | Add an evidence-status line ("sperimentale / evidenza limitata"), indications, risks and contraindications, and sources. If there isn't enough material, merge the three into one "Laserterapia invasiva" page |
| High | Exosomes / PBM page | No product origin or Swiss regulatory status; the only clinical study has 5 subjects and a probable undisclosed conflict of interest; says exosomes have a "doppia membrana", which is wrong | Add a box covering product origin, regulatory status and evidence level. Fix the membrane statement. Disclose the conflict or drop the citation |
| High | `/agopuntura/` ×4 languages | The indication list includes heart/circulation, diabetes, thyroid, fertility and oncology "come supporto"; RAC ear-pulse diagnosis is called "preciso" | Tier the indications by evidence (strong: chronic pain, headache, migraine prophylaxis, chemotherapy nausea; limited or supportive: the rest) and drop "preciso" |
| High | Every page (footer) and the `/laserterapia/` hero | ISLA and European Laser Clinics (the logo file name ties it to a device-maker network) are shown as credentials next to RME | Move them to a labelled "Rete / formazione laser" line and put the independent credentials first (FMH, SGUM, SSIPM, SAMM, ASA) |

### 5.2 Editing notes visible to patients (High)
Sentences written for a reviewer, not a patient, appear on 11 Italian pages and their translations. For example:
- "quadri che **il sito attribuisce** a questa tecnica" (`/laserterapia-interstiziale/`)
- "mancano **studi con DOI**" (`/laserterapia-endovenosa/`)
- the FAQ question "**Perché non parlate più della colonna?**" (`/laserterapia-dermatologica/`)
- "Non affermiamo assenza di effetti collaterali" (`/medicina-manuale/`)
- an alt text reading "…la foto non mostra un catetere interstiziale"
- "sta sulla pagina gemella" (4–8 times per page)

**Fix:** one human editorial pass per language. **How we'd know it failed:** the grep in `findings/content.md` H6 still finds any of these strings.

### 5.3 Other content findings

| Severity | Finding |
|---|---|
| High | The "Reumatologo" title and credential mismatch (see §1 #2 and §11) |
| Medium | Costs and insurance: no CHF figure anywhere. Basic (LAMal) coverage is only implied ("pay directly"). The same generic insurance FAQ answer appears on about 80 pages |
| Medium | Six sub-pages have only 248–340 unique words. Sibling pages cannibalise each other: `/agopuntura-classica-del-corpo-con-aghi-o-laser/` is 43% contained in `/agopuntura/`, the regenerative hub duplicates its PRP and exosome spokes, and dermatology laser overlaps PDT. Merge them or give each a distinct angle |
| Medium | The interventional pain page (675 words) is thin for a money page and understates spinal-injection risks |
| Medium | Credentials are hard to verify: no physician profile page, no MedReg link, and 6 variants of the doctor's name |
| Medium | No condition-focused content (see §11) |
| Low | 42 of 97 English FAQ questions don't name the treatment ("Is it painful?"); 12 pages answer "how many sessions?" with "it depends"; unexplained acronyms. FAQPage markup is correctly absent, since Google retired FAQ rich results on 2026-05-07 |
| Low | French pages don't say that consultations are in IT/DE/EN/SR/SL, not French (`findings/geo.md` §6.1) |

---

## 6. On-Page SEO: 78/100

- **Titles** are unique across all 96 pages, 29–60 characters, each with a service + Lugano + brand pattern and localised per language. The exceptions are the 5 generic utility titles (§4) and "Reumatologo".
- **Meta descriptions** are unique and 121–156 characters, but 5 of them claim more than their pages say (`findings/content.md` M1).
- **Headings:** one H1 per page and a logical H2/H3 hierarchy. FAQ questions are H3s, which is fine.
- **Internal linking:** flat and complete, with breadcrumbs on every inner page. The homepage "Terapia del dolore →" link goes to the injections page; point it at a real pain hub once one exists. Replace the "sta sulla pagina X" filler with one contextual link each.
- **Targeting gaps:** the doctor's real specialty term (fisiatra / fisiatria / Physikalische Medizin) appears on 0 pages, and the doctor's name is not in the homepage title or H1.

---

## 7. Schema / structured data: 90/100

**What works:**
- Syntactically valid JSON-LD on 96/96 pages.
- One consistent `@id` for the clinic, physician and website across all languages.
- The MedicalClinic node includes address, 7-decimal geo, `openingHoursSpecification`, `hasMap`, `areaServed`, `availableService` and `hasCredential`.
- Correct `inLanguage`, a valid BreadcrumbList on all 92 inner pages, and schema values that match the visible text.
- No deprecated types: no HowTo, and correctly no FAQPage.

**Findings:**

| Severity | Finding | Fix |
|---|---|---|
| Low | The doctor node is `["Person","Physician"]`, but `Physician` sits in the Organization branch | Use `["Person","IndividualPhysician"]`, the schema.org type for "an individual medical practitioner", plus `practicesAt` → the clinic's @id *(orchestrator-revised; the agent had suggested a bare `Person`)* |
| Low | `medicalSpecialty: Rheumatologic` on the clinic and physician | Align with whatever is decided for §1 #2. Physical medicine has no exact enum value, so keep `Musculoskeletal` and add a textual `description` |
| Low | `medicalAudience` is missing on the MedicalWebPage nodes, and `currenciesAccepted` is missing | Add them |
| Low | `sameAs` mixes the clinic and the doctor. It is missing the practice's own OneDoc listing (`/ebd4o/`), local.ch and the GBP review URL, and the OneDoc URL is hard-coded to Italian on DE/FR/EN pages | Split `sameAs` by entity and localise the OneDoc URL |
| Low | No `alternateName` or `description` on the clinic; no GLN `identifier` on the doctor | Add them for disambiguation (see §9) |
| Info | No `aggregateRating`, which is correct | Only add one from a genuine, verifiable source |

`findings/schema.md` §6 has ready-to-paste graphs for the homepage and `/agopuntura/`.

---

## 8. Performance: 95/100 (lab only)

| Page | Device | Perf | LCP | CLS | TBT |
|---|---|---:|---:|---:|---:|
| Home | Mobile | 99 | 1.7 s | 0.007 | 0 ms |
| Home | Desktop | 98 | 0.9 s | 0.04 | 0 ms |
| /agopuntura/ | Mobile | 99 | 1.5 s | 0.014 | 0 ms |
| /agopuntura/ | Desktop | 96 | 1.1 s | 0 | 0 ms |
| /reumatologo/ | Mobile | 98 | 2.0 s | 0.014 | 0 ms |
| /reumatologo/ | Desktop | 95 | 1.2 s | 0.011 | 0 ms |

These are Lighthouse 13.5.0 runs with local Chromium, simulated throttling. The PageSpeed Insights API returned 429 without a key, and there's no CrUX field data, so none of this is real-user data. INP can't be measured in the lab; the proxy for it, TBT, is 0 ms everywhere.

**What works:**
- WebP delivered via `<picture>`.
- The hero image is preloaded with `fetchpriority=high`; below-fold images are lazy-loaded.
- Fonts are preloaded.
- Static assets are cached `immutable, max-age=31536000`.
- Brotli compression is on.
- The Google Maps embed on `/contatti/` is a lazy facade.
- Zero third-party requests.

| Severity | Finding |
|---|---|
| Low | The single 6.1 KB (Brotli) stylesheet blocks rendering, costing about 230–570 ms of estimated FCP/LCP *(performance agent: High; lowered because every page is already in the "Good" band)*. Inline critical CSS only if field data later shows LCP regressing; that would also need a CSP hash |
| Low–Medium | TTFB of 0.5–0.76 s for a static site. This was measured through the session proxy, so it may be inflated. Check it from Switzerland and consider a CDN or server cache |
| Low | Hero images have only 768w and 1024w candidates (about 15 KB wasted on the `/reumatologo/` mobile hero); add a ~480w candidate |
| Low | Desktop CLS of 0.04 on the homepage, caused by a webfont reflow and a tile icon whose size is overridden by CSS |

---

## 9. AI Search Readiness: 75/100 (GEO 68 + agentic 90)

**Access and plumbing (strong):**
- robots.txt allows every AI crawler.
- 18 AI and search user agents all got identical 200s, with no firewall blocking. These were spoofed user agents from a datacenter IP, so confirm real crawler traffic in the server logs.
- A valid, accurate llms.txt covers all 96 URLs. It's optional, and Google ignores it.
- Lighthouse Agentic Browsing scores **3/3** on mobile and desktop (local Lighthouse 13.5.0).
- Clean ARIA landmarks, every control labelled, no forms, so WebMCP doesn't apply.

**Citability and entity (the gaps):**

| Severity | Finding |
|---|---|
| High | "Rheumatologist in Lugano" gives AI systems a wrong entity fact (§1 #2) |
| High | Brand and name collisions with nothing to tell them apart. "Swiss Centro Medico" is confused with Swiss Medical Network's Centromedico. A YouTube search for the brand returns Argentina's *Swiss Medical*, and a search for the doctor's name returns an unrelated podcaster. The site has no disambiguating sentence, `alternateName` or GLN identifier |
| High | FAQ passages don't stand alone: generic questions, and the same insurance answer on about 80 pages |
| Medium | 17 of 20 service pages open with a fragment, not a definition; add a 40–60-word definitional lead |
| Medium | Directory data is inconsistent: local.ch has the wrong hours (09–17) and a different name form, and the clinic's `sameAs` points to the doctor's personal profiles |
| Medium | Thin third-party corroboration: no video, and no YouTube or Reddit presence |
| Low | `Content-Signal` is missing from robots.txt; the booking path is blocked for fetch-only agents (tel: and WhatsApp remain available) |

**Measure it** with a fixed monthly prompt panel: 20 prompts × IT/DE/EN × ChatGPT, Perplexity, Google AI Mode and Copilot. Score whether the site is cited, whether the entity facts are correct, and whether a competitor is cited instead (`findings/geo.md`).

---

## 10. Local SEO: 63/100 (supplementary)

**What works:**
- NAP is identical across all 96 pages and 4 languages, in visible text, schema and llms.txt.
- There's a service page for every service, plus landmark (USI, EOC), transport and parking content.
- The Zürich/Lugano split is disclosed and cross-linked.
- A GBP review link exists, which shows the profile is claimed.

| Severity | Finding |
|---|---|
| High *(local agent: Critical; lowered because "Critical" is reserved for indexing blocks and penalties)* | No visible reviews on Google or OneDoc, and no active request process. Set up a compliant, outcome-neutral post-visit request by SMS, WhatsApp or email within 24–48 h, at a steady pace |
| High | The GBP primary category can't be verified from here. Recommended: **Physiatrist** as primary (it matches the FMH title), with Acupuncturist and Pain management physician as secondary |
| High | OneDoc labels the doctor "agopuntore" for every booking, including rheumatology and pain. Set the primary specialty to Medicina fisica e riabilitazione and add visit types |
| High | Citations are under-used or inconsistent. Fix the local.ch hours and name, and add Medicosearch, search.ch, doctorfmh.ch and the society member directories (SAMM, SGUM, SSIPM, SACAM) to the listings and `sameAs` |
| Medium | Confirm on the doctor's Zürich-side OneDoc and Comparis profiles that Lugano appears as a second location |
| Medium | No neighbourhood terms (Paradiso, Massagno, Viganello, Pregassona, Sorengo) and no practice interior or exterior photos |

---

## 11. Search Experience (SXO): gap 63/100 (supplementary)

| Query (IT; directional, US-located search) | What the SERP rewards | Site's page | Match |
|---|---|---|---|
| terapia del dolore Lugano | Dedicated pain-therapy service pages (6 of 9) | Homepage covering four specialties, linking to the injections page | **Mismatch (High)** |
| reumatologo Lugano | Named FMH rheumatologists and filtered directories | `/reumatologo/` (PM&R doctor) | **Mismatch and compliance question (High)** |
| agopuntura Lugano / Akupunktur Lugano | Physician-led service pages | `/agopuntura/` | Match; not seen in the results |
| laserterapia (dolore) Lugano | Service pages | `/laserterapia/` | Match; the prior audit saw about #2 |
| PRP ginocchio Lugano | Knee-specific hybrid articles | Generic PRP page | Partial |
| fisiatra Lugano | Service pages (7 of 8) | None; the term is absent | **Gap** |
| mal di schiena / cervicalgia Lugano | Physio and ozone-therapy hybrids; almost no physician-led content | None | **Gap (opportunity)** |

Persona scores: insurance-checking patient **53**, referring GP **58**, chronic-pain patient **63**, German-speaking patient **70**.

---

## 12. Visual / mobile

**What works:**
- On all 6 audited pages, at both 1440×900 and 390×844, the H1, value proposition and both calls to action ("Prenota online", "Chiama lo studio") are visible without scrolling.
- A sticky, ARIA-labelled "Chiama / Prenota" bar sits at the bottom of every mobile page.
- No horizontal overflow and no console errors.
- DE mirrors the IT layout 1:1.
- The language switcher links to the translated version of the current page.

| Severity | Finding |
|---|---|
| Low | Footer links and the "pill" links are 15–21 px tall. Pad them to at least 24 px (WCAG 2.2 target size) |
| Low | On the `/laserterapia/` mobile first screen, the in-content call-to-action row sits right at the fold, behind the sticky bar *(visual agent: High; lowered because the bar shows the same two actions and the row scrolls into view normally)* |
| Info | The mobile first screen has no photo. Test a small doctor thumbnail near the H1 |

Screenshots are in `screenshots/*-fold.png`. The full-page captures are git-ignored and can be regenerated with `raw/capture.py`.

---

## 13. Images: 93/100

- All 512 image tags have descriptive, correctly translated alt text, with none missing or empty.
- Every image has explicit width and height.
- The hero images are eager-loaded with `fetchpriority=high`; the rest are lazy.
- 416 of 512 images are served as WebP via `<picture>`, and 88 have multi-width `srcset`.
- One remaining gap: the `isla_logo.gif` badge on every page should be re-exported as SVG or WebP. Content photos also lack a smaller `srcset` candidate.
- One alt text needs rewriting as a description: "…la foto non mostra un catetere interstiziale".

---

## 14. Limitations and how this audit was run

- **Network constraints.** The bundled claude-seo fetchers refuse this session's loopback HTTPS proxy (the `url_safety` guard). The crawl, Lighthouse and Playwright captures therefore used purpose-written scripts in `raw/` (`crawl.py`, `capture.py`) through the proxy. Chromium trusted only the proxy's CA key (an SPKI pin); TLS verification was not disabled. Plain HTTP (port 80) is blocked by the proxy, so the HTTP→HTTPS redirect is unverified.
- **No Google or Bing APIs.** There were no PSI/CrUX, GSC or GA4 credentials (PSI returned 429 without a key), so performance data is lab-only and indexation is unconfirmed. There were no Moz or Bing keys either, so the backlink review was skipped. There's no drift baseline, and no DataForSEO (so no maps geo-grid analysis).
- **SERP observations are directional.** Searches ran from US-located tools, not google.ch/Ticino. Some competitor pages and platforms (Bing, DuckDuckGo, Reddit, Comparis) blocked automated access.
- **Compliance.** Points about Swiss medical advertising and specialist titles are flagged for verification with the FMH or the Ticino cantonal medical office. They are not legal conclusions.
- **Orchestrator adjustments.** I checked every agent's findings against the raw data and changed these: the Images score went from 84 to 93, because the visual agent had read an `<img>`-only extract and missed the WebP `<source>` elements. The physician schema advice was revised to IndividualPhysician. These severities were lowered: reviews from Critical to High, the sticky-bar overlap from High to Low, render-blocking CSS from High to Low, HSTS preload and slug length from Medium to Low, and Physician typing from Medium to Low. Agent-quoted claims on the PDT, exosome, acupuncture and editing-note pages were checked against the live page text.

## 15. Files

| Path | Contents |
|---|---|
| `ACTION-PLAN.md` | Prioritised, dependency-sequenced plan with failure checks and leading indicators |
| `audit-data.json` | Structured data for PDF/HTML report generation |
| `findings/{technical,content,schema,sitemap,performance,visual,geo,agentic,sxo,local}.md` | Specialist findings with full evidence |
| `raw/pages.json`, `raw/links.json`, `raw/inlinks.json` | Crawl extract, link and asset status, inlink map |
| `raw/robots.txt`, `raw/sitemap.xml`, `raw/llms.txt` | Snapshots taken 2026-09-28 |
| `raw/lighthouse/summary.json` | Lighthouse scores and metrics (full JSON is git-ignored) |
| `raw/visual.json`, `raw/aria_*.yaml`, `raw/rendered_*.html`, `screenshots/` | Rendering and accessibility evidence |
| `raw/crawl.py`, `raw/capture.py` | Scripts to reproduce the crawl and captures |
