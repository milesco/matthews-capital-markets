import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactOffices from "@/components/sections/contact/ContactOffices";

export const metadata: Metadata = {
  title: "Contact — Matthews Hotel Team",
  description:
    "Talk to the Matthews hospitality team. Sale, acquisition, market intelligence — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-14">
        <ContactHero />
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
        <ContactOffices />
      </main>
      <SiteFooter />
    </>
  );
}
