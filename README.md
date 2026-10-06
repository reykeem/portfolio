# portfolio

Personal site for Raymond Kim. Vite + React + TypeScript, plain CSS, no UI framework.

## Run locally

Requires Node 20.19+ (or 22+).

```bash
npm install
npm run dev        # http://localhost:5173 with hot reload
```

Other scripts:

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

The repo has its own `.npmrc` pointing at the public npm registry, so installs work even if your global npm config points at a private registry.

## Editing content

All copy, links, skills, projects, and experience live in [`src/data/content.ts`](src/data/content.ts). Images go in `src/assets/`.

The Experience section and its nav link only render once `experience` has entries.

## Deploy (Cloudflare Pages, free)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings: framework preset **Vite** (or React (Vite)), build command `npm run build`, output directory `dist`.
4. Deploy. You get `https://<project>.pages.dev`, and every push to `main` redeploys automatically. PRs get preview URLs.
5. Custom domain (optional): **Custom domains → Set up a domain**. Domains bought through Cloudflare Registrar are sold at cost and wire up automatically.
