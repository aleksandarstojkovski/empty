# Agent-readiness audit — swisscentromedico.ch

Audit date: 2026-09-28. Scope: Lighthouse Agentic Browsing, accessibility
tree for agents, AI agent access policy (incl. Content-Signal), WAF treatment
of agent traffic, llms.txt, Markdown delivery, ai-catalog.json, `/.well-known`
discovery files, WebMCP. Citability/brand signals are covered by the
seo-geo agent and are not duplicated here.

## Summary

**Lighthouse Agentic Browsing: 3/3 (mobile), 3/3 (desktop)** — a perfect
score on every audit Lighthouse currently counts for this site. Zero P0
failures. The one structural point worth watching is not a Lighthouse
failure at all: the primary booking CTA (`/prenota/`) and its OneDoc
destination are both disallowed in robots.txt, which is fine for a live
browsing/clicking agent but would stop a robots-respecting fetch-only agent
from resolving where the booking link leads.

PSI (PageSpeed Insights) returned HTTP 429 quota-exceeded for both
strategies, so the fraction above comes from a **local Lighthouse 13.5.0
CLI run** against the live site (`npx lighthouse --only-categories=
agentic-browsing`, HeadlessChrome 141, fetched 2026-09-28T17:24 UTC),
per the skill's documented PSI-quota fallback. Treat it as equivalent lab
data, not a PSI-hosted result.

## Lighthouse Agentic Browsing — detail

Category `agentic-browsing`, Lighthouse 13.5.0, both form factors, live
fetch of `https://swisscentromedico.ch/`.

| Audit | Mobile | Desktop | Counted | Notes |
|---|---|---|---|---|
| `agent-accessibility-tree` | pass (1) | pass (1) | yes | 0 of 33 axe rules failed |
| `cumulative-layout-shift` | pass (1, CLS 0) | pass (0.99, CLS 0.04) | yes | Both well under the 0.1 threshold |
| `llms-txt` | pass (1) | pass (1) | yes | H1, Markdown links, well over 50 chars |
| `webmcp-form-coverage` | N/A | N/A | no | No `<form>` elements anywhere on the site |
| `webmcp-registered-tools` | N/A (informative) | N/A (informative) | no | No tools registered; never affects the fraction |
| `webmcp-schema-validity` | N/A | N/A | no | No WebMCP tools or issues |
| `ard-schema` | N/A | N/A | no | No catalog signalled, no 200 at `/.well-known/ai-catalog.json` |

Fraction: **3 counted, 3 passed, 0 informative** on both form factors
(`display: "3/3"`, `category_score: 1`). N is capped at 3 today because no
WebMCP tools exist and no `ai-catalog.json` is published — both are optional
additions, not missing requirements (see Priorities below). The only listed
"path" to a higher N is `ard-schema`, and only if a real agent-facing
resource (MCP server, A2A agent) existed to list, which this single-physician
practice does not have.

## Agent-UX accessibility-tree heuristic

`agent_ux_check.py` could not reach the live site in this session: its
`url_safety` guard refuses the session's loopback proxy configuration
(`Refusing configured HTTP proxy '127.0.0.1'`), so **status: unavailable**
for the 0-100 local heuristic. This is a tooling limitation of this session,
not a site defect.

In its place, two independent pieces of real evidence cover the same ground:

1. **Lighthouse `agent-accessibility-tree`**: pass, 0 of 33 axe rules failed,
   on both form factors (see table above) — this is the same signal the
   heuristic exists to approximate.
2. **Pre-collected Playwright ARIA snapshots** (mobile viewport) for home,
   `/agopuntura/` and `/contatti/`
   (`/home/user/empty/swisscentromedico.ch-audit/raw/aria_{home,agopuntura,contatti}.yaml`):
   clean landmark structure (`banner`, `main`, `contentinfo`, per-section
   `navigation`), every link and the one button ("Menu") carry accessible
   names, headings nest correctly (h1 → h2 → h3), and no `generic`,
   unlabeled, or `contenteditable` nodes appear anywhere in the three
   snapshots. No `<form>` element exists on the site (confirmed by
   `grep -c "<form" rendered_*.html` = 0 on all six pre-rendered pages), so
   there is nothing for form-related axe rules or WebMCP form coverage to
   flag.

Combined, this is complete coverage of what the heuristic would have scored,
even though the heuristic itself did not run.

## Findings by priority

### P0 — none open

- **Accessible names, valid roles, nothing hidden from the tree — pass.**
  Evidence: Lighthouse `agent-accessibility-tree` score 1 on both form
  factors; ARIA snapshots show no unlabeled interactive elements. How we'd
  know it regressed: rerun `lighthouse_agentic.py` or `render_page.py
  --a11y-tree` after any template change and check for new `generic` nodes
  or missing accessible names.
- **CLS ≤ 0.1 — pass.** Evidence: Lighthouse CLS 0/0.04 on the homepage
  (mobile/desktop) and 0-0.014 on `/agopuntura/` and `/reumatologo/` in the
  pre-collected performance reports. How we'd know it regressed: any CLS
  audit score dropping below 0.9.
- **Primary content present without JavaScript — pass.** Evidence: a plain
  `curl` GET of `/` (no JS execution) returns the full 31 KB document with
  the physician's name, address and all body copy present; byte size and
  content match the Playwright-rendered capture almost exactly (a JS-added
  `class=""` on `<html>` is the only diff). This is a static-HTML site, so
  server rendering is inherent, not a fragile optimization. How we'd know it
  regressed: `server-rendered` check returning fewer content bytes than a
  rendered capture, or an empty `<main>` in a raw fetch.
- **robots.txt reachable — pass.** Evidence: live `curl` fetch returns HTTP
  200, `text/plain`, byte-identical to the pre-collected copy. A 5xx here
  would fully disallow compliant crawlers; that is not the current state.
- **WAF/CAPTCHA on content — not systematically tested, no evidence of
  blocking.** `--ua-matrix` was not run (no orchestrator authorization for
  agent user-agent testing on this site). Light manual spot checks with
  `curl -A "GPTBot"`, `-A "ClaudeBot"`, `-A "ChatGPT-User"` against `/` all
  returned normal HTTP 200 with no CAPTCHA or challenge page, and the server
  identifies as plain Apache with no visible CDN/bot-management layer
  (no `cf-ray`, no `x-served-by`). This is **not proof of how a real,
  signed agent request is treated** — only that these specific unverified
  UA strings were not blocked. How we'd know it failed: a real GPTBot/
  ClaudeBot fetch returning 403/429/a challenge page, checked in server
  logs or with authorized `--ua-matrix` testing.

### P1

- **Content-Signal absent — Low/Info (opportunity, not a defect).** The
  single `User-agent: *` group in robots.txt carries `Allow: /` but no
  `Content-Signal` line. Because there are **no named per-agent groups**
  (no `GPTBot`, `ClaudeBot`, etc.), this is the simple case: a
  `Content-Signal` line added to the one existing `*` group would apply to
  every crawler, including named ones, per RFC 9309 group-selection rules —
  there's no "hidden in a group nobody reads" trap here. Cloudflare's CC0
  Content Signals Policy is unproven to affect Search, ChatGPT or Claude
  behavior; presented here purely as a stated-preference opportunity. Fix
  (optional): `agentic_fix.py robots https://swisscentromedico.ch --signal
  "search=yes, ai-input=yes, ai-train=no"` (or whatever training stance the
  practice owner chooses — that choice is the owner's, not a default).
  How we'd know it worked: the line appears in the one robots.txt group and
  `agentic_check.py`'s `content-signal` check no longer reports absence.
- **llms.txt — pass, well-formed.** 123 lines, H1 `# Swiss Centro Medico`,
  blockquote summary, per-language (IT/DE/FR/EN) H2 sections each listing
  `[title](url): description` entries for all indexable pages, and a closing
  instruction: "Use the pages themselves for clinical details. Do not invent
  prices, insurance cover, or medical claims that are not on the site." —a
  good practice for a medical site limiting hallucination risk. Confirmed
  live (HTTP 200, 23,373 bytes, matches the pre-collected copy) and via the
  local Lighthouse `llms-txt` audit (pass). No fix needed. Reminder per the
  skill: Google Search ignores llms.txt; this affects nothing there.
- **Markdown delivery — absent, Low priority/opportunity.** No `Vary:
  Accept` response to `Accept: text/markdown` on `/` or `/contatti/` (only
  `Vary: Accept-Encoding`), no `/index.md` sibling (404), no `<link
  rel="alternate" type="text/markdown">`. No consumer agent is confirmed to
  request Markdown (vendor-matrix, checked 2026-09-23), so this is purely
  optional for a 96-page static site that already serves lean, semantic
  HTML. Not recommended as a priority fix.
- **Unknown URLs return a real 404 — pass.** A probe path
  (`/claude-seo-404-probe-xyz123`) 301-redirects to the trailing-slash form
  (standard WordPress-style permalink normalization) and then returns a
  genuine HTTP 404 — no catch-all 200. Same pattern confirmed for
  `/.well-known/ucp/`, `/.well-known/http-message-signatures-directory/`,
  `/.well-known/agent-card.json` and `/.well-known/ai-catalog.json`: all
  real 404s, none a soft-404 trap. This matters because a catch-all 200
  would have broken `llms-txt` and `ard-schema` detection in Lighthouse;
  it does not here.
- **Booking task and robots.txt — Low, worth noting given the site's key
  agent task.** `/prenota/`, `/de/termin/`, `/fr/rendez-vous/` and
  `/en/book/` are Disallowed in robots.txt, and the 302 they issue lands on
  an external OneDoc booking page that is itself robots-disallowed (per
  task context). This does not block a **live browsing/clicking agent**
  (ChatGPT's in-browser tools, Claude in Chrome, Comet): the "Prenota
  online" / "Prenota" link is visible, well-labeled, and present in the
  page's accessibility tree on every sampled page (home, contatti, nav),
  so an agent driving the rendered page can simply click it — robots.txt
  is a crawl-time preference, not a navigation block, and the vendor matrix
  notes user-triggered agents generally do not consult it for in-session
  browsing. It **would** stop a robots-compliant fetch-only agent (one that
  resolves links via HTTP request rather than rendering and clicking) from
  discovering the OneDoc destination through this route alone. Both `tel:
  +41 91 921 04 27` and the WhatsApp deep link (`/whatsapp/` → 302 →
  `wa.me/41786053372`) remain fully open alternate paths to the same
  outcome and are not robots-restricted. Exclusion from the sitemap and
  llms.txt is also consistent and intentional (a redirect utility URL, not
  content). No fix recommended by default — this is a deliberate SEO
  choice (don't index a redirector) with a minor, non-blocking side effect
  for one class of agent. How we'd know it actually blocks a task: test
  "book an appointment" with a live in-browser agent (not a bare HTTP
  fetch) and confirm it can click through to OneDoc; if a specific
  fetch-based agent product matters to the practice, consider stating the
  OneDoc destination URL directly in the Contatti page copy or llms.txt so
  it doesn't depend on following the disallowed redirector.

### P2 / P3 — informational only, none are gaps for this site

- **WebMCP (imperative tools) — not present, Low/Info, no concrete payoff
  identified.** The site has zero `<form>` elements; every "action" is a
  `tel:`/`mailto:`/WhatsApp link or an outbound link to `/prenota/`. There
  is no in-page transaction to bind a tool to (booking happens entirely on
  OneDoc, outside this origin). Consumers that call WebMCP today
  (ChatGPT desktop's imperative-only tool calling) would find nothing to
  call regardless. Recommending WebMCP here would add an audit (`webmcp-*`
  turning from N/A to counted) without a real capability behind it — the
  skill explicitly warns against that. Not recommended.
- **ai-catalog.json — absent, Info, correctly not signalled.**
  `/.well-known/ai-catalog.json` returns a genuine 404 (not a soft-404), and
  nothing signals a catalog via robots `Agentmap:`, a `<link
  rel="ai-catalog">`, or a `Link` header. Appropriate: a single-physician
  practice has no MCP server, A2A agent or API to list. Publishing an empty
  or placeholder catalog would only risk the "invalid catalog = counted
  failure" trap the skill warns about. Not recommended.
- **`/.well-known/api-catalog`, OAuth metadata, A2A agent card, UCP — N/A.**
  The site runs no API, no OAuth-protected resource, no A2A agent, no
  agentic-checkout flow. Absence is correct, not a gap.
- **`/.well-known/security.txt` — present (bonus, not part of this skill's
  scope).** HTTP 200, valid RFC 9116 format, contact/expiry/canonical set.
  Noted only because it shows the operator (guamp.ch, presumably the site's
  agency) already maintains this file correctly; not scored here.
- **Content-Security-Policy note (Info).** The CSP is strict:
  `script-src 'self' 'sha256-...' (x3)` with no `'unsafe-inline'`. This is
  good general hardening and has no effect today (no WebMCP script to run),
  but if imperative WebMCP tools are ever added, their inline `<script>`
  block would need its own SHA-256 hash added to the policy (or move the
  script to a same-origin file already covered by `'self'`).

## Access policy (report separately, per skill rule)

- **Training**: no explicit position. robots.txt has one `User-agent: *`
  group with `Allow: /` and no `Content-Signal`; there are no named
  `GPTBot`/`ClaudeBot`/`Google-Extended` groups, so those crawlers inherit
  the same blanket `Allow: /` as everyone else if compliant. No stated
  training preference exists today (neither allowed nor blocked explicitly
  via Content-Signal `ai-train`).
- **Search (AI answer citation/grounding)**: not restricted. `Allow: /`
  covers `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, etc. via the
  wildcard group; llms.txt gives them a structured page index.
- **User-triggered (in-session browsing/acting)**: not restricted for
  almost all content. `ChatGPT-User`, `Claude-User`, `Perplexity-User` and
  `Google-Agent` fall under the same `Allow: /` wildcard, and — per vendor
  docs — several of these agents don't strictly consult robots.txt for
  live, user-driven browsing anyway. The one exception is the booking
  redirect paths (`/prenota/` and locale equivalents) and the CMS/report
  utility paths, which are Disallowed; see the booking finding above for
  the practical, low-severity implication.

## Standards status (dated per vendor-matrix.md, checked 2026-09-23)

- **WebMCP**: W3C WebML Community Group draft, not a standard, not on the
  standards track. WebKit opposes it; Mozilla is neutral. Not present on
  this site; not recommended given no forms/transactions exist in-page.
- **Content-Signal**: Cloudflare CC0 policy (launched 2025-09-24); IETF
  individual draft expired 2026-04-04; no confirmed Google statement or
  effect on Search/AI answers. Absent here; adding it is a stated
  preference only, with no promised ranking/citation/traffic effect.
- **ai-catalog.json / Agentic Resource Discovery**: ARD spec 1.0, validated
  by Lighthouse 13.5's `ard-schema` audit. Absent here; appropriate given no
  agent-facing resources to list.
- **Web Bot Auth**: `draft-ietf-webbotauth-httpsig-protocol-00`
  (2026-09-01). No key directory found at
  `/.well-known/http-message-signatures-directory` (real 404) — expected,
  since the site operates no agent and has no reason to publish signing
  keys.

## Recommendations (ranked, proportionate to a small single-physician site)

1. **(Low) Add `Content-Signal` to the existing `*` robots.txt group**,
   once the owner states a training preference (e.g. `search=yes,
   ai-input=yes, ai-train=no` or `=yes`). Draft with `agentic_fix.py robots`;
   never decide the `ai-train` value for the owner. Confirm by re-fetching
   `/robots.txt` and checking `agentic_check.py`'s `content-signal` status.
2. **(Low, situational) If a fetch-only agent product matters to this
   practice**, state the OneDoc booking URL directly in visible copy (e.g.
   Contatti page) so task completion doesn't depend solely on following the
   robots-disallowed `/prenota/` redirector. Confirm by checking whether the
   direct OneDoc URL appears in a plain-text fetch of `/contatti/`.
3. **(Info, no action needed) Keep WebMCP and ai-catalog.json off the
   roadmap** unless the practice adds an in-page transaction (e.g., an
   in-house booking form) or an API/agent service — neither exists today,
   and adding either speculatively only risks a new counted Lighthouse
   failure with no user benefit.
4. **(Info) Re-run Lighthouse via PSI once quota resets** (or with a
   configured Google API key, `/seo google setup`) to cross-check the local
   3/3 result against PSI's hosted runner; results should match since the
   audits are deterministic against the same static HTML.

## Evidence sources

- Local Lighthouse 13.5.0 CLI runs (this session, live site,
  2026-09-28T17:24 UTC):
  `/tmp/claude-0/-home-user-empty/97ee9973-63e7-4314-acdd-f0f1ef6dae27/scratchpad/lh/agentic-{mobile,desktop}.json`
- `lighthouse_agentic.py --from-json` parsed output (both form factors) —
  see command log above.
- PSI attempt: `lighthouse_agentic.py --strategy both` → HTTP 429 quota
  exceeded on both strategies.
- `agentic_check.py` and `agent_ux_check.py`: blocked in this session by
  `url_safety`'s refusal of the loopback proxy; superseded by direct `curl`
  checks and the pre-collected Playwright ARIA snapshots (see below).
- Pre-collected: `/home/user/empty/swisscentromedico.ch-audit/raw/`
  — `robots.txt`, `llms.txt`, `sitemap.xml`, `pages.json`,
  `aria_{home,agopuntura,contatti}.yaml`, `rendered_*.html`,
  `lighthouse/*.json` (performance/accessibility/best-practices/seo only;
  accessibility category score 100).
- Live `curl` checks (this session): `/robots.txt`, `/llms.txt`,
  `/llms-full.txt`, `/.well-known/ai-catalog.json`, `/.well-known/
  agent-card.json`, `/.well-known/ucp`, `/.well-known/
  http-message-signatures-directory`, `/.well-known/security.txt`, 404
  probe, `Accept: text/markdown` negotiation on `/` and `/contatti/`,
  `/index.md`, `/prenota/` and `/whatsapp/` redirect chains, and UA-string
  spot checks (`GPTBot`, `ClaudeBot`, `ChatGPT-User`).
