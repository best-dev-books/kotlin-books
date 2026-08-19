# Task 03 — Site scaffolding (Eleventy, not Jekyll)

## Goal
Stand up a minimal, working static-site build using **Eleventy (11ty)**.

## Why Eleventy instead of Jekyll
- No Ruby toolchain — just Node, which is lighter to install/maintain.
- Near-zero config, plain HTML/Nunjucks/Liquid templates, fast incremental
  builds.
- Outputs pure static HTML/CSS (no client-side JS required to render
  content) — ideal for SEO and for GitHub Pages hosting.

## Scope
- `npm init`, add `@11ty/eleventy` as the only required dependency to start
  (keep dependency count minimal — this should stay a light project).
- Directory layout:
  - `src/_data/books.json` (from Task 01)
  - `src/_includes/` (layouts + partials: base layout, book card, header,
    footer)
  - `src/index.njk` (homepage — full book list)
  - `src/books/book.njk` (Eleventy pagination template that generates one
    page per book from the data file)
  - `src/assets/` (css, images, favicon)
  - `.eleventy.js` config (input/output dirs, passthrough copy for
    `assets/`, permalink structure `/books/<slug>/`)
- `package.json` scripts: `dev` (serve + watch), `build` (production
  output to `_site/`).
- `.gitignore` for `node_modules/` and `_site/`.

## Acceptance criteria
- `npm run build` produces a `_site/` directory with a homepage and one
  HTML file per book, using placeholder content if Task 01 isn't done yet.
- `npm run dev` serves locally with live reload.
- No Jekyll/Ruby files anywhere in the repo.

## Depends on
None to start (can use placeholder data), but final content depends on
Task 01.
