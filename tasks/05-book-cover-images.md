# Task 05 — Source and optimize book cover images

## Goal
Get a small cover-image "screenshot" for every book in the list, legally
and performantly.

## Scope
- Source covers via a legitimate API rather than scraping arbitrary sites:
  - Open Library Covers API (`covers.openlibrary.org`) using ISBN, or
  - Google Books API (`books.googleapis.com/books/v1/volumes`) cover
    thumbnails.
  - Book cover thumbnails used for identification/editorial review purposes
    is standard practice on "best of" book-list sites — keep images small
    (thumbnail-sized, not full jacket resolution) and always pair with
    original written commentary (never just an image + copied blurb).
- Download once, store locally under `src/assets/covers/<slug>.jpg`
  (don't hotlink at request time — self-hosting is faster and avoids
  breakage if the source API changes).
- Optimize: resize to a consistent max dimension (e.g. 400px tall), compress
  (WebP with JPEG fallback, or just well-compressed JPEG to keep things
  simple), consistent aspect ratio for grid alignment.
- Add descriptive `alt` text per cover (`"<Book Title> book cover"`) —
  helps both accessibility and image-search SEO.

## Acceptance criteria
- Every book entry in `books.json` has a corresponding local image file
  that actually exists and loads.
- Total image payload for the homepage stays reasonable (this is a content
  site — page weight matters for Core Web Vitals / SEO ranking factors).
- No hotlinked third-party image URLs in production templates.

## Depends on
Task 01 (need the book list + ISBNs first).
