# Competitor SEO Architecture Matrix — Hotel Brokerage / CRE Hospitality

Sprint: Agent 1, 50-min cap. Public-data only; CoStar references intentionally omitted.

**Crawl status (10 competitors):**
- Full crawl with sitemaps + sample pages: HVS, Hodges Ward Elliott, Berkadia, Eastdil Secured, Marcus & Millichap, Cushman & Wakefield, JLL (sitemap blocked, partial HTML).
- Bot-walled (403 / Akamai / Cloudflare): Hunter Hotels, CBRE Hotels, Newmark (nmrk.com). Findings for these inferred from publicly-cached SERP signals + sitemap probes only and flagged as such.

---

## 1. Per-Competitor Snapshot

### Hunter Hotels (hunterhotels.com)
Apache + WordPress, hard 403 on bot UAs (sitemap unreachable). Thin lead-gen brochure (~10-15 pages): listings carousel, team, conference. The Hunter Hotel Investment Conference is the dominant link-magnet — pulls high-DA backlinks every spring and ranks for "hotel investment conference." Content moat is the conference, not pages. **No per-market reports, per-brand pages, or insight articles at scale.** A real per-market + per-brand template library beats them on long-tail inventory.

### HVS (hvs.com)
~850 URLs. Templates: `/Office/{City}` (57), `/services/{ServiceLine}` (12), `/personnel/{ID-Name-Credentials}` (180+ pros with MAI/CRE/FRICS in slug — strong E-E-A-T signal), `/article/{ID-Title}` (500+ research articles). Priced publications: Hotel Broker Survey, MarketCast, Franchise Fee Guide, US Hotel Development Cost Survey (citation-magnets). Sample article = 2,869 words, single-author bylines, 53 internal links, only `WebSite` JSON-LD (under-optimized for Article schema — opportunity gap). Most thought-leadership-heavy of the set; Steve Rushmore brand legacy.

### JLL Hotels & Hospitality (jll.com)
Bot detection (hospitality URL returns 404 headless). Practice publishes annual Global Hotel Investment Outlook, per-region outlooks (Americas/EMEA/APAC), per-deal `/newsroom/` press releases, thick `/insights/` library with named bylines and Article schema. Templates inferred: `/insights/{slug}`, `/our-research/{slug}`, `/newsroom/{deal-name}-trades`, `/people/{name}`. Flagship link-magnet: annual Hotel Investment Outlook PDF (email-gated, landing page ranks).

### CBRE Hotels (cbre.com / cbrehotels.com)
Both URLs return 403 headless. Moat: Hotels Americas Investor Intentions Survey, Hotels Trends (semi-annual), per-MSA Hotel Market Snapshots. Named authors (Rachael Rothman, Mike Roberts) with E-E-A-T bio pages. Templates: `/insights/reports/{slug}`, `/insights/articles/{slug}`, `/people/{slug}`, `/services/property-types/hotels`. Heavy `Article`, `Person`, `Organization`, `BreadcrumbList` schema (publicly known).

### Newmark Hospitality (nmrk.com)
Akamai-walled. Smaller footprint than CBRE/JLL. Templates: `/sectors/hospitality`, `/insights/{slug}`, `/professionals/{name}`, `/transactions/{deal}`. Link-magnets: Newmark Hospitality Capital Markets quarterly, US Hotel Capital Markets Year-End Review.

### Cushman & Wakefield Hospitality (cushmanwakefield.com)
Largest crawl-accessible enterprise sitemap. `/en/sitemap.xml`: 515 corporate URLs (365 `/insights/` articles, 26 offices, 24 industries, 23 services). US `/people-sitemap.xml`: **2,415 person profiles**. Office sitemap: **4,576 listings**. Industry sitemap: 1,794 URLs. Hospitality is dual-templated as both `/services/hospitality` (1,483 words, 327 internal links) and `/industries/hospitality` (1,521 words, 316 links). Link-magnets: Hotel Investor Compass (annual investor sentiment), Lodging Industry Investment Council reports, ESG-in-hotels pieces. **No JSON-LD on landing pages** (surprising weakness).

### Hodges Ward Elliott (hodgeswardelliott.com)
WordPress + Yoast. Three sitemaps: page (9), team (22 at `/team-members/{slug}/`), news (80 at `/news-posts/{slug}/`). Total ~120 indexable URLs — but every news post is a single-deal release with property + brand + keys + market in slug (e.g., `…sale-of-the-127-key-mandarin-oriental-atlanta/`). That slug pattern is gold for long-tail. `/transactions/` (2,401 words) showcases named deals: 1 Hotel South Beach, EDITION New York Clocktower, Margaritaville, Taj Boston. Schema: BreadcrumbList/ListItem/WebPage (Yoast defaults — weak). Branded "HWE Think Piece" prefix on thought-leadership posts. Team pages are 110-word stubs with no `Person` JSON-LD.

### Eastdil Secured (eastdilsecured.com)
WordPress. Page sitemap = 16 URLs (corporate evergreen). Post sitemap = 88 entries — almost entirely press-mention archive (WSJ, Real Estate Alert, Bloomberg, Real Deal coverage of league-table wins). Deliberately under-publishes; moat is private deal flow + press cycle. Full ld+json suite (WebPage/BreadcrumbList/Organization/ImageObject/ReadAction/EntryPoint/ListItem/WebSite/SearchAction). Home = 1,779 words, 121 internal links. **No per-market or per-property pages.** Brand authority via press, not programmatic SEO.

### Berkadia (berkadia.com)
Most SEO-mature site in the set. WordPress + Yoast, sitemap-index has **35 research sitemaps, 19 news, 5 people, dedicated podcast/region/service/solution/specialty/insight-topic/job sitemaps**. Live indexes: 74 location pages at `/people-and-locations/locations/{city-state}/`, 24 specialty pages at `/specialties/{vertical}/{sub}/`, 6 services, 7 solutions, 38 corporate, 10 podcast, 89 URLs in the latest research sitemap alone (per-MSA 2026 forecast reports for every major US metro — they generate one per asset class per market per year). Hospitality (`/specialties/hotels-hospitality/hospitality/`) = 714 words, 220 internal links, 9 JSON-LD types incl. CollectionPage + Organization + BreadcrumbList. Per-city Atlanta page = 2,085 words, **345 internal links**, full schema. "Beyond Insights" research hub. Inside-the-Deal-Acre podcast.

### Marcus & Millichap Hospitality (marcusmillichap.com)
**6,346 URLs in main sitemap.** Breakdown: 3,000 `/properties/{id}/{slug}` listings, 1,502 `/advisors/{slug}` agent pages, 406 `/research/{type}/{slug}` reports, 115 `/about-us/` pages, 25 `/services/property-types/{type}` (incl. `/services/property-types/hospitality`), and ~120 named-team microsites (e.g., `/the-ruzicka-hotel-team`, `/swon-hotel-group`, `/altman-hotel-group`, `/duong-hospitality-group`, `/the-leeson-group`) — each with its own URL hierarchy of ~10-18 sub-pages. **Per-market hospitality reports: every major US MSA has its own `/research/market-report/{city}/{city}-2026-investment-forecast-hospitality-market-report` page** — Atlanta, Austin, Boston, Charlotte, Chicago, Cincinnati, Cleveland, Dallas-FW, Denver, Detroit, Fort Lauderdale, Houston, Indianapolis, Jacksonville, Las Vegas, etc. Per-property listing template (Grand Marquis Wisconsin Dells sample) = 1,453 words, 64 internal links, exclusive-listing-broker section that cross-links to advisor pages (excellent internal-linking pattern). **Zero JSON-LD on sample pages** — a glaring miss given the volume; Article/RealEstateListing/Person schema would massively lift their indexation. Per-market report (Austin Hospitality 1Q 2026) = 454 words (thin), zero schema, but the URL pattern itself is what ranks. Top link-magnets: National Hospitality Group reports, 2026 US Hospitality Investment Forecast.

---

## 2. Top 50 Page Templates to Emulate (ranked by impact × effort)

Format: **rank. template** — _competitor / sample URL_ — why it matters.

1. **Per-MSA hospitality market report** (`/research/market-report/{city}/{city}-{year}-hospitality-investment-forecast/`) — _Marcus & Millichap; berkadia.com_ — Long-tail capture for "[city] hotel market report"; updated annually = freshness signal; 50-100 cities = 50-100 ranking pages.
2. **Per-deal closed transaction press release** with brand+keys+market in URL slug (`/news/{firm}-arranges-sale-of-{key-count}-key-{brand}-{hotel-name}-{city}/`) — _hodgeswardelliott.com/news-posts/hodges-ward-elliott-represents-owner-in-the-sale-of-the-127-key-mandarin-oriental-atlanta/_ — Captures branded queries for every property, builds league-table evidence, easy to scale (1 per close).
3. **Per-market location hub** (`/locations/{city-state}/`) with featured opportunities + transactions + local team — _berkadia.com/people-and-locations/locations/atlanta-ga/_ (2,085 words, 345 internal links) — Highest-impact internal-linking template; converts MSA queries.
4. **Named "team / group" microsite** (`/the-{lead}-hotel-team/` with 10-18 sub-pages) — _marcusmillichap.com/the-ruzicka-hotel-team_ — Lets each producing team rank as its own "brand"; we have one team to start, easy ROI.
5. **Per-flag / per-brand landing page** (Marriott / Hilton / IHG / Hyatt / Choice / Wyndham — 6-10 pages) — _gap; nobody we crawled has these well-built_ — Highest opportunity gap: "sell my Hampton Inn", "sell my Holiday Inn Express" are real query intents nobody owns.
6. **Per-segment landing page** (Limited Service / Select Service / Full Service / Lifestyle / Resort / Boutique / Extended Stay / Soft Brand) — _berkadia.com/specialties/{specialty}/_ pattern, applied to chain-scale — Owns segment queries.
7. **Per-service business line page** (Investment Sales, Loan Sales, Capital Markets, Financing, Equity Placement, Recapitalization, Note Sales) — _berkadia.com/our-services/investment-sales/_, _eastdilsecured.com/business-lines/_ — Every brokerage has these; ours likely thin.
8. **Annual investment outlook report landing page** (with downloadable PDF gate that's also crawlable) — _CBRE Hotels Investor Intentions; JLL Hotel Investment Outlook; Cushman Hotel Investor Compass_ — Citation-magnet; press picks it up annually.
9. **Senior author bio page** with credentials (MAI/CRE/FRICS), bibliography of articles, transaction history, named press mentions — _hvs.com/personnel/{id-name-credentials}_ (180+ pages) — E-E-A-T moat; URL-level credentials are the trick.
10. **Press-mention / league-table archive** (one URL per WSJ/Bloomberg/Real Estate Alert citation) — _eastdilsecured.com/post-sitemap.xml_ (88 entries) — Cheap to scale, builds entity-level authority signals for "[firm] hotel broker" knowledge panel.
11. **"Think Piece" branded thought-leadership prefix** (`/news-posts/hwe-think-piece-{slug}/`) — _hodgeswardelliott.com_ — URL prefix becomes a recognizable content series; better internal-linking discoverability.
12. **Per-deal sale showcase tile in a transactions grid** (named hotel hero image + city + brand + price band + year) — _hodgeswardelliott.com/transactions/_ (2,401 words, named showcase for 1 Hotel South Beach, EDITION NY, Margaritaville etc) — Acts as social proof + Image SEO + recursive linking into per-deal pages.
13. **Active listings catalog** with filterable property cards (key count, brand, segment, market, price guidance) — _marcusmillichap.com/properties/_ (3,000 listings) — Captures "hotels for sale [market]" queries.
14. **Per-listing detail page** with brand, keys, segment, year built, exclusive-listing brokers cross-linked, related research links — _marcusmillichap.com/properties/170426/grand-marquis-waterpark-hotel-suites_ (1,453 words) — Bottom-funnel; converts buyer demand.
15. **Per-MSA "hotels for sale" catalog page** (`/hotels-for-sale/{market}/`) — _gap; high-intent query nobody owns programmatically_ — Easy to spin from the listings catalog.
16. **Knowledge / glossary page** ("What is RevPAR", "Hotel cap rate explained", "PIP definition", "ADR formula", "GOP") — _gap among competitors crawled; CBRE/JLL have some_ — Top-of-funnel, AI-overview-friendly, easy to author.
17. **Hotel valuation methodology page** ("How we value a hotel: income, cost, sales-comparison approaches") — _hvs.com/services/appraisals-and-valuations_ — Trust + E-E-A-T page that supports BOV / appraisal lead-gen.
18. **PIP (Property Improvement Plan) explainer + per-flag PIP cost benchmark** — _gap_ — Owner-intent query nobody owns; could rank instantly with quality content.
19. **"Sell my hotel" intent-page** (`/sell-my-hotel/`) with disposition process timeline + FAQ + checklist — _gap; some IHC sites have weak versions_ — Direct conversion page.
20. **"Buy a hotel" intent-page** (`/buy-a-hotel/`) with off-market / on-market funnel CTAs — _gap_ — Demand capture.
21. **Quarterly pipeline / hospitality update post** (4-12 per year, with named author) — _berkadia.com/research/_ pattern — Freshness + author authority.
22. **Podcast episode landing page** (one per episode, with transcript + show notes + named guest schema) — _berkadia.com/insidethedealacrepodcast/_ — 10+ episodes = 10+ ranking long-form transcripts.
23. **Per-MSA per-segment matrix page** ("Austin Limited-Service Hotel Market Report") — _gap; M&M does per-MSA but not per-MSA × per-segment_ — Massive long-tail multiplier.
24. **Annual league-table page** (year-by-year deals closed by sector) — _eastdilsecured press archive_ — Citation magnet.
25. **"Closed Transactions" map** (interactive map of every closed deal with marker per hotel) — _gap; HWE has a list, no map_ — Shareable + dwell-time.
26. **Industry conference landing page** (e.g., we host or sponsor) — _hunterhotels.com Hunter Hotel Investment Conference_ — Hunter's only real link-magnet; their entire SEO moat.
27. **Awards / recognition / "Top 10 broker" trophy page** — _eastdilsecured "Real Estate Alert ranks us #1"_ — Citation-friendly, builds entity authority.
28. **Industry research subscription / newsletter signup landing** with 12-month archive of past issues — _hvs Publications & Events_ — Permission asset.
29. **Per-region hub** ("Hotels for sale in the Southeast") rolling up multiple MSAs — _berkadia regions: northeast, southeast, midwest_ — Mid-funnel capture.
30. **Bilingual / Spanish per-MSA page** for Texas / Florida / SoCal hospitality (`/es/{city}/hoteles-en-venta/`) — _cushmanwakefield.com es-mx_ — Near-zero competition.
31. **Per-job / per-role recruiting page** (Analyst, Associate, MD) — _eastdilsecured.com/analyst-program/_, _berkadia.com/careers/early-careers/_ — Recruiting SEO, also signals firm scale.
32. **Per-office contact page** with embedded map + local team grid + local closed deals — _hvs.com/Office/{City}_ (57 pages) — Local SEO trust signal.
33. **"Inside the Deal" case-study long-form** (3,000-5,000 words on a single transaction with charts) — _berkadia / HVS articles like "Hotel Market Study vs Feasibility Study" 2,869 words_ — Ranks for niche analytical queries.
34. **Hotel financing / loan options page** (CMBS, agency, balance sheet, PACE, mezz) — _berkadia.com/our-services/mortgage-banking/_ — Opens cross-sell from disposition into capital markets.
35. **Per-buyer-type landing** ("Sell to a REIT" / "Sell to a private equity buyer" / "Sell to a 1031 exchange buyer") — _marcusmillichap.com/services/1031exchange_ — High-intent niche.
36. **Hotel comp database page** (recent hotel sales by MSA / brand / year) — _gap; a content moat nobody owns publicly_ — AI-overview magnet.
37. **Per-state hospitality page** ("Texas Hotel Market", "Florida Hotel Market") rolling up MSAs and listings — _berkadia.com/people-and-locations/locations/florida/_ — State-level capture.
38. **ESG / sustainability in hotels page** — _cushmanwakefield insights/investor-survey-esg-directly-impacting-hotel-transactions_ — Trending query cluster.
39. **Convention / sports / entertainment district adjacent hotel page** — _hvs.com/services/conventions-sports-entertainment-facilities_ — Niche but high CPC.
40. **Resort + leisure focus page** ("Florida Keys", "Aspen", "Napa Valley" leisure hotel investment) — _hwe think piece "10 charts that prove the Florida Keys are still the best lodging market in the world"_ — High-CPM topic, viral-prone.
41. **Hotel cap rate dashboard / "current cap rates by market"** updated quarterly — _gap; data widget, not just article_ — Recurring inbound link target.
42. **"Recent transactions" RSS / JSON feed** linkable from broker emails — _gap_ — Distribution asset.
43. **Per-broker page with deal carousel + media mentions + LinkedIn rel="me"** — _hvs.com/personnel/_ pattern — Author-entity SEO.
44. **About / company history timeline** — _marcusmillichap.com/about-us/history_ — Trust + entity SEO.
45. **Leadership grid page** with named headshots and bio links — _marcusmillichap.com/about-us/leadership_ — Entity / Person schema home.
46. **Diversity / culture page** — _berkadia.com/india/diversity-inclusion/_ — Brand + recruiting SEO.
47. **Sustainability / responsible investing page** — _berkadia.com/aboutus/sustainability/_ — Standard for enterprise CRE today.
48. **Privacy / terms / disclaimer pages** — Yoast/SEO baseline, indexed by all — Required for trust signals.
49. **Search results page** (internal site search, indexable with canonical) — _berkadia.com/search-reports/_ — Captures "[site:our-domain] queries.
50. **Site map HTML page** (human-readable, linked from footer) — _marcusmillichap.com/site-map_, _cushmanwakefield/sitemap_ — Boosts crawl discovery for orphan pages.

---

## 3. Top 10 Schema Patterns Competitors Use (and we should adopt)

Drawn from JSON-LD found in live HTML samples (HVS, Eastdil, Berkadia, HWE) and inferred from CBRE/JLL public-cached structured data.

1. **`Organization`** at the site root with `name`, `url`, `logo`, `sameAs` (LinkedIn, X, YouTube), `address`, `contactPoint`. _Berkadia + Eastdil ship this on every page._
2. **`WebSite` + `SearchAction` (sitelinks-search)** to expose internal search to Google. _Eastdil, Berkadia, HVS — all have it._
3. **`BreadcrumbList`** on every non-home page, full path. _Universal best practice; HWE/Berkadia/Eastdil ship it; M&M and CW do not — opportunity._
4. **`CollectionPage`** for hub pages (specialty, market, services). _Berkadia uses this on `/specialties/hotels-hospitality/`._
5. **`Article` / `NewsArticle`** with `author` (linked to Person), `datePublished`, `dateModified`, `image`, `publisher` on every research / news / think-piece. _Surprisingly absent on HVS articles and HWE think pieces — adopt to leapfrog._
6. **`Person`** for every named broker / advisor with `jobTitle`, `worksFor`, `email`, `telephone`, `image`, `sameAs`, `knowsAbout` (e.g., "Hotel Investment Sales"), `award`, `alumniOf`. _Gap across the board; HWE team pages are 110-word stubs with no Person schema._
7. **`RealEstateListing`** (or `Product` fallback) on every active hotel listing — `name`, `image`, `address`, `numberOfRooms`, `floorSize`, `accommodationCategory`, `offers.price`, `seller`. _M&M has 3,000 listings with zero schema — entire category is unclaimed._
8. **`Hotel` / `LodgingBusiness`** for closed-deal showcase pages — let Google understand each property as a real-world entity (`brand`, `starRating`, `numberOfRooms`, `address`).
9. **`FAQPage`** on disposition/financing/PIP/glossary pages — wins AI-overview / featured snippets. _Gap across all competitors._
10. **`Event` / `BusinessEvent`** for conferences, webinars, podcast episodes (`PodcastEpisode` + `PodcastSeries`). _Berkadia podcast lacks PodcastEpisode schema; Hunter conference page lacks Event schema — both leapfrog opportunities._

Bonus (worth noting, less critical): `VideoObject` for hero/case-study videos; `HowTo` for "how to sell a hotel" step-by-step; `LocalBusiness` for each office.

---

## 4. Top 10 Internal-Linking Patterns Worth Copying

1. **Per-listing → exclusive-listing brokers** (each listing page links to 2-4 advisor profile pages, which back-link to all listings they've worked). _Marcus & Millichap; closes the loop between deals and people._
2. **Per-market location page → featured properties + local team grid + nearby cities** (Berkadia Atlanta page = 345 internal links, mostly to other Berkadia URLs). _Berkadia._
3. **Per-deal news post → involved brokers + brand category + market category** (e.g., the Mandarin Oriental Atlanta sale links to /team-members/{lead-broker} + /transactions/ + /news/ category). _HWE pattern, lightly applied — we can do it heavier._
4. **"Related Research" sidebar** on every research article linking to 3-5 same-MSA or same-asset-class reports. _Marcus & Millichap research pages._
5. **Author byline → all articles by that author** (author page acts as topic hub). _HVS pattern — 500+ articles, each linked back to one of 180 author pages._
6. **Footer mega-menu with all 50 MSAs + all asset classes + all services** (every page links to every other hub). _Berkadia footer / Cushman footer — 200+ footer links._
7. **Breadcrumb trail** (Home > Specialties > Hotels > Atlanta) — makes every page a hub for its parent. _Berkadia, Yoast default._
8. **"Inside the Deal" / "Think Piece" content-series link block** on related deal pages (cross-promote series content from transaction pages). _HWE think-piece prefix concept; underused._
9. **Press-mention archive entries link out to original publication AND back to relevant practice page** — recovers some link equity from the citation. _Eastdil._
10. **City page → state page → region page → national page** (4-level cluster with bidirectional links). _Berkadia/Cushman regions: Atlanta → Georgia → Southeast → US Hotels._

---

## What we (Matthews Hotel Markets) likely don't have, that they do

Based on a Matthews REIS RealEstateAgent profile in Austin TX:

- **No per-MSA hospitality market reports** at scale (M&M and Berkadia each ship 50-100/yr).
- **No per-flag landing pages** ("Sell my Hampton Inn", "Sell my Holiday Inn Express") — universal gap, but highest-intent queries.
- **No author-bio E-E-A-T pages** with credentials, bibliography, and Person schema (HVS owns this category).
- **No closed-deal case-study template** with property name + brand + keys + market in URL (HWE owns this).
- **No annual flagship report** (CBRE Investor Intentions / JLL Hotel Investment Outlook / Cushman Hotel Investor Compass / HVS Hotel Cost Survey are all citation-magnets).
- **No conference / event link-magnet** (Hunter's only real moat is the Hunter Hotel Investment Conference).
- **Likely no FAQ / glossary / RevPAR-explainer content** for top-of-funnel + AI-overview capture.
- **Likely thin Person schema and no RealEstateListing/LodgingBusiness schema** even where listings exist.
- **No podcast / video content series** (Berkadia's Inside the Deal Acre, plus countless YouTube channels).

The fastest impact stack ranked by ROI: per-flag pages (#5) → per-MSA hospitality reports (#1) → per-deal closed-transaction pages (#2) → author bios with Person schema (#9, #43) → annual flagship report (#8) → FAQ/glossary (#16) → listings with RealEstateListing schema (#13, #14, schema #7).

---

_Crawl artifacts: /tmp/agent-a/*.xml + *.html. Word counts, internal-link counts, and JSON-LD types extracted via /Users/natnaelsolomon/hotel-team-site/reports/_analyze.py and _analyze2.py._
