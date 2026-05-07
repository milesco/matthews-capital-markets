import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import ProcessCTA from "@/components/sections/process/ProcessCTA";

export const metadata: Metadata = {
  title: "Transaction Process — Matthews Hotel Team",
  description:
    "Four-phase, 24-week marketing playbook for selling a hotel. From engagement to close, the team's published process refined across hundreds of closed transactions.",
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProcessHero />
        <ProcessTimeline />
        <ProcessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
