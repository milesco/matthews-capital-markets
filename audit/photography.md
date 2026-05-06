# Photography Strategy

## The problem

Six active listings. Eight broker bios. Three insight covers. Twelve closed deals. Total: ~29 visual placeholders that currently render as gradient + text or initials + gradient. Every one of them signals "this site has no content."

Hospitality is the most photogenic CRE asset class. Going without photography is the cautionary tale flagged in `/research/benchmark.md` (HWE's icon-only transaction cards). We have to fix this.

## The three options

### Option A — Source real photos from public sources
Pull exterior shots from each hotel's own marketing site (each Hampton/Holiday Inn/Courtyard has a property-direct page on the chain's site with real exterior photography). For independents (Walden Retreats, The Driskill), use publicly available marketing photography. For the Texas-based brokers' headshots, source from Matthews's own public bio pages on matthews.com if available; otherwise editorial monogram fallback.

**Pros**
- Real assets. Zero "what is this gradient" cognitive friction.
- Free, fast — ~1 hour of agent work to source 6 listing photos
- Production path: same exact assets get re-licensed properly later

**Cons**
- Copyright risk for production launch (must replace with licensed photography before going public)
- Quality varies — some chain properties have weak hero photos
- Need an "image license review" pass before any real launch

### Option B — AI-generated cinematic renders
Use Imagen / Nano Banana / Midjourney to generate consistent hotel exterior renders. Treat all 6 listings with the same lighting, time-of-day, framing.

**Pros**
- Consistent treatment across listings — every photo looks like the same shoot day
- No copyright risk
- Can dial up "premium" mood beyond what real exterior shots provide

**Cons**
- AI exterior renders of branded hotels are uncanny — Hampton Inn signage drifts, architecture doesn't match the actual asset
- Brand inconsistency is a real client objection ("that's not what our hotel looks like")
- Generic AI-render aesthetic is a new kind of placeholder — sophisticated viewers spot it
- Time: ~30-60 min generation + visual QA + iteration

### Option C — Editorial typographic covers
No photo. Each listing card is a confidently-typeset editorial cover: hotel name in Fraunces display, asking price as supporting display, segment chip, city dateline. Like a Monocle or Bloomberg Markets section divider.

**Pros**
- Confident, distinctive, no asset risk
- Fits the editorial-finance pivot perfectly
- Coherent across all 29 placeholders

**Cons**
- Violates the most-cited CRE convention: every listing has a photo
- Buyers explicitly want to see the property — denying that signals either secrecy or absence
- Even Bloomberg / Monocle / Eastdil use photography in articles; editorial-finance is not photography-free, it's photography-disciplined

## Recommendation: Option A, with Option C as fallback

**Source real exterior photos for all 6 active listings + 12 closed deals + 3 insight covers.** Use Option C (editorial typographic covers) only for any listing where photo quality is poor or licensing is uncertain.

For broker headshots: try to source from Matthews public bios first; fall back to **editorial monogram covers** — a refined version of what's there now. Single ink-on-paper monogram in Fraunces serif, large, on a warm-paper background with a single accent navy line. No more "LT on navy gradient." Confident initial-as-art.

## Why A wins

1. **CRE buyers expect photos.** Even mediocre photos beat none. The benchmark agent's exact warning: "HWE's icon-only transaction cards are the cautionary tale."
2. **Editorial-finance is photography-disciplined, not photography-free.** Bloomberg Markets has photos. Monocle is a photography-heavy magazine. The pivot is "use photography surgically" — meaning fewer, better, but still present.
3. **A is the production path.** Whatever we ship for the demo gets replaced with licensed photography before launch. Sourcing real-asset photos now means we're working in the right shape — only the licensing changes, not the layout, not the aspect ratios, not the editorial treatment around them.
4. **B (AI) introduces a different uncanny valley** that's harder to fix and harder to swap out.
5. **C (full editorial) is too aggressive a category-violation** for the demo. We can layer in editorial covers as a fallback per listing, but going all-typographic across 29 placeholders is a stunt.

## Sourcing plan

**Listings (6):**
| Listing | Source approach |
| --- | --- |
| Walden Retreats Hill Country | The actual Walden Retreats site has aerial / glamping photography. Use their hero photo. |
| Holiday Inn Express Austin North Central | IHG's property page on holidayinnexpress.com — exterior + entrance photos |
| Hampton Inn & Suites Round Rock | Hilton.com property page — branded exterior |
| Courtyard San Antonio Riverwalk | Marriott.com property page — exterior, lobby alternates |
| The Driskill Trophy Lease | Public marketing photography is widespread — use the iconic lobby or facade |
| Fairfield Inn & Suites Waco | Marriott.com property page — exterior |

**Broker headshots (8):**
- Try Matthews's public bios on matthews.com if those individuals exist there (Luke Thompson, Nate Solomon, Patrick Graham are real Matthews people per memory)
- For fictional names (Sarah Chen, Marcus Reyes, Elena Park, David Okafor, Maya Patel) — editorial monogram cover treatment

**Insight covers (3):**
- Q1 2026 Outlook: a chart-led photo (real cap-rate or ADR chart screenshot from public sources, with editorial overlay)
- ADR Recovery white paper: photo of a Texas secondary-market hotel exterior
- Glamping Investment Thesis: aerial outdoor / lifestyle photo

**Closed deals (12):**
- Defer to phase 2 of fixes. Closed deal table doesn't show photos prominently — small thumbnails are acceptable as gradient placeholders for the moment, or we render them photo-less in the table view.

## Treatment rules

Once photos are in:

- All listing photos get the same treatment: 16:10 aspect, slight desaturation (-5% saturation), subtle bottom gradient overlay so deck text reads cleanly when overlaid
- Cinematic crop: prefer wide exterior shots over close-ups
- One status dot top-left (in-market / under-contract), one segment chip top-right
- Asset name in Fraunces display below photo, deck of stats in Inter
- Hover: photo scales 1.04 over 700ms (the one Apple-spec motion that survives the editorial pivot — surgical)

## Cost estimate

~1 hour total agent time:
- 30 min: source 6 listing exterior photos via WebFetch + save to `public/listings/`
- 15 min: source broker headshots where available, fall back to editorial monogram component
- 15 min: source 3 insight cover photos / charts

Total bytes added: ~3-5 MB of images, served via `next/image` with proper `sizes` and AVIF/WebP transforms. Lighthouse impact: minimal.
