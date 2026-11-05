# AGENTS.md

This repository is the Fern documentation site for NVIDIA CCluster. Agents should optimize for safe documentation edits and passing Fern checks.

## Quick Orientation

- **Framework:** Fern Docs with the NVIDIA global theme (`global-theme: nvidia`)
- **Config:** [fern/docs.yml](fern/docs.yml) (hosting, custom domain, navbar links, redirects)
- **CLI pin:** [fern/fern.config.json](fern/fern.config.json) (`organization: nvidia`, exact `x.y.z` version required by CI)
- **Navigation:** [docs/index.yml](docs/index.yml) (page order, slugs, sidebar icons)
- **Content:** MDX files in [docs/](docs/); images in `docs/<section>/images/`
- **Base path:** the site is served under `/ccluster` (`docs.nvidia.com/ccluster`)
- **Workflows:** [.github/workflows/](.github/workflows/) (check, preview, staging, publish)
- **Guide:** [NVIDIA Fern onboarding guide](https://gitlab-master.nvidia.com/fern-documentation/guides)

## Local Development

```bash
fern docs dev                    # preview at http://localhost:3000/ccluster
fern check                       # config validation
fern docs md check               # MDX validity
fern docs broken-links --strict  # internal links
python3 tools/check-docs-mdx docs/
python3 tools/check-docs-paths --allow '../docs/index.yml' docs fern
```

## Content Editing

- Frontmatter: `title`, `description`. Sidebar labels and icons live in `docs/index.yml`, not frontmatter.
- Use Fern built-in components: `Card`, `CardGroup`, `Frame`, `Note`, `Tip`, `Steps`, `Tabs`, and others. No custom React components are defined.
- `CardGroup` columns must be numeric (`cols={3}`); string values are ignored by Fern.
- Icons are Font Awesome classes (`fa-solid fa-lock`, `fa-brands fa-python`). Prefer free icons.
- Images: `<Frame><img src="./images/file.png" alt="..." /></Frame>`, with the file in the page's section `images/` folder.
- Internal links: root-relative without the base path (`/resources/vault`); Fern prefixes `/ccluster`.
- Escape literal `{` and `<digit` in prose, or wrap them in backticks.

## Editing Rules

- `docs/index.yml` is the source of truth for page order and visibility; a file on disk is not published unless listed.
- Never use absolute paths, `..` segments, or symlinks in page or YAML file references; `tools/check-docs-paths` rejects them because the Fern CLI runs with `FERN_TOKEN`.
- Keep `fern/docs.yml` and `docs/index.yml` as plain `key: value` YAML (no anchors, flow collections, or block scalars) so the path checker can read them.
- Never commit Fern tokens. `FERN_TOKEN` is a repository secret only.
- Theme-owned settings (logo, colors, fonts, footer, CSS/JS) belong to the global theme repo, not here.
- Run the validation commands above before pushing.
