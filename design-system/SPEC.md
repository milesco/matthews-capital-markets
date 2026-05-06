# Matthews Hotel Team — Design System SPEC

Source of truth for the build. Synthesizes the Apple token research, the mghotelteam structure audit, and the CRE competitive benchmark into one coherent spec. Every component, color, type size, and motion timing in this build traces back here.

## Brand thesis

CRE hospitality brokerage sites today are corporate, dense, and dated. The category bar is low. We aim for **Apple-tier polish on CRE-appropriate content density**: tight typography, generous whitespace, restrained color, motion that's barely there, photography front and center. Editorial divergence: Apple uses one type family (SF Pro). We pair Inter (grotesk) with Fraunces (editorial serif) — the serif is reserved for hero / display moments, never for UI.

## What this site does that mghotelteam.com doesn't

1. Hero stats kept current with year stamp.
2. Photography on every listing card. Never a generic icon.
3. Listing detail page anchors above-the-fold on real data: keys, brand, chain scale, ADR, RevPAR, year built, asking price (or "Upon Request"), encumbrance/franchise status.
4. Sticky broker contact rail on listing detail pages.
5. Closed Deals as a multi-axis filterable database with **Sponsor Profile** filter (PE / REIT / Developer / Family Office) — the single smartest filter in the category, only HWE has it.
6. Team bios with depth: career volume, named clients, top 10 named deals, designations.
7. Quarterly Hotel Investment Outlook as a web-native publication, not a PDF graveyard.
8. Browse for free; gate only the OM and financials.

## Foundation tokens

### Color

| Token | Hex | Use |
| --- | --- | --- |
| `--text-primary` | `#1d1d1f` | Headlines and body. Never `#000` for text. |
| `--text-secondary` | `#86868b` | Subtitles, captions, "lighter continuation" half of two-tone headlines. |
| `--text-tertiary` | `#6e6e73` | Footnotes, deep-secondary copy. |
| `--text-on-dark` | `#f5f5f7` | Body on black sections. |
| `--text-on-dark-secondary` | `#a1a1a6` | Subtitle on black sections. |
| `--surface` | `#ffffff` | Default page background. |
| `--surface-elevated` | `#f5f5f7` | Alt-row sections, bento backgrounds. |
| `--surface-inverse` | `#000000` | Hero / dramatic sections. |
| `--accent` | `#0071e3` | Primary CTA, links on light. |
| `--accent-hover` | `#0077ed` | Pill hover. |
| `--accent-active` | `#006edb` | Pill pressed. |
| `--accent-on-dark` | `#2997ff` | Links on black sections. |
| `--divider` | `#d2d2d7` | Hairlines, input borders. |
| `--divider-on-dark` | `#424245` | Hairlines on black. |
| `--success` | `#30d158` | "In market" status, green dots. |
| `--warning` | `#ff9f0a` | Badges. |
| `--danger` | `#ff3b30` | Errors. |

### Typography

Body baseline is non-negotiable: **17px / 1.47 / -0.022em / 400**.

| Token | Size | Line height | Letter-spacing | Weight | Family |
| --- | --- | --- | --- | --- | --- |
| `display-xl` (hero) | `clamp(48px, 7vw, 96px)` | 1.05 | -0.015em | 600 | sans |
| `display-lg` (hero alt) | `clamp(40px, 5.5vw, 80px)` | 1.0625 | -0.015em | 600 | sans |
| `display-md` (subhero) | `clamp(32px, 4vw, 64px)` | 1.0625 | -0.012em | 600 | sans |
| `display-serif` (editorial accent) | `clamp(40px, 5.5vw, 80px)` | 1.05 | -0.02em | 400 | serif |
| `headline-xl` (section title) | `clamp(32px, 3vw, 48px)` | 1.08 | -0.003em | 600 | sans |
| `headline-lg` (subsection) | `clamp(28px, 2.4vw, 40px)` | 1.1 | 0 | 600 | sans |
| `headline-md` (card title) | `24px` | 1.1667 | **+0.009em** | 600 | sans |
| `headline-sm` (eyebrow) | `21px` | 1.1905 | **+0.011em** | 600 | sans |
| `title-lg` (intro paragraph) | `28px` | 1.143 | +0.007em | 500 | sans |
| `body-lg` (lead body) | `19px` | 1.421 | +0.012em | 400 | sans |
| `body` (default) | `17px` | 1.47 | -0.022em | 400 | sans |
| `body-sm` (compact) | `14px` | 1.429 | -0.016em | 400 | sans |
| `caption` (footnote) | `12px` | 1.333 | -0.01em | 400 | sans |
| `caption-sm` (legal) | `11px` | 1.364 | -0.005em | 400 | sans |

The "Apple tell" — card titles 21–24px use **positive** letter-spacing while every other tier tightens. Honor it.

### Spacing

Section vertical rhythm:

| Tier | Padding (y) | Use |
| --- | --- | --- |
| compact | `py-16` (64px) | Inline callouts |
| standard | `py-20` (80px) | Default |
| roomy | `py-24` (96px) | Most marketing sections |
| feature | `py-[120px]` | Featured / Camera / Performance-style |
| hero | `py-40` (160px) | Hero bands |

Container widths:

| Token | Width | Use |
| --- | --- | --- |
| `container-sm` | 692px | Long-form copy, legal |
| `container` | 980px | Default site container |
| `container-lg` | 1024px | Listings / shop-style grids |
| `container-xl` | 1440px | Hero imagery, full-bleed |

Vertical spacing rules:
- `<h2>` to body: 24px (`mt-6`)
- Body to next subhead: 48px (`mt-12`)
- Headline block to grid: 64px (`mt-16`)

Card padding ladder: `p-5 / p-6 / p-7 / p-8 / p-10 / p-14`.
Grid gap ladder: `gap-3 / gap-4 / gap-5 / gap-6 / gap-8`.

### Border radii

Match radius to card size, not role.

| Token | Value | Use |
| --- | --- | --- |
| `rounded-lg` | 8px | Inputs, badges, chips |
| `rounded-xl` | 12px | Avatars, small inline cards |
| `rounded-[18px]` | 18px | **Default card** |
| `rounded-[22px]` | 22px | Mid bento |
| `rounded-[28px]` | 28px | Large bento, hero cards |
| `rounded-[40px]` | 40px | Showcase tiles |
| `rounded-2xl` | 16px | Form inputs |
| `rounded-full` | ∞ | All buttons, chips, avatars |

### Shadows

Most cards use **no shadow** — separation comes from the gray surface. Shadows used where:

| Token | CSS |
| --- | --- |
| `shadow-card` | `0 1px 3px rgba(0,0,0,0.04), 0 4px 16px -8px rgba(0,0,0,0.08)` |
| `shadow-card-hover` | `0 2px 6px rgba(0,0,0,0.06), 0 12px 32px -10px rgba(0,0,0,0.14)` |
| `shadow-popover` | `0 8px 24px rgba(0,0,0,0.08), 0 24px 48px -16px rgba(0,0,0,0.16)` |

## Motion

One curve runs almost everything: `cubic-bezier(0.32, 0.72, 0, 1)`. Durations:

| Use | Duration | Curve |
| --- | --- | --- |
| Button color | 200ms | `inOut` (0.4, 0, 0.2, 1) |
| Link underline | 150ms | linear |
| Card fade-up on scroll | 500ms | standard |
| Hero H1 reveal | 900ms | standard |
| Hero body reveal | 700ms (delay 100ms) | standard |
| Hero CTA reveal | 700ms (delay 200ms) | standard |
| Card hover lift | 500ms | standard |
| Image hover zoom | 700ms | standard |
| Header backdrop blur on scroll | 300ms | standard |
| Stat counter | 1200ms | standard |
| Page transition | 300ms (delay 50ms) | standard |
| Stagger child | `i * 0.05`s | — |

Movements are tiny: `y: 24 → 0`, `scale: 1 → 1.012` for hover, `scale: 1.04` for image zoom. Never larger.

Honor `prefers-reduced-motion` everywhere.

## Components (high level)

Foundational primitives go in `src/components/ui/`. Page-level sections in `src/components/sections/`. Detailed inventory in `design-system/components.md`.

## Page architecture

| Route | Purpose | Above-the-fold |
| --- | --- | --- |
| `/` | Home | Hero with two-tone headline + dual CTA, year-stamped stat band, featured listings (3-up), why-Matthews bento, closed-deal teaser, market-insight teaser, footer CTA |
| `/listings` | Active inventory | Two-tone header, filter bar (Segment, Region, Brand, Status, Keys range), photo card grid |
| `/listings/[slug]` | Listing detail | Full-bleed photo hero with title overlay, sticky broker rail, key stats panel (12 fields), narrative, gallery, location, similar listings, "Request OM" CTA |
| `/closed` | Track record | Two-tone header, multi-axis filter incl. **Sponsor Profile**, table + card-grid toggle |
| `/team` | Roster | Two-tone header, filter (Office, Specialty), 4-up photo grid |
| `/team/[slug]` | Bio | Headshot hero, named transaction track record, top 10 named deals, designations, contact rail |
| `/insights` | Quarterly outlook + reports | Hero featured report, archive grid |
| `/insights/[slug]` | Report detail | Editorial layout, embedded charts (placeholder), download PDF |
| `/contact` | Conversion | Apple-Support-style form + office grid + direct broker rail |

## Content placeholders

**Brokers (8):**
1. Luke Thompson — VP & Director, Capital Markets — Austin
2. Nate Solomon — Hospitality Associate — Austin
3. Patrick Graham — Broker of Record — Dallas
4. Sarah Chen — Vice President, Select Service — Austin
5. Marcus Reyes — Director, Resort & Lifestyle — Austin
6. Elena Park — Senior Associate, Capital Markets — Houston
7. David Okafor — Associate, Select Service — Dallas
8. Maya Patel — Analyst — Austin

**Active listings (6):**
1. Walden Retreats Hill Country (Johnson City, TX — 15 keys luxury glamping — Boutique)
2. Holiday Inn Express Austin North Central (Austin, TX — 124 keys — Select Service — IHG)
3. Hampton Inn & Suites Round Rock (Round Rock, TX — 98 keys — Select Service — Hilton)
4. Courtyard San Antonio Riverwalk (San Antonio, TX — 154 keys — Full Service — Marriott)
5. The Driskill Trophy Lease Option (Austin, TX — 189 keys — Luxury — Independent)
6. Fairfield Inn & Suites Waco (Waco, TX — 84 keys — Select Service — Marriott)

**Closed deals (12):** Stretch across 2022–2025, mix of Select Service / Full Service / Resort, $5M–$45M range, with the Sponsor Profile field populated (PE / REIT / Developer / Family Office).

**Insights (3):** Q1 2026 Hotel Investment Outlook, "ADR Recovery Across Texas Secondary Markets" white paper, "The Glamping Investment Thesis" briefing.

## Lighthouse targets

- Performance ≥ 95 (Next/Image with proper sizes, no client-side blocking, fonts via next/font)
- Accessibility ≥ 95 (semantic landmarks, focus rings, label-input pairing, `prefers-reduced-motion`)
- Best Practices ≥ 95
- SEO ≥ 95 (metadata per page, OG images, sitemap.xml)

## Hard rules

- No box-shadow on cards inside `--surface-elevated` sections — radius + gray bg do the work.
- No emoji icons — Lucide only, stroke-width 1.75.
- Two-tone headline pattern is the default for any sentence-form headline. Periods on both halves.
- Apple blue `#0071e3` is the only chrome accent. No other accent colors except status (green/red/amber).
- Body text is 17px / 1.47 / -0.022em. Anything else is wrong.
- Hover lift never exceeds `scale(1.015)` and `translateY(-2px)`.
