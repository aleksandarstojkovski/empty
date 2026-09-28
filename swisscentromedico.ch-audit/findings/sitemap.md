# Sitemap Audit — swisscentromedico.ch
Audit date: 2026-09-28

## Verdict: HEALTHY (no Critical/High issues)

96/96 sitemap URLs are 200, self-canonical, indexable, and hreflang-consistent with the live HTML. The only real findings are Low/Info items about lastmod granularity and legacy-WordPress cleanup hygiene.

---

## 1. XML structure & validity

| Check | Result | Severity |
|---|---|---|
| XML well-formed (`xmllint --noout`) | Pass | — |
| Namespace `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` | Correct | — |
| `xmlns:xhtml="http://www.w3.org/1999/xhtml"` for hreflang annotations | Correct | — |
| Served `Content-Type` | `application/xml; charset=utf-8` | — |
| Live `/sitemap.xml` vs. supplied raw copy | Byte-identical | — |
| URL count | 96 (limit 50,000) | Pass |
| Uncompressed size | 67,122 bytes (limit 50MB) | Pass |
| Duplicate `<loc>` entries | 0 | Pass |
| `<priority>` / `<changefreq>` tags | Absent (both ignored by Google anyway) | Info — no action needed |
| `<image:image>` / other extension namespaces | None present | see §6 |

**How we'd know it failed:** `xmllint --noout sitemap.xml` errors, or URL/byte count exceeds the caps.

## 2. Coverage vs. crawl

- Sitemap `<loc>` set and crawled-page set (`pages.json`, 96 entries) are **exactly equal** — no missing pages, no extra/orphaned sitemap entries.
- Every sitemap URL: HTTP 200, `final_url == loc` (no redirect chains inside the sitemap), `canonical == loc` (self-referencing), `meta_robots` does not contain `noindex`.
- Booking/WhatsApp redirect endpoints (`/prenota/`, `/de/termin/`, `/fr/rendez-vous/`, `/en/book/`, `/whatsapp/`) are correctly **excluded** from the sitemap and disallowed in robots.txt — matches the "Extra pages" gate with zero violations.

**How we'd know it failed:** any `status != 200`, `canonical != loc`, or `noindex` on a listed URL; or a crawled 200/indexable page absent from the sitemap.

## 3. Hreflang clusters (sitemap `xhtml:link` vs. on-page `<link rel=alternate>`)

- Every one of the 96 `<url>` blocks carries exactly 5 alternates: `x-default`, `it`, `de-CH`, `fr-CH`, `en` — no missing/extra codes, no malformed code set, across all 96 entries.
- Programmatic diff of sitemap hreflang map vs. each page's actual `<link rel="alternate" hreflang>` set (from `pages.json`): **0 mismatches** in codes or URLs for all 96 pages.
- `x-default` consistently points to the Italian (root) URL of each cluster, matching the stated default-language convention. Region codes (`de-CH`, `fr-CH`) vs. plain codes (`it`, `en`) are used consistently and are valid per Google's hreflang spec.
- Reciprocity holds (every language variant in a cluster references all others, including itself) — this was verified indirectly since sitemap and HTML sets match exactly per page.

**Severity:** Info — this is a clean pass, called out because hreflang breakage is a common high-severity finding elsewhere and it's worth confirming it's *not* an issue here.

**How we'd know it failed:** a sitemap cluster listing a hreflang URL that itself doesn't reciprocate, or a code/URL that diverges from the page's own `<head>` tags.

## 4. Lastmod realism

- **Low** — Only 4 distinct `lastmod` values appear across 96 URLs (`2026-09-17`, `-18`, `-20`, `-21`), each shared by 4–48 URLs. Dates are **not** all identical (passes the basic "fake lastmod" gate) and cluster sensibly by content family (e.g. all "PBM/exosomes" language variants share one date, all "privacy" variants share another) — consistent with translations being published together rather than a blanket auto-generated date. Still, this coarse 4-bucket granularity across 24 distinct content pieces means lastmod is only weakly informative for recrawl prioritization; if the CMS can expose true per-page edit timestamps, that would be marginally better, but this is not a trust-eroding pattern the way "all 96 identical" would be.
- **Info** — The HTTP `Last-Modified` response header **cannot** be used to corroborate sitemap `lastmod`: all 96 pages show `Last-Modified` timestamps within a single ~6-second window at crawl time (17:05:32–17:05:38 GMT, 2026-09-28), i.e. the whole static build was touched at once on deploy. This is expected for a statically-rendered site and is not itself a defect, but it means `lastmod` in the sitemap is sourced from CMS/content metadata, not filesystem mtime — worth confirming with whoever maintains the site that those dates really do track last *significant* content edits (per Google's guidance) rather than being manually/loosely set.
- All `lastmod` values are valid `YYYY-MM-DD` (valid W3C Datetime subset), none are in the future relative to 2026-09-28.

**How we'd know it failed:** all 96 `lastmod` values identical (auto-stamped "today" pattern), or `lastmod` dates that don't move when content demonstrably changes on a future re-crawl.

## 5. robots.txt

- `Sitemap: https://swisscentromedico.ch/sitemap.xml` present, absolute URL, correct scheme/host — confirmed live via `curl` (matches raw copy).
- `Disallow` list correctly blocks legacy WP internals (`/wp-admin/`, `/wp-json/`, `/xmlrpc.php`) and the booking/report/admin funnels; none of these appear in the sitemap. Pass.
- No sitemap index or secondary sitemap referenced — consistent with §7 (not needed at this scale).

## 6. Legacy WordPress cleanup (site was migrated off WordPress)

Spot-checked via `curl` against the live site:

| Legacy pattern | Result | Assessment |
|---|---|---|
| `/wp-admin/`, `/wp-json/`, `/xmlrpc.php`, `/wp-login.php`, `/wp-content/` | **404** | Clean — correctly removed, matches robots.txt disallow intent (belt-and-suspenders; 404 makes the disallow moot but harmless) |
| `/category/`, `/author/`, `/feed/` | **301 → homepage** | Acceptable — old WP taxonomy/feed URLs redirect rather than 404/soft-404; not in sitemap, not indexable duplicates |
| `/?p=1` (old WP query-string permalink) | **200**, but serves homepage content with **self-canonical `https://swisscentromedico.ch/`** | **Low** — technically a soft-200 on an arbitrary query string (static server ignores unknown params and serves the index document instead of 404ing), but the canonical tag prevents any duplicate-content/indexing risk. No action required unless Search Console shows these being crawled/indexed as separate URLs. |
| `/agopuntura-auricolare-rac/` and other old indexed slugs (per task brief) | **200**, present in sitemap, canonical-self, hreflang-correct | Confirmed preserved correctly — good migration practice (no lost equity from the WP-era URL structure) |
| `/wp-sitemap.xml`, `/sitemap_index.xml`, `/page-sitemap.xml`, `/post-sitemap.xml`, `/category-sitemap.xml`, `/sitemap-index.xml`, `/wp-sitemap-posts-page-1.xml` | All **404** | No orphaned legacy sitemaps left behind from the WordPress era — clean |
| `sitemap.xml.gz` | 404 | Not needed at this size; not a finding |

**Overall:** the WordPress migration was cleaned up well. Only the `/?p=1` 200-with-self-canonical pattern is worth a Low note — it's not causing harm today but is a slightly unusual server behavior (query strings silently ignored rather than 404s) worth being aware of if other arbitrary query patterns get crawled/linked externally.

**How we'd know it failed:** a legacy WP sitemap file still resolving 200 with stale URLs, or an old post slug now 404ing/redirecting away instead of being preserved.

## 7. Sitemap index / splitting

**Not needed.** At 96 URLs / 67KB, the site is roughly 0.2% of the 50,000-URL cap and 0.1% of the 50MB cap. A language-split sitemap index (4 files of 24 URLs each) would add operational complexity (more requests for crawlers, more files to keep in sync) with zero practical benefit at this scale. Revisit only if the site grows toward low thousands of URLs or adds a blog/CMS section with frequent publishing.

## 8. Image sitemap opportunity

**Info / optional, not a finding.** The sitemap contains no `<image:image>` extension. Each page has exactly one OG image (`/uploads/og/*.jpg`) referenced in `<meta property="og:image">`, and these are same-origin, crawlable, already-indexed pages — Google can discover them via standard crawling without an image sitemap. An image sitemap would only be worth adding if the practice wants to actively rank in Google Images for specific photos (e.g., the practice's own clinical/office photography) and those images aren't otherwise well-linked/alt-texted; given this is a single-physician practice site with primarily stock/decorative imagery, the ROI is low. No action recommended.

## 9. Location page quality gates (context check)

**Not applicable.** This is a single-physician, single-location practice site. All 96 URLs are language variants of 24 service/informational pages (treatments, legal, contact) — there are no city/location-swapped doorway pages. The 30-page warning and 50-page hard-stop thresholds for programmatic location pages do not apply here; flagging this explicitly so it's not mistaken for an oversight.

---

## Summary table

| # | Finding | Severity | Action |
|---|---|---|---|
| 1 | Lastmod uses only 4 distinct dates across 96 URLs, clustered by content family | Low | Confirm with site owner these track real edit dates, not a loose/manual stamp; no urgent fix |
| 2 | HTTP `Last-Modified` header is a deploy-time artifact (all pages within a 6s window), can't be used to cross-check sitemap `lastmod` | Info | No action; just don't use this header as a lastmod oracle for this site |
| 3 | `/?p=1` (and presumably other arbitrary query strings) returns 200 with homepage content instead of 404 | Low | Low priority; canonical tag already neutralizes indexing risk. Consider a catch-all redirect/404 for unknown query patterns if bots start hitting many variants |
| 4 | No image sitemap | Info | Optional; skip unless Image Search traffic becomes a goal |
| 5 | No sitemap index/language split | Info | Correctly not implemented; don't add one at this scale |
| 6 | Location-page quality gates | N/A | Site has no location pages; gates don't apply |

**Passing (explicitly verified, no issues):** XML validity/namespaces, 96/96 URLs 200 + self-canonical + indexable, sitemap↔HTML hreflang parity (0 mismatches across 96 pages), robots.txt Sitemap directive correct and live, priority/changefreq absent, legacy WP admin/API paths 404, legacy WP taxonomy paths 301→home (not indexed), old content slugs preserved at original URLs, no orphaned legacy sitemap files, URL/size well under caps.
