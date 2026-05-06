# New Direction — Editorial Finance

**Pivot from:** Apple Store / iPhone marketing aesthetic
**Pivot to:** Hodges Ward Elliott + Eastdil Secured + Bloomberg Markets + Monocle

The reference set: editorial, type-led, dense, confident. Black/white/one accent. Restraint over flourish. Data on the page, not buried. Photography used surgically, not as wallpaper.

## Why this works for CRE

Apple sells products via hero photography. Hospitality brokerage sells **deals via evidence**. The evidence is: photos of the asset, key + ADR + RevPAR + asking, broker track record, and a market-intelligence point of view. The aesthetic that respects evidence is editorial finance — *the publication that knows things*, not the marketing site that says vague things prettily.

This pivot is also visually distinctive. Every other CRE site uses corporate-blue tech-marketing styling. Going editorial-finance immediately differentiates. Looks like a deck, not a website.

## What stays

- Inter + Fraunces (Fraunces is the unlock — we have it, we haven't used it)
- Next 15 + Tailwind v4 + framer-motion infra
- The site map and route structure
- The Sponsor Profile filter, sticky broker rail, full above-the-fold stat panel on listing detail
- Closed Deals as a multi-axis filterable database
- The component architecture and shared primitives

## What changes

### Typography

| Role | Current | New |
| --- | --- | --- |
| Display (hero, listing names, big editorial moments) | Inter 600, two-tone Apple pattern | **Fraunces 500-600**, single-tone, lead+deck pattern. Fraunces variable opsz axis tuned to display size. Used surgically — never on small text. |
| Section heads | Inter 600, two-tone | **Fraunces 500** lead, Inter grotesk deck below |
| Body | Inter 17px / 1.47 / -0.022em | **Inter 16px / 1.55 / -0.011em** — tighter tracking, looser leading, smaller for density. Reads more like a magazine column. |
| Eyebrow | 12px uppercase tracking-0.18em | Same — it's correct |
| Caption / footnote | 12px / 1.333 / -0.01em | Same |

Display moments: section heads, listing detail name overlay, closed deal trophy card, insight article titles. Everything else stays grotesk.

Lead + deck pattern (replaces Apple two-tone):

```
Six hotels currently in market.
$185M in active assignments. Texas, Sun Belt, select-service to luxury.
```

Lead = serif, ~clamp(40px, 5vw, 72px), -0.02em, weight 500.
Deck = grotesk, 18-21px, lighter color, line-height 1.4. Sits directly below lead with a small `mt-3` gap.

### Palette

Drop Apple blue. Adopt Matthews navy as the single accent.

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0a0a0a` | Primary text — almost pure black, more confident than Apple's `#1d1d1f` |
| `--ink-secondary` | `#535353` | Body secondary, captions |
| `--ink-tertiary` | `#8a8a8a` | Footnotes |
| `--paper` | `#ffffff` | Default page bg |
| `--paper-warm` | `#fafaf7` | Alt sections — slight warm off-white, newspaper-feeling |
| `--rule` | `#dcdcdc` | Hairlines, dividers |
| `--accent` | `#0e1a34` | **Matthews navy** — the one accent. Replaces every `#0071e3`. |
| `--accent-ink` | `#142647` | Accent on hover — slightly lighter |
| `--status-active` | `#16794f` | Forest green dot — "in market" |
| `--status-escrow` | `#a16207` | Amber dot — "under contract" |
| `--status-closed` | `#535353` | Gray — historical |

Critical: there is **one** accent color and it is Matthews navy. No tints, no chip variants per category. Sponsor Profile chips (PE / REIT / etc.) use ink + small navy underline, not five different tints. Restraint.

### Layout

- Container width: **1240px** (up from 1024px). Bloomberg / Eastdil density.
- Side gutters: 24px mobile, 32px tablet, 48px desktop
- Editorial multi-column where appropriate: long-form Insights uses a 2-column body grid (text + sidebar deck for stats / pull quotes / chart calls)
- Listings: 3-up at 1240, 2-up at 768, 1-up below
- Listing cards: photo on top (16/10), then editorial deck below (city eyebrow, name in serif display-md, deck of: keys / brand / segment / asking, status dot inline)

### Photography

See `/audit/photography.md`. Decision: source real exterior photos for all 6 listings + use editorial typographic covers as fallback for any listing that can't be sourced cleanly.

### Motion

Strip back. Editorial finance does not move.

| Pattern | Current | New |
| --- | --- | --- |
| Section reveal | fade-up 24px / 500ms | **None.** Render instantly. |
| Card reveal | fade-up staggered | **None.** Static layout. |
| Hero entrance | y:32 → 0 / 900ms | Subtle opacity-only fade, 400ms, no translate |
| Photo hover | scale 1.04 / 700ms | Keep. It's the one Apple-pattern that fits — exactly the kind of "surgical" motion this aesthetic allows. |
| Header on scroll | frosted blur cross-fade | **Hard transition.** Solid white-on-ink at scroll > 80, no blur. |
| Counter | count-up 1200ms | **No count-up.** Render the value. We're not selling drama. |

The cumulative effect: page feels like a magazine spread loading, not an animated marketing site.

### Data density

Above-the-fold density per page:

- **Home:** 5+ listings count + asking-price total + 1 trophy deal photo + 1 stat headline. All before scroll.
- **Listings:** 6 listings + filter bar + listing-count-by-segment in eyebrow.
- **Listing detail:** name + city + 12-stat panel + photo gallery thumb strip + broker rail. All before scroll.
- **Closed:** stat band (count, total volume disclosed, year range) + filter bar + first 8 rows of table.
- **Team:** all 8 brokers visible above the fold (4×2 grid).

### Voice

Drop consumer-app voice. Adopt CRE-professional declarative voice.

| Current | New |
| --- | --- |
| "Hospitality investment sales. Reimagined." | "Hospitality investment sales. Texas. National platform." |
| "Talk to us." | "Request a call." |
| "Listings. Hotels available for acquisition." | "Active assignments." |
| "The numbers. Year by year." | "2024 in numbers." |
| "Talk to us. We respond within one business day." | "Request a call. Response within 24 hours." |
| "View listings" | "View deal book" |
| "We respond within one business day." | (eyebrow) "RESPONSE TIME · 24 HOURS" |
| "Built on track record." | "Track record." (no marketing tail) |

Periods at end of clauses, not at end of two halves.

### Insights — the publication, not the blog

Insights is the highest-leverage page to differentiate from category. The pivot:

- Insights index renders like a magazine front page. Featured outlook gets a **broadsheet treatment**: full-width Fraunces headline, deck, byline, dateline, lead photo (or chart placeholder).
- Article body is 692px column with proper editorial rhythm: drop cap on first paragraph, pull quotes in serif italic, charts inline (not at the end), byline + dateline in caption tier.
- Add a "From the desk of —" section in the sidebar with a 2-line author note.

### What's gone, in one list

- Apple two-tone "Bold. Lighter." headline pattern → **gone**
- Apple electric blue (`#0071e3`) → **gone**
- Counter count-up animation → **gone**
- Section fade-up reveals → **gone**
- Header backdrop-blur frost → **replaced with hard solid header**
- Gradient placeholder photography → **replaced with real photos or editorial covers**
- Initials-on-gradient broker tiles → **replaced with photos or editorial monogram covers**
- Marketing voice ("Talk to us") → **replaced with directive professional voice**
- 1024px container → **bumped to 1240px**

## Sample lookbook

If we did this right, the home hero reads:

```
                                   MATTHEWS HOSPITALITY · AUSTIN · 2026

Active assignments
across Texas and the Sun Belt.
Six hotels in market. $185M in current ask.

       [REQUEST DEAL BOOK]    View all →

      ─────────────────────────────────────────

      [photo: Walden Retreats aerial]    [photo: Holiday Inn Austin]
      Walden Retreats Hill Country       Holiday Inn Express Austin
      JOHNSON CITY, TX · BOUTIQUE        AUSTIN, TX · SELECT SERVICE · IHG
      15 keys · Upon request             124 keys · $24.5M
```

Lead in Fraunces, deck in Inter grotesk, dateline eyebrow, hard CTA, photo-led card row immediately. No "Reimagined." No "Talk to us." No fade-ups.

That's the bar.
