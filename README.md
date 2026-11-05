# NVIDIA CCluster Docs

This repository contains the [Fern](https://buildwithfern.com/learn/docs/getting-started/overview) source for the NVIDIA CCluster documentation site, published at `docs.nvidia.com/ccluster`.

The site uses the NVIDIA global theme (`global-theme: nvidia`), so logo, colors, fonts, layout, and footer come from the shared [global-theme](https://gitlab-master.nvidia.com/fern-documentation/global-theme) repository rather than this repo. See the [NVIDIA Fern onboarding guide](https://gitlab-master.nvidia.com/fern-documentation/guides) for platform details.

## Repository Layout

- [fern/fern.config.json](fern/fern.config.json): Fern organization (`nvidia`) and pinned CLI version
- [fern/docs.yml](fern/docs.yml): hosting, custom domain, theme, navbar links, and redirects
- [docs/index.yml](docs/index.yml): left-nav structure, page order, slugs, and sidebar icons
- [docs/](docs/): all documentation pages, written as `.mdx`
  - [docs/home/](docs/home/): landing pages (introduction, quickstart)
  - [docs/apps/](docs/apps/): deployment product docs (LLM serving, inference, compute, jobs)
  - [docs/clients/](docs/clients/): SDK and client setup docs
  - [docs/resources/](docs/resources/): supporting guides (custom images, vault, support, etc.)
  - `docs/<section>/images/`: screenshots used by the pages in that section
- [tools/](tools/): MDX-safety and docs-path checkers run in CI
- [.github/workflows/](.github/workflows/): Fern check, PR preview, staging, and production publish workflows

## Prerequisites

- Node.js 22 or higher
- Fern CLI: `npm install -g fern-api`
- Optional: `fern login --email <your-nvidia-email>` to apply the NVIDIA theme in local previews and enable the missing-redirects check

## Local Development

Start the dev server with hot-reload:

```bash
fern docs dev
```

Then open [http://localhost:3000/ccluster](http://localhost:3000/ccluster). Without `fern login` (or `FERN_TOKEN`), the preview renders unthemed.

## Validation

Run the same checks as CI before opening a PR:

```bash
fern check
fern docs md check
fern docs broken-links --strict
python3 tools/check-docs-mdx docs/
python3 tools/check-docs-paths --allow '../docs/index.yml' docs fern
```

## Editing Workflow

1. Update or add `.mdx` pages under the appropriate directory in [docs/](docs/).
2. Add new pages to [docs/index.yml](docs/index.yml); only pages listed there are published.
3. Put images in the section's `images/` folder and reference them with `./images/...` paths. Absolute paths and `..` segments are rejected by `tools/check-docs-paths`.
4. Use Fern's [built-in components](https://buildwithfern.com/learn/docs/writing-content/components/overview) (`Card`, `CardGroup`, `Frame`, `Note`, `Tip`, and others). Icons are Font Awesome classes such as `fa-solid fa-lock`.
5. Link between pages with root-relative paths such as `/apps/llm`; Fern adds the `/ccluster` base path.

## Release Process

Publishing runs through GitHub Actions and needs the `FERN_TOKEN` repository secret (request one in [#cdd-fern](https://nvidia.enterprise.slack.com/archives/C0A8987CQ7K)).

| Workflow | Trigger | Result |
| --- | --- | --- |
| [check-docs.yml](.github/workflows/check-docs.yml) | PRs and pushes to `main` | Validates config, MDX, links, and docs paths |
| [preview-docs.yml](.github/workflows/preview-docs.yml) | Same-repo PRs | Posts a Fern preview link on the PR |
| [staging-docs.yml](.github/workflows/staging-docs.yml) | Merge to `main` | Updates the shared `staging` preview |
| [publish-docs.yml](.github/workflows/publish-docs.yml) | `v1.2.3` or `docs-v1.2.3-1` tags, or manual run | Publishes production through the `production` environment |

Connecting the Fern site to `docs.nvidia.com/ccluster` requires a review and Jira ticket from the Developer Experience team; ask in [#cdd-fern](https://nvidia.enterprise.slack.com/archives/C0A8987CQ7K).
