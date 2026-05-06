# Fix Plan — Editorial Pivot

**Posture:** smallest highest-impact first. Build, smoke-test, screenshot-verify, then move to the next. No batch rewrites.

**Total estimated time:** ~5-6 hours of agent work to land the full pivot. Items 1-4 alone (~2 hours) move the perceived quality 70% of the way.

## Iron rule

Each fix lands as its own commit. Each commit gets a quick visual smoke check (live URL spot-check or local dev) before the next fix starts. If a fix doesn't actually improve the perception, revert and reconsider.

## Priority queue

### P0 — Fix the zeros (15 min, blocking)

**File:** `src/components/ui/Counter.tsx`
**Problem:** Initial state renders "$0.0B / 0 / 0K+ / 0+" until `useInView` fires. SSR + first-paint flash + reduced-motion users all see zeros.
**Fix:** Initialize display state with the *target* value, not zero. The animation is a polish layer, not the source of truth. Three options, ranked:
1. Drop the count-up animation entirely (matches new direction "no count-up")
2. Initialize at target, fade opacity 0→1 over 400ms when in view
3. Keep count-up but SSR-render the final value so the initial paint is correct

**Pick:** option 1. Editorial-finance doesn't count up. Render the value, opacity-fade once.

**Verify:** view-source on the live URL shows the actual stat values, not zeros.

---

### P1 — Drop Apple blue, adopt Matthews navy (30 min)

**Files:** `src/app/globals.css` (token), `src/components/ui/Pill.tsx`, `src/components/ui/GhostLink.tsx`, `src/components/sections/contact/ContactInfo.tsx`, anywhere `#0071e3` is hardcoded
**Problem:** Apple electric blue signals tech-product, not finance.
**Fix:** Swap `--accent` from `#0071e3` to `#0e1a34` (Matthews navy). Update hover/active to `#142647` / `#0a1226`. Audit for any remaining `#0071e3` strings and replace.
**Verify:** no `#0071e3` left in `src/`. Visual: every CTA, every link is now navy.

---

### P2 — Replace TwoToneHeadline with EditorialHeadline (lead+deck) (45 min)

**Files:** New: `src/components/ui/EditorialHeadline.tsx`. Edit: every section that uses `TwoToneHeadline`. Keep TwoToneHeadline available for now to avoid blocking the migration, deprecate after.
**Problem:** Apple two-tone "Bold. Lighter." is on-the-nose derivative.
**Fix:** New component:
```tsx
<EditorialHeadline
  lead="Six hotels currently in market"
  deck="$185M in active assignments. Texas, Sun Belt, select-service to luxury."
  size="section"
/>
```
- Lead: Fraunces variable, weight 500, opsz tied to size, `clamp(40px, 5vw, 72px)` for hero / `clamp(28px, 3vw, 40px)` for section
- Deck: Inter, 18-21px, `text-[color:var(--ink-secondary)]`, line-height 1.4, `mt-3`
- Sizes: `hero` / `section` / `subsection`
- No periods on both halves. Lead is sentence-case.

Migrate page-by-page: home → listings → team → closed → insights → contact. Each migration is its own commit.
**Verify:** no `TwoToneHeadline` calls left after P2 lands. Visual: serif lead, grotesk deck, no Apple cadence.

---

### P3 — Source real photos for the 6 active listings (60 min)

**Files:** `public/listings/{slug}.jpg`, `src/lib/data/listings.ts` (replace `toneClass` with `photo`), `src/components/sections/listings/ListingCard.tsx` (use Next/Image), `src/components/sections/listing-detail/ListingHero.tsx` (replace gradient with photo).
**Problem:** Every listing is a gradient.
**Fix:** Per `/audit/photography.md` Option A — source 6 real exterior photos:
- Walden Retreats: from their public site
- Holiday Inn Express Austin: from IHG property page
- Hampton Inn Round Rock: from Hilton property page
- Courtyard SA Riverwalk: from Marriott property page
- The Driskill: public marketing photography
- Fairfield Waco: from Marriott property page

Save as `public/listings/{slug}.jpg`. Update `Listing` type to add `photo: string`. Update card and hero to render via `<Image>` with proper `sizes` and `quality={88}`. Apply the treatment: 16:10 crop on cards, full-bleed on detail hero with bottom gradient overlay for text legibility.
**Verify:** every listing has a real photo. Listing detail hero is photo + overlay, not gradient.

---

### P4 — Listing card density bump (30 min)

**File:** `src/components/sections/listings/ListingCard.tsx`
**Problem:** 7 visible data points; CRE convention is 9-11.
**Fix:** Add to the card: brand chip, segment chip, year built, status dot. Layout:
```
[photo with status dot top-left, segment chip top-right]
CITY · YEAR BUILT
Hotel Name (Fraunces display)
Brand · Keys · ADR (if disclosed)
Asking price · "View deal book →"
```
Keep the deck tight — these aren't bullet points, they're a typography-led data row.
**Verify:** card shows all listed fields. Scan-readable in 2 seconds.

---

### P5 — Listing detail hero redo (45 min)

**File:** `src/components/sections/listing-detail/ListingHero.tsx`
**Problem:** Gradient hero with text overlay.
**Fix:** Photo hero with editorial deck:
- Full-bleed photo, 60vh, bottom 40% gradient overlay (transparent → ink/0.7)
- Eyebrow: "ASSIGNMENT · ACTIVE" or "ASSIGNMENT · UNDER CONTRACT" with status dot
- Hotel name: Fraunces display-xl, white, drop-shadow for legibility
- Deck below: City · Segment · Brand · Year (small grotesk, ink/0.85)
- CTA row: navy primary "Request deal book", ghost "Schedule tour"

The 12-stat panel below stays — that's working.
**Verify:** detail page hero is photo-led, not gradient.

---

### P6 — Editorial monogram covers for brokers (45 min)

**File:** `src/components/sections/team/TeamCard.tsx`, `src/components/sections/team-detail/TeamDetailHero.tsx`. New: `src/components/ui/MonogramCover.tsx`.
**Problem:** Initials on navy gradient = Linear avatars.
**Fix:**
1. Try sourcing real headshots first (Luke / Nate / Patrick are real Matthews people — their public bios on matthews.com may have photos)
2. For any broker without a sourced headshot, use `MonogramCover`: warm-paper background `#fafaf7`, monogram in Fraunces 600 ink-color, bottom-aligned, with a thin navy rule and small caption below ("LT" / "LUKE THOMPSON" / "VP & DIRECTOR · CAPITAL MARKETS"). Editorial publication-cover treatment.
**Verify:** team grid feels like a Monocle contributor section, not a Slack avatar grid.

---

### P7 — Stats band gets year stamp + accountability (15 min)

**File:** `src/components/sections/home/HomeStats.tsx`
**Problem:** Numbers float untethered from time or source.
**Fix:** Replace 4-stat grid with editorial lead+deck:
```
Eyebrow: "MATTHEWS HOSPITALITY · 2024"
Lead: "$3.5B closed across 72 transactions."
Deck: "59,000+ rooms sold. Texas, the Sun Belt, and beyond. Numbers updated annually."
```
The lead becomes the primary section title. Stat numbers get owned by a sentence with a year in it.
**Verify:** hero immediately telegraphs "this firm did $3.5B in 2024" not "this firm has stats."

---

### P8 — Container width bump 1024 → 1240 (15 min)

**Files:** `src/app/globals.css` (`--container-lg` already exists — switch component containers from `max-w-[1024px]` to `max-w-[1240px]`)
**Problem:** Empty side rails on 1440 viewport.
**Fix:** Find-replace `max-w-[1024px]` → `max-w-[1240px]` site-wide. Reflow 3-up grids to 4-up where it makes sense (listings, closed table fits more columns).
**Verify:** desktop view is denser; nothing horizontally overflows on tablet (768).

---

### P9 — Strip section reveal motion (30 min)

**Files:** `src/components/ui/Reveal.tsx` (gut to no-op), or remove `<Reveal>` wrappers across sections
**Problem:** Apple fade-up on every card / heading is wrong for editorial finance.
**Fix:** Make `Reveal` a no-op pass-through (keeps the API stable so we don't have to rip imports). Or remove its uses entirely for cleanliness.
**Keep:** photo hover micro-zoom (the one Apple-spec motion that survives).
**Verify:** scroll the home page — sections render statically, like turning a magazine page.

---

### P10 — Voice pass (30 min)

**Files:** every section component with copy
**Problem:** "Talk to us" / "Reimagined" / consumer-app voice
**Fix:** Per `/audit/new-direction.md` voice table. Replace:
- "Hospitality investment sales. Reimagined." → "Hospitality investment sales. Texas. National platform."
- "Talk to us" → "Request a call"
- "View listings" → "View deal book"
- "Talk to us. We respond within one business day." → "Request a call. Response within 24 hours."
- All "Listings. Hotels available for acquisition." → "Active assignments." (eyebrow) + "Six hotels currently in market." (lead)

**Verify:** read the home page top-to-bottom. No marketing-page voice; reads like a brokerage.

---

### P11 — Sponsor Profile becomes a visual anchor in Closed table (20 min)

**File:** `src/components/sections/closed/ClosedTable.tsx`
**Problem:** SP chips are decoration, not the differentiator we said they'd be.
**Fix:** Move Sponsor Profile to its own column with bigger labels (text-[12px] tracking-[0.18em] uppercase). Add a small icon glyph per profile (PE = wedge, REIT = building, Developer = pickaxe-but-tasteful, Family Office = crest, Corporate = grid). Single ink color, no tints — restraint.
**Verify:** scrolling the closed table, your eye lands on Sponsor Profile not Year.

---

### P12 — Insights gets a real chart on the outlook page (45 min, optional polish)

**File:** `src/components/sections/insight-detail/InsightLayout.tsx`. Add `recharts` or render a custom SVG.
**Problem:** Chart is a sketchy-line placeholder.
**Fix:** Render a real cap-rate-by-chain-scale chart with hard-coded illustrative data. Editorial style — thin lines, axis labels in caption tier, single accent color (Matthews navy), no gridlines. Like an FT Alphaville chart.
**Verify:** outlook reads like a publication, not a blog post.

---

## Sequencing summary

**Phase A — Critical (P0-P3, ~2.5 hours):**
Counter zeros → drop blue → editorial headlines → real listing photos.
At end of Phase A, the worst three offenders are dead. The site already feels different.

**Phase B — Editorial pivot polish (P4-P9, ~2.5 hours):**
Card density → detail hero → broker covers → stats band → container width → strip motion.
At end of Phase B, the editorial direction is fully landed.

**Phase C — Voice + differentiator emphasis (P10-P12, ~1.5 hours):**
Voice pass → Sponsor Profile elevation → real insight chart.
At end of Phase C, distinctive editorial voice + flagship differentiator + publication-grade insights.

## What I will NOT do without explicit approval

- Touch `globals.css` token names (only token *values* swap, names stay so we don't break component imports)
- Re-architect any component (this is a re-skin pivot, not a rebuild)
- Add new dependencies beyond `recharts` for P12 (and only if you green-light P12)
- Delete `TwoToneHeadline` until every page has migrated to `EditorialHeadline`
- Touch the build / deploy pipeline — pushes to `main` continue to auto-deploy

## Awaiting reaction

Per your instruction: stopping here. Three docs to read in order:
1. `/audit/diagnosis.md` — what's wrong, ranked
2. `/audit/new-direction.md` — what to pivot to
3. `/audit/photography.md` — how to fix the photo problem
4. `/audit/fix-plan.md` — this file, prioritized work

When you're ready to start, the cheapest highest-leverage move is **P0 (15 min)**. Just say "start with P0" or "do P0-P3 in sequence" and I'll execute one at a time with a smoke check between each.
