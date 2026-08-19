# Task 09 — Deployment (GitHub Pages via GitHub Actions)

## Goal
Automatically build and publish the Eleventy site on every push to `main`.

## Scope
- `.github/workflows/deploy.yml`:
  - Trigger on push to `main`.
  - `npm ci`, `npm run build`.
  - Deploy `_site/` to GitHub Pages (via `actions/deploy-pages` +
    `actions/upload-pages-artifact`, the standard non-branch-based Pages
    deploy flow — avoids needing a `gh-pages` branch).
- Enable GitHub Pages in repo settings, source = GitHub Actions.
- Set the correct base URL / path config in Eleventy if the site is served
  from a project subpath vs. a custom domain.
- If a custom domain is desired later, note it as a follow-up (needs a
  `CNAME` file + DNS change, which is outside this repo's scope until the
  user confirms a domain).

## Acceptance criteria
- Push to `main` triggers a green Actions run and the live site updates.
- Live URL works, sitemap/robots.txt reachable at the deployed root.

## Depends on
Task 03 (build must work) and ideally Task 07 (so what goes live is
already SEO-complete).
