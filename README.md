# Aastha Portfolio

A single‑page portfolio built with React + Vite, rendered with SSR and pre‑rendered SSG for fast load times and strong SEO.

## Tech Stack
- React 18
- Vite 5
- TypeScript
- Vite SSR + SSG (pre‑rendering)

## Scripts
- `npm run dev` — Start the dev server (SSR) at `http://localhost:3000`
- `npm run build` — Build client + server bundles and pre‑render static HTML
- `npm run preview` — Serve the production build locally

## Project Structure
- `src/App.tsx` — Main UI
- `src/styles.css` — Global styles
- `src/entry-client.tsx` — Client hydration entry
- `src/entry-server.tsx` — Server render entry
- `server.js` — SSR dev/preview server
- `prerender.js` — SSG pre‑render script
- `public/` — Static assets (resume, favicon, og image, robots, sitemap)

## SEO
SEO metadata and JSON‑LD are embedded in `index.html` to ensure they appear in the pre‑rendered HTML.

If you deploy under a different domain, update the site URL in:
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## Deployment
You can deploy the `dist/client` folder to any static host (GitHub Pages, Netlify, Vercel static, S3, etc.).

Build first:
```bash
npm run build
```

Then deploy `dist/client`.
