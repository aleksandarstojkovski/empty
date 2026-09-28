# GEO / AI Search Readiness: swisscentromedico.ch

**Date:** 2026-09-28. **Scope:** AI crawler access, llms.txt, passage citability, entity clarity, brand mentions, and platform notes.
**Not covered here:** agent browsing, the accessibility tree, WebMCP and Markdown delivery. The seo-agentic agent covers those.
**Inputs:** the local crawl in `raw/` (96 URLs: 24 pages × IT/DE/FR/EN) plus live curl checks run today. Directory and brand checks were fetched live.
**Limits on SERP checks:**
- Bing returned an empty page to this datacenter client, and DuckDuckGo returned a captcha.
- Reddit returned 403, and Wikidata rate-limited after two queries.
- SERP and brand observations are therefore directional only. None were made from google.ch.

## GEO Readiness Score: 68 / 100

| Dimension | Weight | Score | Weighted | Basis |
|---|---|---|---|---|
| Citability | 25% | 68 | 17.0 | **Strengths:** physician byline and "reviewed/updated" date on every service page, DOI-backed sources, specific figures, honest hedging. **Weaknesses:** very short passages, 42 of 97 EN FAQ questions don't name the treatment, 17 of 20 lead sentences are verbless fragments, no concrete cost or session answers. |
| Structural readability | 20% | 75 | 15.0 | Clean H1-H3, question-shaped FAQ headings and SSR `<main>`. Content is broken into many 5-25-word card bullets, and there are no tables. |
| Multi-modal | 15% | 50 | 7.5 | 27 unique images, many original (Sept 2026) with descriptive alt text. No video, no tables, no data figures. |
| Authority & brand | 20% | 52 | 10.4 | **Strengths:** on-site E-E-A-T (FMH title, SAMM/SSIPM/SGUM/ASA, memberships, 12 guideline citations on /reumatologo/). **Weaknesses:** "Rheumatologist" framing, the brand and physician names collide with other entities, directory data is inconsistent, zero YouTube/Reddit footprint, and no Wikidata item. |
| Technical accessibility | 20% | 92 | 18.4 | All 18 tested AI and search UAs get an identical 200 response. robots.txt is open, pages are static SSR (no JS dependency), LCP is about 1 s, llms.txt is valid and complete, sitemap lastmod and hreflang are present. |
| **Total** | | | **68.3** | |

### Platform-specific estimates (directional)

| Platform | Score | What governs it here | Main gap |
|---|---|---|---|
| Google AI Overviews / AI Mode | 64 | **Googlebot** (allowed); Google-Extended has no effect on AIO. For local "doctor in Lugano" answers, the Google Business Profile carries a lot of weight. | Brand/entity ambiguity. The GBP name is "Swiss centro medico" (lowercase, per the `hasMap` place URL). AIO holds YMYL answers to a stricter bar. llms.txt is ignored by Google. |
| ChatGPT Search | 60 | **OAI-SearchBot** (allowed) plus the Bing index; ChatGPT-User fetches on demand (allowed). GPTBot is training only. | Few third-party corroborating mentions. Bing Webmaster Tools and IndexNow status are unverified. Generic FAQ passages. |
| Perplexity | 62 | **PerplexityBot** (allowed); Perplexity-User (allowed). | It rewards pages with DOI citations and fresh dates, which the site has. It also leans on Reddit and YouTube, where the practice has no presence. |
| Bing Copilot | 60 | **Bingbot** (allowed). | No `msvalidate` tag on the home page (BWT may be verified another way). local.ch and Bing Places data are out of sync: wrong hours and a different name format. |
| Claude (search) | 64 | **Claude-SearchBot** (allowed); Claude-User (allowed). ClaudeBot is training only. | Same content and entity gaps as above. |

---

## 1. AI crawler access

### 1.1 robots.txt stance: Info (no action)

`robots.txt` has one `User-Agent: *` group with `Allow: /`. It disallows only WordPress leftovers and redirect paths (`/prenota/`, `/de/termin/`, `/fr/rendez-vous/`, `/en/book/`, `/whatsapp/`, `/e/`, `/domande/`, `/report/`, `/admin/`). None of these hold citable content: `/prenota/` returns 302 to OneDoc, and `/domande/` and `/report/` return 301 to `/admin/`. There are no AI-bot-specific rules.

| Crawler | What it governs | robots.txt | Live response (UA test) |
|---|---|---|---|
| OAI-SearchBot | ChatGPT Search citations | Allowed | 200, identical bytes |
| ChatGPT-User | ChatGPT on-demand fetch | Allowed | 200, identical |
| GPTBot | OpenAI training only, not ChatGPT Search | Allowed | 200, identical |
| Claude-SearchBot | Claude search citations | Allowed | 200, identical |
| Claude-User | Claude on-demand fetch | Allowed | 200, identical |
| ClaudeBot | Anthropic training only | Allowed | 200, identical |
| PerplexityBot | Perplexity index/citations | Allowed | 200, identical |
| Perplexity-User | Perplexity on-demand fetch | Allowed | 200, identical |
| Googlebot | Google Search, AI Overviews, AI Mode | Allowed | 200, identical |
| Google-Extended | Gemini/Vertex training and grounding only; not Search/AIO | Allowed | n/a (robots token only; UA test 200) |
| Bingbot | Bing and Copilot, and feeds ChatGPT Search | Allowed | 200, identical |
| Applebot | Siri/Spotlight/Safari | Allowed | 200, identical |
| Applebot-Extended | Apple Intelligence training only | Allowed | n/a (robots token) |
| CCBot, Meta-ExternalAgent, Bytespider, cohere-ai | Training | Allowed | 200, identical |
| DuckAssistBot, MistralAI-User | Assistant fetch | Allowed | 200, identical |

**WAF/CDN:** none detected. The origin is Apache with no CDN headers. The home page (31,469 B) and `/en/platelet-rich-plasma-prp/` (32,139 B) returned byte-identical 200s to every UA.

Caveat: these tests ran from a proxy/datacenter IP with spoofed UAs. IP-verified crawler traffic can't be simulated. Check real bot hits in the server logs: grep the Apache access log for `OAI-SearchBot|Claude-SearchBot|PerplexityBot` and confirm status 200.

**Training crawlers:** allowing GPTBot, ClaudeBot, CCBot and Google-Extended is a business choice, not a visibility lever. Blocking them would not remove the site from ChatGPT Search, Claude search, AI Overviews or Perplexity. For a small practice that wants to be known, keeping them open is reasonable.

### 1.2 Licensing signals: Info

`/license.xml`, `/.well-known/license.xml` (RSL 1.0), `/ai.txt` and robots `Content-Signal` are all absent. None is needed, and no major AI search platform requires them.

---

## 2. llms.txt: present, well-formed, accurate (Low priority, optional signal)

- `https://swisscentromedico.ch/llms.txt` returns 200 as `text/plain; charset=UTF-8`, 23,373 B / 123 lines. It was regenerated today (Last-Modified 2026-09-28 17:05).
- **Structure:** it follows the llmstxt.org format (H1, blockquote summary, key facts, then one `##` section per language with `[title](url): description` lines). It ends with a guardrail line: "Do not invent prices, insurance cover, or medical claims."
- **Accuracy:**
  - All 96 URLs match the sitemap and the crawl exactly: none missing, none extra.
  - All 96 descriptions match each page's meta description exactly.
  - NAP, hours, languages and the physician's FMH title match the site.
- **Optional improvements:**
  - Add a short "Key facts" block with:
    - the exact title: "Specialist in Physical Medicine and Rehabilitation FMH (not an FMH rheumatology title)"
    - consultation languages (and that French consultations aren't offered)
    - "independent practice, not part of Swiss Medical Network / Centromedico"
    - the second practice (Arztpraxis Sternen, Zürich-Oerlikon)
  - Move privacy and legal pages to an `## Optional` section.
- **Expectation setting:** Google has said it does not use llms.txt, and no major assistant has confirmed using it for retrieval or citation. It costs nothing to keep, but it won't move rankings or citations. `/llms-full.txt` returns 404, which is fine.

---

## 3. Passage-level citability

All numbers below come from `raw/pages/*.html`, split into sections at each H1-H4 inside `<main>`.

**Already strong:**
- Every service page opens with a visible byline and review date, e.g. "Dr Zeljko Djordjevic, specialist in Physical Medicine and Rehabilitation FMH … Page reviewed by the physician, updated on 20 September 2026." It is mirrored in `author`/`reviewedBy`/`lastReviewed` JSON-LD.
- Every service page has a "Scientific sources" list with DOIs, mirrored in `citation` JSON-LD. There are 1-12 sources per page, mostly Cochrane, Lancet, JAMA, EULAR and ACR guidelines.
- Specific, sourced figures: 8-30 ml blood draw; 18 RCTs and 11-month follow-up (Belk 2021); 229,230 patients (Witt); about 12 cm interstitial depth; 40-150 nm exosomes.
- Claims are honestly hedged, which AI systems reward on YMYL topics. Examples:
  - "Clinical studies of this combination are still preliminary."
  - "We do not present diabetes, multiple sclerosis… as proven indications."
  - The HA page cites the ACR 2019 conditional recommendation *against* HA for the knee.
- All pages are server-rendered. A medical disclaimer appears on every service page.

### 3.1 FAQ questions and answers don't stand alone: High

- **Generic questions:** 42 of the 97 EN FAQ headings don't name the treatment ("Is it covered by insurance?" ×15, "How many sessions are needed?" ×11, "Is it painful?" ×10, "Can it be combined with other therapies?" ×4, "Is the treatment painful?" ×2). The same pattern repeats in IT/DE/FR (about 170 headings in total).
  - Once extracted, "Is it painful? Local anaesthetic is used at the catheter entry point." (9 words) no longer says what "it" is or where.
- **Identical insurance answer:** the insurance answer is the same text on all 20 service pages in each language (80 copies). Retrieval systems either collapse the copies or pick one arbitrarily.
- **Non-answers:** "How many sessions" answers are non-answers ("decided with you at the visit"). Cost is never answered with a number or range. Cost and session count are the most common patient questions to assistants about private treatments, so the assistant will cite OneDoc, comparison sites or competitors instead.

**Fix:**
- Name the treatment and the place in the question, e.g. "Is PRP injection painful?", "How many acupuncture sessions are usually needed?", "Is laser therapy in Lugano covered by complementary insurance?".
- Start each answer with a sentence that restates the subject, e.g. "PRP injection at Swiss Centro Medico in Lugano…".
- Give typical ranges where the evidence or protocols support them, with a source, e.g. the session counts used in the cited acupuncture trials.
- Write one treatment-specific insurance sentence per page, e.g. "Acupuncture is recognised by Visana and billed via RME/ASA…". Link to a single insurance/cost page for the rest.

**How we'd know it failed:** 8-12 weeks after the change, GSC still shows no growth in impressions for question-form queries on service pages, and a fixed prompt panel still doesn't cite the page.
- Question-form queries: "quante sedute agopuntura", "PRP schmerzhaft", "is acupuncture covered by insurance Switzerland".
- Prompt panel: ChatGPT, Perplexity, Google AI Mode and Copilot; IT/DE/EN.

**Leading indicator:** GSC impressions and clicks for queries containing a question word (come/quanto/quante/wie/wieviel/how/is/combien) on the 80 service URLs, tracked weekly.

### 3.2 Lead sentences are fragments, not definitions: Medium

Only 3 of 20 service pages open with a complete definitional sentence in all languages: laser therapy, regenerative medicine and photodynamic therapy ("Laser therapy uses light energy to…").

The other 17 open with verbless fragments that usually omit the treatment's name:
- PRP: "An autologous preparation from the patient's blood…"
- Intra-articular laser: "Direct irradiation of joint tissue with a catheter…"
- Classical body acupuncture: "Insertion of sterile single-use needles…"
- Interventional pain therapy: "After the specialist visit: aspiration and injection…"
- Rheumatology: "We assess and treat…"

The lead is the passage most likely to be lifted into an AI answer for "what is X".

**Fix:** use the pattern "[Treatment] is [definition]. At Swiss Centro Medico in Lugano, Dr Zeljko Djordjevic uses it for [indications], after [assessment]." Keep it to 40-60 words, and write it in the IT master first, then DE/FR/EN.

**How we'd know it failed:** "what is intra-articular laser therapy / cos'è la laserterapia intra-articolare" style prompts still cite other sources after 8-12 weeks.

**Leading indicator:** featured-snippet or AIO appearances for "cos'è / was ist / what is + treatment" queries in GSC (Search appearance) and manual checks.

### 3.3 Passages are short and fragmented: Low (heuristic)

- Median section length is 23 words, and 1,641 of 2,144 service-page sections are under 40 words.
- Only 1 section falls in the 130-170-word band that third parties suggest; Google says content does not need chunking for AI.
- The fragmentation comes from card and bullet layouts ("01 · Draw and centrifugation…"). It isn't a defect in itself.
- The real gap is the lack of one or two cohesive 100-170-word explanatory paragraphs per service page. Each should cover what the treatment is, who it's for, what the evidence says, and what happens at the visit.

**Fix:** add one "In short" paragraph per service page under the H1 or before the FAQ, written as prose rather than bullets.

**How we'd know it failed:** AI answers still quote directory or competitor descriptions for the treatment.

**Leading indicator:** the share of prompt-panel answers that quote or paraphrase the site's own wording.

### 3.4 Evidence quality varies by page: Medium (YMYL)

- **Strong:** rheumatology (12 guideline-level sources), acupuncture (Cochrane and an IPD meta-analysis), PRP/HA (RCT, meta-analysis, ACR guideline), manual medicine (BMJ and JAMA reviews).
- **Weak:** the intravenous, interstitial and intra-articular laser pages cite only a mechanism review (Hamblin 2017) and a 2002 contraindications note. None of these sources is a clinical study of the technique. AI systems are conservative on YMYL and will not cite these pages for efficacy. That is acceptable, since the pages already avoid efficacy claims.
- **Undisclosed affiliation:** `/pbm-and-exosomes/` cites Weber M, et al. 2024, *Sch J App Med Sci*. This is a 5-volunteer case series in a low-tier journal by the laser-device company's founder. The site shows the "European Laser Clinics" (Dr. Michael Weber) logo on every page, but the affiliation isn't disclosed next to the citation.

**Fix:**
- Add a one-line disclosure next to that citation, e.g. "The practice is part of the European Laser Clinics network associated with the study's author."
- On the three invasive laser pages, add an explicit "Evidence status: limited / no controlled trials" line.

**How we'd know it failed:** AI answers describe these treatments as unproven *and* name the practice negatively, or refuse to mention it.

**Leading indicator:** prompt-panel answers to "is intravenous laser therapy effective" and "exosomes knee Lugano". Check whether the site is mentioned neutrally, or at all.

---

## 4. Entity clarity (re-assessed against the rebuilt site)

**Progress since the pre-rebuild audit:**
- A full MedicalClinic + Person/Physician graph now sits on all 96 pages, with `worksFor`/`employee`, credentials, `alumniOf`, `memberOf`, `knowsLanguage` and geo.
- NAP is identical on all 96 pages: phone 96/96, "Via Alessandro Volta 1" 96/96, email 96/96.
- The home pages (4 languages) link to Arztpraxis Sternen, and praxis-sternen.ch now links back to the Lugano practice. The old "citations split between Lugano and Zürich" issue is largely resolved.
- The old Zürich OneDoc doctor profile (`/pckbd/`) now redirects to a category page. The live OneDoc doctor profile (`/pc0jl/`) is Lugano-based and lists Italian.
- OneDoc's practice listing (`/ebd4o/`) links to the site.
- The home page's first sentence names the brand, the physician and the city: "Swiss Centro Medico is Dr Zeljko Djordjevic's practice in Lugano…".

### 4.1 "Rheumatologist in Lugano" framing conflicts with the physician's FMH title: High (YMYL, entity accuracy)

These elements present the practice as a rheumatologist:
- The title and H1 of `/reumatologo/`, `/de/rheumatologe/`, `/fr/rhumatologue/` and `/en/rheumatologist/`.
- `medicalSpecialty: Rheumatologic` on the Physician node.
- OneDoc listing "Reumatologia" as a specialty.

Every byline, the FAQ and MedReg-style credentials say "Specialist in Physical Medicine and Rehabilitation FMH". The site's own FAQ answers "What is Dr Djordjevic's specialty?" correctly. But an AI system that pulls the H1 alone may state that he is a rheumatologist. One that cross-checks registries may treat the page as inconsistent and avoid citing it.

In Switzerland, federal specialist titles are regulated and medical advertising must not mislead. The operator should confirm the wording with the FMH or the Ticino cantonal medical office. This is not legal advice.

**Fix:** keep the keyword but drop the personal-title claim.
- Title/H1: "Reumatologia a Lugano: visita per malattie reumatiche" / "Rheumatology consultation in Lugano".
- First sentence: "Dr Zeljko Djordjevic, specialist in Physical Medicine and Rehabilitation FMH, assesses and treats rheumatic and musculoskeletal conditions…".
- Physician `medicalSpecialty` stays Musculoskeletal. Put Rheumatologic on the service or page rather than the person. The schema agent owns the exact markup.

**How we'd know it failed:** prompt-panel answers to "Is Dr Djordjevic a rheumatologist?" / "reumatologo FMH Lugano" call him a rheumatologist FMH, or omit the site.

**Leading indicator:** entity-accuracy rate on 5 fixed identity prompts across 4 platforms, checked monthly (target 100% correct title).

### 4.2 Brand and physician name collisions; nothing disambiguates: High

- **Brand:** "Swiss Centro Medico" collides with Swiss Medical Network's "Centromedico" clinics in Lugano and the SBB "Centro medico – Stazione Lugano" (per the prior audit). A live YouTube search for "Swiss Centro Medico" returns 14 videos, all from Argentina's *Swiss Medical* group, none from this practice.
- **Physician:** a YouTube search for "Zeljko Djordjevic" is dominated by an unrelated Balkan podcast personality (Željko Đorđević, Atma Podcast).
- **On site:** no visible text disambiguates the practice. "Swiss Medical Network", "Centromedico" and "independent" appear 0 times. The MedicalClinic node has no `alternateName` or `description`.
- **Identifier:** the Physician node has no `identifier`, even though his GLN (7601003315226) is public (it appears in the Comparis URL used in `sameAs`).

**Fix:**
1. Add one visible sentence on the home and contact pages in each language: "Swiss Centro Medico is the independent practice of Dr. med. univ. Zeljko Djordjevic at Via Alessandro Volta 1, Lugano. It is not part of Swiss Medical Network's Centromedico."
2. MedicalClinic: add `alternateName` ("Swiss Centro Medico Lugano", "Swiss Centro Medico – Dr. med. univ. Zeljko Djordjevic") and a `description`.
3. Physician: add `identifier` (PropertyValue, propertyID "GLN", value 7601003315226) and a MedReg reference if a stable URL exists.
4. Put the plain name in `name` ("Zeljko Djordjevic") and keep "Dott. med. univ." in `honorificPrefix`. Right now `name` includes the honorific.

**How we'd know it failed:** brand prompts ("Swiss Centro Medico Lugano opinioni / orari / indirizzo") return Centromedico or Swiss Medical Network facts, or mix the two.

**Leading indicator:** brand-prompt accuracy in the monthly panel. Also track GSC brand-query CTR and whether the site ranks first for "Swiss Centro Medico" on google.ch. The prior audit found OneDoc above the site; this session couldn't re-verify that.

### 4.3 Directory data and sameAs are inconsistent: Medium

| Source | Name as shown | Hours | Notes |
|---|---|---|---|
| Site (all pages) | Swiss Centro Medico | Mon/Wed 08:00-16:30, Fri 08:00-13:30 | Reference |
| OneDoc practice `/ebd4o/` | Swiss Centro Medico | Matches | Links to site. **Missing from clinic `sameAs`.** |
| OneDoc doctor `/pc0jl/` | Dr. med. Zeljko Djordjevic | Matches | Category "agopuntore". Lists "Reumatologia". |
| local.ch | "Swiss centro medico- Dr.med. Zeljko Djordjevic" | **Mon/Wed/Fri 09:00-17:00 (wrong)** | Mobile 078 shown as "Telephone" in one block. **Not in `sameAs`.** |
| EMR/RME | "Swiss centro medico" | n/a | In `sameAs` of both clinic and physician. |
| Google Maps (from `hasMap`) | "Swiss centro medico" | not verified | Lowercase. |
| praxis-sternen.ch | Dr. med. univ. Zeljko Djordjevic | n/a | Cross-links to Lugano. Languages omit Italian. |
| Comparis | not verified (403 to bot) | | |

**sameAs mix-up:** the clinic's `sameAs` points to the doctor's OneDoc profile and the doctor's EMR profile, which are person pages. It leaves out the practice's own OneDoc listing and local.ch.

**Fix:**
- Clinic `sameAs`: OneDoc `/ebd4o/`, local.ch, search.ch, the Comparis institution page, Instagram, Facebook.
- Physician `sameAs`: OneDoc `/pc0jl/`, EMR, the Comparis doctor page, praxis-sternen.ch.
- Correct local.ch hours and name. Standardise the GBP, EMR and local.ch name to "Swiss Centro Medico" (capitalised, no suffix).
- Ask Arztpraxis Sternen to add Italian to his languages.

**How we'd know it failed:** assistants give wrong opening hours (09-17) or the mobile number as the main line.

**Leading indicator:** a quarterly NAP audit of the 6 listed directories, with target zero mismatches.

### 4.4 No Wikidata/Wikipedia entity: Low (expected)

- Wikipedia (it/de/en) has 0 hits for "Swiss Centro Medico" and 0 for "Zeljko Djordjevic".
- Wikidata `wbsearchentities` found no item for "Zeljko Djordjevic" or "Željko Đorđević". The clinic query was rate-limited and is unverified.
- A single-physician practice won't meet Wikipedia notability, so don't attempt an article. A Wikidata item is optional and only defensible if it's referenced to public registries (MedReg, GLN). Self-created promotional items are often deleted.
- The priority is the consistent directory and registry footprint in 4.3.

---

## 5. Brand mention signals (off-site)

| Signal | Status | Evidence |
|---|---|---|
| YouTube | **None found** | 0 practice videos. The brand search is dominated by Swiss Medical (Argentina); the name search by an unrelated podcaster. |
| Reddit | Not verifiable | Reddit returned 403 to this client. Given the practice's size, presence is probably zero. |
| Wikipedia / Wikidata | Absent | See 4.4. |
| LinkedIn | Not checked | No LinkedIn URL in `sameAs`. |
| Instagram / Facebook | Present | `swisscentromedicolugano` (in `sameAs`); login walls blocked content checks. |
| Directories | Present | OneDoc (practice and doctor), EMR/RME, local.ch, Comparis, praxis-sternen.ch. |
| Professional bodies | Claimed, not linked | SGPMR/SSMFR, SAMM, SACAM, ISLA. No links to member-finder listings. |

Third-party studies (Ahrefs and others) find YouTube mentions correlate with AI citation more strongly than backlinks do. This is correlational only.

### 5.1 Thin third-party corroboration: Medium

**Fix, in effort order:**
1. Get listed with a link in the SACAM, SAMM and SGPMR member finders and the ISLA directory. These are authoritative co-citations tying the name to credentials.
2. Keep the Google review flow active.
3. Make 3-5 short physician videos (IT and DE) on YouTube, with the full name, practice and Lugano in titles and descriptions. Suggested topics: what happens at a first visit, acupuncture vs laser acupuncture, PRP. Embed them on the matching pages; this also lifts the multi-modal score.
4. Pursue local press or Ticino health portals.

**How we'd know it failed:** after 6 months, brand prompts still can't describe the practice beyond directory boilerplate.

**Leading indicator:** a monthly count of third-party pages mentioning "Swiss Centro Medico" with "Djordjevic" and "Lugano" together.

---

## 6. Multilingual AI visibility

- All 4 languages are full translations, not stubs. EN/DE/FR word counts are within ±10% of the IT page.
- Each language has its own `lang` (it / de-CH / fr-CH / en), reciprocal hreflang (480 `xhtml:link` entries in the sitemap), and localised bylines, dates, FAQs and sources.
- Search engines and assistants can retrieve them for German-speaking Swiss, Zürich-based and expat/tourist queries.
- DE matters most for AI: the physician's second practice is in Zürich and he is German-speaking.

### 6.1 French pages don't say consultations aren't in French: Low

FR pages list "italien, allemand, anglais, serbe, slovène" but never say consultations are not held in French. An assistant answering "médecin acupuncteur francophone Lugano" could infer French service from a French-language site.

**Fix:** add one sentence on FR home and contact: "Les consultations ont lieu en italien, allemand ou anglais."

**How we'd know it failed:** FR prompts claim French consultations.

**Leading indicator:** the FR prompt-panel answer.

### 6.2 Name variants by language: Info

Visible text uses "Dr Zeljko Djordjevic" (EN), "Dr. med. univ." (DE), "Dott. med. univ." (IT) and a few "Dott."/"Dr." variants. These are acceptable locale forms. Keep the plain-name `name` property identical everywhere (see 4.2).

---

## 7. Multi-modal content: Medium

- **Images:** 27 unique images, including original September 2026 practice photos (PRP draw, ultrasound screen, needle insertion, manual medicine). Alt text is precise, e.g. "the photo does not show an interstitial catheter".
- **Gaps:** there's no video, no `<table>` or `<figure>` on any page, and no data visuals.
- **Table opportunity:** the site describes four invasive laser routes that are easy to confuse (local, intra-articular, intravenous, interstitial). A comparison table is highly extractable for AI answers. Columns: route, what it reaches, typical indications, evidence status, anaesthesia.

**Fix:**
- Add one comparison table on `/laserterapia/` (4 languages).
- Add a PRP vs hyaluronic acid table on the HA or PRP page.
- Embed the videos from 5.1.

**How we'd know it failed:** "difference between intravenous and intra-articular laser" prompts cite other sources.

**Leading indicator:** GSC impressions for "differenza/Unterschied/difference" queries.

---

## 8. Platform plumbing: Medium

- **Bing:** no `msvalidate` meta tag on the home page, and IndexNow status is unknown. Bing's index feeds Copilot and much of ChatGPT Search.
  - **Fix:** verify Bing Webmaster Tools (DNS or file is fine), submit the sitemap, enable IndexNow on publish, and import GBP data into Bing Places.
  - **How we'd know it failed:** Bing indexed-page count stays below 96.
  - **Leading indicator:** BWT indexed pages and any AI/Copilot citation data BWT exposes.
- **Google:** confirm the GBP name is "Swiss Centro Medico", the primary category, hours matching the site, and the booking link to OneDoc.
  - **How we'd know it failed:** AI Mode local answers show wrong hours or name.
  - **Leading indicator:** GBP Insights discovery searches.

---

## Top 5 highest-impact changes

| # | Change | Severity | Effort | Platforms helped |
|---|---|---|---|---|
| 1 | Reframe "Rheumatologist in Lugano" as a rheumatology *consultation* by a PM&R FMH specialist (title, H1, first sentence, person `medicalSpecialty`); confirm wording with the FMH or cantonal office | High | S (half a day × 4 languages) | All (YMYL trust, entity accuracy) |
| 2 | Rewrite the 42 generic FAQ questions per language to name the treatment and Lugano; give each answer a subject-restating first sentence; replace the 80 identical insurance answers with one treatment-specific sentence plus a single cost/insurance page with price ranges | High | M (2-3 days IT master + translation) | AIO/AI Mode, Perplexity, ChatGPT |
| 3 | Entity disambiguation: a visible "independent practice, not Swiss Medical Network" line; clinic `alternateName`/`description`; physician GLN `identifier`; plain `name`; split clinic and person `sameAs` | High | S (1 day) | All, especially ChatGPT/Copilot brand answers |
| 4 | Directory/NAP clean-up: fix local.ch hours and name, standardise GBP/EMR casing, add Italian on praxis-sternen.ch, list in SACAM/SAMM/SGPMR/ISLA member finders, verify BWT and IndexNow | Medium | S-M (1-2 days of admin) | Copilot, ChatGPT, AIO local |
| 5 | Definitional 40-60-word leads on 17 service pages, plus an "In short" prose paragraph and a laser-routes comparison table | Medium | M (2-3 days × 4 languages) | AIO, Perplexity |

**Next:** 3-5 physician YouTube videos (M-L), which address both brand mentions and multi-modal content. Also add an evidence-status line and an affiliation disclosure on the invasive laser and exosome pages (S).

**Measurement plan:** before starting, run a fixed prompt panel as the baseline, then repeat it monthly.
- 20 prompts × IT/DE/EN × ChatGPT, Perplexity, Google AI Mode and Copilot.
- Prompt types: brand identity, "acupuncture Lugano", "PRP Lugano cost", "rheumatology Lugano English", "Akupunktur Lugano Deutsch".
- Score: cited (yes/no), entity facts correct (yes/no), and competitor cited instead.

---

## Structured findings (for audit-data.json, category "AI Search Readiness")

```json
{
  "category": "AI Search Readiness",
  "score": 68,
  "dimension_scores": {"citability": 68, "structural_readability": 75, "multimodal": 50, "authority_brand": 52, "technical_accessibility": 92},
  "platform_scores": {"google_aio_ai_mode": 64, "chatgpt_search": 60, "perplexity": 62, "bing_copilot": 60, "claude_search": 64},
  "crawler_access": {"robots_ai_specific_rules": false, "all_ai_bots_allowed": true, "waf_blocking_detected": false, "tested_uas": 18, "note": "UA-spoof test from datacenter IP; verify real bot hits in Apache logs"},
  "llms_txt": {"status": "present", "valid_format": true, "urls_listed": 96, "urls_matching_sitemap": 96, "descriptions_matching_meta": 96, "priority": "low/optional"},
  "rsl_license": "absent (optional)",
  "findings": [
    {"id": "GEO-01", "severity": "High", "title": "Rheumatologist title/H1 and person medicalSpecialty conflict with FMH title (Physical Medicine & Rehabilitation)", "urls": ["/reumatologo/", "/de/rheumatologe/", "/fr/rhumatologue/", "/en/rheumatologist/"], "effort": "S", "failure_signal": "AI answers call him a rheumatologist FMH or omit the site", "leading_indicator": "Monthly identity-prompt accuracy"},
    {"id": "GEO-02", "severity": "High", "title": "42/97 EN FAQ questions don't name the treatment (same in IT/DE/FR); identical insurance answer on 80 pages; no cost/session answers", "effort": "M", "failure_signal": "No growth in question-query impressions or AI citations after 8-12 weeks", "leading_indicator": "GSC impressions for question-word queries on service URLs"},
    {"id": "GEO-03", "severity": "High", "title": "Brand/physician name collisions (Swiss Medical Network Centromedico, Swiss Medical AR, homonymous podcaster) with no on-site disambiguation, alternateName or GLN identifier", "effort": "S", "failure_signal": "Brand prompts return competitor facts", "leading_indicator": "Brand-prompt accuracy; brand SERP position on google.ch"},
    {"id": "GEO-04", "severity": "Medium", "title": "Directory NAP drift (local.ch hours 09-17, name casing on local.ch/EMR/Google Maps) and clinic sameAs pointing to person profiles", "effort": "S", "failure_signal": "Assistants quote wrong hours or number", "leading_indicator": "Quarterly NAP audit mismatches = 0"},
    {"id": "GEO-05", "severity": "Medium", "title": "17/20 service pages open with verbless fragments instead of definitional sentences", "effort": "M", "failure_signal": "'What is X' prompts cite other sources", "leading_indicator": "AIO/snippet appearances for what-is queries"},
    {"id": "GEO-06", "severity": "Medium", "title": "Weak or undisclosed-affiliation evidence on exosome and invasive laser pages", "effort": "S", "failure_signal": "Negative or no mention in efficacy prompts", "leading_indicator": "Prompt-panel sentiment for those treatments"},
    {"id": "GEO-07", "severity": "Medium", "title": "No video or tables; zero YouTube footprint; thin third-party corroboration", "effort": "M-L", "failure_signal": "Brand prompts limited to directory boilerplate after 6 months", "leading_indicator": "Monthly count of third-party co-mentions (brand + physician + Lugano)"},
    {"id": "GEO-08", "severity": "Medium", "title": "Bing Webmaster Tools / IndexNow unverified (Copilot and ChatGPT Search depend on Bing)", "effort": "S", "failure_signal": "Bing indexed pages < 96", "leading_indicator": "BWT indexed count"},
    {"id": "GEO-09", "severity": "Low", "title": "Passages very short (median 23 words); no cohesive 100-170-word explanatory paragraph per service", "effort": "M", "failure_signal": "AI paraphrases competitor text", "leading_indicator": "Share of answers quoting site wording"},
    {"id": "GEO-10", "severity": "Low", "title": "FR pages don't state that consultations aren't in French", "effort": "S", "failure_signal": "FR prompts claim French consultations", "leading_indicator": "FR prompt-panel answer"},
    {"id": "GEO-11", "severity": "Low", "title": "llms.txt could add key-facts and disambiguation block (optional; Google ignores llms.txt)", "effort": "S", "failure_signal": "n/a", "leading_indicator": "n/a"},
    {"id": "GEO-12", "severity": "Low", "title": "No Wikidata/Wikipedia entity (expected for a single practice; do not create a Wikipedia article)", "effort": "n/a", "failure_signal": "n/a", "leading_indicator": "n/a"},
    {"id": "GEO-13", "severity": "Info", "title": "All AI search, user-fetch and training crawlers allowed; no WAF blocking; SSR static HTML; RSL absent (optional)", "effort": "none", "failure_signal": "Bot 403/5xx in logs", "leading_indicator": "Apache log status codes for AI bot UAs"}
  ]
}
```
