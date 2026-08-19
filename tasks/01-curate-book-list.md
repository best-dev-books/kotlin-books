# Task 01 — Curate the book list (content data)

## Goal
Produce the single source of truth for all book data, as a structured
data file (`src/_data/books.json` or `.yaml`), that the site build will
read from. No hand-written HTML per book — everything renders from this file.

## Scope
- Research and select ~15-25 genuinely well-regarded Kotlin books
  (covering: language fundamentals, Android dev, coroutines/async,
  server-side/Ktor, functional style, "for Java devs" transition books).
- For each book capture:
  - `title`, `authors`, `year`, `publisher`, `isbn13`
  - `slug` (for per-book detail page URL)
  - `level` (beginner / intermediate / advanced)
  - `tags` (e.g. `android`, `coroutines`, `server-side`, `fundamentals`)
  - `summary` (1-2 sentences, original writing — not copied jacket text)
  - `whyRecommended` (2-4 sentences of genuine editorial opinion)
  - `buyLinks` (Amazon, publisher site — use non-tracking plain URLs unless
    an affiliate program is explicitly set up as its own task)
  - `coverImage` (filename reference — actual asset sourced in Task 05)
  - `rating` (optional, only if we have a defensible source for it)
- Order the list by relevance/quality, not alphabetically — this becomes
  the homepage ranking.

## Acceptance criteria
- Data file validates (valid JSON/YAML) and has no placeholder/lorem-ipsum
  text.
- Every entry has all required fields non-empty.
- Editorial descriptions are original text, not scraped from Amazon/publisher.
- List reviewed for accuracy (no discontinued/out-of-print books presented
  as current without a note).

## Depends on
None — this can start first.
