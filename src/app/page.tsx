import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeStats from "@/components/sections/home/HomeStats";
import HomeFeatured from "@/components/sections/home/HomeFeatured";
import HomeWhy from "@/components/sections/home/HomeWhy";
import HomeClosedTeaser from "@/components/sections/home/HomeClosedTeaser";
import HomeInsightTeaser from "@/components/sections/home/HomeInsightTeaser";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeFeatured />
        <HomeWhy />
        <HomeClosedTeaser />
        <HomeInsightTeaser />
      </main>
      <SiteFooter />
    </>
  );
}
