# MAS Global Trade · Redesign

Three new visual designs of masglobaltrade.ch with the same content as the
pixel-perfect clone in `../masglobaltrade`.

| Path  | Design        | Direction |
|-------|---------------|-----------|
| `/`   | Hub           | All versions, with a "same page in every version" picker |
| `/notte` | Notte | Simple: dark with amber, Figtree, bento hero |
| `/fresco` | Fresco | Simple: white and teal, DM Sans, quick WhatsApp valuation in the hero |
| `/lago` | Lago | Simple: navy and coral, Outfit, boxed hero, centred headings |
| `/pulito` | Pulito | Simple: white and blue, Inter, photo beside the headline |
| `/concessionaria` | Concessionaria | Simple: graphite and red, Manrope, full-width photo hero |
| `/diretto` | Diretto | Simple: warm off-white and orange, Plus Jakarta Sans, centred hero |
| `/v1` | Autosalone    | Car-dealer signage: yellow/black, hazard stripes, price tags, stamps |
| `/v2` | Trailer       | Cinematic: letterbox, red/black, pinned horizontal reel, credits      |
| `/v3` | Volantino Pop | Flyer/poster: flat colours, thick outlines, stickers, bouncy cards  |
| `/alpino` | Alpino    | First proposal: editorial premium, light |
| `/originale` | Originale | The pixel-perfect clone, built from `../masglobaltrade` |

A floating switcher (bottom left) in every version opens the same page in
another version or goes back to the hub.

`/originale` is served by the `originale.ts` Vite plugin: it builds the clone
with base `/originale/` (cached in `node_modules/.cache/mas-originale`, rebuilt
when the clone's sources change) and, on `npm run build`, into
`dist/originale`. The clone needs its own `npm install` for this.

Every version has all routes of the original site (`/v1/compro-auto/locarno`,
`/v2/blog/<slug>`, …).

## Run

```sh
npm install
npm run dev
```

The app reuses the clone's `public/` folder and some of its modules (API hooks,
blog grouping, home data), so `../masglobaltrade` must be present next to it.
Reviews and blog posts load from the live site's `/api` endpoints through the
Vite proxy.

## Structure

- `src/content/` – page content extracted from the clone (design-agnostic JSON),
  plus `home.ts` for the home page.
- `src/shared/` – content model, block renderer (`pg-*` classes), motion
  helpers, lead form logic, routing.
- `src/designs/v1|v2|v3|alpino/` – one folder per design: theme CSS, layout,
  home, inner pages.
- `src/designs/simple/` – shared components and theme for the three simple
  proposals; `pulito/`, `concessionaria/`, `diretto/`, `notte/`, `fresco/` and `lago/` only pick font,
  colours and hero layout.
