# SEO audit: swisscentromedico.ch

> **Superseded (2026-09-28).** A full on-site audit now exists in [`swisscentromedico.ch-audit/FULL-AUDIT-REPORT.md`](../swisscentromedico.ch-audit/FULL-AUDIT-REPORT.md), with an [`ACTION-PLAN.md`](../swisscentromedico.ch-audit/ACTION-PLAN.md). The site was rebuilt after this partial SERP-only audit was written, and many of the findings below are now resolved: service pages, title template, schema, DE/FR/EN versions and bylines. §3 of the full report says which findings are still open. Keep this file for its off-site and SERP context only.

- **Date:** 2026-09-28
- **Scope:** Off-site / SERP audit only (partial)
- **Status:** On-page and technical checks are **pending**. This environment's network policy blocked requests to `swisscentromedico.ch`, so the HTML, headers, `robots.txt` and sitemap could not be fetched.

> **Method note.** The findings below come from web-search results and third-party listings. The search tool runs from the US, not from google.ch with Italian or Ticino localisation. Treat the positions as directional and confirm them in Google Search Console or with a Swiss rank tracker.

---

## 1. Summary

| # | Finding | Severity |
|---|---------|----------|
| 1 | Only 2 URLs from the domain appear in search, even for service-specific queries | High |
| 2 | No top-10 visibility for the core money keywords (pain therapy, acupuncture, rheumatologist + Lugano) | High |
| 3 | Generic brand name collides with Swiss Medical Network's "Centromedico Lugano"; OneDoc outranks the site on its own brand query | High |
| 4 | The doctor's citations are split between Lugano and Zürich, with inconsistent name and language data | Medium |
| 5 | Inner-page titles drop the location and use a different template from the homepage | Medium |
| 6 | No patient reviews surface anywhere in the SERPs | Medium |
| 7 | Practice NAP (name, address, phone) is consistent across directories | ✅ Good |
| 8 | Ranks for "laserterapia dolore Lugano" | ✅ Good |

---

## 2. Findings

### 2.1 Indexation looks thin (High)

Several domain-restricted searches returned only two URLs:

- `https://swisscentromedico.ch/`: "Terapia del Dolore e Agopuntura a Lugano | Swiss Centro Medico"
- `https://swisscentromedico.ch/agopuntura-auricolare-rac/`: "Agopuntura auricolare RAC - Swiss Centro Medico"

The practice offers pain therapy, rheumatology, laser therapy (including invasive laser), regenerative medicine, functional rejuvenation, manual medicine and TCM. None of these services surfaced as its own indexed URL. Either the pages don't exist and everything sits on the homepage, or they exist but aren't indexed or ranking.

**Actions**
- Run `site:swisscentromedico.ch` on google.ch and check the GSC *Pages* report. Compare the indexed pages with the pages that actually exist.
- If the service pages don't exist, create one per service. See 2.2.
- If they exist, check for `noindex`, canonical tags pointing to the homepage, orphan pages (no internal links), and whether the XML sitemap lists them.

### 2.2 No visibility for core commercial keywords (High)

| Query (IT) | Site in top ~10? | Who ranks instead |
|---|---|---|
| terapia del dolore Lugano | ❌ | EOC, Moncucco, Radiologia al Parco, MC Sorengo, Rehamedica, Lugano Care, Logmedica |
| agopuntura Lugano | ❌ | EOC, agopunturavaleria.ch, Ti Tratto, Dr. Bellwald, Dr. Wollmann, Dr. Stamm, Rehamedica, J. Rottmann |
| reumatologo Lugano | ❌ | EOC, OneDoc directory, Swiss Medical Network, Moncucco, Comparis |
| agopuntura auricolare Lugano | ❌ (despite having a dedicated page) | Dr. Stamm, local.ch, EMR, Lugano Care, Rehamedica |
| laserterapia dolore Lugano | ✅ ~#2 (homepage) | local.ch, HLife Clinic, Ti-Fisio, Rehability |

Most organic competitors rank with **one landing page per service and location**. Examples: `titratto.ch/agopuntura-lugano/`, `radiologiaalparco.ch/terapia-del-dolore/`, `rehamedica.ch/terapie/agopuntura/`. [HLife Clinic](https://hlifeclinic.ch/) is the closest direct competitor ("Terapia del Dolore e Medicina Rigenerativa a Lugano") and has a separate `/servizi/laser.html` page.

**Actions**
- Build a service hub with one page per intent, for example:
  - `/terapia-del-dolore-lugano/`
  - `/agopuntura-lugano/` (link `/agopuntura-auricolare-rac/` from it as a sub-page)
  - `/reumatologia-lugano/`
  - `/laserterapia-lugano/` (standard and invasive laser)
  - `/medicina-rigenerativa-lugano/`
  - `/medicina-manuale-lugano/`
- Each page needs a unique title with service + Lugano, an H1, and conditions treated (back pain, neck pain, migraine, arthrosis, tendinopathies…). It should also cover how a visit works, insurance coverage (RME / complementary insurance), FAQs, and a OneDoc booking CTA.
- Add condition pages later ("mal di schiena Lugano", "cervicalgia", "fibromialgia") to capture long-tail searches.

### 2.3 Brand and entity ambiguity (High)

For **"Swiss Centro Medico Lugano"**, the [OneDoc listing](https://www.onedoc.ch/en/medical-practice/lugano/ebd4o/swiss-centro-medico) ranks above the site. The site sits around position 7, behind Swiss Medical Network's *Centromedico Lugano Centro / Stazione* and SBB's "Centro medico – Stazione Lugano". The name "Swiss Centro Medico" is close to generic, and a large competitor runs a similar brand ("Centromedico") in the same city.

The name is also written several ways across the web: "Swiss Centro Medico", "Swiss centro medico", and "Swiss centro medico- Dr.med. Zeljko Djordjevic".

**Actions**
- Add `MedicalClinic` (or `MedicalBusiness`) JSON-LD to the homepage with `name`, `address`, `telephone`, `geo`, `openingHours`, `medicalSpecialty`, `url`, `logo`, and `sameAs` links to OneDoc, local.ch, Comparis, EMR, Medicosearch and [Instagram](https://www.instagram.com/swisscentromedicolugano/).
- Add a `Physician` entity for Dr. Djordjevic, linked with `worksFor` / `memberOf`.
- Claim or optimise the Google Business Profile: exact brand name, primary category (e.g. "Pain control clinic" or "Medical clinic"), services, photos, booking link.
- Use one canonical spelling of the brand everywhere, and ask the directories to update their listings to match.
- Put the doctor's name in the homepage title or H1 area. It's a strong disambiguating signal, since patients also search for the doctor by name.

### 2.4 Doctor citations split between Lugano and Zürich (Medium)

Dr. med. univ. Zeljko Djordjevic appears in two locations:

- **Lugano:** [local.ch](https://www.local.ch/en/d/lugano/6900/practice/swiss-centro-medico-dr-med-zeljko-djordjevic-DN4aVRdS1SFfhuiRXzRisQ), [EMR](https://emr.ch/de/therapeut/zeljko.djordjevic), [OneDoc practice](https://www.onedoc.ch/en/medical-practice/lugano/ebd4o/swiss-centro-medico), [Comparis institution](https://it.comparis.ch/gesundheit/arzt/kanton-tessin/lugano/institution/swiss-centro-medico/2aae2f19-eb4a-41f9-b564-03e33bf19a70)
- **Zürich:** [OneDoc doctor profile](https://www.onedoc.ch/en/acupuncturist/zurich/pckbd/dr-med-zeljko-djordjevic) ("acupuncturist in Zürich"), [Comparis doctor profile](https://en.comparis.ch/gesundheit/arzt/kanton-zuerich/zuerich/djordjevic-zeljko-7601003315226), and [Arztpraxis Sternen](https://www.praxis-sternen.ch/personnel/zeljko-djordjevic/) (Zürich-Oerlikon), which appears to be the same doctor's other practice

The listings disagree in several ways:
- The name appears as "Dr. med.", "Dr. med. univ." and "Dr.med,".
- The OneDoc practice listing includes Italian among the consultation languages. The doctor's Zürich profile lists German, Serbian, Slovenian and English only.

**Actions**
- Add the Lugano practice as a second location on the doctor's personal OneDoc and Comparis profiles. Otherwise a doctor-name search sends Lugano patients to Zürich.
- Standardise the name as "Dr. med. univ. Zeljko Djordjevic" and the language list everywhere.
- Cross-link the two practice websites (a contextual link from praxis-sternen.ch to swisscentromedico.ch, and back). It's a relevant, trusted link.
- Mention both locations in the `Physician` schema.

### 2.5 Title tags (Medium)

| URL | Title | Notes |
|---|---|---|
| `/` | Terapia del Dolore e Agopuntura a Lugano \| Swiss Centro Medico | Good: service + location + brand. 62 chars, so it may be cut off on mobile. |
| `/agopuntura-auricolare-rac/` | Agopuntura auricolare RAC - Swiss Centro Medico | No location, and "-" instead of "\|". Looks like the CMS default pattern. |

**Actions**
- Fix the default title template so inner pages follow `{Servizio} a Lugano | Swiss Centro Medico`.
- Shorten the homepage title slightly, e.g. `Terapia del Dolore e Agopuntura Lugano | Swiss Centro Medico`, or move the brand to the front if brand disambiguation (2.3) becomes the priority.

### 2.6 Reviews and trust signals (Medium, YMYL)

No patient reviews surfaced in any SERP or directory snippet. Medical sites count as *Your Money or Your Life* content, where E-E-A-T signals matter a lot.

**Actions**
- Ask for Google reviews after visits, in line with Swiss medical advertising rules. Reply to every review.
- On the site, show the doctor's qualifications (FMH title if applicable, *Dr. med. univ.*, MEBEKO recognition, GLN), RME/EMR certification, memberships and training.
- Add author and "medically reviewed by" bylines with dates to service content.

### 2.7 What's working

- **NAP is consistent** across OneDoc, local.ch, Medicosearch, search.ch, EMR and Comparis: *Via Alessandro Volta 1, 6900 Lugano, 091 921 04 27*.
- **Laser therapy** already ranks near the top for "laserterapia dolore Lugano". Build that out into a dedicated page (2.2).
- **RME certification** and online booking through OneDoc are strong conversion points. Make them prominent on every service page.

---

## 3. Pending: on-page and technical checklist

These need direct access to the site and could not be run here:

- [ ] HTTP→HTTPS and www↔non-www redirects (a single 301 hop)
- [ ] `robots.txt` rules and sitemap reference
- [ ] XML sitemap: coverage, lastmod, status codes of the listed URLs
- [ ] Status codes and redirect chains across the site; 404s and soft-404s
- [ ] `<html lang>`, canonical tags, meta robots
- [ ] `hreflang`: the practice treats German, English, Serbian and Slovenian speakers. Check whether any non-Italian versions exist. A German version is a likely opportunity, given the Zürich patient base and German-speaking Ticino residents.
- [ ] Meta descriptions, H1/H2 structure, word count per page
- [ ] Existing JSON-LD (Yoast/RankMath defaults vs. `MedicalClinic` / `Physician`)
- [ ] Open Graph / Twitter tags
- [ ] Image alt text, image weight and format (WebP/AVIF), lazy-loading
- [ ] Internal linking and orphan pages
- [ ] Core Web Vitals (LCP, INP, CLS) on mobile, via PageSpeed Insights or CrUX
- [ ] Security headers, cookie banner and consent mode (revFADP compliance), analytics setup
- [ ] Mobile usability, tap targets, click-to-call and OneDoc booking CTA placement

To unblock: in the cloud environment settings, add `swisscentromedico.ch` and `www.swisscentromedico.ch` to the allowed domains, or pick a broader network access level. For Core Web Vitals, also allow `www.googleapis.com` (PageSpeed Insights API).

---

## 4. Suggested priority order

1. **Week 1:** GSC indexing check (2.1), Google Business Profile, `MedicalClinic` + `Physician` schema (2.3), title template fix (2.5)
2. **Weeks 2–4:** Service landing pages for pain therapy, acupuncture, rheumatology, laser therapy and regenerative medicine (2.2)
3. **Weeks 2–4:** Citation cleanup: add the Lugano location to the doctor profiles, standardise the name (2.4)
4. **Ongoing:** Reviews programme, E-E-A-T content (2.6), condition pages, and a possible German version
5. **Once site access is available:** Complete section 3 and re-prioritise

---

## Sources

- https://swisscentromedico.ch/ (SERP snippet only)
- https://swisscentromedico.ch/agopuntura-auricolare-rac/ (SERP snippet only)
- https://www.onedoc.ch/en/medical-practice/lugano/ebd4o/swiss-centro-medico
- https://www.onedoc.ch/en/acupuncturist/zurich/pckbd/dr-med-zeljko-djordjevic
- https://www.local.ch/en/d/lugano/6900/practice/swiss-centro-medico-dr-med-zeljko-djordjevic-DN4aVRdS1SFfhuiRXzRisQ
- https://emr.ch/de/therapeut/zeljko.djordjevic
- https://it.comparis.ch/gesundheit/arzt/kanton-tessin/lugano/institution/swiss-centro-medico/2aae2f19-eb4a-41f9-b564-03e33bf19a70
- https://en.comparis.ch/gesundheit/arzt/kanton-zuerich/zuerich/djordjevic-zeljko-7601003315226
- https://www.praxis-sternen.ch/personnel/zeljko-djordjevic/
- https://www.medicosearch.ch/it/praxis-via-alessandro-volta-1-6900-lugano/surgery/41523
- https://www.instagram.com/swisscentromedicolugano/
- https://www.swissmedical.net/it/centri-medici/centro-medico/centri/lugano-centro
- https://hlifeclinic.ch/
- https://titratto.ch/agopuntura-lugano/
- https://www.radiologiaalparco.ch/terapia-del-dolore/
- https://rehamedica.ch/terapie/agopuntura/
