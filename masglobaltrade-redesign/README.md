# MAS Global Trade · Redesign

Three new visual designs of masglobaltrade.ch with the same content as the
pixel-perfect clone in `../masglobaltrade`.

| Path  | Design        | Direction |
|-------|---------------|-----------|
| `/`   | Chooser       | Pick a version |
| `/v1` | Autosalone    | Car-dealer signage: yellow/black, hazard stripes, price tags, stamps |
| `/v2` | Trailer       | Cinematic: letterbox, red/black, pinned horizontal reel, credits      |
| `/v3` | Volantino Pop | Flyer/poster: flat colours, thick outlines, stickers, bouncy cards  |

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
- `src/designs/v1|v2|v3/` – one folder per design: theme CSS, layout, home,
  inner pages.
