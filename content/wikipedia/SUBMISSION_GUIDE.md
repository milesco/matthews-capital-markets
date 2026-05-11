# Wikipedia + Wikidata Submission Guide
## Matthews Real Estate Investment Services & Matthews Hotel Markets

Prepared 2026-05-10. Files in this directory:

- `matthews-real-estate-investment-services.wiki` — parent firm article (MediaWiki source)
- `matthews-hotel-markets.wiki` — sub-brand article (MediaWiki source)
- `../wikidata/matthews-real-estate-investment-services.qs` — QuickStatements batch
- `../wikidata/matthews-hotel-markets.qs` — QuickStatements batch

---

## 1. Submission order (do not reverse)

1. **Wikidata: parent (Matthews REIS)** — submit today. Wikidata's notability bar is lower than Wikipedia's. Capture the new Q-id.
2. **Wikidata: Matthews Hotel Markets** — replace `Q_MATTHEWS_REIS` placeholder in the `.qs` file with the Q-id from step 1, then submit. Capture the Q-id.
3. **Wikipedia: Matthews REIS** via Articles for Creation (AfC).
4. **Wikipedia: Matthews Hotel Markets** via AfC, only after the parent article is accepted (sub-brand notability is partly inherited).
5. **Wikidata: add `Senwiki` sitelinks** to both Q-items after each enwiki page exists.

---

## 2. Wikipedia paste instructions (AfC route)

### Account & disclosure prerequisites

- Create a Wikipedia account with a real name or stable handle. Do **not** use a SPA account that only edits Matthews-related pages — AfC reviewers flag this.
- **Mandatory paid-editing disclosure** under [WP:PAID](https://en.wikipedia.org/wiki/Wikipedia:Paid-contribution_disclosure). On the editor's User page, add:
  ```
  {{Paid|user=YOUR_USERNAME|employer=Matthews Real Estate Investment Services|client=Matthews Real Estate Investment Services}}
  ```
- On each draft's Talk page after creation, add:
  ```
  {{Connected contributor (paid)|User1=YOUR_USERNAME|U1-employer=Matthews Real Estate Investment Services|U1-client=Matthews Real Estate Investment Services}}
  ```
- Failing to disclose paid editing is the single most common reason promotional drafts get speedy-deleted.

### Steps

1. Go to <https://en.wikipedia.org/wiki/Wikipedia:Articles_for_creation/Wizard>.
2. Click **Create a new draft**.
3. Title the draft `Matthews Real Estate Investment Services`.
4. Switch the editor to **Source** mode (top-right of the editor).
5. Paste the entire contents of `matthews-real-estate-investment-services.wiki`.
6. Save with edit summary: `Initial AfC draft, paid-editing disclosure on talk page`.
7. Open the new Draft's Talk page and add the `Connected contributor (paid)` template above.
8. Submit for AfC review by clicking the blue **Submit your draft for review** button at the top of the draft.
9. Repeat steps 1-8 for `Matthews Hotel Markets` after the parent draft has been accepted (or in parallel if you accept higher decline risk for the sub-brand).

---

## 3. Wikidata paste instructions

1. Go to <https://quickstatements.toolforge.org/>.
2. Sign in with your Wikimedia (Wikipedia) account.
3. Click **New batch** > **v1 commands**.
4. Paste the contents of the `.qs` file.
5. Click **Import**, review the diff preview, then **Run**.
6. Copy the new Q-id (e.g. `Q123456789`) from the run output.
7. Before pasting the Hotel Markets batch, edit `matthews-hotel-markets.qs` and replace `Q_MATTHEWS_REIS` with the parent Q-id, then uncomment the `LAST P749 ...` line.
8. After each Wikipedia article is accepted, return to the corresponding Q-item and add the sitelink (uncomment the `Senwiki` line and run a one-line batch).

---

## 4. Expected AfC review timeline

- Current AfC backlog as of 2026: roughly **2-4 months** for a first decision. Some drafts decided in days; some sit for months.
- Decisions are **decline** (with reason, you may revise and resubmit), **draftify** (kept for further work), or **accept** (moved to mainspace).
- There is no escalation path. Pinging individual reviewers is discouraged.

---

## 5. If declined: recovery playbook

| Decline reason | Action |
| --- | --- |
| `nn` "subject not notable" / WP:NCORP fail | Add 2-3 more independent in-depth secondary sources (see notability gap below), resubmit. Do not resubmit the same draft unchanged. |
| `adv` "promotional/advertising tone" | Strip any superlatives, remove first-party numbers ("$3.5B in volume"), use only third-party-attributed claims, resubmit. |
| `v` "verifiability" | Replace any uncited claim with cited claim or delete. Inline `<ref>` for every non-trivial sentence. |
| `coi` "conflict of interest" | Confirm the Talk page COI template is present. Have a non-affiliated editor copyedit. |
| `dup` "duplicate of existing article" | Check `Matthews Hospitality` / `Matthews Southwest Hospitality` namespaces — disambiguate. |
| `essay` / `npov` | Rewrite in third-person encyclopedic voice; cut narrative, keep facts. |

Resubmission cycle is typically 4-12 weeks. Plan for 2 cycles before acceptance for a sub-brand draft.

---

## 6. Notability gap report (WP:NCORP audit)

WP:NCORP requires **multiple independent reliable sources providing significant coverage**. Trivial mentions, press releases, interviews, and self-published material do not count toward notability (they may still be cited as sources, but reviewers count only independent in-depth pieces toward the notability bar).

### Matthews REIS — current source inventory

| Source | Type | Counts toward notability? |
| --- | --- | --- |
| Los Angeles Business Journal — HQ relocation | Regional business journal, independent | **Yes** |
| The Real Deal — HQ relocation | Independent trade outlet | **Yes** |
| Connect CRE — HQ relocation | Trade press | **Yes (likely)** |
| REJournals — Chicago VP hire | Trade press | Borderline (hire announcement is somewhat trivial) |
| GlobeSt thought-leader page | Thought-leader sponsorship | **No** (counts as primary/promotional) |
| Bisnow tag page | Aggregator | **No** (need a specific article, not a tag page) |
| Commercial Observer tag page | Aggregator | **No** (same) |

**Verdict:** Likely passes WP:NCORP on the strength of LABJ + The Real Deal + Connect CRE coverage of the 2022 HQ move, plus REJournals personnel coverage. Acceptance probability moderate to high on first submit. Recommended pre-submit additions: one specific transaction article from Bisnow or Commercial Observer (not the tag page — a dated article that names Matthews in the headline or lede).

### Matthews Hotel Markets — current source inventory

| Source | Type | Counts toward notability? |
| --- | --- | --- |
| GlobeSt thought-leader page (parent firm) | Sponsored | **No** |
| Connect CRE hospitality vertical (mentions parent) | Tag page | **No** |
| Bisnow / Commercial Observer parent tag pages | Aggregator | **No** |
| matthewshotelmarkets.com / matthews.com | Self-published | **No** |

**Verdict:** Sub-brand currently fails WP:NCORP on independent significant coverage. Submitting today carries high decline risk. Recommended sequence:

1. Submit and land the **parent** article first (notability inherits partially).
2. Land at least 3 of the press placements below before resubmitting Hotel Markets:

### Required press placements before Hotel Markets AfC resubmit

Cross-referenced from `reports/link-targets.md` (Section 6: Trade-Press Journalists):

| Outlet | Journalist | Pitch angle | Owner |
| --- | --- | --- | --- |
| Hotel Investment Today | Jeff Weinstein | 2024 transaction volume + capital markets data | Nate |
| CoStar News Hotels | Natalie Harms or Bryan Wroten | Texas / Sun Belt hospitality transactions feature | Nate |
| LODGING Magazine | Robin McLaughlin | Capital markets debt/equity placements in 2025 | Nate |
| GlobeSt | Erika Morphy | Named transaction (Walden Retreats Hill Country closing if public) | Nate |
| Bisnow | Sasha Jones / regional Bisnow editor | Austin hospitality CRE feature naming the team | Marketing |

Three landed placements is the minimum bar to clear. Five gives a comfortable acceptance margin.

### Disambiguation warning

Two unrelated companies share the "Matthews + hospitality" naming space and have published trade-press coverage:

- **Matthews Southwest Hospitality** (matthewsdev.com) — a real-estate developer focused on Omni Fort Lauderdale, Hotel Polaris, Savannah Convention Center hotel, and the Dallas boutique renovation. Covered in REBusinessOnline.
- **Matthews Hotel Markets** (matthewshotelmarkets.com) — the brokerage vertical of Matthews REIS, this draft.

When pitching journalists, lead with the full disambiguating name and the parent firm to prevent attribution drift in coverage. The Wikipedia article includes an inline disambiguation sentence for the same reason. If a hatnote becomes warranted, use:
```
{{For|the hotel developer|Matthews Southwest Hospitality}}
```

---

## 7. Quick checklist before clicking Submit

- [ ] Paid-editing disclosure present on User page and Draft Talk page
- [ ] All `<ref>` citations resolve to real public URLs
- [ ] No claim sourced solely to matthews.com or matthewshotelmarkets.com (other than infobox official-website link)
- [ ] No superlatives ("leading", "premier", "best-in-class", "top-tier")
- [ ] No revenue, transaction-volume, or headcount figures sourced only to the company
- [ ] Infobox fields all match cited sources
- [ ] Categories at the bottom are valid existing categories
- [ ] Wikidata Q-item exists or is being submitted in parallel
