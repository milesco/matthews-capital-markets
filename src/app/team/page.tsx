import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamBrowser from "@/components/sections/team/TeamBrowser";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "Hotel Brokers & Capital Markets Team",
  description:
    "Meet the Matthews Hotel Markets team. Hotel brokers and capital markets advisors specializing in select-service, full-service, resort, and boutique investment sales nationwide.",
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: "Hotel Brokers & Capital Markets Team | Matthews Hotel Markets",
    description:
      "Hotel brokers and capital markets advisors. Select-service, full-service, resort, and boutique investment sales nationwide.",
    url: `${SITE_URL}/team`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Brokers & Capital Markets Team",
    description:
      "Hotel brokers and capital markets advisors at Matthews Hotel Markets.",
  },
};

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <TeamHero />
        <TeamBrowser />
      </main>
      <SiteFooter />
    </>
  );
}
