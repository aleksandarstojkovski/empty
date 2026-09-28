# Content Quality / E-E-A-T: swisscentromedico.ch

Status: PARTIAL (first pass, 2026-09-28). The complete version overwrites this file.

Data: `raw/pages.json` (96 URLs, 24 per language), crawled 2026-09-28.

## Preliminary findings (first pass)

- **Critical (YMYL):** `/terapia-fotodinamica/` describes an infused ("per infusione") photosensitiser followed by "terapia laser sistemica endovenosa", aimed at "patogeni batterici, virali e parassitari", "anche in presenza di resistenze" and as an "approccio senza ricorso ad antibiotici sistemici". The listed agents include curcumin and hypericin. None of the three cited sources supports IV antimicrobial PDT. The meta description puts this claim in the SERP snippet.
- **High (YMYL):** the intravenous laser page (`/laserterapia-endovenosa/`) never says what the treatment is for. Its sources are a PBM mechanism review and a paper on contraindications for *non-invasive* laser. It gives no risk disclosure for an intravascular procedure.
- **High (YMYL):** the exosome page does not say where the exosomes come from (human, animal or plant) or what their regulatory status is. Its only clinical citation is a 5-volunteer study in a low-tier journal.
- **High (YMYL/trust):** `/agopuntura/` lists heart and circulation disorders, type 2 diabetes, thyroid disorders, infertility, depression and "difese immunitarie" as areas where acupuncture "può aiutare". The cited evidence covers only migraine, tension-type headache and chronic pain.
- **High (trust/regulatory):** `/reumatologo/` has the H1 "Reumatologo a Lugano", but the physician holds the FMH title in Physical Medicine and Rehabilitation, not Rheumatology.
- **Strength:** every service page carries a visible physician byline, a "Pagina verificata dal medico, aggiornata il ..." date, a disclaimer and a DOI-linked source list. JSON-LD has `reviewedBy` and `lastReviewed`. The GLN is published on the legal notice.

(Duplicate analysis, translation parity, metadata and readability are still in progress.)
