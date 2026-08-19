# Task 06 — Build homepage + book detail page templates

## Goal
Wire the data (Task 01), design (Task 04), and images (Task 05) together
into the actual Eleventy templates.

## Scope
- Homepage (`src/index.njk`):
  - H1 containing the primary target keyword (from Task 02).
  - Short intro paragraph (genuine, useful, keyword-natural — not stuffed).
  - Book grid, one card per book, sorted per Task 01's ranking.
  - Optional filter/sort by `level` or `tags` — keep it CSS/no-JS if
    possible (e.g. anchor-linked sections per category) to avoid adding a
    JS framework; a tiny vanilla-JS filter is acceptable if it stays
    optional/progressive (page must still work with JS disabled).
- Book detail page (`src/books/book.njk`, one per book via Eleventy
  pagination over `books.json`):
  - Full write-up, cover image, metadata, buy links, breadcrumb.
  - "Related books" links (same tag/level) for internal linking (SEO).
- Shared layout include with `<head>` block reserved for Task 07's meta
  tags.

## Acceptance criteria
- `npm run build` renders a complete homepage and one page per book with
  real content and real images.
- All internal links resolve (no 404s within the built `_site/`).
- Works with JS fully disabled.

## Depends on
Tasks 01, 03, 04, 05.
