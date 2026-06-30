import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

interface PlaceholderPageProps {
  assetClass?: string;
}

export function PlaceholderPage({ assetClass: _assetClass }: PlaceholderPageProps) {
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
        {/* Blue underline accent */}
        <div className="mt-3 mx-auto h-[3px] w-10 rounded-full" style={{ background: "#3b82f6" }} />
        <p className="mt-8 text-white/50 text-[11px] font-semibold uppercase tracking-[0.3em]">
          Existing Website Page
        </p>
      </main>
      <SiteFooter />
    </>
  );
}

export default PlaceholderPage;
