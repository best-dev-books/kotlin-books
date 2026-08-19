# Task 07 — Technical SEO implementation

## Goal
Make the site fully crawlable and rich-result-eligible.

## Scope
- Per-page `<title>` and `<meta name="description">`, driven by front-matter
  per page (using the keyword map from Task 02).
- Open Graph + Twitter Card meta tags (title, description, image = book
  cover for detail pages / a site og-image for homepage).
- Canonical URLs (`<link rel="canonical">`) on every page.
- `sitemap.xml` generated at build time (Eleventy can generate this as a
  template that loops over the collection — no plugin required if kept
  simple, or use `@quasibit/eleventy-plugin-sitemap` if it stays a single
  light dependency).
- `robots.txt` allowing crawl, pointing to the sitemap.
- Structured data: JSON-LD `Book` schema on each book detail page (name,
  author, isbn, image), and `ItemList` schema on the homepage listing the
  books — enables rich results in Google Search.
- Semantic HTML: one `<h1>` per page, proper heading hierarchy, `<nav>`,
  `<main>`, `<footer>` landmarks.
- Set a real `lang` attribute, favicon, and `<meta name="viewport">`.

## Acceptance criteria
- Validate structured data with Google's Rich Results Test (or schema.org
  validator) — no errors.
- `sitemap.xml` and `robots.txt` both reachable at the site root in the
  built output.
- Every page has a unique title/description (spot-check a few).

## Depends on
Task 06 (templates must exist to inject meta tags into).
