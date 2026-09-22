# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This repo currently contains only `README.md` — a complete content and design
brief for a personal portfolio site. **No code has been scaffolded yet.**
`README.md` is the source of truth for what to build; read it in full before
starting. There are no build/lint/test commands yet because there is no
project — the first task in this repo will typically be scaffolding it.

## What to build (summary of the brief)

- **Stack:** React + Vite, deployed to GitHub Pages via a GitHub Actions
  workflow that builds and publishes on push to `main`.
- **Routing:** Four real pages, not anchored sections — needs client-side
  routing (React Router). Prefer `HashRouter` for zero-config GitHub Pages
  support; if `BrowserRouter` is used instead, a `404.html` SPA-fallback
  redirect is required for deep links/refreshes to work.
- **Sitemap:** `/` (Home), `/develop`, `/security`, `/about`. Contact is not
  a route — it's a persistent nav/footer element on every page.
- A visual mockup with a Develop/Security toggle already exists for the
  visual language (colors, typography, hero, terminal panel, roadmap
  timeline) — reuse its look, not its page structure (that toggle is
  superseded by real routing).

## Design system (must stay consistent across pages)

- **Color is functional, not decorative:** it encodes content type
  site-wide. Develop content/pages use the blue accent (`#5CC8FF`)
  everywhere (headings, tags, buttons, borders); Security content/pages use
  the red accent (`#FF6B6B`) everywhere. Home and About are neutral by
  default, but any content that clearly belongs to one track keeps that
  track's color even on a neutral page (e.g. Erasmus+Friends card = blue,
  Homelab card = red, regardless of which page it appears on). The hero name
  always shows both accent colors together as the one constant brand mark.
- **Palette:** background `#0A0E16`, panel `#10151F`, text primary
  `#D7DCE3`, text muted `#6B7485`/`#8A93A1`, border
  `rgba(255,255,255,0.08–0.14)`.
- **Typography:** `JetBrains Mono` throughout, weights 400–800. Hero name
  gets a chromatic-aberration/glitch effect (oversized weight-800, subtle
  red/blue offset text-shadow) — the single deliberate "loud" moment;
  everything else stays quiet.
- **Recurring components:** terminal window panel (minimal chrome, three
  monochrome dots, no macOS traffic-light colors), subtle low-opacity
  scanline overlay, vertical timeline (dot + connecting line + label, used
  only for the Roadmap), flat bordered skill-tag chips (no rounded
  left-border cards, no drop shadows).
- **Avoid:** gradient washes, generic "SaaS card" kit (identical rounded
  cards + soft grey shadow), tracked-out ALL-CAPS eyebrow labels on every
  section, arrows appended to button/link text, unmotivated hover/entrance
  animations, numbered/sequential markers anywhere outside the Roadmap.

## Content notes

- All site copy is final and English-only — reproduce it verbatim from
  `README.md` rather than rephrasing.
- The bio text is reused verbatim between Home and About Me (About Me is the
  fuller breakdown, not a different bio) — don't fork these into two texts
  that then drift.
- Some content is intentionally page-specific and non-duplicated: HTB CJCA
  is mentioned once (About Me → Studies) and deliberately not repeated on
  Security; project/skill descriptions are short-form on Develop/Security
  and full-detail only on About Me / Home per the brief.
- Résumé/CV button: wire it up now, but no PDF exists yet — don't block on
  it.
