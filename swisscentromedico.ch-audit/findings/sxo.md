# SXO findings: swisscentromedico.ch

- **Date:** 2026-09-28
- **Scope:** Search Experience Optimization (SERP page-type analysis, intent match, user stories, persona scoring, page-type mismatches). Other lanes (technical, schema, local/GBP, E-E-A-T depth) are covered by the parallel audit.
- **Inputs:** `raw/pages.json` (96 URLs: 24 per language), `raw/visual.json` (above-fold CTAs, tap targets), `raw/links.json` (booking redirects), mobile fold screenshots (home, agopuntura, reumatologo, contatti, de-home), 14 WebSearch queries (IT/DE).
- **Score label:** the **SXO Gap Score** below is separate from the SEO Health Score.

> **Method note.** SERP observations are **directional**. The search tool runs from the US, not google.ch with it-CH/de-CH Ticino localisation. It returns organic titles, URLs and snippets only: no local pack, People Also Ask, ads, AI Overview or related searches. Competitor pages could not be fetched (network egress blocked), so they are classified from title, URL and snippet only. Question-style queries (for example "agopuntura rimborsata LAMal", "PRP ginocchio costo") stand in for PAA.

---

## 1. Verdict (lead finding)

**The page types are mostly right, but the mapping from query to page is not.** Every URL is a physician-led Service Page with a strong local block (NAP, hours, map and "A Lugano, a due passi da USI e EOC" on all 24 IT pages). That matches what the SERP rewards for *agopuntura Lugano*, *laserterapia Lugano* and *Akupunktur Lugano*. The gaps come from which page answers which query, and from what the page leaves out:

1. **HIGH mismatch: `terapia del dolore Lugano`.** 6 of 9 results are dedicated pain-therapy service pages (EOC, Moncucco, Radiologia al Parco, MC Sorengo, Lugano Care, Rehamedica). The site has no such page. The homepage carries the query as a four-specialty hub, and its "Terapia del dolore →" link (133×16 px on mobile) goes to `/terapia-interventistica-del-dolore/`. That page is a 675-word injections page with the H1 "Interventistica del dolore Lugano", a phrase patients don't search for.
2. **HIGH mismatch: `reumatologo Lugano` → `/reumatologo/`.** This is a "find a named specialist" query. 4 of 8 relevant results are physician profile pages (EOC, Swiss Medical Network, Moncucco, OneDoc), and 2 are directories filtered by FMH specialty (OneDoc, Comparis). The page's H1 is "Reumatologo a Lugano", but its byline and FAQ state **FMH Medicina fisica e riabilitazione**, and the schema declares `medicalSpecialty: Rheumatologic`. That creates a trust gap for patients and GPs. It may also be an advertising-compliance question for the client (not assessed here).
3. **Missing layers the SERP rewards:**
   - **Condition pages.** `mal di schiena`, `cervicalgia` and `ernia del disco` + Lugano are dominated by physiotherapy and ozone-therapy hybrid articles. Physician-led content is almost absent.
   - **Cost and insurance transparency.** Insurer pages and a competitor article ("non sempre serve un'assicurazione complementare") rank for reimbursement questions. The site has no CHF figure anywhere, and tells basic-insurance-only patients they "pay directly", with no explanation.
   - **The doctor's actual specialty term.** "fisiatra/fisiatria" appears on 0 pages, while `fisiatra Lugano` returns 7 of 8 service pages.

**SXO Gap Score (homepage vs "terapia del dolore Lugano"): 63/100.** Weighted persona score: **~61/100** (weakest persona: insurance-checking patient, 53/100).

---

## 2. SERP page-type analysis per query (directional)

Types follow `page-type-taxonomy.md`. "Physician profile" and "Directory" are sub-labels of **Local**. Off-topic results (Wikipedia, veterinary, German "Tessin bei Rostock") are excluded from consensus.

### 2.1 `terapia del dolore Lugano` (IT). Site: not in results

| # | Result | Type |
|---|---|---|
| 1 | eoc.ch pain-management (hospital dept) | Service |
| 2 | eoc.ch Dr. M. Greco, "specialista in terapia del dolore a Lugano" | Local (physician profile) |
| 3 | moncucco.ch terapia_del_dolore | Service |
| 4 | radiologiaalparco.ch/terapia-del-dolore/ "Terapia del Dolore a Lugano – Centro Specializzato" | Service |
| 5 | mcsorengo.ch pain-management | Service |
| 6 | rehamedica.ch "Terapia del Dolore: cos'è e dove farla a Lugano e Bellinzona" | Hybrid |
| 7 | luganocare.com anestesiologia-terapia-del-dolore | Service |
| 8 | logmedica.ch homepage "Ortopedia, Traumatologia e Terapia del Dolore" | Service (hub) |
| 9 | logmedica.ch "Medicina del Dolore: Soluzioni Avanzate…" | Hybrid (article) |

**Consensus:** Service Page 6/9 (67%), Hybrid 2/9, physician profile 1/9. Nearly every winner is a page dedicated to "terapia del dolore", usually from a multi-specialist institution. Hybrid winners use "cos'è + dove farla" framing.

### 2.2 `agopuntura Lugano` (IT). Site: not in results

| # | Result | Type |
|---|---|---|
| 1 | eoc.ch medicina cinese e agopuntura | Service (hospital) |
| 2 | agopunturavaleria.ch/agopuntura-lugano | Service (non-physician) |
| 3 | titratto.ch/agopuntura-lugano/ | Service |
| 4 | agopunturavaleria.ch (home) | Service/Local |
| 5 | drbellwald.ch "Agopuntura Lugano Medicina Cinese Dr. med." | Service (physician practice) |
| 6 | agopuntura-posturologia-lugano.ch (Dr. Wollmann) | Service |
| 7 | dr-med-anja-stamm.ch agopuntura page (FMH) | Service (physician) |
| 8 | rehamedica.ch "Agopuntura: cos'è, benefici e dove farla" | Hybrid |
| 9 | julianrottmann.com studio-di-agopuntura-lugano | Service |

**Consensus:** Service Page 8/9 (89%), mostly **single-practitioner sites**. Snippets stress "recognized by health insurance companies" (Bellwald).

### 2.3 `reumatologo Lugano` (IT). Site: not in results

| # | Result | Type |
|---|---|---|
| 1 | eoc.ch Dr. N. Marcoli "reumatologo a Lugano" | Local (physician profile) |
| 2 | onedoc.ch rheumatologist/lugano | Local (directory, FMH-filtered) |
| 3 | onedoc.ch Dr. M. Fedeli "reumatologo a Lugano" | Local (physician profile, bookable) |
| 4 | swissmedical.net Dr. I. Salani | Local (physician profile) |
| 5 | moncucco.ch reumatologia | Service (dept) |
| 6 | comparis.ch rheumatologists Lugano | Local (directory) |
| 7 | moncucco.ch Dr. Fedeli | Local (physician profile) |
| 8 | eoc.ch rheumatology | Service (dept) |

**Consensus:** physician profile 4/8 (50%), directory 2/8 (25%), hospital service 2/8 (25%). The query names a *person with a specialist title*, so Google rewards named FMH-rheumatologist profile pages.

### 2.4 `laserterapia Lugano` (IT) and `laserterapia dolore Lugano`

`laserterapia Lugano`: Service 7/9 (78%), but **intent is split**:
- Aesthetic, 3/9: guidaestetica.it directory, estetica-lugano.ch epilazione laser, lacliniqueofswitzerland.ch CO2
- Physio/pain, 4/9: Rehability Laserix, Ti-Fisio, Kinetic Center ×2
- Dental, 1/9: Studio Dotesio
- Directory, 1/9: local.ch

`laserterapia dolore Lugano`: the site ranks **~#2 with the homepage, not `/laserterapia/`**. Also ranking: local.ch, HLife Clinic `/servizi/laser.html` + homepage, Ti-Fisio ×2, Rehability, Kinetic ×2, Dotesio. The snippet Google shows for the site leads with RME certification.

### 2.5 `PRP ginocchio Lugano` (IT). Site: not in results

| Type | Results |
|---|---|
| Hybrid/article with local CTA (5/8, 63%) | logmedica.ch tag archive "PRP ginocchio", logmedica "Medicina rigenerativa: applicazioni ortopediche", logmedica "Infiltrazioni PRP: cosa dice la scienza", logmedica "dolore cronico", swissproage.ch "PRP Angel… patologie ortopediche" |
| Service (2/8) | dariogiunchi.ch knee specialist, luganocare.com "Terapie strumentali, Tecar, PRP" |
| Hospital patient info (1/8) | eoc.ch "Protesi al ginocchio" (mentions PRP, hyaluronic acid or cortisone depending on degree of wear) |

A proxy query, `infiltrazioni PRP ginocchio costo`, is dominated by Italian sites showing € price ranges ("200–400 € per seduta", "Quanto costano le infiltrazioni al ginocchio?"). Price is a live question.

### 2.6 `medicina rigenerativa Lugano` (IT). Site: not in results

Mixed intent. Service 3/9 (Logmedica, HLife Clinic homepage, lucaborra.ch plastic surgeon). Hybrid/blog/news 5/9 (laRegione, ticinowelcome interview, Logmedica artrosi article, SwissProAge ×2). Research institute 1/9 (sscf.ch). The results split into **orthopaedic/pain** (Logmedica, SwissProAge, HLife) and **aesthetic/longevity** (Borra, Malacco).

### 2.7 `fisiatra Lugano` (IT, the doctor's FMH specialty)

Service 7/8: HLife `/servizi/fisiatria.html`, Rehamedica (×2), Rehability fisiatria, fisioterapialugano.ch, artefisio.ch, Studio Medico Schütz, Moncucco fisioterapia. **The site has no page for this, and the term appears 0 times.**

### 2.8 Condition queries: `mal di schiena Lugano specialista`, `cervicalgia Lugano cura`, `infiltrazione ernia del disco Lugano`

Hybrid/blog around 70%, mostly physiotherapy content marketing: Ti-Fisio magazine ×3, fisioterapialugano.ch ×3, Polispecialistico Paradiso ×2, terapiaozono.ch ×3, Logmedica. Other results: a surgeon guide (aldo-sinigaglia.it), the EOC "Ernia del disco" patient page, and luganocare.com "Operazione ernia del disco come evitare con infiltrazioni eco-guidate". **Physician-led conservative pain content from a Lugano practice is almost absent, which leaves an open slot.**

### 2.9 German: `Akupunktur Lugano`, `Schmerztherapie Lugano`, `Schmerztherapie Tessin`

- **Akupunktur Lugano:**
  - Directories 4/9 (44%): search.ch, local.ch ×2, akupunkturvergleich.ch "Offerten & **Bewertungen**"
  - Practitioner service pages 5/9 (56%): Wollmann DE, Aurora De Filippo, Sinomedica, Dr. Stamm DE, Dr. Jost DE
  - The Stamm snippet says her acupuncture is **covered by basic insurance (LaMal)**.
- **Schmerztherapie Lugano:** a thin SERP. It has swissmedical.net pain therapy, a cannaviva.ch article "Schmerztherapie Lugano 2025" and Dr. Stamm orthopaedics; the rest is off-location (LUKS, Hirslanden Aarau, veterinary). No strong local German-language pain page exists.
- **Schmerztherapie Tessin:** polluted by Tessin bei Rostock (DE). Relevant results are local.ch and an Ars Medica advertorial only.

### 2.10 Brand check: `Swiss Centro Medico Lugano Djordjevic`

The OneDoc practice listing, local.ch and EMR rank above the site, which is not in the first 10. Swiss Medical Network "Centromedico" and the SBB "Centro medico – Stazione Lugano" still compete for the name. This confirms the prior audit (section 2.3). It's handled in the local/entity lane.

---

## 3. Page-type match per target URL

| Target URL | Primary query | SERP dominant type (confidence) | Target page type | Mismatch |
|---|---|---|---|---|
| `/` | terapia del dolore Lugano | Dedicated pain Service Page (67%) | Hub (Service + Local) for 4 specialties; pain is 1 of 3 cards | **HIGH** |
| `/terapia-interventistica-del-dolore/` | terapia del dolore Lugano | Service (67%) | Service page scoped to injections only; H1 "Interventistica del dolore Lugano"; 675 words; no content images | **MEDIUM** (sub-scope, jargon H1) |
| `/agopuntura/` | agopuntura Lugano | Service (89%) | Service + Hybrid depth (1,478 words, Cochrane data, 8 FAQs, insurance, Visana RCC) | **ALIGNED** |
| `/reumatologo/` | reumatologo Lugano | Physician profile/directory (75%) | Service page; H1 claims "Reumatologo", credential is FMH PM&R; no photo | **HIGH** |
| `/laserterapia/` | laserterapia Lugano | Service (78%), intent split aesthetic/physio/dental | Service (medical pain + dermatology + PDT) | **MEDIUM** (intent disambiguation; homepage outranks it for "laserterapia dolore") |
| `/il-plasma-ricco-di-piastrine-o-trombociti-prp/` | PRP ginocchio Lugano | Hybrid article (63%) | Generic "PRP per articolazioni e tendini" service page; knee is one H3 | **MEDIUM** |
| `/medicina-rigenerativa/` | medicina rigenerativa Lugano | Mixed: Hybrid/news 56%, Service 33%; ortho vs aesthetic | Service/Hybrid mixing orthopaedic and aesthetic (skin, hair, exosomes) | **MEDIUM** |
| `/de/akupunktur/` | Akupunktur Lugano | Practitioner Service 56% / directories 44% | Service (German translation of `/agopuntura/`) | **ALIGNED** (review gap) |
| `/de/` | Schmerztherapie Lugano | No dominant local page (thin SERP) | Hub | **ALIGNED**, open opportunity |
| *(none)* | fisiatra Lugano | Service (88%) | No page; term absent | **Missing page** |
| *(none)* | mal di schiena / cervicalgia / ernia del disco + Lugano | Hybrid/blog (~70%) | No condition pages; terms only as bullets inside `/reumatologo/` and `/agopuntura/` | **Missing layer** |

---

## 4. SXO Gap Score

### 4.1 Homepage vs `terapia del dolore Lugano`: **63/100**

| Dimension | Score | Evidence |
|---|---|---|
| Page Type | 7/15 | SERP wants a dedicated pain page. The homepage is a hub: H1 "Terapia del Dolore, Agopuntura e Laserterapia a Lugano", with the pain card sharing space with Agopuntura and Reumatologia. |
| Content Depth | 7/15 | 667 words in total. The pain section is 4 bullets. No "cos'è la terapia del dolore", no condition list for pain, no pain-specific process. |
| UX Signals | 12/15 | H1 and "Prenota online" / "Chiama lo studio" above the fold on mobile, with a sticky Chiama/Prenota bar. No third-party requests, and 6 tel: links. Minus: the pain entry link "Terapia del dolore →" is 133×16 px (below the 24 px target size). |
| Schema | 12/15 | MedicalWebPage, MedicalClinic, Physician with credentials, openingHoursSpecification, geo, `lastReviewed`. Minus: `medicalSpecialty: Rheumatologic` doesn't match the FMH title. Details are for the schema lane. |
| Media | 8/15 | A doctor photo exists (in the "Chi sono" section, below the fold), plus service icons and a map. No practice/room photos and no video. |
| Authority | 8/15 | FMH, SSIPM, SGUM, SAMM, ASA, RME and Visana are all stated. No visible rating or reviews. OneDoc outranks the site for its own brand. |
| Freshness | 9/10 | `dateModified` 2026-09-21, and service pages show "aggiornata il 18/20 settembre 2026". |

### 4.2 Key pages (same rubric)

| Page (query) | Type | Depth | UX | Schema | Media | Authority | Fresh | **Total** |
|---|---|---|---|---|---|---|---|---|
| `/agopuntura/` (agopuntura Lugano) | 14 | 14 | 12 | 12 | 7 | 9 | 9 | **77** |
| `/de/akupunktur/` (Akupunktur Lugano) | 13 | 14 | 12 | 12 | 7 | 7 | 9 | **74** |
| `/laserterapia/` (laserterapia Lugano) | 11 | 13 | 12 | 12 | 7 | 8 | 9 | **72** |
| `/medicina-rigenerativa/` (medicina rigenerativa Lugano) | 10 | 12 | 12 | 12 | 7 | 7 | 9 | **69** |
| PRP page (PRP ginocchio Lugano) | 8 | 10 | 12 | 12 | 6 | 8 | 9 | **65** |
| `/reumatologo/` (reumatologo Lugano) | 6 | 13 | 12 | 10 | 4 | 7 | 9 | **61** |
| `/terapia-interventistica-del-dolore/` (terapia del dolore Lugano) | 8 | 7 | 12 | 12 | 4 | 8 | 9 | **60** |

`/reumatologo/` and `/terapia-interventistica-del-dolore/` have **no content images at all** (logos and the map only). The pages the SERP judges most on trust carry the least visual proof.

---

## 5. User stories (SERP-derived)

1. **Awareness → consideration. Chronic back-pain patient.**
   As a Lugano resident with sciatica for three months, I want to know whether a physician can treat it without surgery, because I'm afraid of an operation. But I'm blocked by an **information gap**: no page on the site starts from "mal di schiena / ernia del disco", so I only find physiotherapy and ozone articles.
   *Signals:* `mal di schiena Lugano specialista`, `cervicalgia Lugano cura` and `infiltrazione ernia del disco Lugano` SERPs are ~70% physio/ozone hybrids. luganocare ranks with "come evitare [l'operazione] con infiltrazioni eco-guidate". Site: "sciatica" 0 pages, "mal di schiena" 1 page (a bullet on `/reumatologo/`).

2. **Consideration. Insurance-checking patient.**
   As a patient with basic LAMal only, I want to know what I'll pay before I book, because I've read that acupuncture by a doctor is covered by basic insurance. But I'm blocked by **price sensitivity**: the site says basic-only patients "ricevono in visita un preventivo e pagano direttamente", with no CHF figure and no explanation.
   *Signals:* the Dr. Stamm snippet (acupuncture "covered by basic insurance (LaMal)"). drbellwald.ch "Agopuntura e casse malati: non sempre serve un'assicurazione complementare". KPT, Atupri, ÖKK and SACAM reimbursement pages in the SERP. € price ranges in the `PRP ginocchio costo` SERP.

3. **Decision. Patient told by the GP to "see a rheumatologist".**
   As someone with swollen joints whose GP said "vada da un reumatologo", I want to book an FMH rheumatologist in Lugano, because I suspect arthritis. But I'm blocked by a **trust gap**: the H1 says "Reumatologo a Lugano" and the byline says "Specialista in Medicina Fisica e Riabilitazione FMH".
   *Signals:* 6 of 8 `reumatologo Lugano` results are FMH-rheumatologist profiles or FMH-filtered directories.

4. **Consideration. German-speaking Swiss patient (resident, second home or holiday in Ticino).**
   As a German speaker spending time in Lugano, I want acupuncture from a doctor who speaks German and whom others rate well, because I don't know the local scene. But I'm blocked by a **trust gap**: the German SERP is led by directories with "Bewertungen", and the site shows none.
   *Signals:* akupunkturvergleich.ch "Offerten & Bewertungen", local.ch and search.ch in the `Akupunktur Lugano` top 4. Dr. Stamm, Dr. Jost and Sinomedica rank with German pages.

5. **Decision. Referring GP.**
   As a GP in the Luganese, I want to refer a patient with knee osteoarthritis for an ultrasound-guided infiltration, because I need a fast, reliable report. But I'm blocked by **missing referral information**: nothing on waiting time, report turnaround or indications, and nothing warning that basic-insurance-only patients pay out of pocket.
   *Signals:* the EOC "Protesi al ginocchio" page ranks for `PRP ginocchio Lugano` and explains PRP, hyaluronic acid or cortisone by degree of wear. EOC, Moncucco and SMN specialist profiles rank for `reumatologo Lugano` and `terapia del dolore Lugano`.

The stories cover all three journey stages: awareness (1), consideration (1, 2, 4) and decision (3, 5).

---

## 6. Persona scoring

Weights reflect likely search share for a local YMYL practice: pain patient 40%, insurance-checker 25%, GP 20%, German-speaker 15%.

| Persona | Pages scored | Relevance | Clarity | Trust | Action | **Total** | Rating |
|---|---|---|---|---|---|---|---|
| **Insurance-checking patient** (basic LAMal, maybe complementary) | `/agopuntura/`, PRP page, `/contatti/` | 17 | 12 | 14 | 10 | **53** | Needs Work |
| **Referring GP / specialist** | `/reumatologo/`, `/contatti/` | 15 | 13 | 14 | 16 | **58** | Needs Work |
| **Chronic back/neck-pain patient, Lugano** | `/`, `/terapia-interventistica-del-dolore/` | 14 | 13 | 16 | 20 | **63** | Good (low) |
| **German-speaking Swiss patient** | `/de/`, `/de/akupunktur/`, `/de/kontakt/` | 19 | 18 | 14 | 19 | **70** | Good |
| **Weighted** | | | | | | **~61** | Good (low) |

### Evidence per persona

**Insurance-checking patient (53). Weakest.**
- *Relevance 17:* every service page has an insurance FAQ, and the Visana RCC V272164 is verifiable, which is strong. But nothing addresses LAMal coverage for physician acupuncture, the SERP's main talking point.
- *Clarity 12:* on `/agopuntura/` the answer sits in the FAQ at ~68% of the page, on a ~12,900 px mobile page. "a determinate condizioni" is vague. Only the homepage shows the RME badge above the fold.
- *Trust 14:* RME and Visana help. But "basic-only pays directly", unexplained, reads as a disadvantage next to competitors who advertise LAMal coverage.
- *Action 10:* there's no way to learn the cost before booking. The only CTA is "Prenota", and the quote comes *at* the visit.

**Referring GP (58).**
- *Relevance 15:* the HIN address is on every page, and second opinions and work-capacity assessments are mentioned. But there's no referral page: no indications, what to send, turnaround, waiting time or scope limits.
- *Clarity 13:* referral info is one paragraph on `/contatti/` ("Per i medici invianti").
- *Trust 14:* the EULAR/ACR guideline references and SGUM/SSIPM/SAMM qualifications are GP-grade. But the "Reumatologo" H1 against the FMH PM&R title will be noticed at once, and no GLN/ZSR is shown.
- *Action 16:* the HIN email is visible. There's no structured referral path.

**Chronic pain patient (63).**
- *Relevance 14:* pain is in the homepage H1. But no page starts from the condition, and the "pain" page is framed as injections.
- *Clarity 13:* the path is Home → 16 px "Terapia del dolore →" → injections page. Conditions are spread across `/reumatologo/`, `/agopuntura/` and the injections page.
- *Trust 16:* doctor bylines with review dates, credentials and DOI references are present. Missing: a doctor photo on service pages, reviews, and "what a first visit feels like".
- *Action 20:* "Prenota online" and "Chiama lo studio" sit above the fold, with a sticky bar and WhatsApp. Minus: "/prenota/" 302s to the OneDoc profile listed as **"agopuntore"**, and the practice opens Mon/Wed/Fri only.

**German-speaking patient (70).**
- *Relevance 19:* all 24 pages exist in German with de-CH hreflang, German-language consultations are stated, and Zürich-Oerlikon is mentioned on `/de/`. But `/de/kontakt/` covers arrival only "Aus dem Tessin" and "Aus Italien", not from the Deutschschweiz.
- *Clarity 18:* the language switcher is in the top bar. Minus: the RME badge image reads "CERTIFICAZIONE RME" (Italian) on `/de/`, and the title "Schmerztherapie SSIPM in Lugano" uses jargon.
- *Trust 14:* no Bewertungen, and "Wer nur die Grundversicherung hat … bezahlt direkt" is unexplained.
- *Action 19:* "Online buchen" goes to OneDoc in German (`/de/akupunkteur/…`). Minus: the German service pages don't mention the option of Zürich follow-up.

### Systemic issues across personas
- **Trust is the lowest dimension (14–16 for every persona).** It combines no visible rating, no photo on service pages, the credential/title tension on `/reumatologo/`, and an unexplained basic-insurance position.
- **Action is strong for "book now" but weak for anyone not yet ready.** There's no route to "ask about cost", "check whether you treat my condition" or "refer a patient".

---

## 7. Prioritised recommendations

Ordered by severity, then weakest persona first. Each has a failure check.

### R1. High: publish cost and insurance transparency (weakest persona)
- Create `/costi-e-assicurazioni/` (plus DE/FR/EN) and add a 3-line "Costi e rimborso" box directly under the fold CTAs on every service page, linking to it. Include:
  - what is billed to complementary insurance
  - **indicative CHF ranges** for the first visit, an acupuncture session, an ultrasound-guided infiltration, a PRP session and a laser session
  - the RME number and Visana RCC
  - a 3-step "come verificare con la sua cassa" checklist
- **Explain the basic-insurance position plainly.** SERP-ranking insurer pages say physician acupuncture (ASA) is LAMal-covered. If the practice doesn't bill basic insurance in Ticino, say why; otherwise the page contradicts what patients have just read. *Needs client confirmation.*
- Add a secondary CTA "Chieda un preventivo prima della visita" (email/WhatsApp).
- **How we'd know it failed:** after 8 weeks, (a) the phone/WhatsApp log still shows "quanto costa / rimborsa la cassa?" as the top question; (b) the `/costi-e-assicurazioni/` page gets fewer than ~5% of service-page sessions; or (c) the OneDoc booking-to-attendance rate doesn't improve.

### R2. High: resolve the `/reumatologo/` title and credential mismatch
- Retitle the page, and its equivalents `/de/rheumatologe/`, `/fr/rhumatologue/` and `/en/rheumatologist/`, around the discipline and the true title. For example: H1 "Reumatologia e dolori articolari a Lugano", with the subline "Visita del Dott. Djordjevic, specialista FMH in Medicina fisica e riabilitazione". Consider 301-ing to `/reumatologia/`.
- Add a short "Quando rivolgersi a un reumatologo FMH" note for systemic inflammatory disease co-management. It builds GP trust.
- Align the schema `medicalSpecialty` (hand to the schema lane).
- Ask the client to confirm with the Ordine dei medici del Cantone Ticino / FMH that current "Reumatologo" wording complies with the professional advertising rules. **Escalate to Critical** if it can't be substantiated.
- **How we'd know it failed:** in GSC, `/reumatologo/` (or its successor) keeps impressions for "reumatologo lugano" with CTR under ~1% after 8 weeks, or callers still ask "è reumatologo FMH?"

### R3. High: build a dedicated `/terapia-del-dolore/` hub (and FR/DE/EN)
Match the 67% Service-page consensus. Suggested sections:
- H1 "Terapia del dolore a Lugano"
- "Quali dolori trattiamo", with condition cards linking to R4 pages
- "Come si svolge la prima visita" (anamnesi, ecografia, piano)
- "Le terapie", linking to the injections, medicina manuale, agopuntura, laser and PRP pages
- "Quando il dolore richiede altro" (red flags; when to go to EOC or the emergency department)
- costs box (R1), doctor photo and credentials, FAQ, booking CTA

Keep `/terapia-interventistica-del-dolore/` as a child page. Retitle its H1 to "Infiltrazioni ecoguidate per il dolore a Lugano", point the homepage "Terapia del dolore →" link at the new hub, and shift the homepage title towards brand + doctor to avoid cannibalisation.

**How we'd know it failed:** 12 weeks after indexing, GSC still shows "terapia del dolore lugano" landing on `/`, or the new page's average position isn't better than the homepage's baseline.

### R4. High: add a condition layer (Hybrid pages)
Start with 4–6 pages, each structured as "cos'è → quando preoccuparsi → cosa facciamo in studio → evidenze → costi → prenota":
- lombosciatalgia/ernia del disco
- cervicalgia
- artrosi del ginocchio (covers R5)
- cefalea/emicrania (reuse the Cochrane data from `/agopuntura/`)
- tendinopatie di spalla
- fibromialgia

These fill the open slot next to the physio and ozone content (section 2.8), with the doctor's byline as the differentiator.

**How we'd know it failed:** after 3 months the pages get impressions only for non-local informational queries (no "lugano/ticino" in GSC queries), or their CTR is below ~0.5% with no OneDoc clicks.

### R5. Medium: knee-specific PRP page
Create "PRP, acido ialuronico o cortisone per l'artrosi del ginocchio a Lugano". It answers the Hybrid SERP (Logmedica "cosa dice la scienza", EOC "a seconda del grado di usura") and the price question. Include:
- a comparison table of the three options (indication, sessions, evidence, CHF range)
- the existing RCT and meta-analysis content, moved over from the generic PRP page

**How we'd know it failed:** the generic PRP page, not the knee page, still collects "prp ginocchio" impressions after 8 weeks.

### R6. Medium: claim the doctor's real specialty term
Add a "Fisiatra a Lugano – Medicina fisica e riabilitazione FMH" page. It can be combined with a doctor profile page `/dott-zeljko-djordjevic/`, since the `reumatologo` SERP rewards named-physician pages. Also use "fisiatra" naturally on the homepage and `/reumatologia/`.

**How we'd know it failed:** zero GSC impressions for "fisiatra lugano" 8 weeks after indexing.

### R7. Medium: fix the booking-destination mismatch
Every "Prenota" CTA lands on a OneDoc profile titled **"agopuntore"**, including those on `/reumatologo/` and the injections page.
- Set OneDoc's primary specialty to Medicina fisica e riabilitazione.
- Create visit types: "Prima visita dolore/reumatologica", "Agopuntura", "PRP/infiltrazione".
- Deep-link per service if OneDoc supports it. This belongs to the local lane.

**How we'd know it failed:** the booking completion rate from pain and rheumatology pages stays below ~50% of the rate from `/agopuntura/`, based on OneDoc referral data or GA4 outbound-click versus booking counts.

### R8. Medium: trust layer on service pages
- Add a doctor photo and 2-line credential card near the fold on every service page. Today only the homepage has the photo; `/reumatologo/` and the injections page have no content images.
- Add a link to Google reviews with the rating, within FMH advertising guidelines. The `/contatti/` review request already exists.
- Add 1–2 practice or equipment photos (ultrasound, laser).

**How we'd know it failed:** scroll-depth and CTA-click rates on service pages don't move within 6 weeks, measured with GA4 events.

### R9. Medium: disambiguate laser intent
Retitle `/laserterapia/` to "Laserterapia medica per il dolore a Lugano". Open with one sentence making clear it's physician-performed therapeutic laser, not aesthetic hair removal. The SERP is one-third aesthetic, and the homepage currently outranks this page for "laserterapia dolore Lugano".

**How we'd know it failed:** "laserterapia dolore lugano" still lands on `/` after 8 weeks, or `/laserterapia/` gathers aesthetic queries (for example "epilazione") at 0% CTR.

### R10. Medium: localise the German experience, not just translate it
- Add an "Anreise aus der Deutschschweiz" section on `/de/kontakt/` (train via the Gotthard base tunnel, the practice's car park).
- Add a German RME badge variant.
- Replace the jargon title "Schmerztherapie SSIPM in Lugano" with "Schmerztherapie mit Infiltrationen in Lugano".
- Mention Zürich-Oerlikon follow-up on the German service pages. It's a real differentiator for this persona.
- The German pain SERP is thin, so a solid `/de/schmerztherapie/` hub (the German twin of R3) can compete.

**How we'd know it failed:** `/de/` pages stay under ~5% of organic sessions, or OneDoc German-profile bookings don't rise within 3 months.

### R11. Low: referral page for GPs
Create `/medici-invianti/` covering: indications, what to send via HIN, report turnaround, typical waiting time, billing note for basic-only patients, and GLN/ZSR.

**How we'd know it failed:** HIN referrals don't increase within 3 months (count from the practice's own log).

### R12. Low: homepage pain-entry tap targets
Make the text-link cards ("Terapia del dolore →", "Reumatologia a Lugano →", "Agopuntura a Lugano →"; 16 px high on mobile) into full-card tap areas of at least 24 px.

**How we'd know it failed:** the tap-target audit in `visual.json` still flags them on re-capture.

### R13. Low: availability expectations
The practice is open Mon/Wed/Fri only. Add "Martedì e giovedì il dottore riceve a Zurigo-Oerlikon" near the hours block, plus the OneDoc "prossima disponibilità" if embeddable.

**How we'd know it failed:** "siete aperti martedì?" calls continue.

### R14. Info: what already works (keep)
- Service Page type with a full local block on every URL
- "Prenota online" and "Chiama lo studio" above the fold, plus a sticky bottom bar on all pages
- physician bylines with "aggiornata il …" dates and DOI-referenced evidence sections
- an insurance FAQ on every service page, with a verifiable Visana RCC
- the HIN referral line
- complete IT/DE/FR/EN coverage with hreflang
- no third-party requests

`/agopuntura/` is aligned with its SERP and deeper than most single-practitioner competitors. Its gap is authority and reviews, not page type.

### Cross-skill hand-offs
- `/seo content`: E-E-A-T and the credential wording on `/reumatologo/`, and the condition-page briefs.
- `/seo schema`: `medicalSpecialty`, and a Physician profile page.
- `/seo local`: OneDoc category and visit types, the GBP review programme, and German directories (local.ch DE, search.ch, akupunkturvergleich.ch).
- `/seo page`: the thin `/terapia-interventistica-del-dolore/` (675 words).

---

## 8. Limitations

- **SERP localisation:** US-based search, not google.ch/it-CH from Ticino. Positions and result sets are directional; confirm with GSC or a Swiss rank tracker.
- **Missing SERP features:** no local pack, PAA, ads, AI Overview or related searches were visible. User stories rely on organic titles and snippets plus proxy question queries.
- **Competitor pages not fetched** (egress blocked). Their page types come from title, URL and snippet only; competitor word counts, schema and on-page trust elements weren't verified.
- **No GSC, GA4 or OneDoc data**, so CTR, conversions and booking-funnel figures are unknown. The "how we'd know it failed" checks assume these will be connected.
- **Screenshots** cover 6 templates only (home, agopuntura, reumatologo, laserterapia, contatti, de-home). Other pages are assumed to share the template, which `visual.json` fold CTAs support.
- **Not assessed:** billing status with basic insurance (OKP admission in Ticino) and the regulatory status of the "Reumatologo" wording. Both are flagged for client confirmation, not concluded.
- **Prior SERP findings** in `/home/user/empty/seo-audit/swisscentromedico.ch.md` §2.2 predate the rebuild and were used only as context.

Generate a PDF report? Use `/seo google report`.

---

## 9. Structured findings (for `audit-data.json`, category "Search Experience")

```json
{
  "category": "Search Experience",
  "sxo_gap_score": {"url": "https://swisscentromedico.ch/", "query": "terapia del dolore Lugano", "score": 63, "max": 100},
  "weighted_persona_score": 61,
  "findings": [
    {"id": "SXO-1", "severity": "High", "title": "No dedicated 'terapia del dolore' page; homepage hub carries the query", "url": "https://swisscentromedico.ch/", "evidence": "SERP 6/9 dedicated pain Service pages; homepage pain link -> /terapia-interventistica-del-dolore/ (675 words, H1 'Interventistica del dolore Lugano')", "mismatch": "HIGH"},
    {"id": "SXO-2", "severity": "High", "title": "'Reumatologo' H1 vs FMH Physical Medicine & Rehabilitation; SERP rewards FMH rheumatologist profiles", "url": "https://swisscentromedico.ch/reumatologo/", "evidence": "SERP 4/8 physician profiles + 2/8 FMH-filtered directories; schema medicalSpecialty Rheumatologic", "mismatch": "HIGH"},
    {"id": "SXO-3", "severity": "High", "title": "No cost/insurance transparency; basic-insurance position unexplained", "url": "site-wide", "evidence": "0 pages with CHF/prezzo/costo; 21 IT pages say basic-only patients pay directly; SERP insurer pages + competitor state physician acupuncture is LAMal-covered", "persona": "Insurance-checking patient 53/100"},
    {"id": "SXO-4", "severity": "High", "title": "Missing condition layer (mal di schiena, cervicalgia, ernia, artrosi ginocchio)", "url": "site-wide", "evidence": "Condition SERPs ~70% physio/ozone hybrids; 'sciatica' 0 pages, 'mal di schiena' 1 page"},
    {"id": "SXO-5", "severity": "Medium", "title": "PRP page generic vs knee-specific Hybrid SERP", "url": "https://swisscentromedico.ch/il-plasma-ricco-di-piastrine-o-trombociti-prp/", "mismatch": "MEDIUM"},
    {"id": "SXO-6", "severity": "Medium", "title": "Doctor's FMH specialty term 'fisiatra' absent", "url": "site-wide", "evidence": "'fisiatra Lugano' SERP 7/8 Service pages; 0 site mentions"},
    {"id": "SXO-7", "severity": "Medium", "title": "All booking CTAs land on OneDoc 'agopuntore' profile", "url": "https://swisscentromedico.ch/prenota/", "evidence": "302 -> onedoc.ch/it/agopuntore/lugano/pc0jl/..."},
    {"id": "SXO-8", "severity": "Medium", "title": "No doctor photo/reviews on service pages", "url": "/reumatologo/, /terapia-interventistica-del-dolore/", "evidence": "0 content images on both"},
    {"id": "SXO-9", "severity": "Medium", "title": "Laser intent split; homepage outranks /laserterapia/ for 'laserterapia dolore'", "url": "https://swisscentromedico.ch/laserterapia/", "mismatch": "MEDIUM"},
    {"id": "SXO-10", "severity": "Medium", "title": "German pages translated, not localised", "url": "https://swisscentromedico.ch/de/", "evidence": "Italian RME badge on /de/; no Deutschschweiz arrival; title 'Schmerztherapie SSIPM'"},
    {"id": "SXO-11", "severity": "Low", "title": "No referral page for GPs", "url": "https://swisscentromedico.ch/contatti/"},
    {"id": "SXO-12", "severity": "Low", "title": "Homepage pain-entry links 16px tall on mobile", "url": "https://swisscentromedico.ch/"},
    {"id": "SXO-13", "severity": "Low", "title": "Mon/Wed/Fri availability not explained", "url": "site-wide"},
    {"id": "SXO-14", "severity": "Info", "title": "Aligned: /agopuntura/, /de/akupunktur/ Service pages; strong CTA/sticky bar; bylines + evidence", "url": "https://swisscentromedico.ch/agopuntura/", "mismatch": "ALIGNED"}
  ],
  "personas": [
    {"name": "Insurance-checking patient", "relevance": 17, "clarity": 12, "trust": 14, "action": 10, "total": 53},
    {"name": "Referring GP", "relevance": 15, "clarity": 13, "trust": 14, "action": 16, "total": 58},
    {"name": "Chronic back/neck-pain patient (Lugano)", "relevance": 14, "clarity": 13, "trust": 16, "action": 20, "total": 63},
    {"name": "German-speaking Swiss patient", "relevance": 19, "clarity": 18, "trust": 14, "action": 19, "total": 70}
  ]
}
```

---

## Sources (SERP, directional)

- https://www.eoc.ch/en/medical-specialties/neurology-neurosurgery/pain-management.html
- https://www.eoc.ch/medici/g/Greco-Massimiliano.html
- https://www.moncucco.ch/terapia_del_dolore.asp
- https://www.radiologiaalparco.ch/terapia-del-dolore/
- https://mcsorengo.ch/en/specializations/pain-management/
- https://rehamedica.ch/terapie/terapia-del-dolore/
- http://luganocare.com/anestesiologia-terapia-del-dolore/
- https://logmedica.ch/
- https://titratto.ch/agopuntura-lugano/
- https://www.drbellwald.ch/
- https://www.drbellwald.ch/2018/04/11/agopuntura-non-serve-assicurazione-complementare/
- https://www.dr-med-anja-stamm.ch/agopuntura-medicina-tradizionale-cinese-lugano.html
- https://www.dr-med-anja-stamm.ch/akupuntur-traditionelle-chinesische-medizin-lugano.html
- https://rehamedica.ch/terapie/agopuntura/
- https://www.julianrottmann.com/studio-di-agopuntura-lugano
- https://www.eoc.ch/medici/m/Marcoli-Natalie.html
- https://www.onedoc.ch/en/rheumatologist/lugano
- https://www.onedoc.ch/it/reumatologo/lugano/pczen/dr-marco-fedeli
- https://www.swissmedical.net/en/doctors-directory/salani-ignazio
- https://en.comparis.ch/gesundheit/arzt/kanton-tessin/lugano/rheumatologen
- https://www.guidaestetica.it/centri/laserterapia/lugano
- https://www.local.ch/it/q/lugano/laser-trattamenti-medici
- https://hlifeclinic.ch/servizi/laser.html
- https://www.ti-fisio.ch/servizi/laser-terapia/
- https://logmedica.ch/infiltrazioni-prp-cosa-dice-la-scienza-oggi/
- https://www.eoc.ch/pazienti/malattie-e-trattamenti/p/protesi-al-ginocchio.html
- https://www.swissproage.ch/medicina-rigenerativa-con-prp/
- https://lucaborra.ch/it/medicina-estetica/medicina-rigenerativa/
- https://hlifeclinic.ch/
- https://hlifeclinic.ch/servizi/fisiatria.html
- https://www.rehabilitylugano.ch/servizi/ambulatorio-medico/ambulatorio-medico-fisiatria/
- https://www.ti-fisio.ch/magazine/lombalgia-mal-di-schiena-come-la-fisio-a-lugano-puo-alleviare-il-dolore/
- http://luganocare.com/ernia-del-disco-evitare-operazione/
- https://www.terapiaozono.ch/ernia-del-disco-ozonoterapia-lugano/
- https://akupunkturvergleich.ch/r/akupunkturpraxen/lugano-r:3NS1SnW3
- http://tel.search.ch/lugano/akupunktur-tcm
- https://www.sinomedica.com/medical-acupuncture-lugano
- https://www.dr-jost.com/de/
- https://cannaviva.ch/schmerztherapie-lugano/
- https://www.swissmedical.net/en/pain-therapy
- https://sacam.ch/patienteninfos/krankenkasse
- https://www.kpt.ch/it/informarsi/assicurazione-medicina-complementare
- https://www.onedoc.ch/en/medical-practice/lugano/ebd4o/swiss-centro-medico
