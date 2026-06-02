# NVIDIA CCluster Docs

This repository contains the [Docusaurus](https://docusaurus.io/) source for the NVIDIA CCluster documentation site, published at [docs.centml.ai](https://docs.centml.ai).

The site is built with Docusaurus 3 (`@docusaurus/preset-classic`). Layout, branding, and the color palette are defined in [docusaurus.config.js](docusaurus.config.js) and [src/css/docs.css](src/css/docs.css).

## Repository Layout

- [docusaurus.config.js](docusaurus.config.js): site configuration, navbar, and footer
- [sidebars.js](sidebars.js): left-nav structure, page order, and sidebar icons
- [docs/](docs/): all documentation pages, written as `.mdx`
  - [docs/home/](docs/home/): landing pages (introduction, quickstart)
  - [docs/apps/](docs/apps/): deployment product docs (LLM serving, inference, compute)
  - [docs/clients/](docs/clients/): SDK and client setup docs
  - [docs/resources/](docs/resources/): supporting guides (custom images, vault, support, etc.)
  - [docs/examples/](docs/examples/): example-driven docs
- [src/components/](src/components/): shared MDX components (`Card`, `Frame`, `Note`, `Tip`, `Banner`)
- [src/theme/](src/theme/): swizzled Docusaurus theme components (e.g. sidebar link icons)
- [src/icons.js](src/icons.js): shared icon map (lucide-react) used by the sidebar and `Card`
- [src/css/docs.css](src/css/docs.css): custom styling and NVIDIA brand tokens
- [static/](static/): static assets served at the site root (images, `CNAME`, favicon)

## Prerequisites

For local development you need either:

- Docker and Docker Compose, or
- Node.js 20 and npm

> **Note:** Use Node.js 20 to match CI and the Docker image. Newer majors (e.g. Node 24) can cause intermittent Docusaurus build errors locally.

## Local Development

### Option 1: npm

Install dependencies and start the dev server with hot-reload:

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

### Option 2: Docker

```bash
docker compose up --build
```

Then open [http://localhost:3000](http://localhost:3000). The repo is mounted into the container, so local edits are reflected live.

## Building Locally

To produce and preview the optimized production build (the same output CI deploys):

```bash
npm run build      # generates static files in build/
npm run serve      # serves the build/ output locally
```

A successful build is the primary validation before opening a PR.

If you hit a stale-cache build error locally, clear and rebuild:

```bash
npm run clear && npm run build
```

## Editing Workflow

1. Update or add `.mdx` pages under the appropriate directory in [docs/](docs/).
2. If a page should appear in the left nav, add it to [sidebars.js](sidebars.js) (optionally with a `customProps.icon`).
3. Put images in [static/images/](static/images/) and reference them with `/images/...` paths.
4. Reuse shared components from [src/components/](src/components/) (e.g. `Card`, `Frame`, `Note`, `Tip`) instead of duplicating markup.
5. Run `npm run build` locally before opening a PR to catch broken links and build errors.

## Release Process

Deployment is fully automated via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

1. **Create a PR.** Push your branch and open a pull request against `main`.
2. **Review and approve.** A reviewer approves the changes.
3. **Merge to `main`.** Merging triggers the deploy workflow.
4. **GitHub Action builds and deploys.** The workflow runs `npm ci` and `npm run build`, then publishes the static output to GitHub Pages.
5. **Live.** Once the workflow completes, the changes are served at [docs.centml.ai](https://docs.centml.ai).

The custom domain is configured via [static/CNAME](static/CNAME), and TLS certificates are provisioned automatically by GitHub Pages.

## Important Notes

- [sidebars.js](sidebars.js) is the source of truth for the left navigation. A file existing in `docs/` does not mean it is published in the nav.
- Broken links fail the build (in CI and locally) instead of shipping as 404s, so fix them before merging.
- See [AGENTS.md](AGENTS.md) for deeper notes on CSS architecture, icons, and common tasks.
