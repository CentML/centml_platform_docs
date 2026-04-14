# AGENTS.md

This repository is a Mintlify documentation site for NVIDIA CCluster. Future agents should optimize for safe documentation edits, fast local preview, and minimal assumptions about unpublished content.

## Quick Orientation

- The docs site is configured by [mint.json](/Users/anurlybayev/Developer/codex/centml_platform_docs/mint.json).
- Most content is written as `.mdx` files under [home/](/Users/anurlybayev/Developer/codex/centml_platform_docs/home), [apps/](/Users/anurlybayev/Developer/codex/centml_platform_docs/apps), [clients/](/Users/anurlybayev/Developer/codex/centml_platform_docs/clients), [resources/](/Users/anurlybayev/Developer/codex/centml_platform_docs/resources), and [examples/](/Users/anurlybayev/Developer/codex/centml_platform_docs/examples).
- Shared MDX helpers currently live in [snippets/components.mdx](/Users/anurlybayev/Developer/codex/centml_platform_docs/snippets/components.mdx).
- Static assets live in [images/](/Users/anurlybayev/Developer/codex/centml_platform_docs/images).
- The local preview environment is containerized via [Dockerfile](/Users/anurlybayev/Developer/codex/centml_platform_docs/Dockerfile) and [docker-compose.yml](/Users/anurlybayev/Developer/codex/centml_platform_docs/docker-compose.yml).

## Known Good Local Setup

- Mintlify is pinned to `4.2.28` in the Dockerfile.
- Preferred preview command:

```bash
docker compose up --build
```

- Direct local CLI is acceptable, but keep it on the same version:

```bash
npm install -g mintlify@4.2.28
mintlify dev
```

## Repo Shape

- [home/](/Users/anurlybayev/Developer/codex/centml_platform_docs/home): entry-point pages
- [apps/](/Users/anurlybayev/Developer/codex/centml_platform_docs/apps): product capability pages
- [clients/](/Users/anurlybayev/Developer/codex/centml_platform_docs/clients): SDK/client usage docs
- [resources/](/Users/anurlybayev/Developer/codex/centml_platform_docs/resources): operational and supporting guides
- [examples/](/Users/anurlybayev/Developer/codex/centml_platform_docs/examples): example pages and nested example groups
- [endpoints/](/Users/anurlybayev/Developer/codex/centml_platform_docs/endpoints): API-related files not currently exposed in navigation

## Editing Rules Of Thumb

- Treat [mint.json](/Users/anurlybayev/Developer/codex/centml_platform_docs/mint.json) as the source of truth for page order and visibility.
- A file existing on disk does not mean it is published in the nav.
- Prefer local image references like `/images/file.png` for assets stored in this repo.
- Preserve existing MDX style and frontmatter keys such as `title`, `description`, `icon`, and optional `sidebarTitle` or `mode`.
- Reuse shared snippet components before introducing one-off duplicated UI blocks.
- Keep docs changes scoped; this repo does not appear to include general application code.

## Validation

- Primary validation is a working Mintlify preview.
- There is no obvious test or lint command checked into the repository today.
- For navigation changes, verify both the rendered page and the sidebar placement.
- For image changes, verify the asset path and rendering in preview.

## Things That May Surprise You

- The current [README.md](/Users/anurlybayev/Developer/codex/centml_platform_docs/README.md) is repo-specific and should stay aligned with the pinned Mintlify version.
- The repository contains some content and assets that are not currently referenced from navigation.
- There is a local `node_modules/` directory in the working tree environment, but it is not tracked by git and should not be relied on as repository metadata.

## Good First Checks For Any Task

1. Read [README.md](/Users/anurlybayev/Developer/codex/centml_platform_docs/README.md) and [mint.json](/Users/anurlybayev/Developer/codex/centml_platform_docs/mint.json).
2. Inspect the target page and any shared snippet it imports.
3. Confirm whether the page is navigation-backed or just present in the repo.
4. Use the Docker preview if anything about Mintlify versioning seems uncertain.
