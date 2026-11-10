# NVIDIA CCluster Docs

This repository contains the [Fern](https://buildwithfern.com/learn/docs/getting-started/overview) source for the NVIDIA CCluster documentation site, published at [docs.nvidia.com/ccluster](https://docs.nvidia.com/ccluster).

The site uses the NVIDIA global theme (`global-theme: nvidia`), so logo, colors, fonts, layout, and footer come from the shared [global-theme](https://gitlab-master.nvidia.com/fern-documentation/global-theme) repository rather than this repo. See the [NVIDIA Fern onboarding guide](https://gitlab-master.nvidia.com/fern-documentation/guides) for platform details.

## Repository Layout

- [fern/fern.config.json](fern/fern.config.json): Fern organization (`nvidia`) and pinned CLI version
- [fern/docs.yml](fern/docs.yml): hosting, custom domain, theme, navbar links, and the left-nav structure (page order, slugs, sidebar icons)
- [fern/redirects.yml](fern/redirects.yml): redirects for renamed or removed pages
- [docs/](docs/): all documentation pages, written as `.mdx`
  - [docs/home/](docs/home/): landing pages (introduction, quickstart)
  - [docs/apps/](docs/apps/): deployment product docs (LLM serving, inference, compute, jobs)
  - [docs/clients/](docs/clients/): SDK and client setup docs
  - [docs/resources/](docs/resources/): supporting guides (custom images, vault, service accounts, etc.)
  - `docs/<section>/images/`: screenshots used by the pages in that section
- [tools/](tools/): MDX-safety and docs-path checkers run in CI
- [.github/workflows/](.github/workflows/): Fern check, PR preview, and publish workflows

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
python3 tools/check-docs-paths --allow '../docs/' docs fern
```

## Editing Workflow

1. Update or add `.mdx` pages under the appropriate directory in [docs/](docs/).
2. Add new pages to the `navigation` section of [fern/docs.yml](fern/docs.yml) with a `../docs/<section>/<page>.mdx` path; only pages listed there are published.
3. Put images in the section's `images/` folder and reference them with `./images/...` paths. Absolute paths and `..` segments are rejected by `tools/check-docs-paths`; the only exception is the `../docs/` prefix of page paths in `fern/docs.yml`.
4. Use Fern's [built-in components](https://buildwithfern.com/learn/docs/writing-content/components/overview) (`Card`, `CardGroup`, `Frame`, `Note`, `Tip`, and others). Icons are Font Awesome classes such as `fa-solid fa-lock`.
5. Link between pages with root-relative paths such as `/apps/llm`; Fern adds the `/ccluster` base path.

## Release Process

Publishing runs through GitHub Actions and needs the `FERN_TOKEN` repository secret (request one in [#cdd-fern](https://nvidia.enterprise.slack.com/archives/C0A8987CQ7K)).

| Workflow | Trigger | Result |
| --- | --- | --- |
| [check-docs.yml](.github/workflows/check-docs.yml) | PRs and pushes to `main` | Validates config, MDX, links, and docs paths |
| [preview-docs.yml](.github/workflows/preview-docs.yml) | Same-repo PRs | Posts a Fern preview link on the PR |
| [publish-docs.yml](.github/workflows/publish-docs.yml) | Merge to `main` that changes `docs/` or `fern/`, or manual run | Publishes production after the checks pass |

Merged changes go live at [docs.nvidia.com/ccluster](https://docs.nvidia.com/ccluster), the custom domain configured in [fern/docs.yml](fern/docs.yml). For Fern platform or domain issues, ask in [#cdd-fern](https://nvidia.enterprise.slack.com/archives/C0A8987CQ7K).
