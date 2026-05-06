# Visual Diagnosis — matthews-hotel-team.vercel.app

**Posture:** design director rejecting this in critique. No defensiveness.

**Method:** Direct inspection of the live URL HTML, the source code in this repo, and cross-reference against the research artifacts in `/research/benchmark.md` and `/design-system/apple-tokens.md`. Literal screenshots skipped — the diagnosis is what's actionable, the screenshots would just confirm what's documented below.

## TL;DR

The Apple direction was wrong for CRE. We built Apple's bones — Inter at -0.022em, two-tone "Bold. Lighter." headlines, 980px container, electric blue accent — but we don't have Apple's prerequisite: dense product photography. The result is Apple's *empty* skeleton. Gradient placeholders where photos should be. Initials where headshots should be. A tech-product accent color where a finance-publication accent should be. A buyer evaluating a $50M asset reads this as: "they're trying to look like Apple and don't have content yet."

The benchmark agent literally warned us about this in `/research/benchmark.md` — "HWE's icon-only transaction cards are the cautionary tale." We shipped a prettier version of exactly that.

## Top 10 worst offenders, most painful first

### 1. Stats band shows zeros above the fold
**Where:** `/` home page, `HomeStats.tsx`.
**Symptom:** Live HTML renders `$0.0B / 0 / 0K+ / 0+`. Counter's pre-animation state leaks through the WebFetch view (and the first-paint flash, and any user with reduced motion or JS disabled).
**Why it's painful:** It's the first proof point above the fold. A broker tells a client "go look at the team's site," they hit the stats and see zeros for half a second. Confidence: gone.
**Root cause:** `Counter.tsx` initializes display state at 0 and only fills the target value after `useInView` fires. SSR ships zeros.
**Severity:** Critical. Single most-painful issue on the site.

### 2. Every listing card is a gradient placeholder
**Where:** `/listings`, home `HomeFeatured`, listing detail `ListingHero`, listing `ListingSimilar`, every listing card across every route.
**Symptom:** Walden Retreats is a navy gradient with text. Holiday Inn Express is a blue gradient with text. Hampton Inn Round Rock is another navy gradient. The Driskill is a graphite gradient. Across 11 listings we have 4 distinct gradients on rotation.
**Why it's painful:** The most photogenic asset class in CRE shown without photos. Reads as "this site has no inventory" or "this is a Figma wireframe." Hospitality buyers expect to see the property — even mediocre photos beat none. The benchmark agent's exact words about HWE's icon-only cards: "cautionary tale."
**Severity:** Critical.

### 3. Team page is initials in colored circles
**Where:** `/team`, `/team/[slug]`.
**Symptom:** Each broker is a 3:4 gradient tile with their initials in display-md font. "LT" on navy. "NS" on blue. "SC" on graphite.
**Why it's painful:** This is a Linear/Slack/Notion avatar pattern. Acceptable in tech-product UIs. Fatal in CRE. Clients expect to see who they're calling. A $40M deal does not get awarded based on a navy-blue "LT" tile.
**Severity:** Critical.

### 4. Listing detail hero is a gradient + text overlay
**Where:** `/listings/[slug]`, `ListingHero.tsx`.
**Symptom:** Walden Retreats detail page hero: navy-to-midnight gradient, "Walden Retreats Hill Country. Johnson City, Texas." in display-xl white, status badge below, key/segment/brand chips. No photo. No gallery thumbnail. The 60vh hero is empty space.
**Why it's painful:** Listing detail pages are where the deal is sold. A 60vh hero with no photo of the asset is a 60vh advertisement that we don't have content. Compare against any Sotheby's, Compass, or Eastdil listing detail page.
**Severity:** Critical.

### 5. Apple's two-tone "Bold. Lighter." headline is on-the-nose derivative
**Where:** Every section. `TwoToneHeadline.tsx` is used in 14 places.
**Symptom:** "Listings. Hotels available for acquisition." / "The numbers. Year by year." / "670+ closed. Decades of trusted execution." / "Talk to us. We respond within one business day." Period at the end of both halves.
**Why it's painful:** This is the single most recognizable Apple typography pattern. Anyone who's been on apple.com in the last 5 years recognizes it instantly. For a CRE specialist to lean on it is the opposite of distinctive — it screams "I tried to copy Apple." Buyers want declarative confidence: "Six hotels currently in market." Period. One clause. Newspaper headline, not Apple slogan.
**Severity:** High.

### 6. Apple electric blue (#0071e3) is the wrong accent for hospitality investment sales
**Where:** Every CTA, every link, every accent — globally via `--accent` in `globals.css`.
**Symptom:** Every "Read more →" / "Send message" / "View listings" pill is Apple blue.
**Why it's painful:** Apple blue is a tech-product color. SaaS, consumer hardware. CRE finance accents are deeper, older, more confident: Eastdil oxblood, Goldman / Bloomberg navy, JLL deep green. Matthews's actual brand navy is `#0e1a34` and we have it sitting unused. Apple blue on a hospitality brokerage site signals "I tried to be Apple" the same way a JPMorgan ad in Comic Sans would.
**Severity:** High.

### 7. Container is too narrow for the absence of photography
**Where:** All section components — `max-w-[1024px]` everywhere.
**Symptom:** On a 1440px viewport the content column is 1024 with ~200px gutters either side. Apple gets away with this because their bento tiles are dense with product imagery. Ours are dense with gradients and short text.
**Why it's painful:** Empty side rails on a marketing page read as underbuilt. Bloomberg.com runs 1240, Eastdil runs 1280, magazines bleed wider on hero spreads. The narrow container is correct for the Apple Store aesthetic; it's wrong for editorial finance.
**Severity:** Medium.

### 8. Stats are decoupled from year and accountability
**Where:** Home `HomeStats`, repeated on bio pages.
**Symptom:** "$3.5B / 72 / 59K+ / 670+" rendered as four stat boxes with no year stamp, no "as of," no source.
**Why it's painful:** JLL's site (per benchmark agent) puts "$19B in 2024" with explicit year — moving target, current. Ours reads as boilerplate. Worse, "59K+ rooms sold" and "670+ total transactions" describe Matthews CRE the firm (33,500+ deals all-time across all asset classes), not the hospitality team. Inflated numbers + no accountability is a credibility risk.
**Severity:** Medium.

### 9. Listing cards lack data density
**Where:** `ListingCard.tsx`.
**Symptom:** Each card shows: gradient, status badge, brand chip, name, city, keys (big), asking price, "Request offers →". That's 7 visible data points. CRE convention is to show: photo, name, city, segment, brand, keys, ADR (if disclosed), asking, status, broker, year built. Eastdil and HWE pack 9-11 fields. Ours pack 7.
**Why it's painful:** Buyers triage 30 listings in 2 minutes. Density is signal. We've optimized for "Apple breathing room" instead of "broker-ready scan."
**Severity:** Medium.

### 10. Closed deals table treats Sponsor Profile as decoration
**Where:** `/closed`, `ClosedTable.tsx`.
**Symptom:** Sponsor Profile gets a small tinted chip — PE blue, REIT green, Developer amber, Family Office purple, Corporate gray. The benchmark called this filter "the smartest in the category" (HWE's signature move), but in our table it's the smallest visual element.
**Why it's painful:** If we're going to leapfrog HWE, the differentiator should be loud. Right now Year and Asset name dominate the row; Sponsor Profile reads as a footnote color.
**Severity:** Low-medium.

## Cross-cutting issues

**A. No editorial voice.** Every section reads as marketing-page copy. "Information, not just listings." "Why Matthews." "Talk to us." Where's the analytical voice that distinguishes Eastdil's outlook from a Marcus & Millichap newsletter? The home page benefits cards say "Market intelligence" and "Investor reach" — exactly what every other CRE site says.

**B. Motion exists but doesn't earn its keep.** Cards fade up at 24px / 500ms. It's correct Apple-spec motion, but for editorial finance the right move is *less* motion. Bloomberg articles render instantly; you scroll, headlines stay put, photos stay put. Our fade-ups are a tech-product mannerism applied to content that wants gravity.

**C. Insights pages have no charts.** `/insights/q1-2026-outlook` has body paragraphs and a placeholder SVG line chart. Bloomberg Markets, FT Alphaville, Eastdil's Outlook reports are *chart-led*. Our outlook is a blog post.

**D. The Hero CTA pair is "View listings" / "Talk to us."** "Talk to us" is consumer voice. Eastdil and HWE use directive, professional voice: "Request a call" / "Submit your assignment" / "View deal book."

**E. Map placeholder is recognizable as a placeholder from 50 feet.** The CSS-grid-with-pin pattern on listing detail Location section reads as "we're going to add a real map later."

## What this site does well, briefly (for honesty)

- 27 routes prerender static, build is clean, Lighthouse-ready
- Type tokens are tight, body baseline is correct
- Sticky broker rail on listing detail is genuinely uncontested in the category
- Closed deals filter set including Sponsor Profile is real differentiation
- Component architecture is clean, swap-ready
- Inter + Fraunces are loaded; we just haven't used Fraunces

## Verdict

This is a well-built shell that wears the wrong skin. The fix is not "rebuild" — it's a focused pivot: drop the Apple mannerisms, lean into editorial finance, fix the photography problem, dial up data density. Three to six hours of focused work pivots the perception 80% of the way.

Plan in `/audit/fix-plan.md`.
