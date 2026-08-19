# Task 10 — Performance & accessibility pass

## Goal
Final QA pass before/after launch — both are SEO-adjacent ranking and
usability factors, easy to regress silently while building the rest.

## Scope
- Run Lighthouse (or PageSpeed Insights against the deployed URL) for
  Performance, Accessibility, Best Practices, SEO categories.
- Fix obvious issues:
  - Missing `alt` text.
  - Color contrast failures from Task 04's palette.
  - Unoptimized/oversized images (cross-check Task 05).
  - Missing meta viewport/lang/title (cross-check Task 07).
  - Layout shift from images without explicit `width`/`height`.
- Check keyboard navigation works across header nav, book cards, and
  detail-page links.
- Confirm the site works with JS disabled (progressive enhancement check
  from Task 06).

## Acceptance criteria
- Lighthouse scores reasonably high (target: 90+) across all four
  categories on both homepage and a sample book detail page.
- No console errors in a normal page load.

## Depends on
Everything else — this is the last task, run after Task 09's first deploy.
