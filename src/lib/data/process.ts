/**
 * Matthews Hotel Team — published transaction process / marketing timeline.
 *
 * Firm-level playbook for taking a hotel listing from engagement to close.
 * No individual attribution. ~24 weeks across four phases.
 */

export type ProcessStep = {
  /** Sub-range label inside the phase, e.g. "Weeks 1-2" or "Week 3". */
  weekLabel: string;
  /** Plain-English action description. */
  action: string;
  /** Optional sub-bullets (e.g. document deliverables). */
  bullets?: string[];
};

export type ProcessPhase = {
  /** Phase title as printed in the brochure. */
  name: string;
  /** Phase-level week range, e.g. "Weeks 1-2". */
  weeks: string;
  /** Optional sub-note, e.g. "Typically 60–90 days". */
  weeksNote?: string;
  steps: ProcessStep[];
};

export const transactionProcess: ProcessPhase[] = [
  {
    name: "Premarketing & Finalize Package",
    weeks: "Weeks 1-2",
    steps: [
      {
        weekLabel: "Weeks 1-2",
        action: "Produce professional marketing materials.",
      },
      {
        weekLabel: "Weeks 1-2",
        action: "Identify prospect and buyers list.",
      },
      {
        weekLabel: "Weeks 1-2",
        action: "Provide detailed financials.",
        bullets: [
          "Three-year P&L in Excel",
          "DRP & OEM certifications",
          "Employee roster (names not included)",
        ],
      },
    ],
  },
  {
    name: "Marketing Launch & Prospective Buyers",
    weeks: "Weeks 3-8",
    steps: [
      {
        weekLabel: "Week 3",
        action: "Launch the offering memorandum and high-level overview.",
      },
      {
        weekLabel: "Week 3",
        action:
          "Reach out to all top prospects via call and email while stressing confidentiality.",
      },
      {
        weekLabel: "Weeks 4-7",
        action:
          "Handle questions and overcome objections from potential buyers.",
      },
      {
        weekLabel: "Weeks 4-8",
        action: "Collect initial offers.",
      },
    ],
  },
  {
    name: "Tours & Offer Process",
    weeks: "Weeks 8-12",
    steps: [
      {
        weekLabel: "Weeks 6-8",
        action: "Create summary of offers for ownership.",
      },
      {
        weekLabel: "Weeks 8-9",
        action: "Issue call for offers.",
      },
      {
        weekLabel: "Weeks 8-9",
        action: "Strategically counter initial offers.",
      },
      {
        weekLabel: "Weeks 8-9",
        action: "Buyer interviews.",
      },
      {
        weekLabel: "Week 10",
        action: "Best-and-final offers.",
      },
      {
        weekLabel: "Weeks 10-12",
        action: "Contract negotiation (depending on buyer's structure).",
      },
      {
        weekLabel: "Week 12",
        action: "Open escrow.",
      },
    ],
  },
  {
    name: "Due Diligence & Closing Period",
    weeks: "Weeks 12-24",
    weeksNote: "Typically 60–90 days",
    steps: [
      {
        weekLabel: "Week 12",
        action: "Buyer kickoff call.",
      },
      {
        weekLabel: "Weeks 12-20",
        action: "Buyer's review of financials and site.",
        bullets: [
          "Quality-of-earnings report",
          "Third-party inspections",
          "Buyer conducts site visit",
        ],
      },
      {
        weekLabel: "Weeks 22-24",
        action: "Settlement statement and title work finalized.",
      },
      {
        weekLabel: "Weeks 22-24",
        action: "Buyers introduced to employees.",
      },
    ],
  },
];
