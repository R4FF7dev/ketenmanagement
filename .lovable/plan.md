ns
# Ketenmanagement Interim & Advies — Website Redesign

A premium, corporate Dutch advisory platform for dr.ing. Marcel Noordhuis, positioning him as the leading expert in ketensamenwerking for construction, real estate, housing corporations and municipalities.

## Design system

- **Palette**: deep navy `#0B1F3A` (primary), white `#FFFFFF`, light grey `#F4F6F9` / `#E5E8EE` (surfaces), warm orange accent `#E87722` (CTAs, highlights), graphite `#1F2937` (body text), muted slate `#5B6B82` (secondary text)
- **Typography**: Inter Tight (headings, tight tracking) + Inter (body) loaded via `<link>` in `__root.tsx`; serif optional pull-quotes in Source Serif 4 for editorial weight
- **Tokens** defined in `src/styles.css` via `@theme` (oklch) — never hardcoded in components. New tokens: `--color-navy`, `--color-navy-deep`, `--color-orange`, `--color-orange-soft`, `--color-surface`, `--color-surface-2`, `--gradient-navy`, `--shadow-elevated`
- **Layout**: generous whitespace, 1200px max container, 12-col grid, large section padding (96–128px desktop), subtle 1px borders on cards instead of heavy shadows
- **Motif**: thin orange rule under H2s, numbered section labels (01 — Diensten), subtle blueprint/grid line backgrounds in hero and CTA bands
- **Imagery**: generated via imagegen — modern construction sites, urban development, boardroom collaboration, abstract architectural lines. No stock photo clichés, no fake people testimonials
- **Hover**: card lift 2px + orange left border accent; buttons fill-shift navy↔orange

## Routes (TanStack Start, file-based)

```
src/routes/
  __root.tsx           shared shell: top bar, sticky nav, footer, LinkedIn CTA
  index.tsx            Home (full spec sections)
  over-marcel.tsx      Over Marcel — bio, doctorate, expertise pillars, LinkedIn
  diensten.tsx         Diensten — 6 service detail blocks
  ketenmetingen.tsx    KMM, KSI, Kr8 van Zacht, evaluatie programma's
  kennis.tsx           Kennis & Publicaties — blog teasers + link to ketensamenwerking.blog
  opdrachtgevers.tsx   Opdrachtgevers / sectoren + cases placeholders
  contact.tsx          Contact form + details
```

Every route sets its own `head()` with unique Dutch title, description, og:title, og:description. Canonical only on leaves. JSON-LD `Person` (Marcel) + `ProfessionalService` in `__root.tsx`.

## Homepage composition

1. **Top utility bar** (navy) — "Volg Marcel op LinkedIn" link + email
2. **Sticky header** — wordmark "Ketenmanagement Interim & Advies", 7-item nav, LinkedIn icon-button, primary CTA "Plan een kennismaking"
3. **Hero** — split layout: left = eyebrow "Ketensamenwerking · Bouw · Vastgoed", H1 spec headline, sub, 3 CTAs (primary orange, two ghost); right = generated architectural/urban image with subtle navy overlay and small credential card overlay ("dr.ing. — Gepromoveerd TU Delft / Nyenrode context")
4. **Authority strip** — "Waarom Marcel Noordhuis?" 5 numbered pillars in a 5-col → 2-col grid + LinkedIn block with profile CTA
5. **Diensten** — intro + 6 service cards (icon, title, copy, "Lees meer →" deep-link to `/diensten#slug`)
6. **Ketenmetingen** — dark navy band, 2x2 measurement blocks (KMM, KSI, Kr8 van Zacht, Evaluatie), orange CTA
7. **Kennis** — 3 blog cards (category chip, title, excerpt, button) + external CTA to ketensamenwerking.blog (opens new tab, rel=noopener)
8. **Opdrachtgevers** — 7 sector tiles with line-icons; neutral logo placeholder strip labelled "Plek voor uw organisatie" (no fake logos)
9. **Contact CTA band** — navy with orange rule, headline, 3 buttons (Plan / E-mail / LinkedIn)
10. **Footer** — 4 columns (brand+tagline, Diensten links, Kennis, Contact) + LinkedIn + copyright

## Components

```
src/components/
  layout/SiteHeader.tsx       sticky nav, mobile sheet menu
  layout/SiteFooter.tsx
  layout/TopUtilityBar.tsx
  sections/Hero.tsx
  sections/AuthorityPillars.tsx
  sections/ServicesGrid.tsx
  sections/MetingenBand.tsx
  sections/KnowledgeTeasers.tsx
  sections/SectorsGrid.tsx
  sections/ContactCta.tsx
  ui/ServiceCard.tsx
  ui/BlogCard.tsx
  ui/SectorTile.tsx
  ui/SectionLabel.tsx         numbered eyebrow
  ui/LinkedInButton.tsx       reused header / authority / contact / footer
  forms/ContactForm.tsx       react-hook-form + zod, client-side only (no backend yet)
```

Data for services, metingen, sectors, blog teasers lives in `src/content/*.ts` so copy stays editable in one place.

## Contact form

- Fields per spec (Bedrijf, Naam, Functie, E-mail, Telefoon, Bericht)
- Zod validation, trimmed, length-capped, email format, optional phone regex
- On submit: success toast + reset; no backend wired (form is presentational placeholder — note in UI: "Bij verzending opent uw e-mailclient" fallback via `mailto:` with prefilled subject/body so it works without Cloud)

## Technical / quality

- Tailwind v4 tokens in `src/styles.css` only; shadcn Button restyled via `variant="primary" | "ghost" | "linkedin"`
- All copy in Dutch exactly per spec
- Responsive: mobile-first; nav collapses to Sheet; hero stacks; grids 1→2→3 cols
- SEO: semantic `<h1>`–`<h3>`, single H1 per page, alt text on every generated image, JSON-LD Person+ProfessionalService, per-route meta
- A11y: WCAG AA contrast on navy/orange, focus rings, aria-labels on icon buttons, form labels bound
- No fake testimonials, no fake client logos, no invented credentials beyond what user provided
- Lovable Cloud NOT enabled (no auth/db needed); contact form uses mailto fallback

## Images to generate (imagegen, premium for hero)

1. Hero — modern Dutch urban construction / housing development, navy-tinted, wide
2. Over Marcel portrait placeholder — abstract architectural composition (no fake face)
3. Diensten band — boardroom collaboration abstract
4. Ketenmetingen — data/dashboard abstract on navy
5. Kennis — open notebook / publication abstract

## Out of scope (this plan)

- Real CMS / blog ingestion from ketensamenwerking.blog (link out only)
- Authentication, database, real form submission backend
- Multi-language (Dutch only as specified)
