# Task 04 — Visual design system ("professional and fancy")

## Goal
Give the site a distinct, polished look — not a default/unstyled template —
using plain CSS (no heavy framework needed for a page this size).

## Scope
- Pick a typography pairing (e.g. a serif or distinctive display font for
  headings + a clean sans for body), loaded via `@font-face`/Google Fonts
  or self-hosted for performance.
- Define a small design token set: color palette (incl. dark mode via
  `prefers-color-scheme`), spacing scale, border-radius, shadow style.
- Design components:
  - Header/nav with site title + tagline (SEO-relevant tagline, e.g.
    "Hand-picked Kotlin books for every skill level").
  - Book card grid on homepage (cover image, title, author, level badge,
    tags, one-line hook, "Read more" link to detail page).
  - Book detail page layout (cover, metadata table, full write-up, buy
    links, breadcrumb back to homepage).
  - Footer (about/disclaimer, link back to homepage, last-updated date).
- Responsive layout: grid collapses to single column on mobile.
- Subtle motion/polish only where cheap (hover states, transitions) —
  avoid heavy JS animation libraries.

## Acceptance criteria
- Single `src/assets/css/style.css` (or a couple of small partials),
  no unused CSS framework bloat.
- Passes a quick visual check at mobile (375px), tablet, and desktop widths.
- Dark mode doesn't break contrast/readability.

## Depends on
Task 03 (scaffolding must exist to style against).
