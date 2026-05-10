import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ListingsHero } from "@/components/sections/listings/ListingsHero";
import { ListingsBrowser } from "@/components/sections/listings/ListingsBrowser";
import PosterCTA from "@/components/sections/shared/PosterCTA";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "Hotels for Sale | Active Listings",
  description:
    "Active hotel investment listings from Matthews Hotel Markets. Select-service, full-service, resort, lifestyle, and boutique hotels for sale across Texas, the Sun Belt, and the United States.",
  alternates: { canonical: `${SITE_URL}/listings` },
  openGraph: {
    title: "Hotels for Sale | Matthews Hotel Markets",
    description:
      "Active hotel investment listings. Select-service, full-service, resort, lifestyle, and boutique hotels for sale nationwide.",
    url: `${SITE_URL}/listings`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotels for Sale | Matthews Hotel Markets",
    description:
      "Active hotel investment listings, select-service through resort and boutique.",
  },
};

export default function ListingsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <ListingsHero />
        <ListingsBrowser />
        <PosterCTA
          lead="Don't see your asset?"
          follow="Bring it to market."
        />
      </main>
      <SiteFooter />
    </>
  );
}
