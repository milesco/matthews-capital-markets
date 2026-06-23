import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#0e1626] flex flex-col items-center justify-center text-center px-6">
        <Link href="/" aria-label="Matthews, home">
          <Image src="/images/matthews-logo.jpg" alt="Matthews" width={80} height={80} className="rounded-[12px] mx-auto" />
        </Link>
        <p className="mt-6 text-white/50 text-[13px] font-semibold uppercase tracking-[0.22em]">
          Existing Website Page
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
