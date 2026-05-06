# mghotelteam.com — Sitemap

Source: live crawl of https://mghotelteam.com/ via WebFetch. Only routes verified by live response are listed; unverified routes called out explicitly.

Platform: Drupal 7-era site, "Built by Kontrola" footer credit. Image styles served via `mghprod.s3-us-west-1.amazonaws.com`. Routes are Drupal-style: pretty path aliases (e.g., `/about-us/our-team`) plus query-string pagination (`?page=N`).

## Top-level navigation hierarchy

### Primary nav (header)

```
Home
About Us
  Our Team
  Our Approach
Listings
Notable Sales
Press
Research
Market Watch
Contact
Client Portal           (gated, returns 403 to anonymous)
Login                   (Drupal user login form)
```

### Footer nav

Mirrors primary nav, plus:

```
Privacy Policy
Consumer Protection Notice & Other Disclosures
Newsletter Signup       (/webforms/newsletter-signup)
Social: Facebook | Twitter | LinkedIn
```

## Full URL tree

```
/                                                       Home
/about-us                                               About / firm overview
  /about-us/our-team                                    Team grid
    /about-us/our-team/allan-miller                     Bio (verified)
    /about-us/our-team/chris-gomes                      Bio (verified)
    /about-us/our-team/skyler-cooper                    Bio
    /about-us/our-team/ebrahim-valliani                 Bio
    /about-us/our-team/michael-klar                     Bio
    /about-us/our-team/alexander-curry                  Bio
    /about-us/our-team/hussain-shaik                    Bio
    /about-us/our-team/christian-apt                    Bio
    /about-us/our-team/sam-gardner                      Bio
    /about-us/our-team/huberth-marak                    Bio
    /about-us/our-team/rajan-patel                      Bio
    /about-us/our-team/kristen-blackshaw                Bio
    /about-us/our-team/christina-ligi                   Bio
    /about-us/our-team/luca-decamillo                   Bio
    /about-us/our-team/pete-fehlman                     Bio
    /about-us/our-team/grant-powley                     Bio (listed in roster)
    URL pattern: /about-us/our-team/[firstname-lastname]
  /about-us/our-approach                                "The Marcus & Millichap Advantage"

/properties                                             Listings index (filterable)
  /properties?[filters]                                 Filtered views (rooms, type, location, price, franchise, status)
  /properties/hampton-inn-suites-aurora-south-denver    Listing detail (verified)
  /properties/holiday-inn-express-suites-fort-worth-downtown   Listing detail (verified)
  /properties/best-western-plus-executive-residency-fillmore
  /properties/holiday-inn-express-crestwood-il
  /properties/home2-suites-hilton-jackson
  /properties/days-inn-suites-wyndham-bozeman
  /properties/fairfield-inn-suites-warsaw
  /properties/fairfield-inn-suites-goshen
  /properties/courtyard-marriott-chicago-deerfield
  /properties/courtyard-marriott-chicago-arlington-heightssouth
  /properties/courtyard-marriott-rockford
  /properties/holiday-inn-express-suites-chicago-algonquin
  URL pattern: /properties/[hotel-name-slug]

/notable-sales                                          Closed deals index (11 pages, ~120-130 deals total)
  /notable-sales?page=0..10                             Pagination
  (No detail page links — sold cards are NOT clickable; everything inline)

/press                                                  Press index (43 pages of items, list view)
  /press?page=0..42                                     Pagination
  /press/marcus-millichap-arranges-sale-49-room-best-western-plus-clarendon-texas   Article (verified)
  /press/[transaction-headline-slug]                    URL pattern for individual press articles
  Tag-filtered views: /press?tag=...                    Tags include team-member names, deal types, locations

/resources                                              Research / market reports index (filterable)
  /resources/2024-hospitality-national-investment-forecast    Report (verified)
  /resources/[report-slug]                              URL pattern
  Filters: content type (Articles, Gallery, Video) + 50+ tags (topic / year / region / team member)

/marketwatch                                            Market Watch — regional news feed + monthly stats widget
  /marketwatch?territory=...                            Territory filter (9 regions)
  /marketwatch?month=...                                Date filter (18 monthly archives Jan 2024 – Jun 2025)
  /marketwatch?search=...                               Keyword search

/contact                                                Contact form + 7 office locations

/restricted                                             Client Portal — gated (403 to anonymous)
/user                                                   Drupal login (Username + Password, "Request new password" tab)
/webforms/newsletter-signup                             Newsletter signup webform
/privacy-policy                                         Privacy policy
/consumer-protection-policy-disclosures                 Consumer protection / disclosures

External:
  Facebook | Twitter | LinkedIn (social icons in footer)
```

## URL pattern summary

| Section | Pattern | Notes |
|---|---|---|
| Team bios | `/about-us/our-team/[first-last]` | Hyphenated full name |
| Listings | `/properties/[hotel-name-slug]` | Brand + flag + city slugified, no flag separator |
| Closed deals | inline cards on `/notable-sales` | No detail pages |
| Press | `/press/[full-headline-slug]` | Long human-readable slug from article title |
| Research | `/resources/[report-slug]` | |
| Pagination | `?page=N` (0-indexed) | Drupal default |
| Filters | `?tag=...`, `?territory=...`, `?month=...` | Drupal Views exposed filters |

## Conversion-driving CTAs and where they live

| CTA | Location | Destination |
|---|---|---|
| "Learn More" (hero) | Home hero overlay | `/about-us` |
| "Request for Offers" | Every listing card on home, `/properties`, listing detail | Inline label / triggers contact-broker flow (no separate form URL discovered) |
| "View All" (listings) | Home featured-listings carousel | `/properties` |
| "ABOUT US" | Home value-prop block | `/about-us` |
| "Sign Confidentiality Agreement" | Every listing detail page | NDA gate to data room (logged-in only) |
| Broker email links | Every listing detail page (broker rail) | `mailto:` to specific named broker |
| "Contact" / form submit | `/contact`, plus inline contact form on home | First / Last / Email / Phone / Message + newsletter checkbox |
| Newsletter signup | Footer (sitewide) | `/webforms/newsletter-signup` |
| "Read more" | Press list items, research list items | Internal article page |
| "MAP" toggle | `/properties`, `/notable-sales` | Map view of grid |
| "Client Portal" | Header nav | `/restricted` (login-gated) |
| Login | Header | `/user` |
```

