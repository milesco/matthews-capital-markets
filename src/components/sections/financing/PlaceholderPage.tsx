import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

interface PlaceholderPageProps {
  assetClass: string;
}

export function PlaceholderPage({ assetClass }: PlaceholderPageProps) {
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
        <p className="mt-8 text-white/50 text-[13px] font-semibold uppercase tracking-[0.22em]">
          Matthews Capital Markets
        </p>
        <h1 className="mt-4 text-white text-[2rem] font-bold leading-tight max-w-[520px]">
          To be completed by the {assetClass} Capital Markets Team
        </h1>
        <Link
          href="/"
          className="mt-10 text-[13px] text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
        >
          ← Back to Capital Markets
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}

export default PlaceholderPage;
