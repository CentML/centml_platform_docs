# NVIDIA CCluster Docs

This repository contains the Mintlify source for the NVIDIA CCluster documentation site.

The Mintlify CLI is pinned to `mint@4.2.516` in the [Dockerfile](Dockerfile). If you use Mintlify locally outside Docker, use the same version unless you are intentionally validating an upgrade. The site's layout, branding, and color palette are defined in [docs.json](docs.json).

## Repository Layout

- [docs.json](docs.json): site configuration, branding, and left-nav structure
- [home/](home): landing pages such as introduction and quickstart
- [apps/](apps): deployment product docs
- [clients/](clients): SDK and client setup docs
- [resources/](resources): supporting guides such as pricing, support, vault, and custom images
- [examples/](examples): example-driven docs
- [snippets/components.mdx](snippets/components.mdx): shared custom MDX components used across pages
- [images/](images): local static assets referenced by MDX pages
- [endpoints/](endpoints): API-related assets that are present in the repo but are not currently wired into navigation

## Prerequisites

For local development you need:

- Docker and Docker Compose support
- Or Node.js 20+ and npm if you want to run Mintlify directly on your machine

## Local Development

### Preferred: Docker

The repo already includes a Docker-based workflow that installs the pinned Mintlify CLI version.

```bash
docker compose up --build
```

Then open [http://localhost:3000](http://localhost:3000).

Notes:

- The repo is mounted into the container, so local file edits are reflected in the preview.
- The image installs `mint@4.2.516` globally.
- Port `3000` is exposed by default.

### Alternative: Run Mintlify locally

If you prefer running the CLI directly, install the same version pinned in Docker:

```bash
npm install -g mint@4.2.516
```

From the repository root, run:

```bash
mint dev
```

If the CLI reports that it is outdated, run:

```bash
mint update
```

## Editing Workflow

1. Update or add `.mdx` pages under the appropriate section directory.
2. If a page should appear in the docs navigation, add it to [docs.json](docs.json).
3. Put screenshots and local images in [images/](images) and reference them with `/images/...` paths.
4. Reuse helpers from [snippets/components.mdx](snippets/components.mdx) when a page needs the shared hero card or banner components.
5. Preview locally before opening a PR, especially for image paths, imports, and navigation changes.

## How Publishing Works

Changes are deployed after they are merged into `main`. The hosted Mintlify site configuration and deployment are managed through Mintlify.

If you need admin access to the Mintlify project, follow the internal process referenced by the team and current repository owners.

## Important Notes

- `docs.json` is the source of truth for what appears in the left navigation.
- Not every file in the repository is currently linked from navigation.
- There is no app build, unit test, or lint pipeline defined in this repo today; the most important validation is a successful local Mintlify preview.
- After a Mintlify upgrade, recheck the local preview to confirm navigation, layout, and brand colors still render as expected.

## Troubleshooting

- If the preview does not start, make sure you are running the command from the repository root where `docs.json` lives.
- If a page returns `404`, confirm the file exists and that its route is correctly listed in `docs.json` when navigation is expected.
- If local Mintlify behaves differently from Docker, trust the Docker flow first because it is the repository’s default preview path.
