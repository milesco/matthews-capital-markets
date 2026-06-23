import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import CapitalMarketsHero from "@/components/sections/capital-markets/CapitalMarketsHero";

export const metadata: Metadata = {
  title: "Capital Markets | Matthews",
  description:
    "Matthews Capital Markets delivers end-to-end real estate financing nationwide — tailored debt and equity solutions for all asset classes and risk profiles.",
};

export default function CapitalMarketsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CapitalMarketsHero />
      </main>
    </>
  );
}
