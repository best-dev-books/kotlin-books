# Task 02 — SEO keyword & content strategy

## Goal
Decide the target keywords and on-page content structure before any page
is built, so every template/task downstream (title tags, headings, URLs,
book pages) is built around it instead of retrofitted.

## Scope
- Identify a primary target keyword for the homepage, e.g.
  "best kotlin books" / "best kotlin books 2026", plus a secondary set:
  - "kotlin books for beginners"
  - "kotlin books for android developers"
  - "kotlin coroutines book"
  - "learn kotlin from java"
  - "kotlin programming book recommendations"
- Decide URL/page strategy: does each book get its own indexable page
  (`/books/<slug>/`) in addition to the homepage list? (Recommended: yes —
  individual pages let long-tail queries like "<book title> review" rank,
  and they let the homepage link out with descriptive anchor text.)
- Map keywords → pages (which page targets which phrase, so we don't have
  two pages competing for the same query).
- Define the title-tag and meta-description template pattern per page type
  (homepage, book detail page, category/tag page if any).
- Note: content quality and genuine originality matter more than keyword
  density — the strategy should bias toward writing real, useful editorial
  content (Task 01) rather than keyword stuffing.

## Acceptance criteria
- A short written keyword→page map exists (can live as a section in this
  task file or `docs/seo-plan.md`) before Task 06/07 templates are built.
- No two pages target an identical primary keyword.

## Depends on
None — can run in parallel with Task 01.
