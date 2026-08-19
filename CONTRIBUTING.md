# Contributing

Suggestions for books to add, remove, or update are welcome.

## Suggesting a book

Open an issue using the "Suggest a book" template, or open a pull request
directly:

1. Add an entry to `src/_data/books.json` following the existing shape
   (`slug`, `title`, `authors`, `year`, `publisher`, `isbn13`, `level`,
   `tags`, `summary`, `whyRecommended`, `buyLinks`, `coverImage`).
2. If you're adding a cover image, place it under
   `src/assets/covers/<slug>.jpg` (or `.svg` if no photographable cover is
   available) — see `tasks/05-book-cover-images.md` for how existing covers
   were sourced (Open Library / Google Books, self-hosted, not hotlinked).
3. `whyRecommended` should be genuine, original commentary — not text
   copied from the publisher's jacket description.
4. Run `npm run build` locally and confirm the new book's page renders
   correctly.

## Reporting an issue

Outdated editions, dead links, incorrect ISBNs, or factual errors — please
open an issue with a link to the affected page.

## What we're not looking for

- Paid placement or promotional listings — every book on this list is here
  because it's genuinely useful, not because of a sponsorship.
- Books you haven't actually read/used.
