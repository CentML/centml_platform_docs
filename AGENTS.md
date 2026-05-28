# AGENTS.md

This repository is a Docusaurus 3 documentation site for NVIDIA CCluster. Agents should optimize for safe documentation edits, correct CSS overrides, and working builds.

## Quick Orientation

- **Framework:** Docusaurus 3 with `@docusaurus/preset-classic`
- **Config:** [docusaurus.config.js](docusaurus.config.js) (site settings, navbar, footer)
- **Sidebar:** [sidebars.js](sidebars.js) (page order, icons, grouping)
- **Custom CSS:** [src/css/docs.css](src/css/docs.css) (all Infima/layout overrides)
- **Icons:** [src/theme/DocSidebarItem/Link/icons.js](src/theme/DocSidebarItem/Link/icons.js) (lucide-react icon map)
- **Content:** MDX files in [docs/](docs/) with `routeBasePath: '/'`
- **Static assets:** [static/](static/) (images, CNAME, favicon)
- **Deployment:** GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## Local Development

```bash
npm start                    # dev server with hot-reload
docker compose up            # containerized dev server
npm run build                # production build → build/
npx docusaurus serve         # serve production build locally
```

## Repo Shape

- [docs/home/](docs/home/) — getting started pages (introduction, quickstart)
- [docs/deployments/](docs/deployments/) — LLM serving, inference, compute
- [docs/clients/](docs/clients/) — SDK/client usage docs
- [docs/resources/](docs/resources/) — operational and supporting guides
- [docs/examples/](docs/examples/) — example pages and nested example groups
- [src/theme/](src/theme/) — swizzled Docusaurus components
- [src/css/](src/css/) — custom CSS overrides

## CSS Architecture

### Layout hierarchy

```
body
  └── .navbar (padding zeroed; .navbar__inner handles gutters)
      └── .navbar__inner (max-width: 1440px, margin: auto, padding: 0 2rem)
  └── .main-wrapper (width: 100%, max-width: 1440px, margin: auto, padding: 0 2rem)
      └── [docSidebarContainer] (width: 220px, margin-right: 2rem)
      └── .row
          └── .col [docItemCol] (main content)
          └── .col.col--3 (TOC column)
```

### Critical CSS variable

```css
:root { --doc-sidebar-width: 252px; }
```

This syncs Docusaurus's internal layout calculation with actual sidebar width (220px + 32px margin). Without it, dead space appears beside the content.

### Key rules and why they exist

| Rule | Reason |
|------|--------|
| `.main-wrapper { width: 100% }` | Parent is flex with shrink:0; without this, content sets wrapper width → horizontal overflow |
| `.navbar { padding-left: 0; padding-right: 0 }` | Zeroes Infima default so `.navbar__inner` padding aligns logo with sidebar |
| `[class*='docItemCol'] { min-width: 0 }` | Flex items default to `min-width: auto`, preventing shrink below content size |
| `.markdown { overflow-wrap: anywhere }` | Prevents long inline code from causing horizontal scroll |
| `.table-of-contents:has(> li:only-child) { visibility: hidden }` | Hides TOC when only one heading (mirrors old Mintlify behavior), preserves column space |

### Fixing horizontal overflow

1. Ensure `.main-wrapper` has `width: 100%`
2. Ensure `[class*='docItemCol']` has `min-width: 0`
3. Ensure `.markdown` has `overflow-wrap: anywhere`
4. For specific overflowing elements: `max-width: 100%; overflow-x: auto`

### Changing sidebar width

Update both values together:
```css
[class*='docSidebarContainer'] { width: Xpx; min-width: Xpx; }
:root { --doc-sidebar-width: calc(Xpx + 32px); }
```

## Sidebar Icons

- `sidebars.js` assigns icon names via `customProps: { icon: 'icon-name' }`
- `src/theme/DocSidebarItem/Link/index.js` — swizzled component rendering sidebar links
- `src/theme/DocSidebarItem/Link/icons.js` — maps icon names → lucide-react components

To add a new icon: import from `lucide-react`, add to `ICON_MAP` with key matching `customProps.icon`.

## Content Editing

- Frontmatter: `title`, `description`, optional `sidebar_label`
- Images: wrap in `<Frame>` component for bordered screenshots
- Image paths: `/images/filename.png` (stored in `static/images/`)
- For tall images, add inline style: `maxHeight: '360px', width: 'auto', margin: '0 auto'`
- Hero card image height: controlled by `.ccluster-docs-hero-card__img { aspect-ratio: 5/2 }` in CSS

## Deployment

- **Production:** GitHub Pages, triggered on push to `main`
- **Custom domain:** `docs.centml.ai` (configured via `static/CNAME`)
- **TLS:** automatic via GitHub (Let's Encrypt)
- **Workflow:** `.github/workflows/deploy.yml` runs `npm ci` → `npm run build` → deploy-pages

## Build Warnings to Expect

- `onBrokenMarkdownLinks` deprecation warning (harmless, Docusaurus v4 migration path)
- Broken links to `/resources/cli` and `/resources/sdk` (pages not yet created)

## Editing Rules

- `sidebars.js` is the source of truth for page order and visibility
- A file existing on disk does not mean it is in the nav
- Prefer local image references `/images/file.png`
- Preserve existing MDX style and frontmatter keys
- Keep docs changes scoped; this repo is docs-only, no application code
- Test with `npm run build` before pushing — catches broken links and build errors

## Good First Checks For Any Task

1. Read this file and [docusaurus.config.js](docusaurus.config.js)
2. Run `npm run build` to verify nothing is broken
3. Inspect the target page's MDX and any component it uses
4. Confirm whether the page is in `sidebars.js` or just exists on disk
5. Check `src/css/docs.css` before adding new style rules — the override may already exist
