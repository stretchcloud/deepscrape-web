# DeepScrapper — Landing Site

The marketing / landing website for **[DeepScrapper](https://github.com/stretchcloud/deepscrape)**, the free, open-source, self-hostable web scraping API.

This repo is a static single-page site (React + Vite + Tailwind). It ships **no backend** — it builds to plain HTML/CSS/JS and is hosted for free on **GitHub Pages**. Every call-to-action points to the open-source project on GitHub.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build

```bash
pnpm build         # static output → dist/public
pnpm preview       # preview the production build
```

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/public` to GitHub Pages. No servers, no VPS.

- **Custom domain:** set it in the repo's *Settings → Pages*, which writes a `CNAME` file. The build uses a relative asset base, so it works at both the `*.github.io` URL and a custom domain with no code changes.
- **Live demo:** the demo box shows a sample by default. To wire it to a real running instance of the scraping API, set `VITE_API_BASE` (e.g. `https://api.your-domain`) at build time.

## Tech

React 19 · Vite · Tailwind CSS v4 · wouter · Radix UI · Framer Motion

## License

Apache-2.0 — same as the [DeepScrapper engine](https://github.com/stretchcloud/deepscrape).
