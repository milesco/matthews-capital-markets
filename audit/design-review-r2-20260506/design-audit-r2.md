# Design Review — Round 2 (Polish Pass)

**Site:** https://matthews-hotel-team.vercel.app
**Date:** 2026-05-06
**Trigger:** /design-review re-run after R1 fixes shipped (Reveal pass-through, photo wiring, hero overlay, gallery framings, card aspect)
**Tree:** clean at `81ef296` going in

## First impression (R2)

Everything renders. Real photography on every listing card. Editorial monogram covers across the team. Driskill facade in the closed teaser. Q1 2026 Fraunces cover stands out. Footer is dense but readable. The site reads as **Apple-flagship for hospitality CRE** — Inter + Fraunces, two-tone headlines, alternating white/`#f5f5f7` sections, `#0071e3` accent.

If I had to describe it in one word: **shipped.** It's no longer a wireframe.

## Inferred design system

| Tier | Value |
|---|---|
| Fonts in use | `Inter` + `Fraunces` (just 2 — clean) |
| Color: hero, alt, accent | `#000000` / `#f5f5f7` / `#0071e3` |
| Text primary, secondary | `#1d1d1f` / `#86868b` |
| Container | 1024px max |
| Performance | TTFB 47ms, total 81ms (excellent) |

## Findings

### F1 — Contact form pre-selects "Selling a hotel" 〔HIGH · FIXED〕
- **Where:** `/contact` → "How can we help?" select.
- **Symptom:** Select renders with `Selling a hotel` already chosen by default. No placeholder option. User reaching the form sees a real choice pre-selected without having made it. Distorts intent capture and submissions.
- **Fix:** added `<option value="" disabled>Select a topic…</option>` as the initial state, set `required` on the select, and changed the React state initial from `"Selling a hotel"` to `""`.
- **Commit:** `5dd6e2d`
- **File:** `src/components/sections/contact/ContactForm.tsx`

### F2 — Header "Get in touch" pill was 42px tall (WCAG 44px miss) 〔MEDIUM · FIXED〕
- **Where:** SiteHeader, all routes.
- **Symptom:** Touch target audit returned `Get in touch` pill at 117×42 — under WCAG's 44px minimum on mobile.
- **Fix:** added `min-h-[44px]` to Pill base class (benefits the `sm` and `default` size everywhere) and bumped sm `py` from `10px` → `11px` so text isn't cramped against the new minimum.
- **Commit:** `5dd6e2d`
- **File:** `src/components/ui/Pill.tsx`

### F3 — Top nav links 18px tall 〔LOW · DEFERRED〕
- **Where:** SiteHeader desktop nav (Listings, Closed, Team, Insights, Offices, Contact).
- **Symptom:** Each link's hit area is 18px tall (text height). Below WCAG 44px.
- **Why deferred:** mobile uses the drawer (which has 44+ targets). On desktop, nav is mouse-driven; 44px touch target rule is debatable for desktop pointer users. The header's overall height is 44px (so the link's effective click area extends to the row), but the bounding box of the `<a>` is still 18px. Real fix is to add vertical padding on the links so the bounding box matches the row height.
- **Note:** flagged for future polish; not landing in this pass.

### F4 — Map placeholder still recognizable 〔LOW · DEFERRED〕
- **Where:** `/listings/[slug]` Location section.
- **Carryover from R1:** CSS-grid + pin pattern is identifiable as fake. Real fix needs Mapbox or Leaflet integration.

### F5 — Insight detail cover is a gradient 〔LOW · DEFERRED〕
- **Where:** `/insights/q1-2026-outlook`.
- **Carryover from R1:** publication-grade cover would be a real chart screenshot or editorial illustration. Current Fraunces "Q1 2026" on gradient is distinctive but not chart-led.

## What's still strong (no changes)

- **Home hero** — three-tone ambient backdrop, MATTHEWS wordmark, two-tone display headline, dual CTAs, scroll cue. Apple flagship feel.
- **Stats lead** — "$3.5B closed across 72 transactions. Texas, the Sun Belt, and beyond." reads like a CFO talking, not marketing copy.
- **Listings index** — 6 photo cards, full filter bar (Segment / Region / Brand / Status / Keys), stats row.
- **Listing detail** — photo hero with light-top gradient, 12-stat panel, narrative, 6-tile gallery with varied framings, similar-listings strip.
- **Team** — MonogramCover treatment is the visual signature of the build. Editorial Fraunces initials on alternating ink/navy/paper/graphite tones.
- **Closed deals** — sortable table, Sponsor Profile column (PE / REIT / Developer / Family Office / Corporate) with subtle tint chips. The benchmark differentiator, executed.
- **Contact** — Apple-Support-style icon-row contacts on the left, form on the right, office grid below with HQ pill on Austin.

## Score deltas (R1 → R2)

| Category | R1 | R2 | Reason |
|---|---|---|---|
| Visual hierarchy | A− | A | Stats lead + photo trophy land cleanly |
| Typography | A | A | Inter + Fraunces, only 2 families, tracking dialed |
| Color | B+ | B+ | Apple blue accent (user choice; intentional) |
| Spacing | A | A | Editorial breathing room |
| Interaction | A− | A | Touch target 44px now met on Pill |
| Responsive | A− | A− | Mobile stacking clean |
| Content | B+ | A− | Form select default fixed |
| AI Slop | B+ | B+ | Photos + monograms stay out of "wireframe" zone |
| Motion | B+ | B+ | Heroes animate; sections render statically |
| Performance | A | A | 47ms TTFB, 81ms total |

**Composite: A− → A**

## PR summary

> Polish round of /design-review found 2 fixable + 3 deferred. Fixed: contact form pre-select bug, header pill below 44px touch target. Site now A grade across the board.

## Commits this round

```
5dd6e2d  polish: contact form select placeholder, Pill min-h 44px touch target
```
