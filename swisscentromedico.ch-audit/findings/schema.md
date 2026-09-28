# Structured Data Audit — swisscentromedico.ch
Audited: 2026-09-28 | Scope: all 96 crawled URLs (24 pages × it/de/fr/en) from `raw/pages.json` + `raw/pages/*.html`
Method: static analysis of already-extracted JSON-LD (no re-crawl); live spot-checks of `schema.org/Physician`, `schema.org/IndividualPhysician`, `schema.org/medicalSpecialty`, `schema.org/isAcceptingNewPatients` via curl (schema.org v30.1, 2026-09-16 build, "August 2026" usage stats — i.e. the current, up-to-date vocabulary).

## Schema Score: 88/100

This is an unusually well-engineered implementation for a solo-practitioner site: single `@graph` per page, 100% valid JSON-LD, one consistent `@id` per entity across all 96 pages/4 languages, no deprecated types, correct per-language `inLanguage`, and NAP data that matches visible page text exactly. Deductions are for a schema.org vocabulary‑conformance issue on the Physician node, a handful of missing recommended properties, and small `sameAs` gaps — nothing that breaks parsing or an existing rich-result feature.

---

## 1. Detection Results

Every one of the 96 pages carries exactly one `<script type="application/ld+json">` block containing a single `@context: "https://schema.org"` object with an `@graph` array. Type distribution across all 96 pages:

| Node type | Count | Notes |
|---|---|---|
| `ImageObject` (primary image) | 96 | one per page |
| `WebSite` | 96 | shared `@id` |
| `MedicalClinic` | 96 | shared `@id` |
| `["Person","Physician"]` | 96 | shared `@id` — see §4 |
| `["WebPage","MedicalWebPage"]` | 84 | service/content pages |
| `["WebPage","ContactPage"]` | 4 | one per language, `/contatti/`, `/de/kontakt/`, `/fr/contact/`, `/en/contact/` |
| `WebPage` (plain) | 8 | legal/privacy pages, one per language ×2 — correctly **not** typed MedicalWebPage |
| `BreadcrumbList` | 92 | all inner pages; the 4 homepages correctly omit it |

No `HowTo`, `FAQPage`, `SpecialAnnouncement`, `CourseInfo`, `EstimatedSalary`, or `LearningVideo` anywhere on the site.

---

## 2. Validation Results (pass/fail per check)

| # | Check | Result | Detail |
|---|---|---|---|
| 1 | JSON-LD syntax valid on all 96 pages | **PASS** | Parsed every `application/ld+json` block from raw HTML directly with `json.loads`; 96/96 scripts, 0 parse errors. |
| 2 | `@context` = `https://schema.org` (https, exact) | **PASS** | 96/96 |
| 3 | `@id` consistency, same clinic/physician/website across all languages | **PASS** | Exactly one `@id` value each: `.../#clinic`, `.../#physician`, `.../#website`, reused identically on all 96 pages regardless of language. |
| 4 | No deprecated types (HowTo, SpecialAnnouncement, CourseInfo, EstimatedSalary, LearningVideo) | **PASS** | 0 occurrences |
| 5 | FAQPage present | **PASS (N/A)** | Not used anywhere — correct, since Google retired FAQ rich results for all sites 2026-05-07. No action needed. |
| 6 | BreadcrumbList valid, all inner pages | **PASS** | 92/92 inner pages have it; `ListItem` position 1/2(+), final crumb correctly omits `item` URL (self-reference). |
| 7 | `inLanguage` correct per language version | **PASS** | Verified `/de/`, `/fr/`, `/en/`, `/de/akupunktur/`, `/en/acupuncture/` — `WebPage.inLanguage` and `ImageObject.inLanguage` match the page's actual `<html lang>` (`de-CH`, `fr-CH`, `en`), not left over as `it`. |
| 8 | MedicalClinic required/recommended props | **MOSTLY PASS** | address, geo, telephone, `openingHoursSpecification`, `hasMap`, `areaServed`, `availableService`, `sameAs`, `employee` all present and well-formed. Missing: `priceRange`, `currenciesAccepted`, `isAcceptedPaymentMethod`, `healthPlanNetworkId` (0 occurrences sitewide) — see §5. |
| 9 | `medicalSpecialty` values valid against schema.org `MedicalSpecialty` enum | **PASS** | `Rheumatologic` and `Musculoskeletal` are both real enum members. **Info:** schema.org has no exact "Physical Medicine & Rehabilitation" term; this pairing is the closest legitimate approximation, not an error. |
| 10 | Physician type correctness (2024+ schema.org split) | **FAIL — Medium** | See §4. |
| 11 | Person credentials (`hasCredential`, `alumniOf`, `memberOf`, `knowsLanguage`) | **PASS** | All present, well-formed, correctly localized per language, linked via `worksFor` → clinic `@id`. |
| 12 | MedicalWebPage `about`/`mainEntity`/`lastReviewed`/`reviewedBy`/`medicalAudience` | **PARTIAL** | `about`, `mainEntity`, `lastReviewed` (ISO 8601), `author`, `reviewedBy` all present and correctly linked (see §6). `medicalAudience` is **absent on all 96 pages** — Low/Medium gap. |
| 13 | Non-medical pages not mistyped as MedicalWebPage | **PASS** | The 8 legal/privacy pages use plain `WebPage`; contact pages use `ContactPage`. |
| 14 | Content parity: schema vs. visible text (hours, phone, address) | **PASS** | `/contatti/` visible text: "Lunedì 08:00–16:30 … Mercoledì 08:00–16:30 … Venerdì 08:00–13:30" and `+41 91 921 04 27` / `+41 78 605 33 72` match `openingHoursSpecification` and `telephone`/`contactPoint` exactly. |
| 15 | `isAcceptingNewPatients` property validity | **PASS (with caveat)** | Confirmed via live schema.org lookup: this is a real property, `domainIncludes: MedicalOrganization` only. Valid on `MedicalClinic` directly; valid on the `Person/Physician` node only via its `Physician` type-facet — ties into the §4 issue. |
| 16 | ImageObject/logo | **PASS** | `primaryimage` per page (1200×630, OG-sized) and clinic `logo`/`image` (826×381) both typed `ImageObject` with `url`+`width`+`height`. Minor DRY opportunity: logo is repeated inline on every page instead of given its own `@id` — Info only. |

---

## 3. Missing Schema Opportunities

- **`medicalAudience` on MedicalWebPage** (0/96 pages) — recommended property for MedicalWebPage; add `{"@type":"MedicalAudience","audienceType":"Patient"}`.
- **`currenciesAccepted: "CHF"`** on MedicalClinic — safe, factual (Switzerland), not currently declared.
- **`priceRange`** — genuinely not publicly stated (site says pricing is quoted case-by-case and billed to insurers/patients directly per `/contatti/`), so **do not fabricate a value**; correctly omit, or add only if the practice publishes a real range.
- **Google Business Profile review link** (`https://g.page/r/CeFnoDpenqxXEAI/review/`) is linked in the visible page footer/contact section on all 4 contact pages but is **not** in `MedicalClinic.sameAs`. Add it.
- **local.ch** — no local.ch profile link found anywhere on the site (HTML or JSON-LD). If a listing exists, add to `sameAs`; otherwise no action (don't invent a URL).
- **AggregateRating/Review** — none present. Not a defect (no fabricated ratings is correct), but if genuine third-party reviews exist (Google Business Profile, OneDoc), consider adding `aggregateRating` to `MedicalClinic` sourced from a real, verifiable feed only — subject to Google's review-authenticity policy and healthcare confidentiality constraints.

---

## 4. Physician type vs. current Schema.org hierarchy — **Severity: Low** (orchestrator-adjusted)

> **Orchestrator revision (2026-09-28).** The recommendation below has been changed. schema.org created `IndividualPhysician` for exactly this case ("An individual medical practitioner … The `practicesAt` property can be used to indicate MedicalOrganization hospitals, clinics …", checked on schema.org on 2026-09-28). Collapsing the doctor to a bare `Person` throws that specificity away. **Revised recommendation:** type the doctor node `["Person", "IndividualPhysician"]`, which keeps the Person-only properties (`alumniOf`, `jobTitle`, `honorificPrefix`), and add `"practicesAt": {"@id": "…/#clinic"}`. Multi-typing across branches is valid JSON-LD, and Google accepts it. The ready-to-paste graphs in §6 already apply this. Severity is **Low**, because no Google rich result depends on Physician typing. The agent's original analysis follows.


Live verification against `schema.org/Physician` and `schema.org/IndividualPhysician` (current v30.1 build) shows:

- **`Physician`**: `Thing > Organization > LocalBusiness > MedicalBusiness > Physician` (also reachable via `Thing > Organization > MedicalOrganization > Physician`). Official description: *"An individual physician or a physician's office considered as a MedicalOrganization."* — it is rooted entirely in the **Organization** branch, not Person.
- **`IndividualPhysician`** (the newer, more specific type): subtype of `Physician`, and it is **also** Organization-rooted, despite its description reading "An individual medical practitioner." There is currently no schema.org type that is both Person-rooted and physician-specific.
- Confirmed via `schema.org/medicalSpecialty`: `domainIncludes` = `Hospital, MedicalClinic, MedicalOrganization, Physician` only — **not** `Person`.

The site's Person/Physician node is typed `["Person","Physician"]` on all 96 pages and carries `medicalSpecialty` and `isAcceptingNewPatients` — both properties whose only valid domain on this node comes from the `Physician` facet, which is structurally an Organization type, not compatible with `Person`.

**Practical impact:** Google has no dedicated "Physician" rich result, so this does not break an existing SERP feature, and Google's Rich Results Test does not hard-fail on `domainIncludes` mismatches. This is a vocabulary-conformance / entity-correctness / future-proofing issue, not a rich-result breakage — hence Medium, not Critical.

**Recommendation:** Since `MedicalClinic` already fully and correctly carries the organizational facts (address, hours, geo, `medicalSpecialty`, `availableService`, `isAcceptingNewPatients`), simplify the doctor's own node to plain `"@type": "Person"` and drop `medicalSpecialty` / `isAcceptingNewPatients` from it (both remain declared once, correctly, on `MedicalClinic`). This removes the type conflict without losing any information — everything that made it into the combined node is either genuinely Person-scoped (name, credentials, languages, `worksFor`) or already duplicated on `MedicalClinic`.

**How we'd know it failed:** if switched to plain `Person` and a validator (Google Rich Results Test / schema.org validator) or a future schema.org update flags `medicalSpecialty`/`isAcceptingNewPatients` as unrecognized on a bare `Person`, or if `worksFor` no longer resolves to a `MedicalClinic` carrying those facts — re-check `schema.org/Person`'s domain list before the next audit cycle, since this branch of the vocabulary has changed once already (2024+) and could change again.

---

## 5. Cross-Language `@id` Reuse — Note (Info, not a defect)

`MedicalClinic` (`.../#clinic`), `Person/Physician` (`.../#physician`), and `WebSite` (`.../#website`) all reuse the **same** `@id` across it/de/fr/en. This is correct and valuable for entity consistency: address, phone, geo, hours, and `sameAs` are byte-identical on every language version (verified on `/`, `/de/`, `/fr/`, `/en/`, `/agopuntura/`, `/de/akupunktur/`). Translatable fields (job title text, credential names, society names, service names/descriptions) differ per language, which is expected since each page's JSON-LD is scoped to that page's language context — Google does not perform a literal RDF merge of translated literals across separate documents. No action needed; flagged only so a future editor doesn't "fix" the localized text back to Italian believing it must match.

---

## 6. `about` / `mainEntity` Linking — Note (Info)

28 service pages (one per treatment × 4 languages) set `about` → `.../#clinic` and `mainEntity` → their own `.../#procedure`. The `#procedure` node itself is not a separate top-level `@graph` member on the service page — it is only fully defined as a nested object inside `MedicalClinic.availableService` (same page, same `@graph`). This is valid JSON-LD: a full node definition nested under one property and a bare `{"@id":...}` reference elsewhere in the same document resolve to the same merged node under JSON-LD's node-identity rules. **Verified as correct, not a bug.** Optional Low-priority polish: setting `about` to the same `#procedure` id as `mainEntity` (instead of the clinic) would tighten topical relevance signal for single-treatment pages, but the current setup is not wrong.

---

## 7. Severity Summary

| Severity | Finding | How we'd know it failed |
|---|---|---|
| Low | `["Person","Physician"]` → use `["Person","IndividualPhysician"]` + `practicesAt` (§4, orchestrator-revised) | Validator flags `medicalSpecialty`/`isAcceptingNewPatients` domain mismatch on the Person node, or schema.org further splits the types |
| Low-Medium | `medicalAudience` missing on all MedicalWebPage nodes | Google Rich Results Test "recommended field missing" notice for MedicalWebPage |
| Low | `currenciesAccepted` missing on MedicalClinic | N/A functionally; recommended LocalBusiness property absent |
| Low | Google review link (`g.page/...`) visible on-page but absent from `sameAs` | Knowledge Panel / entity-linking audit shows an unlinked official profile |
| Low | `Facebook` URL in `sameAs` has no matching visible link anywhere on the site | Manual check: confirm `facebook.com/swisscentromedicolugano` is still live/owned; if defunct, remove from `sameAs` |
| Info | No `local.ch` link in `sameAs` | Only relevant if a real local.ch listing exists — verify before adding |
| Info | `medicalSpecialty` = Rheumatologic + Musculoskeletal is an approximation (no exact PM&R term in schema.org enum) | No fix available; re-check if schema.org adds a PhysicalMedicine specialty term |
| Info | No `AggregateRating`/`Review` on MedicalClinic | Only add if backed by a real, policy-compliant review source |
| Info | No FAQPage anywhere | Correct as-is; Google retired FAQ rich results 2026-05-07, no SERP benefit either way |
| Pass | JSON-LD syntax, `@id` consistency, `inLanguage`, BreadcrumbList, content/schema parity, credentials, no deprecated types | Re-run `json.loads` over all `application/ld+json` blocks and diff visible NAP text against schema values each audit cycle |

---

## 8. Ready-to-Paste Improved JSON-LD

### (a) Homepage (`https://swisscentromedico.ch/`) — full graph with fixes applied

Changes vs. current: added `medicalAudience` to MedicalWebPage; added `currenciesAccepted` and the Google review `sameAs` entry to MedicalClinic; simplified the Physician node to plain `Person` and removed the now-domain-mismatched `medicalSpecialty`/`isAcceptingNewPatients` from it (both remain on MedicalClinic).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "MedicalWebPage"],
      "@id": "https://swisscentromedico.ch/",
      "url": "https://swisscentromedico.ch/",
      "name": "Terapia del Dolore e Agopuntura Lugano | Swiss Centro Medico",
      "isPartOf": { "@id": "https://swisscentromedico.ch/#website" },
      "about": { "@id": "https://swisscentromedico.ch/#clinic" },
      "primaryImageOfPage": { "@id": "https://swisscentromedico.ch/#primaryimage" },
      "image": { "@id": "https://swisscentromedico.ch/#primaryimage" },
      "thumbnailUrl": "https://swisscentromedico.ch/uploads/og/home-mark-1200x630.jpg",
      "datePublished": "2024-02-09T10:51:12+00:00",
      "dateModified": "2026-09-21",
      "description": "Studio a Lugano per terapia del dolore, agopuntura, laserterapia e medicina rigenerativa. Trattamenti personalizzati dopo visita specialistica.",
      "inLanguage": "it",
      "potentialAction": [
        { "@type": "ReadAction", "target": ["https://swisscentromedico.ch/"] }
      ],
      "lastReviewed": "2026-09-21",
      "author": { "@id": "https://swisscentromedico.ch/#physician" },
      "reviewedBy": { "@id": "https://swisscentromedico.ch/#physician" },
      "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://swisscentromedico.ch/#primaryimage",
      "url": "https://swisscentromedico.ch/uploads/og/home-mark-1200x630.jpg",
      "contentUrl": "https://swisscentromedico.ch/uploads/og/home-mark-1200x630.jpg",
      "width": 1200,
      "height": 630,
      "inLanguage": "it"
    },
    {
      "@type": "WebSite",
      "@id": "https://swisscentromedico.ch/#website",
      "url": "https://swisscentromedico.ch/",
      "name": "Swiss Centro Medico",
      "publisher": { "@id": "https://swisscentromedico.ch/#clinic" },
      "inLanguage": ["it", "de-CH", "fr-CH", "en"]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://swisscentromedico.ch/#clinic",
      "name": "Swiss Centro Medico",
      "url": "https://swisscentromedico.ch/",
      "image": {
        "@type": "ImageObject",
        "url": "https://swisscentromedico.ch/uploads/2026/01/scm-logo-header-black.jpg",
        "width": 826,
        "height": 381
      },
      "logo": {
        "@type": "ImageObject",
        "url": "https://swisscentromedico.ch/uploads/2026/01/scm-logo-header-black.jpg",
        "width": 826,
        "height": 381
      },
      "telephone": "+41 91 921 04 27",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+41 91 921 04 27",
          "contactType": "customer service",
          "availableLanguage": ["it", "de", "en", "sr", "sl"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+41 78 605 33 72",
          "contactType": "WhatsApp",
          "url": "https://wa.me/41786053372",
          "availableLanguage": ["it", "de", "en", "sr", "sl"]
        }
      ],
      "email": "dr.djordjevic@hin.ch",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Alessandro Volta 1",
        "addressLocality": "Lugano",
        "addressRegion": "Ticino",
        "postalCode": "6900",
        "addressCountry": "CH"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 46.0094834, "longitude": 8.9584343 },
      "hasMap": "https://www.google.com/maps/place/Swiss+centro+medico/data=!4m2!3m1!1s0x47842d15d8a53e0d:0x57ac9e5e3aa067e1",
      "openingHours": ["Mo,We 08:00-16:30", "Fr 08:00-13:30"],
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Wednesday"], "opens": "08:00", "closes": "16:30" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "13:30" }
      ],
      "medicalSpecialty": ["https://schema.org/Rheumatologic", "https://schema.org/Musculoskeletal"],
      "currenciesAccepted": "CHF",
      "availableService": [
        { "@type": "MedicalTherapy", "@id": "https://swisscentromedico.ch/laserterapia/#procedure", "name": "Laserterapia", "url": "https://swisscentromedico.ch/laserterapia/", "description": "Laserterapia e agopuntura a Lugano, Svizzera italiana: benefici per articolazioni, muscoli, reumatologia, riabilitazione e disturbi cronici." },
        { "@type": "MedicalTherapy", "@id": "https://swisscentromedico.ch/agopuntura/#procedure", "name": "Agopuntura", "url": "https://swisscentromedico.ch/agopuntura/", "description": "Agopuntura a Lugano: classica con aghi o laser, auricolare RAC e laser locale sui punti, nello studio di Via Alessandro Volta 1." },
        { "@type": "MedicalTherapy", "@id": "https://swisscentromedico.ch/medicina-rigenerativa/#procedure", "name": "Medicina rigenerativa", "url": "https://swisscentromedico.ch/medicina-rigenerativa/", "description": "Medicina rigenerativa e anti-invecchiamento a Lugano: trattamenti che mirano a rigenerare tessuti e organi danneggiati stimolando i processi naturali." },
        { "@type": "MedicalTherapy", "@id": "https://swisscentromedico.ch/#pain-therapy", "name": "Terapia del dolore", "url": "https://swisscentromedico.ch/", "description": "Il secondo fuoco dello studio: diagnosi e trattamento interventistico del dolore." },
        { "@type": "MedicalProcedure", "@id": "https://swisscentromedico.ch/terapia-fotodinamica/#procedure", "name": "Terapia fotodinamica", "url": "https://swisscentromedico.ch/terapia-fotodinamica/" },
        { "@type": "MedicalProcedure", "@id": "https://swisscentromedico.ch/terapie-rigenerative-avanzate-con-pbm-ed-esosomi-stimolare-la-rigenerazione-cellulare/#procedure", "name": "PBM ed esosomi", "url": "https://swisscentromedico.ch/terapie-rigenerative-avanzate-con-pbm-ed-esosomi-stimolare-la-rigenerazione-cellulare/" },
        { "@type": "MedicalProcedure", "@id": "https://swisscentromedico.ch/il-plasma-ricco-di-piastrine-o-trombociti-prp/#procedure", "name": "Plasma ricco di piastrine (PRP)", "url": "https://swisscentromedico.ch/il-plasma-ricco-di-piastrine-o-trombociti-prp/", "description": "PRP a Lugano per articolazioni, tendini e cartilagine: plasma ricco di piastrine preparato dal sangue del paziente e iniettato dopo visita specialistica." },
        { "@type": "MedicalProcedure", "@id": "https://swisscentromedico.ch/reumatologo/#procedure", "name": "Visita reumatologica", "url": "https://swisscentromedico.ch/reumatologo/", "description": "Reumatologo a Lugano: visita in Via Alessandro Volta 1. Specialista FMH in medicina fisica e riabilitazione, sonografia SGUM e terapia del dolore." }
      ],
      "areaServed": [
        { "@type": "City", "name": "Lugano" },
        { "@type": "City", "name": "Mendrisio" },
        { "@type": "City", "name": "Bellinzona" },
        { "@type": "City", "name": "Locarno" },
        { "@type": "City", "name": "Chiasso" },
        { "@type": "AdministrativeArea", "name": "Ticino" }
      ],
      "isAcceptingNewPatients": true,
      "employee": { "@id": "https://swisscentromedico.ch/#physician" },
      "sameAs": [
        "https://www.instagram.com/swisscentromedicolugano",
        "https://www.onedoc.ch/it/agopuntore/lugano/pc0jl/dr-med-zeljko-djordjevic",
        "https://emr.ch/terapeuta/zeljko.djordjevic",
        "https://www.facebook.com/swisscentromedicolugano",
        "https://g.page/r/CeFnoDpenqxXEAI/review/"
      ]
    },
    {
      "@type": ["Person", "IndividualPhysician"],
      "@id": "https://swisscentromedico.ch/#physician",
      "name": "Dott. med. univ. Zeljko Djordjevic",
      "jobTitle": "Specialista in Medicina Fisica e Riabilitazione FMH",
      "telephone": "+41 91 921 04 27",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "Specialista in medicina fisica e riabilitazione FMH" },
        { "@type": "EducationalOccupationalCredential", "name": "Medicina manuale (SAMM)" },
        { "@type": "EducationalOccupationalCredential", "name": "Terapia interventistica del dolore (SSIPM)" },
        { "@type": "EducationalOccupationalCredential", "name": "Sonografia (SGUM)" },
        { "@type": "EducationalOccupationalCredential", "name": "Agopuntura - Terapia di medicina cinese - MTC (ASA)" }
      ],
      "worksFor": { "@id": "https://swisscentromedico.ch/#clinic" },
      "practicesAt": { "@id": "https://swisscentromedico.ch/#clinic" },
      "url": "https://swisscentromedico.ch/",
      "image": "https://swisscentromedico.ch/uploads/2026/01/Zeljko-2.jpg",
      "sameAs": [
        "https://www.onedoc.ch/it/agopuntore/lugano/pc0jl/dr-med-zeljko-djordjevic",
        "https://emr.ch/terapeuta/zeljko.djordjevic",
        "https://www.praxis-sternen.ch/personnel/zeljko-djordjevic/",
        "https://it.comparis.ch/gesundheit/arzt/kanton-tessin/lugano/djordjevic-zeljko-7601003315226"
      ],
      "knowsLanguage": ["it", "de", "en", "sr", "sl"],
      "honorificPrefix": "Dott. med. univ.",
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Università di Vienna" },
      "memberOf": [
        { "@type": "Organization", "name": "Società Svizzera di Medicina Fisica e Riabilitazione (SSMFR)" },
        { "@type": "Organization", "name": "Società Svizzera dei Medici per la Medicina Manuale (SAMM)" },
        { "@type": "Organization", "name": "Società Svizzera dei Medici per l'Agopuntura (SACAM)" }
      ]
    }
  ]
}
```

### (b) Representative service page (`https://swisscentromedico.ch/agopuntura/`) — full graph with fixes applied

Same fix pattern: `medicalAudience` added to MedicalWebPage; Physician node simplified to `Person` (`medicalSpecialty`/`isAcceptingNewPatients` removed here too, present once on MedicalClinic); MedicalClinic gets `currenciesAccepted` and the Google review `sameAs` entry, matching the homepage exactly (same `@id`s, so keep both in sync whenever one is edited).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "MedicalWebPage"],
      "@id": "https://swisscentromedico.ch/agopuntura/",
      "url": "https://swisscentromedico.ch/agopuntura/",
      "name": "Agopuntura a Lugano | Swiss Centro Medico",
      "isPartOf": { "@id": "https://swisscentromedico.ch/#website" },
      "datePublished": "2026-02-01T07:12:21+00:00",
      "dateModified": "2026-09-18",
      "description": "Agopuntura a Lugano: classica con aghi o laser, auricolare RAC e laser locale sui punti, nello studio di Via Alessandro Volta 1.",
      "inLanguage": "it",
      "potentialAction": [
        { "@type": "ReadAction", "target": ["https://swisscentromedico.ch/agopuntura/"] }
      ],
      "primaryImageOfPage": { "@id": "https://swisscentromedico.ch/agopuntura/#primaryimage" },
      "image": { "@id": "https://swisscentromedico.ch/agopuntura/#primaryimage" },
      "breadcrumb": { "@id": "https://swisscentromedico.ch/agopuntura/#breadcrumb" },
      "lastReviewed": "2026-09-18",
      "author": { "@id": "https://swisscentromedico.ch/#physician" },
      "reviewedBy": { "@id": "https://swisscentromedico.ch/#physician" },
      "citation": [
        { "@type": "ScholarlyArticle", "@id": "https://doi.org/10.1002/14651858.CD001218.pub3", "name": "Linde K, et al. Acupuncture for the prevention of episodic migraine. Cochrane Database Syst Rev. 2016;(6):CD001218." },
        { "@type": "ScholarlyArticle", "@id": "https://doi.org/10.1002/14651858.CD007587.pub2", "name": "Linde K, et al. Acupuncture for the prevention of tension-type headache. Cochrane Database Syst Rev. 2016;(4):CD007587." },
        { "@type": "ScholarlyArticle", "@id": "https://doi.org/10.1016/j.jpain.2017.11.005", "name": "Vickers AJ, et al. Acupuncture for Chronic Pain: Update of an Individual Patient Data Meta-Analysis. J Pain. 2018;19:455-474." },
        { "@type": "ScholarlyArticle", "@id": "https://doi.org/10.1159/000209315", "name": "Witt CM, et al. Safety of acupuncture: results of a prospective observational study with 229,230 patients and introduction of a medical information and consent form. Forsch Komplementmed. 2009;16:91-97." }
      ],
      "mainEntity": { "@id": "https://swisscentromedico.ch/agopuntura/#procedure" },
      "about": { "@id": "https://swisscentromedico.ch/agopuntura/#procedure" },
      "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://swisscentromedico.ch/agopuntura/#primaryimage",
      "url": "https://swisscentromedico.ch/uploads/og/agopuntura-1200x630.jpg",
      "contentUrl": "https://swisscentromedico.ch/uploads/og/agopuntura-1200x630.jpg",
      "width": 1200,
      "height": 630,
      "inLanguage": "it"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://swisscentromedico.ch/agopuntura/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://swisscentromedico.ch/" },
        { "@type": "ListItem", "position": 2, "name": "Agopuntura" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://swisscentromedico.ch/#website",
      "url": "https://swisscentromedico.ch/",
      "name": "Swiss Centro Medico",
      "publisher": { "@id": "https://swisscentromedico.ch/#clinic" },
      "inLanguage": ["it", "de-CH", "fr-CH", "en"]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://swisscentromedico.ch/#clinic",
      "name": "Swiss Centro Medico",
      "url": "https://swisscentromedico.ch/",
      "image": { "@type": "ImageObject", "url": "https://swisscentromedico.ch/uploads/2026/01/scm-logo-header-black.jpg", "width": 826, "height": 381 },
      "logo": { "@type": "ImageObject", "url": "https://swisscentromedico.ch/uploads/2026/01/scm-logo-header-black.jpg", "width": 826, "height": 381 },
      "telephone": "+41 91 921 04 27",
      "contactPoint": [
        { "@type": "ContactPoint", "telephone": "+41 91 921 04 27", "contactType": "customer service", "availableLanguage": ["it", "de", "en", "sr", "sl"] },
        { "@type": "ContactPoint", "telephone": "+41 78 605 33 72", "contactType": "WhatsApp", "url": "https://wa.me/41786053372", "availableLanguage": ["it", "de", "en", "sr", "sl"] }
      ],
      "email": "dr.djordjevic@hin.ch",
      "address": { "@type": "PostalAddress", "streetAddress": "Via Alessandro Volta 1", "addressLocality": "Lugano", "addressRegion": "Ticino", "postalCode": "6900", "addressCountry": "CH" },
      "geo": { "@type": "GeoCoordinates", "latitude": 46.0094834, "longitude": 8.9584343 },
      "hasMap": "https://www.google.com/maps/place/Swiss+centro+medico/data=!4m2!3m1!1s0x47842d15d8a53e0d:0x57ac9e5e3aa067e1",
      "openingHours": ["Mo,We 08:00-16:30", "Fr 08:00-13:30"],
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Wednesday"], "opens": "08:00", "closes": "16:30" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "13:30" }
      ],
      "medicalSpecialty": ["https://schema.org/Rheumatologic", "https://schema.org/Musculoskeletal"],
      "currenciesAccepted": "CHF",
      "availableService": [
        { "@type": "MedicalTherapy", "@id": "https://swisscentromedico.ch/agopuntura/#procedure", "name": "Agopuntura", "url": "https://swisscentromedico.ch/agopuntura/", "description": "Agopuntura a Lugano: classica con aghi o laser, auricolare RAC e laser locale sui punti, nello studio di Via Alessandro Volta 1." }
      ],
      "areaServed": [
        { "@type": "City", "name": "Lugano" },
        { "@type": "City", "name": "Mendrisio" },
        { "@type": "City", "name": "Bellinzona" },
        { "@type": "City", "name": "Locarno" },
        { "@type": "City", "name": "Chiasso" },
        { "@type": "AdministrativeArea", "name": "Ticino" }
      ],
      "isAcceptingNewPatients": true,
      "employee": { "@id": "https://swisscentromedico.ch/#physician" },
      "sameAs": [
        "https://www.instagram.com/swisscentromedicolugano",
        "https://www.onedoc.ch/it/agopuntore/lugano/pc0jl/dr-med-zeljko-djordjevic",
        "https://emr.ch/terapeuta/zeljko.djordjevic",
        "https://www.facebook.com/swisscentromedicolugano",
        "https://g.page/r/CeFnoDpenqxXEAI/review/"
      ]
    },
    {
      "@type": ["Person", "IndividualPhysician"],
      "@id": "https://swisscentromedico.ch/#physician",
      "name": "Dott. med. univ. Zeljko Djordjevic",
      "jobTitle": "Specialista in Medicina Fisica e Riabilitazione FMH",
      "telephone": "+41 91 921 04 27",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "Specialista in medicina fisica e riabilitazione FMH" },
        { "@type": "EducationalOccupationalCredential", "name": "Medicina manuale (SAMM)" },
        { "@type": "EducationalOccupationalCredential", "name": "Terapia interventistica del dolore (SSIPM)" },
        { "@type": "EducationalOccupationalCredential", "name": "Sonografia (SGUM)" },
        { "@type": "EducationalOccupationalCredential", "name": "Agopuntura - Terapia di medicina cinese - MTC (ASA)" }
      ],
      "worksFor": { "@id": "https://swisscentromedico.ch/#clinic" },
      "practicesAt": { "@id": "https://swisscentromedico.ch/#clinic" },
      "url": "https://swisscentromedico.ch/",
      "image": "https://swisscentromedico.ch/uploads/2026/01/Zeljko-2.jpg",
      "sameAs": [
        "https://www.onedoc.ch/it/agopuntore/lugano/pc0jl/dr-med-zeljko-djordjevic",
        "https://emr.ch/terapeuta/zeljko.djordjevic",
        "https://www.praxis-sternen.ch/personnel/zeljko-djordjevic/",
        "https://it.comparis.ch/gesundheit/arzt/kanton-tessin/lugano/djordjevic-zeljko-7601003315226"
      ],
      "knowsLanguage": ["it", "de", "en", "sr", "sl"],
      "honorificPrefix": "Dott. med. univ.",
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Università di Vienna" },
      "memberOf": [
        { "@type": "Organization", "name": "Società Svizzera di Medicina Fisica e Riabilitazione (SSMFR)" },
        { "@type": "Organization", "name": "Società Svizzera dei Medici per la Medicina Manuale (SAMM)" },
        { "@type": "Organization", "name": "Società Svizzera dei Medici per l'Agopuntura (SACAM)" }
      ]
    }
  ]
}
```

**Note on rollout:** the `Person`/`Physician` simplification (§4) and the `sameAs`/`currenciesAccepted` additions on `MedicalClinic` must be applied identically on all 96 pages, since they share the same `@id` — an inconsistent partial rollout (e.g. `currenciesAccepted` on some pages but not others for the same `@id`) would itself become a new finding in the next audit.

---

## Files referenced
- `/home/user/empty/swisscentromedico.ch-audit/raw/pages.json` — parsed JSON-LD source for all 96 URLs
- `/home/user/empty/swisscentromedico.ch-audit/raw/pages/contatti.html`, `de_kontakt.html` — visible-text parity checks (hours, phone, g.page review link)
- `/home/user/empty/swisscentromedico.ch-audit/raw/pages/agopuntura.html`, `de.html`, `en.html`, `fr.html` — cross-language spot checks
