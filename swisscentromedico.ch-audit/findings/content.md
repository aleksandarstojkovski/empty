# Content Quality, E-E-A-T and On-Page SEO: swisscentromedico.ch

- **Audit date:** 2026-09-28
- **Scope:** Content lane only: E-E-A-T, YMYL medical content quality, readability, thin and duplicate content, titles, meta descriptions and headings, internal linking from a content angle, and passage-level AI citation readiness. Technical SEO, schema validation, performance, local/GBP and GEO are covered by other agents.
- **Data:** `raw/pages.json` (96 URLs = 24 pages x IT/DE/FR/EN, all HTTP 200, crawled 2026-09-28), `raw/pages/*.html`, `raw/inlinks.json` and `raw/llms.txt`. Scoring uses the visible `<main>` text (`main_text`). The only live check was `curl` on the live site (HTTP 200). A third-party credential check against praxis-sternen.ch could not be completed because the proxy reset the connection.
- **Frameworks:** Google QRG (current version 2025-09-11), claude-seo `eeat-framework.md` and `quality-gates.md`. The E-E-A-T weights below belong to this skill's internal model. Google publishes no weights.
- **Regulatory caveat:** statements about Swiss rules (LPMed/MedBG, the FMH Code of Ethics and its annex on information and advertising, the Therapeutic Products Act, Swissmedic) flag risk only. They are not legal advice. Have the Ordine dei medici del Cantone Ticino (OMCT) or counsel confirm them.

---

## 1. Scores

| Dimension | Score | Notes |
|---|---|---|
| **Content Quality (overall)** | **58 / 100** | Strong transparency scaffolding, but on several YMYL pages the claims go further than the evidence, and editorial artifacts are visible to patients |
| E-E-A-T (weighted) | 54 / 100 | See breakdown |
| On-Page SEO (titles, metas, headings, internal links) | **78 / 100** | See section 6 |
| AI citation readiness (passage level) | 68 / 100 | See section 7 |
| Readability (IT) | 74 / 100 | Gulpease median 59; short sentences; too many unexplained acronyms |
| Freshness | 90 / 100 | Every service page has a visible "verificata dal medico, aggiornata il 17-20 settembre 2026" line; JSON-LD `lastReviewed` and `dateModified` match |
| Thin / duplicate content | 60 / 100 | No page is a true duplicate, but six sub-pages per language have fewer than 350 words of unique sentences |

### E-E-A-T breakdown

| Factor | Weight | Score | Main evidence |
|---|---|---|---|
| Experience | 20% | 55 | First-person statements ("ricevo personalmente ogni paziente", "la valutazione e l'inserimento degli aghi li eseguo personalmente"). There are practice photos (doctor "nel suo studio a Lugano", palpation, ultrasound screen) and a practice-specific visit flow. There is no practice-level data (volumes, protocols, typical session counts, products used). 12 of 20 service pages answer "Quante sedute servono?" with "dipende". |
| Expertise | 25% | 60 | FMH specialist (Physical Medicine and Rehabilitation) with SAMM, SSIPM, SGUM and ASA qualifications. Bylines on every service page. High-quality sources on mainstream pages (Cochrane, EULAR, ACR, Lancet, JAMA, BMJ). Against that: a factual error about exosomes, dermatologic oncology and IV antimicrobial PDT outside the specialty, and invasive laser pages with no clinical evidence. |
| Authoritativeness | 25% | 45 | No dedicated physician page. No link to MedReg or the FMH doctor finder. Society memberships are listed but not linked. The only third-party verifiable IDs are the Visana ZSR number (V272164), GLN 7601003315226 and UID, and they appear only on legal pages. A device-maker network (ISLA / European Laser Clinics) is presented as a credential. No publications or external recognition. |
| Trustworthiness | 30% | 55 | Strong: full legal notice (UID, GLN, cantonal authorisation, MedReg), a detailed nLPD privacy page, HIN email, phone, address and hours, a disclaimer on every service page, and honest limitation statements on the PRP, hyaluronic acid and exosome pages. Weak: IV antimicrobial PDT claims, exosome source and regulatory status not stated, invasive IV laser with no indication and no risk disclosure, an acupuncture indication list well beyond the evidence, the "Reumatologo" title, and no prices. |

Weighted: 0.20x55 + 0.25x60 + 0.25x45 + 0.30x55 = **53.75, rounded to 54**.

---

## 2. What is working (keep; do not regress)

1. **Byline and review date on every service page (all 4 languages).** Example, `/laserterapia-endovenosa/`: "Dott. med. univ. Zeljko Djordjevic, Specialista in Medicina Fisica e Riabilitazione FMH. Swiss Centro Medico, Lugano. Pagina verificata dal medico, aggiornata il 18 settembre 2026." The JSON-LD matches: `author` and `reviewedBy` point to `#physician`, with `lastReviewed: 2026-09-18`.
2. **DOI-linked "Fonti scientifiche" on all 20 service pages**, 1 to 12 references each, with links to doi.org. Pages covering mainstream care cite top-tier sources: `/reumatologo/` (12 references: EULAR, ACR, Lancet, JAMA), `/agopuntura/` (Cochrane 2016 x2, Vickers 2018 IPD, Witt 2009 safety), `/medicina-manuale/` (Rubinstein BMJ 2019, Paige JAMA 2017).
3. **Honest evidence statements on several pages.** Examples:
   - `/infiltrazioni-acido-ialuronico/`: "La linea guida ACR/Arthritis Foundation 2019 ... è cauta sull'acido ialuronico intra-articolare (raccomandazione condizionale contraria per il ginocchio)."
   - `/laserterapia-in-combinazione-.../`: "gli effetti sulla pelle invecchiata sono in genere modesti; la durata nel tempo non è ancora chiara."
   - `/terapie-rigenerative-...-esosomi-.../`: "È una serie piccola: non dimostra che la combinazione sia superiore in generale."
4. **A standard disclaimer on 20 of 20 service pages:** "Le informazioni di questa pagina hanno finalità divulgativa e non sostituiscono la consulenza medica. L'indicazione, i benefici attesi e i rischi di ogni trattamento vengono valutati individualmente..."
5. **Transparency pages.** `/note-legali/` gives "IDI: CHE-209.851.548. GLN: 7601003315226. Autorizzazione all'esercizio nel Cantone Ticino (LPMed), iscritto nel registro federale delle professioni mediche (MedReg)". `/privacy/` names the processors (OneDoc, HIN, Google, Meta) and sets retention at 10-20 years.
6. **No testimonials, star ratings or before/after images on the site**, which fits Swiss medical advertising rules. `/contatti/` asks for Google reviews through a link, which is an acceptable approach.
7. **Full translation parity.** All 24 page pairs have the same heading count, the same DOI count and the same review date in IT, DE, FR and EN. The German uses Swiss orthography (0 instances of "ß"). The translations read fluently.
8. **Metadata is not templated.** `metadata_template.py` over 96 pairs gives `site_risk: low`, `templated_ratio: 0.0` and no `shared_cta_phrases`.

---

## 3. Findings summary

| ID | Severity | Finding | Main URLs |
|---|---|---|---|
| C1 | **Critical** | IV "antimicrobial PDT" claims against bacterial, viral and parasitic pathogens, "senza antibiotici sistemici", with curcumin and hypericin among the agents, and no supporting evidence | `/terapia-fotodinamica/` + DE/FR/EN; `/laserterapia/` card; meta; `llms.txt` |
| H1 | High | Invasive laser pages (intravenous, interstitial, intra-articular) give no clinical evidence, no clear indication for IV laser, reuse irrelevant citations, claim "rigenerazione cartilaginea" and barely disclose risks | `/laserterapia-endovenosa/`, `/laserterapia-interstiziale/`, `/laserterapia-intra-articolare/` + translations |
| H2 | High | Exosomes: origin, product and regulatory status not stated; the only clinical citation is a 5-volunteer study with a probable conflict of interest; a factual error ("doppia membrana"); the meta claims "rigenerare ... organi" | `/terapie-rigenerative-...-esosomi-.../`, `/medicina-rigenerativa/` |
| H3 | High | The acupuncture indication list (heart and circulation, type 2 diabetes, thyroid, fertility, oncology, immunity, depression) goes far beyond the cited evidence. RAC "diagnostics" with "sostanze test" and "campi di disturbo" are presented as "preciso" | `/agopuntura/`, `/agopuntura-auricolare-rac/` |
| H4 | High | The "Reumatologo / Rheumatologe / Rhumatologue / Rheumatologist" title and H1 are used by a physician whose FMH title is Physical Medicine and Rehabilitation | `/reumatologo/` + 3 translations |
| H5 | High | Laser-device-maker network badges are presented as credentials on all 96 pages. A cited study appears to come from the same network, and the conflict of interest is not disclosed | sitewide footer; `/laserterapia/`; exosome page |
| H6 | High | Editorial and AI-revision artifacts visible to patients ("il sito attribuisce", "studi con DOI", "Perché non parlate più della colonna?") on about 20 pages x 4 languages | see F-H6 |
| M1 | Medium | Meta descriptions (and `llms.txt`, OG and Twitter copies) are more promotional than the revised bodies, or contradict them | `/laserterapia-dermatologica/`, `/medicina-rigenerativa/`, `/laserterapia-in-combinazione-.../`, `/laserterapia/` |
| M2 | Medium | The interventional pain page is thin for a money page. Spinal-injection risks are understated, the injected agents are not named, and the ultrasound-guided spinal claim is imprecise | `/terapia-interventistica-del-dolore/` |
| M3 | Medium | Cost and insurance: no prices at all, and basic-insurance (LAMal/KVG) status is only implied | all service pages, `/contatti/` |
| M4 | Medium | Sibling pages have thin unique content and overlapping intent (acupuncture, invasive laser, regenerative); cannibalisation risk | see F-M4 |
| M5 | Medium | Credentials are hard to verify: no physician page, no MedReg or FMH links, the credential list differs between pages, and the name is written 6 ways | homepage, `/reumatologo/` |
| M6 | Medium | Condition content is missing: no pages for mal di schiena, cervicalgia, artrosi, emicrania or tendinopatie, and no "terapia del dolore" landing page | sitewide |
| M7 | Medium | Homepage and service pages contradict each other; lung-function testing, HUBER 360 and the internal lab appear on the rheumatology page only | `/`, `/reumatologo/` |
| M8 | Medium | Skin-cancer PDT (BCC, Bowen's disease, actinic keratosis) is offered with no histology or dermatology prerequisite stated | `/terapia-fotodinamica/`, `/laserterapia-dermatologica/` |
| L1 | Low | Non-answers to "Quante sedute servono?" on 12 pages; session length missing | 12 service pages |
| L2 | Low | Title and H1 wording: grammar ("Laser dermatologica"), jargon ("Interventistica", "PBM", "MSK"), contact titles without "Lugano", cross-language duplicate titles | see section 6 |
| L3 | Low | `description-echoes-title` on 23 of 96 pages (secondary heuristic; the metadata is not templated) | see section 6 |
| L4 | Low | Legacy slugs no longer match titles or scope | 4 IT slugs |
| L5 | Low | Boilerplate heading blocks inside `<main>` (31-48% of each sub-page is shared text) | about 20 pages per language |
| L6 | Low | Acronyms never expanded (RME, HIN, SGUM, SSIPM, aPDT, RAC) | sitewide |
| I1 | Info | FAQ blocks exist on all service pages with no FAQPage markup. Keep it that way: FAQ rich results were retired on 2026-05-07 | n/a |
| I2 | Info | Several claims in the earlier SERP-only audit are now stale | section 9 |

---

## 4. Detailed findings

### C1 (Critical): intravenous "antimicrobial photodynamic therapy" claims

**Evidence** (`https://swisscentromedico.ch/terapia-fotodinamica/`, identical in `/de/photodynamische-therapie/`, `/fr/therapie-photodynamique/`, `/en/photodynamic-therapy/`):
- "Come funziona l'aPDT per infusione ... Il fotosensibilizzatore viene somministrato per infusione e attivato attraverso la terapia laser sistemica endovenosa."
- "Dopo circa 2-3 ore la sostanza si lega selettivamente al tessuto bersaglio."
- "La aPDT mira a inattivare patogeni batterici, virali e parassitari."
- "Quadri infiammatori cronici di origine infettiva. Approccio senza ricorso ad antibiotici sistemici."
- "Inattivazione mirata dei patogeni nelle infezioni localizzate, anche in presenza di resistenze."
- "Fotosensibilizzatori: verde di indocianina (ICG), clorina E6, curcumina, ipericina e riboflavina."
- "Irradiazione interstiziale, endoscopica o con tecnica a catetere."
- The meta description, OG and Twitter description, and the `llms.txt` entry all read: "Terapia fotodinamica antimicrobica (aPDT) a Lugano: il fotosensibilizzatore viene attivato con laser su patogeni batterici, virali e parassitari."
- The `/laserterapia/` hub card repeats the claim: "variante antimicrobica (aPDT) contro patogeni batterici, virali e parassitari".

**Why this is critical**
- None of the three sources supports systemic (IV) antimicrobial PDT. Morton 2019 covers *topical* dermatologic PDT. Agostinis 2011 covers cancer PDT. Wainwright 2017 (Lancet Infect Dis) discusses photoantimicrobials in general, mostly topical and local use. None supports IV infusion followed by intravenous laser activation against viral or parasitic infection.
- Curcumin given intravenously has been linked to serious adverse events (a 2017 FDA investigation of a compounded IV curcumin emulsion followed a death). Listing it next to an "infusion" workflow is a patient-safety red flag.
- "Senza ricorso ad antibiotici sistemici" and "anche in presenza di resistenze" position the treatment as an alternative to antibiotics. That is the kind of claim QRG raters treat as potentially harmful in YMYL. The page's own disclaimer ("non sostituisce le terapie ... antimicrobiche standard") contradicts it.
- Swiss advertising for physicians must be objective and not misleading (LPMed art. 40 lett. d; FMH Code of Ethics and its annex on information and advertising). An unsupported anti-infective claim in the SERP snippet is the highest-exposure form of it.
- "Endoscopic" irradiation is outside what a PMR office practice would plausibly do. The list of photosensitisers matches laser-device-maker marketing (see H5), which suggests the text was lifted from vendor material.

**Recommendation**
1. Remove the IV/infusion aPDT workflow, the "patogeni ... virali e parassitari" claim, the "senza antibiotici" and "resistenze" lines, and the photosensitiser list from all 4 languages, the `/laserterapia/` card, the meta, OG and Twitter descriptions, and `llms.txt`.
2. If a topical or local antimicrobial PDT service really exists (for example, chronic wounds), describe only that, name the product and route, cite clinical evidence for that indication, and state plainly that it is adjunctive to standard wound or infection care.
3. If the service does not exist in Lugano, delete the aPDT half of the page and retitle it "Terapia fotodinamica dermatologica" (see M8).

**How we'd know it failed:** `grep -Ei "infusion|infusione|Infusion|sistemica endovenosa|parassit|antibiotic|curcum|hypericin|ipericina"` over the four live PDT pages, the `/laserterapia/` pages and `/llms.txt` still returns matches; or the Google snippet for `site:swisscentromedico.ch terapia fotodinamica` still shows "virali e parassitari" 4 weeks after deployment.

---

### H1 (High): invasive laser pages have no clinical evidence, unclear indications and understated risks

**Evidence**
- `/laserterapia-endovenosa/`: "Lo scopo dichiarato in studio è stimolare le cellule del sangue circolanti." The only rationale offered is "La tecnica è in uso in Germania dal 2005 ed è oggi adottata da cliniche e studi". That is an appeal to tradition, and the page names no indication at all.
- Sources on the endovenous, interstitial, intra-articular and local laser pages are the same two: Hamblin 2017 (a review of PBM *mechanisms*) and Navratil 2002 (contraindications in *non-invasive* laser therapy). Neither is clinical evidence for catheter-based or intravascular laser. The only clinical efficacy trial in the whole laser cluster is Chow 2009 (non-invasive LLLT for neck pain), and it appears on `/laserterapia/` only.
- `/laserterapia-intra-articolare/`: "i laser rossi nel dolore cronico e nella rigenerazione cartilaginea". "Rigenerazione cartilaginea" is a structural-disease-modification claim with no citation.
- `/laserterapia/`, "Effetti della laserterapia a bassa intensità", lists unqualified effects: "Perfusione: Migliora la circolazione sanguigna generale", "Risposta immunitaria", "Guarigione delle ferite: Accelera la riparazione".
- The risk disclosure for an intravascular or percutaneous catheter procedure is one line: "Nelle applicazioni invasive si utilizza un'anestesia locale nel punto di ingresso." Only `/laserterapia-interstiziale/` adds "Come ogni trattamento può avere effetti indesiderati". Infection, bleeding or haematoma, thrombophlebitis, vasovagal reaction and septic arthritis (intra-articular) are never mentioned.
- The homepage calls it "Laserterapia invasiva: Azione precisa e profonda su patologie croniche, lesioni tendinee e disturbi resistenti alle terapie conservative."

**Positives to keep:** "Cosa non promettiamo: Non presentiamo diabete, sclerosi multipla, degenerazione maculare o malattia di Lyme come indicazioni dimostrate di questa tecnica" (endovenous page) and "non è detto che dia un risultato migliore del laser esterno" (interstitial page).

**Recommendation**
1. For each invasive modality, add an "Evidenza disponibile" box that says plainly what the evidence is. If no controlled trials exist for an indication, say so: "Non esistono studi controllati che dimostrino un beneficio clinico della laserterapia endovenosa per [X]; la proponiamo come terapia sperimentale / complementare."
2. Replace Hamblin and Navratil on the invasive pages with indication-specific clinical studies, or remove the "Fonti scientifiche" heading there so that mechanism reviews do not pass as proof of efficacy.
3. Delete "rigenerazione cartilaginea" unless a human clinical study can be cited.
4. Add a real risk section to each invasive page: sterile technique, infection, bleeding or haematoma, vein irritation (IV), septic arthritis (intra-articular), and what to watch for after the procedure.
5. State the indication for IV laser, or remove the page if none can be supported.

**How we'd know it failed:** any of the three invasive pages (any language) still has no clinical study in its sources and no "Evidenza"/limitation box; "rigenerazione cartilaginea" / "Knorpelregeneration" / "cartilage regeneration" is still present; the risk section still has fewer than 3 named complications.

---

### H2 (High): exosome page transparency, evidence and accuracy

**Evidence**
- `/terapie-rigenerative-avanzate-con-pbm-ed-esosomi-stimolare-la-rigenerazione-cellulare/` never says where the exosomes come from (human MSC, adipose, placental, plant or animal), who makes them, what dose or route is used, or what their Swiss regulatory status is. The only clinical citation describes "esosomi da tessuto adiposo" in "cinque volontari" (Weber M, et al. *Sch J App Med Sci* 2024). That is a low-tier journal, and the first author appears to be linked to the European Laser Clinics network the practice advertises (see H5).
- Factual error: "vescicole extracellulari di 40-150 nanometri, con una doppia membrana". Exosomes are bounded by a single lipid **bilayer**, not a double membrane. The same error is in DE, FR and EN ("with a double membrane").
- `/medicina-rigenerativa/` meta, OG and `llms.txt`: "Medicina rigenerativa e anti-invecchiamento a Lugano: trattamenti che mirano a rigenerare tessuti e **organi** danneggiati". The body never mentions organs. DE: "Gewebe und Organe regenerieren".
- `/medicina-rigenerativa/`: "nel ringiovanimento cutaneo, dove i risultati sono naturali e duraturi". This contradicts the PRP-skin page, which says "la persistenza degli effetti non è nota".
- `/medicina-rigenerativa/` lists "rigenerazione ossea e cartilaginea" and "fratture" as areas of use, without a citation.

**Why it matters:** exosome therapies are a known area of unapproved marketing. The FDA has issued public warnings that no exosome products are approved. Preparations derived from human cells are generally regulated as medicinal or transplant products in Switzerland, so leaving out the product and its status is a trust gap for raters and for patients.

**Recommendation**
1. Add a "Che cosa iniettiamo" box: source and manufacturer, regulatory status in Switzerland (authorised, magistral or off-label/experimental), route, typical dose and sessions, and cost.
2. Add a plain-language statement: "L'uso degli esosomi in ortopedia e dermatologia è sperimentale; non esistono ancora studi clinici controllati di dimensioni adeguate."
3. Fix "doppia membrana" to "doppio strato lipidico" / "Lipiddoppelschicht" / "bicouche lipidique" / "lipid bilayer".
4. Rewrite the `/medicina-rigenerativa/` meta without "organi" or "anti-invecchiamento", and remove "naturali e duraturi".
5. Check the regulatory position with Swissmedic or the cantonal pharmacist before any further promotion.

**How we'd know it failed:** the live page still lacks the words "origine", "Swissmedic" or "sperimentale" (or their equivalents in each language); `grep -i "doppia membrana|double membrane|doppelte Membran|double membrane"` still matches; `/medicina-rigenerativa/` meta or `llms.txt` still contains "organi" / "Organe".

---

### H3 (High): acupuncture indications go beyond the evidence; RAC diagnostic claims

**Evidence** (`/agopuntura/`, under the H2 "Quando l'agopuntura può aiutare"):
- "Nervi e organi interni: ... Disturbi del cuore e della circolazione", "Allergie e disturbi di occhi, orecchie, pelle e vescica".
- "Come supporto alle cure: Ansia, depressione, esaurimento e burnout ... Sovrappeso, diabete non insulino-dipendente, disturbi della tiroide. Smettere di fumare o di bere, desiderio di un figlio, terapie oncologiche e chemioterapia, difese immunitarie e vitalità".
- The evidence section on the same page covers only migraine, tension-type headache and chronic musculoskeletal pain (Linde 2016 x2, Vickers 2018). Those are good sources, but they cover about 20% of the listed indications.

`/agopuntura-auricolare-rac/`:
- "Stimolando i punti si possono influenzare organi, funzioni e stati emotivi".
- "Apparecchi laser, ad alta frequenza, dipoli elettrici e un assortimento di sostanze test rendono il controllo preciso", "Così si individuano i campi di disturbo". This is a diagnostic claim (Nogier RAC/VAS) with no validation study cited.

**Recommendation**
1. Split the list into (a) "Evidenze di buona qualità": chronic low back, neck and knee pain, migraine prophylaxis, tension-type headache, chemotherapy-induced nausea, each with a source; and (b) "Uso complementare, evidenza limitata": the rest, framed as adjunct only. Drop cardiac disease, diabetes and thyroid entirely, or state explicitly that the treatment does not treat the disease itself.
2. On the RAC page, describe the pulse check as a traditional method "non validato scientificamente come strumento diagnostico". Remove "preciso" and "campi di disturbo".

**How we'd know it failed:** `/agopuntura/` (all 4 languages) still lists "cuore", "diabete" or "tiroide" (or their translations) without an "evidenza limitata" qualifier; the RAC page still contains "preciso" / "präzise" / "précis" / "precise" next to "controllo".

---

### H4 (High): "Reumatologo" specialist title

**Evidence:** `/reumatologo/` has the title "Reumatologo a Lugano | Swiss Centro Medico" and the H1 "Reumatologo a Lugano". The translations use "Rheumatologe in Lugano", "Rhumatologue à Lugano" and "Rheumatologist in Lugano". The physician's FMH title is Physical Medicine and Rehabilitation, as the page itself says: "È specialista in Medicina fisica e riabilitazione FMH". The `MedicalClinic` and `Physician` JSON-LD also declare `medicalSpecialty: Rheumatologic`.

**Why it matters:** "Rheumatologie" is a separate federal specialist title. Calling himself "Reumatologo" can make patients think he holds it. That is a Trust problem under the QRG, and under Swiss rules the LPMed treats misleading professional designations as advertising violations. The meta description's clarification helps, but it is not enough.

**Recommendation:** name the service or condition, not a specialist title the doctor does not hold. For example, title "Reumatismi e dolore articolare a Lugano | Swiss Centro Medico" and H1 "Malattie reumatiche e dolore articolare a Lugano". Add a visible line near the top: "Visita per malattie reumatiche del Dott. Djordjevic, specialista FMH in Medicina fisica e riabilitazione". Keep the URL for now (it has equity) or 301 it to `/reumatologia/`. Confirm the wording with the OMCT.

**How we'd know it failed:** the live `<title>` or `<h1>` on any of the 4 rheumatology URLs still starts with "Reumatologo" / "Rheumatologe" / "Rhumatologue" / "Rheumatologist" as a personal title; or the OMCT raises it.

---

### H5 (High): device-maker network presented as a credential; undisclosed conflict of interest

**Evidence**
- Every one of the 96 pages carries footer logos for `isla_logo.gif` (alt "ISLA, International Society for Medical Laser Applications") and `weber-michael-dr-logo-5.png` (alt "European Laser Clinics"), linking to `https://www.european-laser-clinics.com/`. The file name ties the "European Laser Clinics" badge to Dr. Michael Weber.
- The `/laserterapia/` hero lists "Membri ISLA e European Laser Clinics" as a trust point, next to RME.
- The exosome page's only clinical study is "Weber M, et al. ... Sch J App Med Sci. 2024". The first author appears to belong to the same network. There is no disclosure.
- The invasive-laser vocabulary (intravenous laser "in uso in Germania dal 2005", interstitial catheter "fino a circa 12 cm", aPDT photosensitiser list) reads like vendor material.

**Recommendation:** move ISLA and European Laser Clinics from "credentials" to a plainly labelled "Rete / formazione laser" line, and say what membership means. Put independent professional credentials first (FMH, SIWF certificates, SGUM, SSIPM, SAMM, ASA). Next to the Weber 2024 citation, add "Studio preliminare; uno degli autori è legato al produttore/rete di laser di cui lo studio fa parte", or drop the citation.

**How we'd know it failed:** the `/laserterapia/` hero still presents "Membri ISLA e European Laser Clinics" as a trust badge; the Weber citation still has no disclosure note.

---

### H6 (High): editorial and AI-revision artifacts visible to patients

The pages have plainly been rewritten recently to answer audit or compliance comments. The rewrite left meta-commentary aimed at a reviewer rather than a patient. Under the Sept-2025 QRG this reads as low-effort, machine-edited text, and it weakens trust on a YMYL site.

**Evidence (IT; the same text appears in DE, FR and EN)**
- `/laserterapia-interstiziale/`: "Ernia del disco, stenosi, dolore cicatriziale ...: quadri che **il sito attribuisce** a questa tecnica, non alla dermatologia."
- `/laserterapia-endovenosa/`: "mancano **studi con DOI** che lo sostengano" (a DOI is not a measure of evidence quality).
- `/laserterapia-dermatologica/`, FAQ: "**Perché non parlate più della colonna?** Quella lista (ernia, stenosi, dolore cicatriziale) appartiene alla laserterapia interstiziale".
- `/medicina-manuale/`: "La pagina Reumatologia descrive la medicina manuale come metodo ortopedico conservativo ...: vale per la tecnica con le mani, non per tutto il percorso." "**Non affermiamo assenza di effetti collaterali.**" "Rilievo e trattamento di questa tecnica restano con le mani."
- `/ecografia-muscolo-scheletrica/`: "L'ecografia non è un esame di laboratorio", "Include gli esami di laboratorio? No. Questa pagina descrive solo l'imaging".
- `/laserterapia-locale-non-invasiva-e-lagopuntura/`: the H3 "Cosa non promettiamo" is followed by a promise: "La procedura è indolore."
- `/medicina-rigenerativa/` FAQ: "La rigenerazione cellulare si può prenotare? No."
- `/terapie-rigenerative-...-esosomi-.../`: "Non elenchiamo applicazioni di ricerca in vitro", "senza un numero di sedute fisso in questa pagina".
- `/il-plasma-ricco-di-piastrine-o-trombociti-prp/`: "Non esiste un terzo prodotto iniettabile di fattori isolati; gli studi citati qui valutano il PRP."
- An image alt on `/laserterapia-interstiziale/`: "Trattamento laser della mano: la foto non mostra un catetere interstiz[iale]".
- Cross-reference filler such as "Quella tecnica sta sulla pagina ...", "sta sulla pagina gemella" and "descritta sulla pagina dedicata" appears 4-8 times per page on 11 IT pages (endovenosa 8, dermatologica 8, interstiziale 7, acido ialuronico 6, PRP 6, ecografia 6, addominale 6).

**Recommendation:** do one human editorial pass per language. Rewrite every sentence that talks about "the site", "this page", "DOI" or a previous version as patient-facing text. Replace "sta sulla pagina X" with a single contextual link. Fix the "Cosa non promettiamo" heading. Rewrite the alt text to describe the image.

**How we'd know it failed:** `grep -Eic "il sito attribuisce|studi con DOI|non parlate più|Non affermiamo|Non elenchiamo|sta sulla pagina|stanno sulla pagina|pagina gemella|non mostra un catetere"` over the live IT pages returns more than 0, or the equivalent strings remain in DE/FR/EN.

---

### M1 (Medium): meta descriptions lag behind the revised bodies

| URL | Meta claim | Body says |
|---|---|---|
| `/laserterapia-dermatologica/` (+ DE) | "anche con tecnica interstiziale a penetrazione profonda" | "Il catetere da circa 12 cm non è un'indicazione dermatologica." |
| `/medicina-rigenerativa/` (+ DE) | "anti-invecchiamento ... rigenerare tessuti e organi danneggiati" | no organs; "studi clinici ... ancora preliminari" |
| `/laserterapia-in-combinazione-.../` | the laser "ne potenzia l'effetto rigenerativo" | "effetti ... in genere modesti"; no source for the laser + PRP combination |
| `/laserterapia/` | "Laserterapia e agopuntura ... benefici per ... reumatologia" | the page is about laser; "benefits for rheumatology" is vague |
| `/terapia-fotodinamica/` | "patogeni batterici, virali e parassitari" | see C1 |

The same strings are copied into `og:description`, `twitter:description`, the `MedicalTherapy.description` fields in JSON-LD, and `llms.txt`, so the strongest claims are the ones search engines and AI systems pick up.

**Recommendation:** rewrite these 5 metas in all 4 languages, keeping them no stronger than the page body, and regenerate OG, Twitter, JSON-LD and `llms.txt` from the same source.
**How we'd know it failed:** a diff shows any of the 20 affected meta, OG or `llms.txt` strings unchanged, or a meta makes a claim that does not appear in its page body.

---

### M2 (Medium): interventional pain page is too thin for a money page

**Evidence:** `/terapia-interventistica-del-dolore/` has 675 words in main, of which only 371 are in unique sentences, with 2 general references (Knezevic 2021, Katz 2022). It never says what is injected (corticosteroid, local anaesthetic). It lists no injection types by name (facet, sacroiliac, caudal or epidural, root blocks). The risk text is "fastidio locale, arrossamento o un piccolo livido", which understates spinal-injection risks (infection, dural puncture, nerve injury, transient steroid effects such as a glucose rise). "Infiltrazioni spinali ... sotto guida ecografica" is imprecise: many neuraxial and transforaminal procedures are done under fluoroscopy or CT. Say which procedures are done under ultrasound. The page also contains "il secondo fuoco dello studio".

**Recommendation:** expand to about 1,000+ words of unique content: the procedures offered, the agents used, image guidance per procedure, evidence per indication (for example NICE NG59 on spinal injections), a full risk list, aftercare and driving advice, and cost. The page supports the homepage's "Terapia del dolore" pillar (see M6).
**How we'd know it failed:** the unique-sentence word count is still under 700; no named agents; fewer than 4 named risks.

---

### M3 (Medium): cost and insurance transparency

**Evidence:** 20 pages repeat one block: "Lo studio è certificato RME e in Ticino fattura alle assicurazioni complementari ... Chi ha solo l'assicurazione di base riceve in visita un preventivo chiaro e paga direttamente." There are no CHF figures anywhere, and "RME" is never explained. The text implies the Lugano practice cannot bill compulsory insurance (LAMal/KVG) but never says so. Patients will be confused: consultations and ASA-certified physician acupuncture are normally LAMal-reimbursable when the physician is admitted to bill basic insurance.

**Recommendation:** state the status plainly ("A Lugano lo studio non fattura a carico dell'assicurazione obbligatoria (LAMal)", if that is correct). Give indicative price ranges for self-pay services (first visit, acupuncture session, PRP, exosomes, laser session). Expand RME to "Registro di Medicina Empirica" with one line of explanation. This is also the most-requested fact in patient questions to AI systems.
**How we'd know it failed:** no "CHF" appears on the site; "LAMal" / "KVG" / "LAMal" / "basic insurance" is still absent from the insurance FAQ.

---

### M4 (Medium): thin unique content and sibling overlap (cannibalisation)

"Unique-sentence words" are words in sentences that appear on exactly one page of the same language. The boilerplate share is the share of 6-word shingles that appear on 6 or more pages.

| IT page | Words (main) | Unique-sentence words | Boilerplate share | Note |
|---|---|---|---|---|
| `/agopuntura-classica-del-corpo-con-aghi-o-laser/` | 832 | **248 (30%)** | 36% | 43% of its shingles are contained in `/agopuntura/` |
| `/laserterapia-intra-articolare/` | 669 | **253 (39%)** | 48% | |
| `/laserterapia-locale-non-invasiva-e-lagopuntura/` | 707 | **293 (43%)** | 44% | |
| `/agopuntura-addominale/` | 849 | **306 (37%)** | 36% | Jaccard 0.25 with the classical acupuncture page (highest pair on the site) |
| `/laserterapia-interstiziale/` | 745 | **320 (44%)** | 44% | |
| `/laserterapia-endovenosa/` | 755 | **340 (46%)** | 44% | Jaccard 0.17 with intra-articular |
| `/terapia-interventistica-del-dolore/` | 675 | 371 (56%) | 43% | see M2 |
| `/ecografia-muscolo-scheletrica/` | 692 | 384 (56%) | 46% | one sentence repeated 3 times on the page |
| `/agopuntura/` (hub) | 1478 | 980 (67%) | 20% | |
| `/reumatologo/` (hub) | 1407 | 1079 (80%) | 19% | |

11 of 20 IT service pages (and 35 of the 80 service or home URLs across all languages) fall below the 800-word service-page floor. The floor measures topical coverage, not a ranking factor. The bigger problem is that the unique substance on the six sub-pages above is 250-340 words.

**Overlap clusters (in Italian)**
- **Acupuncture:** `/agopuntura/` hub vs `/agopuntura-classica-del-corpo-con-aghi-o-laser/`. The classical page is mostly a subset of the hub, and its slug still says "con aghi o laser" although laser now has its own page. `/laserterapia-locale-non-invasiva-e-lagopuntura/` (title "Agopuntura laser senza aghi") also competes for "agopuntura laser". The classical and abdominal pages share an identical "Quando la proponiamo" block. The homepage title also targets "Agopuntura ... Lugano".
- **Regenerative:** `/medicina-rigenerativa/` (eyebrow "Esosomi e PBM", with a full "PBM ed esosomi in sinergia" section and a full "Il PRP nel dettaglio" section) vs `/terapie-rigenerative-...-esosomi-.../` vs `/il-plasma-ricco-di-piastrine-o-trombociti-prp/`. The hub duplicates both spokes.
- **Laser, skin:** `/laserterapia-dermatologica/` vs `/terapia-fotodinamica/`. Both cover dermatologic PDT for AK, Bowen's disease and BCC.

**Recommendation**
1. Merge `/agopuntura-classica-del-corpo-con-aghi-o-laser/` into `/agopuntura/` (301), or rewrite it to be about something genuinely different (session walk-through, point selection, the doctor's protocol), with at least 500 unique words.
2. Cut `/medicina-rigenerativa/` down to a real hub (overview, an evidence-level table per therapy, links out) and move the PBM, exosome and PRP detail to the spokes.
3. Give PDT one home: `/terapia-fotodinamica/`. Make the dermatology laser page link to it instead of repeating it.
4. Expand each invasive-laser page's unique content with evidence and risks (H1), or combine the three into one "Laserterapia invasiva" page with sections if there is not enough unique material.

**How we'd know it failed:** after the change, re-running the shingle analysis still shows any sibling pair with Jaccard above 0.20 or any service page under 400 unique-sentence words; or GSC shows two IT URLs taking impressions for the same query (for example "agopuntura lugano") over 28 days.

---

### M5 (Medium): credentials are hard to verify

**Evidence**
- There is no "Il medico" / "Chi sono" page. The bio is a homepage section. The `Physician` JSON-LD `url` points to the homepage, and the byline on 20 pages is plain text with no link.
- The homepage "Formazione" timeline lists 2006, 2013, 2015, 2018 and 2019, but has no SSIPM (interventional pain) entry. `/reumatologo/` claims "qualifiche in medicina manuale (SAMM), terapia interventistica del dolore (SSIPM), sonografia (SGUM) e agopuntura-MTC (ASA)". The homepage "Affiliazioni" lists SSMFR, SAMM and SACAM only.
- No links to MedReg, the FMH doctor finder, the SIWF certificate listings or the society member directories. The GLN appears only on `/note-legali/`.
- The name appears in 6 forms: "Dott. med. univ." (26), "Dr. med. univ." (25), "Dr Zeljko Djordjevic" (51, FR/EN bylines), "Dr med. univ." (4), "Dott." (1) and "Dr." (1).
- "20 anni di pratica clinica dal 2006" is hard-coded and will go stale.

**Recommendation:** create `/dott-zeljko-djordjevic/` (with translations) containing: photo; FMH title with year; each SIWF certificate (SAMM, SSIPM, SGUM, ASA) with year and a link to where it can be verified; the GLN linked to the MedReg search; society memberships linked; the Zürich (Sternen) role; languages; and a "come lavoro" first-person section. Link every byline to it and point `Physician.url` at it (coordinate with the schema agent). Standardise on "Dr. med. univ. Zeljko Djordjevic" in DE/FR/EN and "Dott. med. univ." in IT.
**How we'd know it failed:** bylines are still unlinked; the physician page does not list SSIPM and SGUM with years; the GLN still appears only on the legal notice.

---

### M6 (Medium): gaps in condition-focused content

**Evidence:** of the 24 pages per language, none is a condition page. Conditions appear only as list items (`/reumatologo/`: "Ernia del disco e lombosciatalgia", "Cervicalgia e dorsalgia croniche", "Artrosi di ginocchio, anca, mano e spalla", "Gomito del tennista", "Fibromialgia"; `/agopuntura/`: "Cefalea tensiva ed emicrania"). There is also no "terapia del dolore" page, although it is the homepage's lead keyword: the homepage card "Terapia del dolore →" links to `/terapia-interventistica-del-dolore/`, whose title is "Interventistica del dolore Lugano".

**Recommendation:** build 5-7 IT condition pages first, each evidence-led and translated only after IT is validated:
- mal di schiena / lombalgia e sciatalgia
- cervicalgia
- artrosi del ginocchio
- dolore di spalla / tendinopatie
- epicondilite
- emicrania e cefalea tensiva
- fibromialgia

Each page should cover symptoms, red flags ("quando andare in Pronto Soccorso / EOC"), diagnosis in the practice, an evidence-graded list of options that includes ones the practice does not offer (exercise, physiotherapy, medication), what the practice offers with honest evidence levels, cost, and links to the relevant therapy pages. Add a "Terapia del dolore a Lugano" pillar page, or retitle the interventional page. These pages must not become doorway pages: no city or condition spinning, and a minimum of about 800 unique words each.
**How we'd know it failed:** 90 days after publishing, GSC shows fewer than about 50 impressions per page for its main condition + Lugano query; or the pages share more than 30% of their shingles with each other.

---

### M7 (Medium): internal inconsistencies and service scope

- Homepage: "Agopuntura laser non invasiva: **Indicata nell'osteoartrite avanzata e nel recupero rapido dopo intervento artroscopico**". The laser-acupuncture page says "Gli studi sul laser sono meno numerosi: per molti quadri gli aghi restano la prima scelta" and makes no osteoarthritis or arthroscopy claim.
- Homepage: "Ecografia muscolo-scheletrica: Diagnostica per immagini in sede, **con laboratorio interno** e partner esterno per referti rapidi". The ultrasound page says "L'ecografia non è un esame di laboratorio".
- `/reumatologo/` alone mentions "Test di funzionalità polmonare ... scambi gassosi e capacità di sforzo fisico", "Allenamento neuromuscolare HUBER 360" and "Laboratorio interno". Lung-function and exercise testing are outside PMR scope for a practice open 2.5 days a week, and the privacy page says "Lo studio di Lugano non usa laboratorio, imaging ... come canali di questo sito". Confirm these services are delivered **in Lugano** and not at the Zürich practice.

**Recommendation:** align the homepage card text with the service pages, and remove any service not delivered in Lugano or label it "presso Arztpraxis Sternen, Zurigo".
**How we'd know it failed:** the homepage still contains "osteoartrite avanzata" or "laboratorio interno" in the ultrasound card; the lung-function tests stay on the page with no location note.

---

### M8 (Medium): skin-cancer PDT with no stated diagnostic prerequisite

`/terapia-fotodinamica/` and `/laserterapia-dermatologica/` list "Cheratosi attiniche", "Malattia di Bowen (carcinoma squamocellulare in situ)" and "Carcinomi basocellulari superficiali". The PDT page adds "Nota importante ... non sostituisce le terapie oncologiche", which helps. Neither page says that the lesion must be diagnosed histologically or by a dermatologist first, or who does the follow-up. For a PMR specialist to present skin-cancer treatment is a scope and trust issue.
**Recommendation:** add "Trattiamo solo lesioni con diagnosi istologica/dermatologica confermata, su indicazione del dermatologo curante, che segue anche i controlli", or drop the oncologic indications.
**How we'd know it failed:** the pages still list BCC or Bowen's disease with no mention of "istologic" / "dermatolog" as a prerequisite.

---

### L1-L6 (Low)

- **L1, non-answers:** 12 of 20 service pages answer "Quante sedute servono?" with "Il numero di sedute si decide con lei in visita" or "Dipende dal disturbo". Only PDT gives a session length. Give the doctor's usual ranges (for example, acupuncture "di solito 6-10 sedute di 30-45 minuti, rivalutazione dopo 4-5"). It is an experience signal and a quotable passage. *Failed if:* a regex for digits near "sedute" still finds none on 10+ pages.
- **L2, title and H1 wording:** see section 6.
- **L3, `description-echoes-title`:** 23 of 96 pages (for example "Agopuntura addominale a Lugano: ..."). This is secondary: the tool flags no templating and no shared CTA. Vary the openings when rewriting the M1 metas.
- **L4, legacy slugs:** `/agopuntura-classica-del-corpo-con-aghi-o-laser/` (laser has moved out), `/laserterapia-locale-non-invasiva-e-lagopuntura/` (title "Agopuntura laser senza aghi"), and slugs of 60-110 characters. Change them only as part of M4 consolidation, with 301s and all four hreflang sets updated.
- **L5, boilerplate headings in `<main>`:** every service page ends with the H2 "Non è sicuro quale trattamento fa per lei?" plus 4 H3s, and the H2 "A Lugano, a due passi da USI e EOC" plus 5 H3s (Indirizzo, Orari, Telefono, WhatsApp, Email). That is 10-12 of the 31-46 headings on each page, and 31-48% of each sub-page's shingles are shared. Demote the address block to non-heading markup or move it outside `<main>`.
- **L6, jargon:** RME (on 23 pages), HIN (23), SGUM (4), SSIPM (2), aPDT, RAC and PBM are never expanded. Expand each on first use.

---

## 5. Readability

The indices are approximate: they use heuristic syllable counts, and only `<p>`/`<li>` text inside `<main>`, excluding references.

| Lang | Index | Median | Range | Median sentence length (words) |
|---|---|---|---|---|
| IT | Gulpease | 59 | 52 (`/reumatologo/`) to 66 (`/note-legali/`) | 11.5 |
| DE | Flesch-Amstad | 43 | 31-50 | 10.9 |
| FR | Kandel-Moles | 39 | 22-54 | 13.1 |
| EN | Flesch Reading Ease | 40 | 21-54 | 12.3 |

Sentences are short. The difficulty comes from terminology (catheter, fotosensibilizzatore, viscosupplementazione, esosomi) and unexplained acronyms (L6). The toughest IT pages are `/reumatologo/` (52), `/medicina-rigenerativa/` (52.5), `/terapia-fotodinamica/` (53) and `/laserterapia/` (54.5). They are fine for a high-school-educated adult, but they would benefit from a two-sentence plain-language summary at the top.

---

## 6. On-Page SEO (score 78 / 100)

| Check | Result |
|---|---|
| Title length | 29-60 characters on all 96 pages. Only 5 are under 30 (Privacy/Contact variants). None over 60. |
| Title uniqueness | Unique within each language. Across languages: "Privacy \| Swiss Centro Medico" (IT and EN) and "Contact \| Swiss Centro Medico" (FR and EN). Harmless because hreflang separates them. |
| Title pattern | Consistent "{Service} (a/in) Lugano \| Swiss Centro Medico". The template issue in the old audit is fixed. |
| Location | "Lugano" is in 84 of 96 titles. Missing only on privacy, legal and contact pages (12). |
| Meta length | 121-156 characters. Only 1 over 155 (FR PDT, 156). |
| Meta uniqueness and templating | 0 duplicates; `site_risk: low`, `templated_ratio: 0.0`, no shared CTA. 23 pages flagged `description-echoes-title` (secondary). |
| H1 | Exactly one per page on all 96. It matches the title minus the brand. |
| Heading hierarchy | No skipped levels. 28-46 headings per page, 10-12 of them boilerplate (L5). |
| Internal linking | Hub and spoke works: hubs receive 20 in-`<main>` links each. Weakest spokes: `/agopuntura-addominale/` (2 in-content inlinks), `/medicina-manuale/`, `/terapia-fotodinamica/`, `/infiltrazioni-acido-ialuronico/` and the exosome page (3 each). Anchors are descriptive but include meta anchors ("pagina di laser-agopuntura", "pagina di agopuntura"). The homepage "Tutte le terapie" list shows "Agopuntura laser senza aghi" twice. |

**Title and H1 issues**
- **H4:** "Reumatologo a Lugano" (and DE/FR/EN) is a specialist-title risk. Suggested replacement: "Reumatismi e dolore articolare a Lugano | Swiss Centro Medico".
- **Grammar:** "Laser dermatologica a Lugano". In Italian, *laser* is masculine. Use "Laserterapia dermatologica Lugano | Swiss Centro Medico" (55 characters). The homepage list label has the same error.
- **Jargon and query mismatch:** "Interventistica del dolore Lugano" (patients search "terapia del dolore", "infiltrazioni"). Suggested: "Infiltrazioni ecoguidate a Lugano | Swiss Centro Medico" (55), with "Terapia del dolore" kept for a pillar page (M6). "PBM ed esosomi a Lugano" could become "Esosomi e fotobiomodulazione Lugano | Swiss Centro Medico" (57). "Échographie MSK à Lugano" should spell out "musculo-squelettique".
- **Homepage vs hub:** the homepage title "Terapia del Dolore e Agopuntura Lugano" competes with `/agopuntura/` for "agopuntura Lugano". Suggested: "Terapia del dolore a Lugano | Swiss Centro Medico" (49), or a doctor-name variant such as "Terapia del dolore Lugano | Dott. Djordjevic FMH" (48), with acupuncture left to `/agopuntura/`. Check GSC query overlap before changing anything.
- **FR titles drop prepositions and specificity:** "Thérapie interventionnelle Lugano" (of what?), "Douleur et acupuncture à Lugano".
- **Contact pages:** "Contatti | Swiss Centro Medico". Suggested: "Contatti e orari, studio a Lugano | Swiss Centro Medico" (55).
- **Metas:** see M1 (5 metas are stronger than, or contradict, their bodies).

**How we'd know On-Page work failed:** re-running `metadata_template.py` shows `site_risk` above low; any title over 60 characters; GSC shows the homepage and `/agopuntura/` splitting clicks on "agopuntura lugano" for 28 days after the change.

---

## 7. AI citation readiness (68 / 100)

**Strong, self-contained, quotable passages already exist:**
- `/agopuntura/`: "Revisione Cochrane 2016 · 22 studi, 4985 persone. Emicrania: Attacchi almeno dimezzati in 41 pazienti su 100 dopo l'agopuntura, contro 17 su 100 senza agopuntura."
- `/agopuntura/`: "In uno studio su 229 230 pazienti trattati da medici, 8,6 su 100 hanno riportato almeno un effetto indesiderato ... Le complicazioni serie sono state rarissime."
- `/il-plasma-ricco-di-piastrine-o-trombociti-prp/`: "In uno studio randomizzato sul PRP nell'artrosi del ginocchio il miglioramento è comparso entro 2-3 settimane ed è durato fino al controllo a 6 mesi."
- `/infiltrazioni-acido-ialuronico/`: the ACR 2019 statement.
- Every service page opens with a one-sentence definition, a byline and a review date.

**Weaknesses**
1. Many passages only make sense on the page ("Quella tecnica sta sulla pagina intra-articolare", "01 Il catetere Un catetere porta ..."). Cards and list items are run-in without sentence punctuation, so extracted chunks lose their subject.
2. The facts patients ask AI about most are missing: price, whether LAMal covers it, typical number of sessions, session length (M3, L1).
3. The most promotional claims are in the most machine-read fields: meta and OG descriptions, `llms.txt`, JSON-LD `description` (M1, C1).
4. There is no physician page to anchor who the author is (M5).

**Recommendation:** give each service page a two- or three-sentence "In breve" summary that states what the treatment is, who it is for, the evidence level, number of sessions, cost and coverage. Rewrite each "Cosa dicono gli studi" item so it names its subject ("Per l'emicrania, una revisione Cochrane del 2016 ...").
**How we'd know it failed:** 60 days later, AI answers (ChatGPT, Perplexity, Google AI Mode) for "quanto costa agopuntura Lugano" or "laser endovenoso Lugano" still quote the meta or `llms.txt` wording rather than the page body, or still fail to cite the site.

---

## 8. Translation parity and quality (sampled: DE `/de/rheumatologe/`, FR `/fr/therapie-photodynamique/`, EN `/en/pbm-and-exosomes/`)

- **Structure:** full parity. Heading counts, DOI counts and review dates are identical for all 24 page pairs. Word counts are within +/-10% of IT, with FR about 8% longer as expected.
- **Quality:** fluent and faithful. The DE uses Swiss orthography and correct specialist wording ("Facharzt für Physikalische Medizin und Rehabilitation FMH").
- **Problems carried over from IT:** all IT defects appear in every language, including the C1 claims, the "Rheumatologe/Rhumatologue/Rheumatologist" title, "double membrane", and the editorial artifacts. Fix IT first and then re-translate. Do not patch the translations separately.
- **Name forms:** FR and EN bylines say "Dr Zeljko Djordjevic" and drop "med. univ." (M5).
- **Local fit:** the DE and FR versions repeat the Ticino-specific insurance text. That is correct for a Lugano practice, but German-speaking visitors are likely Zürich patients (the Sternen practice). A short "Also in Zürich-Oerlikon" note on the DE contact page would help.

---

## 9. Claims in the earlier SERP-only audit, checked against the current site

| Old claim (`seo-audit/swisscentromedico.ch.md`) | Current status |
|---|---|
| "Inner-page titles drop the location and use a different template ('Agopuntura auricolare RAC - Swiss Centro Medico')" | **Stale.** It is now "Agopuntura RAC a Lugano \| Swiss Centro Medico", and the template is consistent across all 96 pages. |
| Homepage title 62 characters ("... a Lugano ...") | **Fixed.** It is now 60 characters ("Terapia del Dolore e Agopuntura Lugano \| Swiss Centro Medico"). |
| "Service pages may not exist" (only 2 URLs indexed) | **Stale for existence:** 20 service pages per language exist. Indexation is not verifiable here (technical/GSC lane). |
| "Add MedicalClinic + Physician JSON-LD" | **Done.** Present on all 96 pages (validation is the schema agent's job). |
| "Check whether a German version exists" | **Done.** DE, FR and EN exist with hreflang. |
| "Add author and 'medically reviewed by' bylines with dates" | **Done** (visible and in JSON-LD). |
| "Show qualifications, GLN, MEBEKO recognition" | **Partly done.** The GLN is on the legal notice. There is no MEBEKO mention or verification links (M5). |
| "Standardise the name as 'Dr. med. univ. Zeljko Djordjevic'" | **Still open.** 6 variants on the site (M5). |
| "Put the doctor's name in homepage title/H1 area" | **Still open.** The name is in the hero text and an H2, not in the title or H1. |
| Condition pages (mal di schiena, cervicalgia, fibromialgia) | **Still open** (M6). |

---

## 10. Prioritised plan

1. **Within a week (YMYL risk):** C1 (remove the IV aPDT claims), H4 (rheumatology title), M1 (5 metas, OG and `llms.txt`), and the H2 exosome fixes (source and status box, "double membrane" error).
2. **Within 2-4 weeks:** H1 (invasive laser evidence and risks), H3 (acupuncture indication tiers, RAC wording), H5 (reframe the network badges, disclose the COI), H6 (editorial pass in 4 languages), M3 (prices and LAMal statement), M7 and M8.
3. **Within 1-2 months:** M5 (physician page with verification links), M2 (expand the interventional pain page), M4 (consolidate acupuncture and regenerative content).
4. **Within 2-4 months:** M6 (condition pages and pain pillar, IT first, reviewed by the doctor, then translated), L1-L6.
5. **Governance:** every claim added to the site must be traceable to a cited clinical source of adequate quality. Metas, OG, JSON-LD descriptions and `llms.txt` should be generated from the page body. Only the doctor may change the review date, and only after an actual review.

---

## 11. Structured findings (for `audit-data.json`, category "Content Quality")

```json
{
  "category": "Content Quality",
  "scores": {
    "content_quality": 58,
    "eeat": {"overall": 54, "experience": 55, "expertise": 60, "authoritativeness": 45, "trustworthiness": 55},
    "on_page_seo": 78,
    "ai_citation_readiness": 68,
    "readability_it_gulpease_median": 59
  },
  "metadata_template": {"pages_checked": 96, "site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}, "description_echoes_title": 23},
  "findings": [
    {"id": "C1", "severity": "critical", "title": "IV antimicrobial PDT claims (bacterial/viral/parasitic, no antibiotics, curcumin/hypericin infusion) unsupported by cited sources", "urls": ["/terapia-fotodinamica/", "/de/photodynamische-therapie/", "/fr/therapie-photodynamique/", "/en/photodynamic-therapy/", "/laserterapia/", "/llms.txt"]},
    {"id": "H1", "severity": "high", "title": "Invasive laser pages: no clinical evidence, IV laser without indication, 'rigenerazione cartilaginea' claim, minimal risk disclosure", "urls": ["/laserterapia-endovenosa/", "/laserterapia-interstiziale/", "/laserterapia-intra-articolare/"]},
    {"id": "H2", "severity": "high", "title": "Exosomes: source/product/regulatory status undisclosed; 5-volunteer COI study; 'double membrane' error; meta claims organ regeneration", "urls": ["/terapie-rigenerative-avanzate-con-pbm-ed-esosomi-stimolare-la-rigenerazione-cellulare/", "/medicina-rigenerativa/"]},
    {"id": "H3", "severity": "high", "title": "Acupuncture indication list (cardiac, diabetes, thyroid, fertility, oncology) beyond evidence; RAC diagnostic 'preciso' claim", "urls": ["/agopuntura/", "/agopuntura-auricolare-rac/"]},
    {"id": "H4", "severity": "high", "title": "'Reumatologo' specialist title used by FMH PMR specialist (4 languages)", "urls": ["/reumatologo/", "/de/rheumatologe/", "/fr/rhumatologue/", "/en/rheumatologist/"]},
    {"id": "H5", "severity": "high", "title": "Device-maker network (ISLA / European Laser Clinics, 'weber-michael-dr-logo') presented as credential; undisclosed COI in Weber 2024 citation", "urls": ["sitewide", "/laserterapia/"]},
    {"id": "H6", "severity": "high", "title": "Editorial/AI-revision artifacts visible to patients ('il sito attribuisce', 'studi con DOI', 'Perché non parlate più della colonna?')", "urls": ["/laserterapia-interstiziale/", "/laserterapia-endovenosa/", "/laserterapia-dermatologica/", "/medicina-manuale/", "/ecografia-muscolo-scheletrica/"]},
    {"id": "M1", "severity": "medium", "title": "Meta/OG/llms.txt descriptions more promotional than or contradicting bodies", "urls": ["/laserterapia-dermatologica/", "/medicina-rigenerativa/", "/laserterapia-in-combinazione-con-plasma-ricco-di-piastrine-prp-e-laser-per-il-ringiovanimento-cutaneo/", "/laserterapia/"]},
    {"id": "M2", "severity": "medium", "title": "Interventional pain page thin (371 unique words); spinal-injection risks and agents missing", "urls": ["/terapia-interventistica-del-dolore/"]},
    {"id": "M3", "severity": "medium", "title": "No prices; LAMal/KVG status implicit; RME unexplained", "urls": ["sitewide"]},
    {"id": "M4", "severity": "medium", "title": "Thin unique content (248-340 unique words) and sibling overlap: acupuncture, regenerative, dermatology/PDT", "urls": ["/agopuntura-classica-del-corpo-con-aghi-o-laser/", "/agopuntura-addominale/", "/laserterapia-intra-articolare/", "/laserterapia-locale-non-invasiva-e-lagopuntura/", "/medicina-rigenerativa/"]},
    {"id": "M5", "severity": "medium", "title": "No physician page; credentials unlinked/inconsistent; 6 name variants", "urls": ["/", "/reumatologo/"]},
    {"id": "M6", "severity": "medium", "title": "No condition pages; no 'terapia del dolore' landing page", "urls": ["sitewide"]},
    {"id": "M7", "severity": "medium", "title": "Homepage vs service-page contradictions; lung-function/HUBER/lab scope unverified for Lugano", "urls": ["/", "/reumatologo/"]},
    {"id": "M8", "severity": "medium", "title": "Skin-cancer PDT without histology/dermatologist prerequisite", "urls": ["/terapia-fotodinamica/", "/laserterapia-dermatologica/"]},
    {"id": "L1", "severity": "low", "title": "Non-answers to 'Quante sedute servono?' on 12 pages", "urls": ["service pages"]},
    {"id": "L2", "severity": "low", "title": "Title wording: 'Laser dermatologica' grammar, jargon, contact titles w/o Lugano", "urls": ["/laserterapia-dermatologica/", "/terapia-interventistica-del-dolore/", "/contatti/"]},
    {"id": "L3", "severity": "low", "title": "description-echoes-title on 23/96 (not templated)", "urls": ["various"]},
    {"id": "L4", "severity": "low", "title": "Legacy slugs mismatch titles", "urls": ["/agopuntura-classica-del-corpo-con-aghi-o-laser/", "/laserterapia-locale-non-invasiva-e-lagopuntura/"]},
    {"id": "L5", "severity": "low", "title": "Boilerplate heading blocks in main (31-48% shared shingles)", "urls": ["service pages"]},
    {"id": "L6", "severity": "low", "title": "Unexpanded acronyms (RME, HIN, SGUM, SSIPM, aPDT, RAC, PBM)", "urls": ["sitewide"]},
    {"id": "I1", "severity": "info", "title": "FAQ blocks present without FAQPage markup; keep (FAQ rich results retired 2026-05-07)", "urls": ["service pages"]}
  ]
}
```
