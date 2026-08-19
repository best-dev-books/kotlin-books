# Task 08 — GitHub repo polish

## Goal
Make the repository itself look professional to anyone landing on the
GitHub page (not just the deployed site) — many "awesome list" style repos
get traffic/stars directly on GitHub too.

## Scope
- `README.md` at repo root:
  - Short project description + link to the live site (once deployed).
  - Badges (build status, license, last-updated) if cheap to add honestly.
  - A condensed version of the book list (markdown table: title, level,
    tags) with links to the live detail pages — this also gives GitHub's
    own search/SEO something to index.
  - "How to run locally" section (`npm install`, `npm run dev`).
  - Contribution guidelines pointer.
- `LICENSE` (MIT, or user's preferred license) — clarify it covers the
  code/site, not the book covers/content which have their own copyright.
- `CONTRIBUTING.md` — how to suggest a book addition (e.g. PR template
  editing `books.json`).
- `.github/ISSUE_TEMPLATE/` — simple "suggest a book" issue template.
- Repo metadata: description, topics/tags (`kotlin`, `books`,
  `awesome-list`, `android`, `programming-books`) set on GitHub for
  discoverability.

## Acceptance criteria
- README renders cleanly on GitHub (check table formatting, badge links).
- LICENSE file present and correctly attributed.
- No task-list/planning docs (like this `tasks/` folder) referenced from
  the README as if they were user-facing docs.

## Depends on
Task 01 (for the condensed list) and Task 09 (for the live URL/badges).
