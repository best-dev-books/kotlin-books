# SEO plan

## Primary keyword → page map

| Page | Primary target keyword | Secondary keywords |
|---|---|---|
| `/` (homepage) | best kotlin books | best kotlin books 2026, kotlin book recommendations, top kotlin programming books |
| `/books/<slug>/` (each book) | `<book title>` + review | `<book title>` summary, is `<book title>` worth it |
| `/books/?tag=android` or `#android` section | best kotlin books for android developers | kotlin android programming book |
| `/books/?tag=coroutines` or `#coroutines` section | kotlin coroutines book | learn kotlin coroutines |
| `/books/?tag=java-to-kotlin` or `#java-to-kotlin` section | learn kotlin from java | kotlin for java developers book |
| `/books/?tag=beginner` or `#beginner` section | kotlin books for beginners | best book to learn kotlin |

Decision: individual book pages are indexable (`/books/<slug>/`) in addition
to the homepage grid — see tasks/03. This lets long-tail, per-book queries
rank on their own page instead of competing with the homepage, and lets the
homepage link out with descriptive, keyword-relevant anchor text (the book
title itself).

Category/tag filtering (level, tags) is implemented as on-page anchor
sections rather than separate crawlable URLs for now, to avoid thin/duplicate
pages competing with the homepage for the same "best kotlin books" query.
Revisit only if analytics show real demand for a specific tag query.

## Title tag / meta description templates

- Homepage:
  - Title: `Best Kotlin Books ({{ year }}) — Hand-Picked Recommendations`
  - Description: `A curated, hand-picked list of the best Kotlin books for
    beginners, Android developers, and backend engineers — updated for
    {{ year }}.`
- Book detail page:
  - Title: `{{ book.title }} — Review & Summary | Best Kotlin Books`
  - Description: `{{ book.summary }} See why we recommend {{ book.title }}
    by {{ book.authors }}, plus where to buy it.`

## Notes

- Content quality and originality matter more than keyword density —
  editorial text in tasks/01 must be genuinely written, not keyword-stuffed.
- No two pages target an identical primary keyword (checked above — each
  book page's primary keyword is its own title, which is unique by
  definition).
