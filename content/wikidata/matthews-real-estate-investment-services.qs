# Wikidata QuickStatements v1 — Matthews Real Estate Investment Services
# Submit at: https://quickstatements.toolforge.org/
# Mode: paste into the "v1" tab. Each LAST refers to the item created by the preceding CREATE.
#
# Status legend:
#   [now]   = can submit before Wikipedia article lands
#   [later] = add after sitelink target page exists on enwiki
#   [opt]   = optional / requires external lookup
#
# Sources used (cite via S854 reference URLs after creation):
#   S1 = https://labusinessjournal.com/real-estate/matthews-moves-hq-from-el-segundo-to-nashville/
#   S2 = https://therealdeal.com/la/2022/07/12/matthews-real-estate-relocates-hq-to-nashville/
#   S3 = https://www.connectcre.com/stories/matthews-real-estate-investment-services-moves-hq-to-nashville/
#   S4 = https://rejournals.com/matthews-real-estate-investment-services-adds-first-vice-president-in-chicago-office/
#   S5 = https://www.globest.com/thought-leaders/matthews-real-estate-investment-services/

CREATE
LAST	Len	"Matthews Real Estate Investment Services"
LAST	Den	"American commercial real estate investment services firm headquartered in Nashville, Tennessee, founded in 2015 by Kyle Matthews"
LAST	Aen	"Matthews REIS"
LAST	Aen	"Matthews"
LAST	Aen	"Matthews CRE"

# [now] P31  instance of -> business (Q4830453)
LAST	P31	Q4830453

# [now] P452 industry -> commercial real estate (Q12753617)
LAST	P452	Q12753617

# [now] P17  country -> United States (Q30)
LAST	P17	Q30

# [now] P159 headquarters location -> Nashville (Q23197)
LAST	P159	Q23197	S854	"https://labusinessjournal.com/real-estate/matthews-moves-hq-from-el-segundo-to-nashville/"

# [now] P571 inception -> 2015-04-01 (precision month)
LAST	P571	+2015-04-01T00:00:00Z/10	S854	"https://www.globest.com/thought-leaders/matthews-real-estate-investment-services/"

# [now] P1448 official name (English)
LAST	P1448	en:"Matthews Real Estate Investment Services"

# [now] P1813 short name
LAST	P1813	en:"Matthews"

# [now] P856 official website
LAST	P856	"https://www.matthews.com"

# [now] P2541 operating area -> United States
LAST	P2541	Q30

# [now] P1056 product/service -> commercial real estate brokerage (Q1066670)
LAST	P1056	Q1066670

# [later] P112 founded by -> Kyle Matthews (create separate Q-item or use string)
# LAST	P112	Q_KYLE_MATTHEWS

# [later] P169 chief executive officer -> Kyle Matthews
# LAST	P169	Q_KYLE_MATTHEWS

# [later] P527 has part(s) -> Matthews Hotel Markets (link after that Q-item is created)
# LAST	P527	Q_MATTHEWS_HOTEL_MARKETS

# [now] P4264 LinkedIn company ID
LAST	P4264	"matthewsreis"

# [opt] P1320 OpenCorporates ID — look up at opencorporates.com
# LAST	P1320	"us_de/XXXXXXX"

# [opt] P1278 LEI — look up at https://search.gleif.org
# LAST	P1278	"XXXXXXXXXXXXXXXXXXXX"

# [later] sitelink to enwiki article (only after the article is accepted)
# LAST	Senwiki	"Matthews Real Estate Investment Services"
