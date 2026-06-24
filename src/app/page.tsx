import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MatthewsHero from "@/components/sections/matthews-home/MatthewsHero";
import MatthewsStats from "@/components/sections/matthews-home/MatthewsStats";
import MatthewsServices from "@/components/sections/matthews-home/MatthewsServices";
import MatthewsMarketIntel from "@/components/sections/matthews-home/MatthewsMarketIntel";
import MatthewsPodcast from "@/components/sections/matthews-home/MatthewsPodcast";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <MatthewsHero />
        <MatthewsStats />
        <MatthewsServices />
        <MatthewsMarketIntel />
        <MatthewsPodcast />
      </main>
      <SiteFooter />
    </>
  );
}
