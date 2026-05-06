# mghotelteam.com — Section Inventory

Section-by-section breakdown of every page discovered, with CRE-specific conventions called out. Use this as the spec for what an "expected" Matthews hotel-team site contains, plus the friction points worth fixing in a redesign.

Source: live WebFetch crawl. Quoted text is from the live page.

---

## 1. Home (`/`)

A single long-scroll page that does double duty as positioning + lead-gen. Order top to bottom:

### 1a. Hero
- Full-bleed banner photo of the Dallas skyline.
- Headline: "Welcome From the Miller-Gomes Hotel Team — The #1 Hospitality Brokerage and Advisory Team at Marcus & Millichap"
- Single CTA: "Learn More" → `/about-us`
- Implicit positioning: "we are the #1 hotel team at the largest CRE brokerage in the country."

### 1b. Stat band ("by the numbers")
Four pill stats, displayed on home AND repeated on `/about-us`, every team bio, and a few section pages — clearly the master KPI bar:

- 59K+ Rooms Sold
- 72 Transactions in 2024
- 670+ Total Sales
- $3.5B Sales Volume

CRE convention: this is the standard "track record proof bar" — keys sold + deal count + total sales + dollar volume. Matthews equivalent should mirror this four-stat formula.

### 1c. Featured Listings carousel
- 11 properties, paginated 4 per slide, "View All" → `/properties`.
- Card fields: photo, hotel name, address, room count, "Request for Offers" CTA. No price displayed on cards in this set (all are unpriced "RFO" deals).

### 1d. Featured Under Contract carousel
- 5 properties marked "Under Contract", same card template. The "Under Contract" status badge appears as a label.
- Important pattern: status (Available / Under Contract / Sold) is treated as a first-class filter and visual badge.

### 1e. Value-proposition block
- Heading: "WHY CHOOSE MILLER GOMES HOTEL TEAM?"
- 1–2 sentence pitch + "ABOUT US" CTA → `/about-us`.

### 1f. Track Record carousel
- "Featured sales" rotating carousel, ~21 sold properties with room counts. Effectively a teaser for `/notable-sales`.

### 1g. Inline contact form
- Same fields as `/contact`: First, Last, Email, Phone, Message + newsletter checkbox.
- Conversion convention: contact form embedded directly on home, not just hidden on `/contact`.

### 1h. Office locations strip
- Seven offices with full address + phone, listed (not on a map).

### 1i. Footer
- Mirrored nav, social, newsletter signup, privacy + consumer-protection links.

---

## 2. About Us (`/about-us`)

Short overview hub that links into Team and Approach sub-pages.

- **Heading:** "About Us"
- **Opening narrative:** Positions team as "the top hospitality investment sales team at Marcus & Millichap." Pillars:
  1. **Track record:** 600+ closed deals, $3B; 83 hotels (~$500M) in 2023.
  2. **Expertise:** "200+ combined years" of CRE experience.
  3. **Geographic reach:** Dallas/Fort Worth, Austin, Houston, San Antonio, Denver, Chicago.
- **Services list:** Advisory, Valuation, Marketing, Due Diligence Management, Negotiations, Real-Time Research, Capital Markets (via Marcus & Millichap Capital Corp).
- **Stat band** (same 4 KPIs).
- **Two sub-page CTAs:** Our Team, Our Approach.

Quirk: the page is mostly a single block of body copy. There's no team photo, no leadership headshot, no founders' story beyond a paragraph. Reads more like a corporate boilerplate page than a real "About."

---

## 3. Our Team (`/about-us/our-team`)

CRE convention reference — this is the canonical "team grid" we're rebuilding.

- **Layout:** vertical card-based grid. Each card = headshot + clickable name + single-line title.
- **Headshot style:** professional headshots, mixed sizes (some medium, some small) — inconsistent.
- **Title taxonomy actually used:**
  - Senior Managing Director Investments (Allan Miller, Skyler Cooper)
  - Executive Managing Director Investments (Chris Gomes)
  - Managing Director Investments (Ebrahim Valliani)
  - Managing Director Capital Markets (Pete Fehlman) — only Capital Markets person
  - Director Investments (Michael Klar, Hussain Shaik, Huberth Marak)
  - Associate Director Investments (Christian Apt)
  - Associate Investments (Sam Gardner, Alexander Curry, Rajan Patel, Kristen Blackshaw, Grant Powley)
  - Director of Client Relations (Christina Ligi)
  - Research Analyst (Luca DeCamillo)
- **Department labels:** Most cards say "National Hospitality Division." Capital Markets, Client Relations, and Research Analyst do not get a division label — implicit grouping but not visually separated on the page.
- **No filters / no department tabs / no search.** Just one long grid.
- **No contact info on the card** — phone/email live on the bio detail page only.

Friction worth fixing: there is no visible department grouping (everyone is just stacked), no leadership-vs-team separation, headshots aren't consistently cropped, and there's no quick-contact affordance from the grid view.

---

## 4. Individual Team Bio (`/about-us/our-team/[first-last]`)

Verified via Allan Miller and Chris Gomes pages. Template is consistent.

Sections in order:
1. **Name** (h1) + **title** subtitle + division subtitle ("National Hospitality Division").
2. **Headshot** — single 5x7 portrait below the name.
3. **Bio body** — ~200–250 words, multi-paragraph, narrative career summary.
4. **Awards & Credentials** — bulleted list. Examples on Allan Miller: "Top 10" rankings (2024, 2023), Chairman's Club Award (2022), National Achievement Awards, San Antonio Business Journal regional recognition.
5. **Contact block** — Mobile, Office, Fax, email link, real estate license number(s), office address with Google Maps link.
6. **KPI stat band** — same 59K / 72 / 670 / $3.5B four-stat strip repeated on every bio.
7. **Footer.**

Variations spotted:
- Chris Gomes bio adds a "Notable Sales" section listing 15 specific transactions he's closed. Allan Miller's bio does not have this — coverage is uneven.
- No bio page consistently shows a list of his/her active listings, recent press mentions, or in-market specialties — meaning the implicit hierarchy ("who closes what kind of deal") isn't surfaced.

CRE convention reference: bio template is essentially right (headshot, title, narrative, contact, license, awards) but it's missing the modern moves — specialty tags, market focus, deal-volume slider, recent transactions, press mentions tagged to the broker. Matthews redesign should add these.

---

## 5. Our Approach (`/about-us/our-approach`)

A "why us" essay page.

- **Heading:** "The Marcus & Millichap Advantage"
- **Four pillars:** Specialization, Culture, Access, Complete Brokerage.
- **Value props:** "unique blend of specialization, culture, access, and comprehensive brokerage services"; "end-to-end solutions"; integrated service model.
- **KPI stat band** (same 4 stats).

Quirk: this page is essentially M&M corporate boilerplate, not team-specific differentiation. It explains why Marcus & Millichap is good, not why this team specifically is good.

---

## 6. Listings index (`/properties`)

CRE convention reference for the listings grid.

### Filters available (faceted, all visible at once)
- **Rooms:** Under 50, 50–100, 101–150, 151–200, 201+
- **Property Type:** Economy, Midscale, Upper Midscale, Upscale, Land
- **Location:** 14 states (CA, CO, IL, IN, IA, MI, MS, MT, NE, NM, ND, OH, OR, TX, WI)
- **Price Range:** Under $5M, $5–10M, Over $10M
- **Franchise:** Wyndham, Red Roof Inns, Marriott, Hilton, G6 Hospitality, Choice Hotels, IHG, Best Western, OYO, Sonesta, Dual Brand, Independent & Other
- **Status:** Active, Request for Offers
- **Map** view toggle.

### Listing card fields
- Photo
- Hotel name (linked to detail)
- Full address
- Room count
- Price (when set) or "Request for Offers" label
- Price-change indicator e.g. "Reduced By $1,450,000" — this is a nice trust signal worth keeping.

### Notable absences vs modern listings
- No status badge color system on the card surface (Available / RFO / Under Contract is text-only).
- No brand flag chip / logo on cards — brand only visible from the hotel name string.
- No broker contact on the card itself — you have to click through to the detail page.
- No "save listing" / favorite affordance, no share button.
- No keys-per-card data density beyond room count.

---

## 7. Listing detail (`/properties/[slug]`)

Reference page: Hampton Inn & Suites Aurora South Denver. Cross-checked against Holiday Inn Express Fort Worth Downtown.

Order top to bottom:
1. **Breadcrumb:** Home > Listings > [Property].
2. **Property title** (h1).
3. **Photo gallery** — large image area + thumbnail rail. Aurora has 31+ images, Fort Worth has 40+. Click-to-enlarge.
4. **Key stats panel** (data table, no formal styling). Fields actually shown:
   - Price (almost always "Request for Offers")
   - Address
   - Franchise (e.g., Hilton, IHG)
   - Property classification (Upper Midscale, etc.)
   - Room count
   - Lot size (acres)
   - Year built / year renovated
5. **Tabs:** A "Information" tab is present (other tabs not visible to anonymous user — likely Financials / Documents tabs that unlock post-NDA).
6. **Investment Highlights** — bulleted list, ~4 bullets, market position + location + financial upside.
7. **Investment Overview** — multi-paragraph narrative description of the property, market, and demand drivers.
8. **Broker of Record** — state-level licensing block (broker name + phone + license number — NOT the deal lead, this is the legal compliance broker).
9. **Data Room** — gated, login required.
10. **Confidentiality Agreement gate** — NDA flow: principal vs broker selection, agreement-to-process acknowledgment, "Sign Confidentiality Agreement" CTA. This is what unlocks the OM and full data room.
11. **Broker contact rail** — 1–2 named team brokers, each with: name, title, office phone, mobile, license, email link. Aurora shows Michael Klar + Ebrahim Valliani. Fort Worth shows Chris Gomes solo.
12. **Footer.**

### What's missing vs a modern hotel listing detail page
- **No financial summary panel** for anonymous users (no ADR, RevPAR, occupancy, NOI, cap rate teaser).
- **No comparable sales** section.
- **No pro forma teaser.**
- **No location map** rendered inline (just a text address — the "MAP" affordance lives on the index, not the detail page).
- **No downloadable OM PDF** publicly. Everything sits behind the NDA / data room gate.
- **No virtual tour / 360 / video walkthrough.**
- **No brand flag badge or status pill** at the top of the page — status is implied by the price field text.
- **No "request offer memorandum" form** as a separate flow — the NDA IS the only conversion path.

CRE convention reference: this is a recognizable Marcus & Millichap-style listing page, but it's information-thin compared to modern hotel listings. Buyers can't sniff a deal without signing NDA — high friction.

---

## 8. Notable Sales / Closed Deals (`/notable-sales`)

- **Layout:** card grid identical to `/properties` (photo, name, address, room count, "Sold" label).
- **Pagination:** 11 pages × ~12 cards = ~120–130 closed deals total visible. URL: `/notable-sales?page=N` (0-indexed).
- **Filter UI** referenced in the page chrome but no specifics surfaced — likely the same facet system as `/properties`.
- **No detail pages.** Hotel cards on Notable Sales are NOT clickable links. Sold price, sale date, broker rep, buyer/seller — none of it is shown on the card or on a detail page. This is the biggest information gap on the site.

CRE convention reference: this is what a "Track Record" or "Recent Transactions" page should look like, but the missing-data problem is severe. Matthews-equivalent rebuild should include sold price, close date, named broker, brand flag chip, and a clickable detail page per deal.

Sample deals visible: Candlewood Suites Five-Property Portfolio (San Antonio TX), Courtyard Dallas DFW Airport North/Irving, Homewood Suites Indianapolis Carmel, Residence Inn Texarkana, Colorado Springs Best Western Portfolio, Shilo Inns Newport Oceanfront, Fairfield Inn & Suites Denver-Aurora/Parker, HomeWood Suites Arlington, The Charmant Hotel (La Crosse WI), Hilton Garden Inn Independence (MO), Fairfield Inn & Suites Austin San Marcos.

---

## 9. Press (`/press`)

- **Layout:** vertical list (NOT magazine-card grid). Each item ≈ 2 lines tall.
- **Per-item fields:** post date (e.g., "05/05/2026"), title (linked), tag chips (team-member names, deal types, locations), excerpt (truncated), "Read more" link.
- **Pagination:** 43 pages — substantial archive.
- **Filtering:** by tag (team-member, deal type, location). No date-range picker, no source filter (because all items are internal Marcus & Millichap announcements, not third-party press).
- **Featured Press** sidebar/section selecting a handful of recent transactions.

Quirk: this is labeled "Press" but it's really an outbound transaction announcement feed — not media coverage of the team. It's effectively a deal blog dressed as press. There's no syndicated coverage, no logo wall of publications.

### Individual press article (`/press/[slug]`)

Verified via "Marcus & Millichap Arranges Sale of 49-Room Best Western Plus in Clarendon, Texas":
- Headline (h1)
- Dateline + time
- 2–3 paragraph body — names buyers, sellers, brokers, property specs, location notes.
- Single hero image of property exterior.
- Tag chips at the bottom (team members, deal types, locations).
- "Featured Press" related-items rail (5 similar transactions).
- **No broker quotes**, no shareable social cards, no related listings, no related sold-deal link.

---

## 10. Research / Resources (`/resources`)

- **Layout:** list view of articles. Each item: title, content type (Articles / Gallery / Video), tag chips, 1–2 sentence excerpt.
- **No cover images** on the index — feels textual and dry.
- **Robust faceted filtering** by:
  - Content type (Articles, Gallery, Video)
  - 50+ tags spanning topic (hospitality, capital markets, financing), year (2017–2024), region (Texas, Midwest, Dallas, North Texas), team member.
- **No date column** in list view, no executive summary preview.

### Individual report (`/resources/[slug]`)

Verified via "2024 Hospitality: National Investment Forecast":
- Title + tag chips
- Executive summary paragraphs as page body
- Body content broken across 4 listed sections (National Economy, National Hotel Overview, Capital Markets, Hotel Investment Outlook).
- **Ungated PDF download** via AWS S3 link (`2024 Hospitality Investment Forecast.pdf`).
- "Our specialists are at your disposal" closing CTA.
- No embedded charts in the HTML, no video, no related-reports rail.

CRE convention reference: structurally fine. Missing modern moves — chart embeds, summary callouts, executive bullets above the fold, data download (CSV/Excel), email-gated lead capture toggle.

---

## 11. Market Watch (`/marketwatch`)

- **Purpose statement:** "Stay ahead with MGHT's Hospitality Market Watch — your go-to resource for local and national news..."
- **Monthly Statistics widget** at the top — 3 metrics: Current Listings, Under Contract, YTD Closing. References an embedded data visualization.
- **Promoted articles** — 5 featured market reports across regions (Central States, Southeast, Southwest, Houston, DFW/Louisiana).
- **Filters:**
  - Territory (9 regions: Central States, Houston, Louisiana, Mountain West, Northwest, South Central Texas, Southeast, Southwest, Surrounding DFW)
  - Time (18 months Jan 2024–Jun 2025, with article counts 1–16 per month)
  - Keyword search

Quirk: this is functionally a second blog focused on regional hospitality news, parallel to `/press` and `/resources`. The boundary between the three is unclear — Press = our deals, Research = our reports, Market Watch = curated regional news. From a UX standpoint that's three places to find content; could be unified.

---

## 12. Contact (`/contact`)

- **Form fields:** First*, Last*, Email*, Phone*, Message*, Newsletter checkbox.
- **Office locations** ("Offices" heading) — 7 cards, each with full street address + phone:
  - Austin: 9600 N MoPac Expy, Suite 300 | (512) 338-7800
  - Denver: 1225 17th St, Suite 1800 | (303) 328-2000
  - Houston: Three Rivers, Suite 800 | (713) 452-4200
  - Chicago Downtown: 333 W Wacker Dr, Suite 200 | (312) 327-5400
  - Chicago Oakbrook: One Mid-America Plaza, Suite 200 | (630) 570-2200
  - San Antonio: 8200 IH 10 West, Suite 603 | (210) 343-7800
  - Dallas: 5001 Spring Valley Rd, Suite 100W | (972) 755-5200
- **No map**, no broker contact rail, no calendar/schedule-call CTA, no live chat.

---

## 13. Client Portal (`/restricted`)

- Returns 403 to anonymous users — the gate is hard, no preview teaser visible.
- Login is the standard Drupal `/user` form (Username + Password; "Request new password" tab).
- Implication: this is the door to the Data Rooms / OMs that listing detail pages link to post-NDA.

---

## 14. Login (`/user`)

- Standard Drupal user form.
- Fields: Username ("Enter your mghotelteam.com username"), Password ("Enter the password that accompanies your username").
- Tabs: Login (default) and Request New Password.
- No SSO, no email-based magic link, no "remember me" affordance, no NDA flow surfaced here (NDA is on the listing detail page).

---

## 15. Footer / sitewide elements

- Newsletter signup → `/webforms/newsletter-signup`
- Privacy Policy, Consumer Protection Policy & Disclosures
- Social: Facebook, Twitter, LinkedIn
- "Built by Kontrola" credit (Drupal agency)

---

## Cross-cutting observations (for the Matthews redesign brief)

### Tech / vintage tells (this is a 2015-era Drupal 7 site, not modern web)
- Drupal theme path: `sites/all/themes/mgh/logo.png`.
- Drupal node references in URLs (`node/3`).
- Drupal Views faceted filtering with `?page=N` 0-indexed pagination.
- jQuery-based carousel with `javascript:void(0)` anchors.
- Image styles served from `mghprod.s3-us-west-1.amazonaws.com/styles/featured_listing/...` (Drupal image style pipeline).
- "Built by Kontrola" footer — a Drupal shop.
- No Next.js, no Tailwind, no modern bundler tells.
- Aesthetic is "static corporate template, oversized banner photos, generic typography, CSS-Grid-pre-era layout."

### Implicit hierarchy — who is the team trying to look like?
The visual aesthetic and copy treat the team as a **white-glove institutional brokerage trying to mimic Marcus & Millichap corporate**, not a boutique investment house. The repeated "#1 at Marcus & Millichap" framing, the M&M-corporate "Marcus & Millichap Advantage" page, and the boilerplate-heavy copy all signal "we are part of the institution." The site is NOT trying to look like JLL Hotels, HVS, or a Cushman hotels practice — it's trying to look like a respected M&M team. The 4-stat KPI bar, 200+ years of experience claim, and 600+ closed deals number are the workhorses.

### Quirks worth noting for the rebuild
1. **Notable Sales has no detail pages** — a 670-deal track record with zero deal pages is a massive missed asset.
2. **No financial data on listing detail pages pre-NDA** — buyers can't even smell the deal.
3. **No team-member specialty tagging** — bios don't surface "I sell limited-service in Texas" or similar.
4. **Three parallel content feeds** (Press / Research / Market Watch) blur into each other.
5. **Stat band repeated everywhere** — every page has "59K / 72 / 670 / $3.5B." Smart in a way (constant proof) but feels mechanical.
6. **No leadership separation in team grid** — partners and analysts mixed in one flat grid.
7. **Office locations on home page** but no map, just text — a regional brokerage that doesn't show its footprint visually.
8. **No client testimonials**, no logo wall of repeat clients, no case studies — for a 670-deal team this is a glaring trust-signal gap.
9. **NDA flow is the only conversion** for serious buyers — no progressive disclosure (e.g., "see anonymized financials → unlock more after NDA").
10. **"Press" page is really their own announcements**, not third-party media — unusual labeling.

Wrote /Users/natnaelsolomon/hotel-team-site/research/sitemap.md and /Users/natnaelsolomon/hotel-team-site/research/section-inventory.md.
