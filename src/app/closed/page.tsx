import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { ClosedHero } from "@/components/sections/closed/ClosedHero";
import { ClosedBrowser } from "@/components/sections/closed/ClosedBrowser";
import PosterCTA from "@/components/sections/shared/PosterCTA";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "Closed Hotel Transactions | Track Record",
  description:
    "Recent hotel closings by Matthews Hotel Markets. Investment sales, capital markets, and debt placements across select-service, full-service, resort, and boutique segments.",
  alternates: { canonical: `${SITE_URL}/closed` },
  openGraph: {
    title: "Closed Hotel Transactions | Matthews Hotel Markets",
    description:
      "Recent hotel closings: investment sales, capital markets, and debt placements across the United States.",
    url: `${SITE_URL}/closed`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Closed Hotel Transactions | Matthews Hotel Markets",
    description:
      "Recent hotel closings across select-service, full-service, resort, and boutique.",
  },
};

export default function ClosedPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <ClosedHero />
        <ClosedBrowser />
        <PosterCTA
          lead="Ready for your closing."
          follow="Start the 24-week conversation."
        />
      </main>
      <SiteFooter />
    </>
  );
}
