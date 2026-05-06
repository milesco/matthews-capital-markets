# Component Inventory

Every component the build agents must produce, with file path, props, and behavior. Read /design-system/SPEC.md first.

## Path conventions

- Primitives → `src/components/ui/`
- Page-level sections → `src/components/sections/`
- Page-shell pieces → `src/components/layout/`
- Domain data types + sample data → `src/lib/data/`
- Reuse `src/lib/motion.ts` for all motion props.
- Reuse `src/lib/utils.ts` `cn()` for classnames.

## Layout primitives — `src/components/layout/`

### `SiteHeader.tsx` (client)
Fixed nav, transparent on hero, frosted on scroll past 80px. Logo left, links centered, "Get in touch" pill right. Mobile: hamburger drawer.
Links: Listings, Closed, Team, Insights, Offices, Contact.
On scroll > 80: bg `rgba(255,255,255,0.72)` + `backdrop-filter: saturate(180%) blur(20px)`, hairline bottom.
Height: 44px desktop, 48px mobile.

### `SiteFooter.tsx` (server)
Light gray `#f5f5f7`, multi-column sitemap. Columns: Brokerage / Listings / Insights / Company. Logo + tagline top. Bottom: copyright, address, IABS link, privacy.

## UI primitives — `src/components/ui/`

### `TwoToneHeadline.tsx` (server)
Props: `{ lead: string; follow: string; size?: "section" | "subsection" | "hero"; as?: "h1" | "h2" | "h3" }`.
Renders `<h*><span>{lead}</span> <span>{follow}</span></h*>`. Periods on both halves are caller's responsibility but enforce documentation. Sizes: `section` = `headline-xl`, `subsection` = `headline-lg`, `hero` = `display-lg`.

### `Pill.tsx` (server)
Variants: `primary` (blue, white text), `secondary` (outlined). Sizes: `default` (12/22 padding, 17px) and `sm` (10/18, 15px). Renders an `<a>` if `href` provided, `<button>` otherwise.

### `GhostLink.tsx` (server)
`{ href, children }`. Apple ghost link with chevron right. Color flips on dark sections via `dark-section` class on parent.

### `Reveal.tsx` (client)
Wraps children in a motion.div with `fadeUp` props. Honors `useReducedMotion`. Accepts `delay` and `as` props.

### `Counter.tsx` (client)
Animates a numeric string in tabular-nums when in view. Supports `$3.5B`, `670+`, `1M+`, `19,400`. 1200ms duration.

### `Card.tsx` (server, with optional client wrap)
Variants: `light` (bg-white shadow-card), `elevated` (bg-#f5f5f7, no shadow), `dark` (bg-#1d1d1f, white text). Radius prop: `md` (18px), `lg` (22px), `xl` (28px). Padding prop: `5/6/7/8/10/14`. `hover` boolean toggles card-lift CSS.

### `ImageFrame.tsx` (server)
Wraps a Next/Image inside an `overflow-hidden` rounded frame with hover micro-zoom. Props: `{ src, alt, aspect: "4/3" | "16/10" | "3/4" | "16/9" | "1/1", radius, sizes }`.

### `Eyebrow.tsx` (server)
Small `headline-sm` 21px positive-tracking eyebrow used over big section heads.

### `StickyBrokerRail.tsx` (client)
Used on listing detail. Photo + name + title + direct phone + email + "Request OM" CTA. Sticky on desktop right rail, becomes a fixed bottom bar on mobile (with shadow + safe-area-inset-bottom).

### `FilterBar.tsx` (client)
Generic horizontal filter strip with chips/dropdowns. Used on /listings, /closed, /team. Accepts a `filters` config and a controlled `value` + `onChange`.

### `StatusBadge.tsx` (server)
Variants: `available` (gray), `under-contract` (green-tinted with pulse dot), `closed` (subtle navy). Sizes: `sm` (10px), `default` (11px). Uppercase, +0.18em tracking.

## Data — `src/lib/data/`

### `team.ts`
Exports `team: TeamMember[]` with all 8 brokers per SPEC.md content placeholders. Fields: `slug, name, title, office (city), specialty[], phone, email, linkedin?, photo, bio (paragraph), careerVolume, last12Volume, designations[], topDeals: { name, year, keys, segment, location, role }[]`.

### `listings.ts`
Exports `listings: Listing[]` with the 6 active listings. Fields: `slug, name, address, city, state, segment, brand, brandLogo?, status: "available" | "under-contract", keys, yearBuilt, yearRenovated?, askingPrice (string), adr?, revpar?, occupancy?, brokerSlugs[], photo, photos[], summary, bullets[]`.

### `closed.ts`
Exports `closed: ClosedDeal[]` with 12 deals. Fields: `slug, name, city, state, year, segment, brand?, keys, dealSize (string or "Confidential"), transactionType, sponsorProfile: "PE" | "REIT" | "Developer" | "Family Office" | "Corporate", brokerSlugs[], photo`.

### `insights.ts`
Exports `insights: Insight[]` for 3 reports. Fields: `slug, title, kind: "outlook" | "white-paper" | "briefing", date, summary, cover, downloadHref?, body (markdown-ish)`.

### `offices.ts`
Exports `offices: Office[]`. The 7 Matthews offices already documented in the prior site (Austin, Dallas, Houston, San Antonio, Denver, Chicago x2). Mark Austin as HQ (this team's HQ).

## Section components — `src/components/sections/`

### Home — `home/`
- `HomeHero.tsx` — bg-black hero with two-tone headline ("Hospitality investment sales. Reimagined."), Matthews wordmark, dual CTAs ("View listings" pill / "Talk to us" ghost link). `display-xl` typography.
- `HomeStats.tsx` — bg-white roomy section with year-stamped stat band (4 stats: $X.XB closed in 2024 / N transactions / N markets / $84.3B all-time). Uses Counter.
- `HomeFeatured.tsx` — bg-#f5f5f7 section, two-tone header "Listings. Hotels available now.", 3 featured listing cards + "See all listings" ghost link.
- `HomeWhy.tsx` — bg-white feature section, 4 Apple-style benefit cards in 2x2 grid (Market Intelligence / Investor Reach / National Platform / Track Record), each with 28px icon, 24px title, 17px body.
- `HomeClosedTeaser.tsx` — bg-#f5f5f7 strip with one big closed-deal card (recent trophy) + "View all closed deals" ghost link.
- `HomeInsightTeaser.tsx` — bg-black feature section showcasing the latest Quarterly Hotel Investment Outlook with a chart-illustration placeholder + download CTA.

### Listings — `listings/`
- `ListingsHero.tsx` — header with two-tone headline, count badge ("6 active assignments"), description.
- `ListingFilters.tsx` (client) — segment / region / brand / status / keys-range filters.
- `ListingsGrid.tsx` — 3-up listing card grid.
- `ListingCard.tsx` — single card: photo (16/10), status badge, name, city, key + asking-price dual stat, broker chip.

### Listing detail — `listing-detail/`
- `ListingHero.tsx` — full-bleed hero photo with name + city overlay, status badge.
- `ListingStatPanel.tsx` — 12-field stat grid (Keys, Brand, Chain Scale, Year Built, Year Renovated, ADR, RevPAR, Occupancy, Asking Price, Encumbrance, Management/Franchise, Call-for-Offers Date).
- `ListingNarrative.tsx` — long-form summary + bullet highlights.
- `ListingGallery.tsx` (client) — masonry / lightbox photo grid.
- `ListingLocation.tsx` — simple map placeholder + address card.
- `ListingSimilar.tsx` — 3 nearby/similar listings.
- StickyBrokerRail used as right column on lg, fixed bottom bar on mobile.

### Closed — `closed/`
- `ClosedHero.tsx` — two-tone header.
- `ClosedFilters.tsx` (client) — Year (range slider) / Segment / Region / Brand / Sponsor Profile / Transaction Type / Deal Size (range).
- `ClosedTable.tsx` — sortable table with cards-on-mobile fallback. Sponsor Profile column is the differentiator.

### Team — `team/`
- `TeamHero.tsx` — two-tone header.
- `TeamFilters.tsx` (client) — Office + Specialty.
- `TeamGrid.tsx` — 4-up bio cards: photo (3/4 portrait), name, title, office, specialty chips, "View bio" link.

### Team detail — `team-detail/`
- `TeamHero.tsx` (split) — left: large headshot (3/4). right: name (display-md), title, office, specialty chips, contact rail.
- `TeamStats.tsx` — career volume, last-12 volume, deal count.
- `TeamTopDeals.tsx` — top 10 named deals as card list with year, keys, segment, location, role.
- `TeamCredentials.tsx` — designations, education.

### Insights — `insights/`
- `InsightsHero.tsx` — two-tone header + featured Quarterly Outlook card (full-width, big cover image, lead, "Read the report" CTA).
- `InsightsArchive.tsx` — secondary 3-up grid of older reports/briefings.

### Insight detail — `insight-detail/`
- Full-width editorial: cover image, title (display-serif), date + author, body in 692px container, embedded chart placeholder, download PDF button.

### Contact — `contact/`
- `ContactHero.tsx` — two-tone header "Get in touch. We respond within one business day."
- `ContactForm.tsx` (client) — Apple-style 4-field form + message + submit. mailto fallback for now; document a TODO for an API route.
- `ContactInfo.tsx` — 3-column grid (email / phone / Austin HQ) with circular icon chips.
- `ContactOffices.tsx` — 4-up office card grid.

## Page files — `src/app/`

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` |
| `/listings` | `app/listings/page.tsx` |
| `/listings/[slug]` | `app/listings/[slug]/page.tsx` |
| `/closed` | `app/closed/page.tsx` |
| `/team` | `app/team/page.tsx` |
| `/team/[slug]` | `app/team/[slug]/page.tsx` |
| `/insights` | `app/insights/page.tsx` |
| `/insights/[slug]` | `app/insights/[slug]/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

## Build-agent ownership map

| Agent | Owns |
| --- | --- |
| 1 — Layout | `app/layout.tsx` (already done — they only touch metadata if needed), `src/components/layout/SiteHeader.tsx`, `src/components/layout/SiteFooter.tsx`, page-transition wrapper if used. |
| 2 — Home | `app/page.tsx` + everything in `sections/home/`. |
| 3 — Listings | `app/listings/page.tsx`, `app/listings/[slug]/page.tsx`, `sections/listings/`, `sections/listing-detail/`, `lib/data/listings.ts`. |
| 4 — Team | `app/team/page.tsx`, `app/team/[slug]/page.tsx`, `sections/team/`, `sections/team-detail/`, `lib/data/team.ts`. |
| 5 — Closed | `app/closed/page.tsx`, `sections/closed/`, `lib/data/closed.ts`. |
| 6 — Insights | `app/insights/page.tsx`, `app/insights/[slug]/page.tsx`, `sections/insights/`, `sections/insight-detail/`, `lib/data/insights.ts`. |
| 7 — Contact | `app/contact/page.tsx`, `sections/contact/`, `lib/data/offices.ts`. |

UI primitives are shared. Agent 1 builds the foundational primitives (`TwoToneHeadline`, `Pill`, `GhostLink`, `Reveal`, `Counter`, `Card`, `ImageFrame`, `Eyebrow`, `StatusBadge`, `StickyBrokerRail`, `FilterBar`). Other agents import from `@/components/ui/*`. If a primitive isn't there yet, agents stub it inline with a `TODO` and Agent 1 reconciles in the polish pass.
