import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamBrowser from "@/components/sections/team/TeamBrowser";

export const metadata: Metadata = {
  title: "Capital Markets Team | Matthews",
  description:
    "Meet the Matthews Capital Markets team — hospitality debt and equity advisors.",
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
