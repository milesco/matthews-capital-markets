import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function OtherCREAssetClassesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#0e1626] flex flex-col items-center justify-center text-center px-6">
        <Link href="/" aria-label="Matthews, home">
          <Image
            src="/images/matthews-logo.jpg"
            alt="Matthews"
            width={80}
            height={80}
            className="rounded-[12px] mx-auto"
          />
        </Link>
        <p className="mt-8 text-white/50 text-[13px] leading-[1.8] max-w-[520px]">
          Industrial, Healthcare, Net Lease Retail, Self Storage catch-all. Will include all brokers who don&rsquo;t fall into strictly Multi-Family or Hospitality.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
