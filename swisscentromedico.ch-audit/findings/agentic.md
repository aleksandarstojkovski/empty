# Agent-readiness audit (partial, in progress) — swisscentromedico.ch

Audit date: 2026-09-28. This file will be overwritten with the complete
version once all checks finish.

## Status
- Pre-collected data reviewed (robots.txt, llms.txt, sitemap.xml, pages.json,
  rendered HTML, Lighthouse 13.5.0 reports for performance/accessibility/
  best-practices/seo — no `agentic-browsing` category in the saved reports).
- Running: `lighthouse_agentic.py` (PSI, both strategies), `agentic_check.py`,
  `agent_ux_check.py`, plus manual curl checks for `/.well-known/*`,
  Markdown negotiation, `.md` variants, `/llms-full.txt`.

## Preliminary observations
- robots.txt has a single `User-agent: *` group only (Allow: /, several
  Disallow paths incl. `/prenota/`, `/de/termin/`, `/fr/rendez-vous/`,
  `/en/book/`) — no named AI agent groups (GPTBot, ClaudeBot, etc.), no
  Content-Signal line.
- llms.txt present (123 lines), well-formed with H1, summary, per-language
  page lists with descriptions — looks Lighthouse-compliant on structure.
- Booking CTA `/prenota/` (and locale equivalents) is robots-disallowed and
  redirects (302) to an external OneDoc booking page, per task context.

(Full findings, priorities and recommendations to follow.)
