/**
 * Wave 5 long-form articles produced in the 2026-05-10 sprint.
 * Each article is a separate file authored by a parallel agent and
 * imported here as the named export `draft`.
 *
 * The articles slot into src/lib/data/insights.ts as additional Insight
 * entries.
 */
import type { Insight } from "../insights";

import { draft as texasCapRatesQ2 } from "./texas-hotel-cap-rates-q2-2026";
import { draft as selectVsFull } from "./select-service-vs-full-service-2026";
import { draft as refinancingWave } from "./hotel-refinancing-wave-2026";
import { draft as sunBelt } from "./sun-belt-hospitality-investment-2026";
import { draft as brandFlagGuide } from "./brand-flag-cap-rate-guide-2026";
import { draft as howToSell } from "./how-to-sell-a-hotel-2026";
import { draft as cmbsDistress } from "./hotel-cmbs-distress-trepp-2026";
import { draft as adrRevparRecovery } from "./hotel-adr-revpar-recovery-2026";

export const wave5Insights: Insight[] = [
  texasCapRatesQ2,
  selectVsFull,
  refinancingWave,
  sunBelt,
  brandFlagGuide,
  howToSell,
  cmbsDistress,
  adrRevparRecovery,
];
