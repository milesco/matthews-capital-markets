import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import HospitalityHero from "@/components/sections/financing/HospitalityHero";

export const metadata: Metadata = {
  title: "Hospitality Financing | Matthews Capital Markets",
  description:
    "Matthews Capital Markets specializes in hospitality financing — hotel loans from $5M, every chain scale, nationwide.",
};

export default function HospitalityFinancingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HospitalityHero />
      </main>
    </>
  );
}
