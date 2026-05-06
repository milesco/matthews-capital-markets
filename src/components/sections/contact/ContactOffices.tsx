import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { offices } from "@/lib/data/offices";

function telHref(phone: string) {
  // Strip non-digit characters except leading + so the dialer is happy.
  const digits = phone.replace(/[^0-9+]/g, "");
  return `tel:${digits.startsWith("+") ? digits : `+1${digits}`}`;
}

export function ContactOffices() {
  return (
    <section
      id="offices"
      className="bg-[color:var(--surface-elevated)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Coast to coast</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            lead="Find a Matthews office."
            follow="Local intelligence with national reach."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={i * 0.05}>
              <article className="h-full rounded-[18px] bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] leading-[1.15] text-[#1d1d1f]">
                    {office.city}
                  </h3>
                  {office.hq ? (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-[#0071e3] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                      HQ
                    </span>
                  ) : null}
                </div>
                <div className="mt-3">
                  <p className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                    {office.address}
                  </p>
                  <p className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[#86868b]">
                    {office.city.includes("Chicago") ||
                    office.city === "Oakbrook Terrace"
                      ? `${office.state} ${office.zip}`
                      : `${office.state} ${office.zip}`}
                  </p>
                </div>
                <a
                  href={telHref(office.phone)}
                  className="mt-5 inline-block text-[14.5px] tracking-[-0.014em] text-[#0071e3] hover:underline"
                >
                  {office.phone}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactOffices;
