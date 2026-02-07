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

## GitHub Pages (github.io) Hosting
These steps publish the static build to your GitHub Pages site.

### Option A: gh-pages branch (most common)
1. Create a GitHub repo named `aastha-portfolio`.
2. Build the site:
   ```bash
   npm run build
   ```
3. From the project root, publish the `dist/client` folder to the `gh-pages` branch:
   ```bash
   npx gh-pages -d dist/client
   ```
4. In GitHub: **Settings → Pages**  
   - Source: `gh-pages` branch  
   - Folder: `/ (root)`
5. Your site will be live at:  
   `https://aastha-jaie.github.io/aastha-portfolio/`

### Option B: docs/ folder
1. Build the site:
   ```bash
   npm run build
   ```
2. Copy `dist/client` into `docs/`:
   ```bash
   rm -rf docs
   cp -R dist/client docs
   ```
3. Commit and push.
4. In GitHub: **Settings → Pages**  
   - Source: `main` branch  
   - Folder: `/docs`

### Important
Make sure these URLs match your GitHub Pages domain:
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
