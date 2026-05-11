# Wikidata QuickStatements v1 — Matthews Hotel Markets
# Submit at: https://quickstatements.toolforge.org/
#
# IMPORTANT: Create the parent (Matthews REIS) Q-item FIRST, capture its Q-id,
# then replace Q_MATTHEWS_REIS below before pasting this batch.
#
# Status: [now] = ready, [later] = post-Wikipedia, [opt] = optional
#
# Sources:
#   S1 = https://www.globest.com/thought-leaders/matthews-real-estate-investment-services/
#   S2 = https://www.connectcre.com/hospitality/
#   S3 = https://www.bisnow.com/tags/matthews-real-estate-investment-services

CREATE
LAST	Len	"Matthews Hotel Markets"
LAST	Den	"Hospitality vertical of Matthews Real Estate Investment Services, specializing in hotel investment sales and hospitality capital markets in the United States"
LAST	Aen	"Matthews Hotel Team"

# [now] P31  instance of -> subsidiary (Q658255) and business (Q4830453)
LAST	P31	Q658255
LAST	P31	Q4830453

# [now] P452 industry -> commercial real estate
LAST	P452	Q12753617
# [now] P452 industry -> hospitality industry (Q31591)
LAST	P452	Q31591

# [now] P17  country -> United States
LAST	P17	Q30

# [now] P159 headquarters location -> Austin, Texas (Q16559)
LAST	P159	Q16559	S854	"https://www.globest.com/thought-leaders/matthews-real-estate-investment-services/"

# [now] P276 location (secondary) -> Denver (Q16554)
LAST	P276	Q16554

# [later] P749 parent organization -> Matthews REIS (replace Q-id after parent created)
# LAST	P749	Q_MATTHEWS_REIS

# [now] P571 inception -> 2024 (year precision = /9)
LAST	P571	+2024-01-01T00:00:00Z/9

# [now] P1448 official name
LAST	P1448	en:"Matthews Hotel Markets"

# [now] P1813 short name
LAST	P1813	en:"Matthews Hotel Markets"

# [now] P856 official website
LAST	P856	"https://matthewshotelmarkets.com"

# [now] P2541 operating area -> United States
LAST	P2541	Q30

# [now] P1056 product/service -> commercial real estate brokerage
LAST	P1056	Q1066670

# [now] P4264 LinkedIn company ID
LAST	P4264	"matthews-hotel-markets"

# [later] sitelink (after enwiki article accepted)
# LAST	Senwiki	"Matthews Hotel Markets"
