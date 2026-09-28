# GEO / AI Search Readiness: swisscentromedico.ch

Status: PARTIAL (first pass from local crawl data; live crawler, llms.txt and entity checks still running)
Date: 2026-09-28

## First-pass observations (local data only)

- robots.txt: `User-Agent: *` only, `Allow: /`. No AI-bot-specific rules, so every AI search and training crawler is allowed by default. Disallows cover only booking/redirect paths (/prenota/, /de/termin/, /fr/rendez-vous/, /en/book/, /whatsapp/, /e/) and WP leftovers.
- llms.txt: present, 123 lines, lists all 96 URLs in 4 languages with descriptions, NAP, physician, and a "do not invent prices/claims" note. Accuracy check pending.
- Citability: 96 pages, all server-rendered. Service pages carry a visible physician byline plus a "reviewed/updated on" date, question-shaped FAQ H3s (5-10 per page), a "Scientific sources" section with DOIs mirrored in `citation` JSON-LD, and a medical disclaimer. Passages are short: median section is 23 words, and only 1 of 2,144 service-page sections falls in the 130-170 word band.
- Entity: MedicalClinic + Person/Physician graph on every page, with sameAs to OneDoc, EMR, Instagram, Facebook, praxis-sternen.ch and Comparis. No Wikidata. Physician `name` includes the honorific. Title/H1 "Rheumatologist in Lugano" is used, but the FMH title is Physical Medicine and Rehabilitation.
