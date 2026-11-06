# AGENTS.md

This repository is the Fern documentation site for NVIDIA CCluster. Agents should optimize for safe documentation edits and passing Fern checks.

## Quick Orientation

- **Framework:** Fern Docs with the NVIDIA global theme (`global-theme: nvidia`)
- **Config:** [fern/docs.yml](fern/docs.yml) (hosting, custom domain, navbar links, navigation)
- **CLI pin:** [fern/fern.config.json](fern/fern.config.json) (`organization: nvidia`, exact `x.y.z` version required by CI)
- **Navigation:** the `navigation` section of [fern/docs.yml](fern/docs.yml) (page order, slugs, sidebar icons)
- **Redirects:** [fern/redirects.yml](fern/redirects.yml)
- **Content:** MDX files in [docs/](docs/); images in `docs/<section>/images/`
- **Base path:** the site is served under `/ccluster` (`docs.nvidia.com/ccluster`)
- **Workflows:** [.github/workflows/](.github/workflows/) (check, PR preview, publish on merge to `main`)
- **Guide:** [NVIDIA Fern onboarding guide](https://gitlab-master.nvidia.com/fern-documentation/guides)

## Local Development

```bash
fern docs dev                    # preview at http://localhost:3000/ccluster
fern check                       # config validation
fern docs md check               # MDX validity
fern docs broken-links --strict  # internal links
python3 tools/check-docs-mdx docs/
python3 tools/check-docs-paths --allow '../docs/' docs fern
```

## Content Editing

- Frontmatter: `title`, `description`. Sidebar labels and icons live in the `fern/docs.yml` navigation, not frontmatter.
- Use Fern built-in components: `Card`, `CardGroup`, `Frame`, `Note`, `Tip`, `Steps`, `Tabs`, and others. No custom React components are defined.
- `CardGroup` columns must be numeric (`cols={3}`); string values are ignored by Fern.
- Icons are Font Awesome classes (`fa-solid fa-lock`, `fa-brands fa-python`). Prefer free icons.
- Images: `<Frame><img src="./images/file.png" alt="..." /></Frame>`, with the file in the page's section `images/` folder.
- Internal links: root-relative without the base path (`/resources/vault`); Fern prefixes `/ccluster`.
- Escape literal `{` and `<digit` in prose, or wrap them in backticks.

## Editing Rules

- The `fern/docs.yml` navigation is the source of truth for page order and visibility; a file on disk is not published unless listed. Use `navigation`, not `products`: a single product renders an empty product dropdown in the header.
- Name pages, slugs, and images in lowercase with hyphens (`custom-image.mdx`), not underscores. When renaming or removing a published page, add a rule to `fern/redirects.yml`.
- Never use absolute paths, `..` segments, or symlinks in page or YAML file references; `tools/check-docs-paths` rejects them because the Fern CLI runs with `FERN_TOKEN`. The only exception is the `../docs/` prefix of page paths in `fern/docs.yml`.
- Keep `fern/docs.yml` and `fern/redirects.yml` as plain `key: value` YAML (no anchors, flow collections, or block scalars) so the path checker can read them.
- Never commit Fern tokens. `FERN_TOKEN` is a repository secret only.
- Theme-owned settings (logo, colors, fonts, footer, CSS/JS) belong to the global theme repo, not here.
- Run the validation commands above before pushing.
