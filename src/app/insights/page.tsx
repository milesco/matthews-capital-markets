import * as React from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { InsightsHero } from "@/components/sections/insights/InsightsHero";
import { InsightsArchive } from "@/components/sections/insights/InsightsArchive";
import { insights } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights — Matthews Hotel Team",
  description:
    "Quarterly hotel investment outlooks, white papers, and briefings from the Matthews Hotel Team.",
};

export default function InsightsPage() {
  const featured = insights[0];
  const archive = insights.slice(1);

  return (
    <>
      <SiteHeader />
      <main className="pt-14">
        <InsightsHero featured={featured} />
        <InsightsArchive items={archive} />
      </main>
      <SiteFooter />
    </>
  );
}
