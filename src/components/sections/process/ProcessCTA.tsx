import { Pill } from "@/components/ui/Pill";
import { GhostLink } from "@/components/ui/GhostLink";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";

export function ProcessCTA() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="rounded-[28px] bg-[#0a0a0a] p-10 md:p-16 dark-section">
          <TwoToneHeadline
            size="section"
            tone="dark"
            lead="Considering a sale?"
            follow="Start the 24-week clock."
          />
          <p
            className="mt-6 max-w-[58ch] text-[17px] leading-[1.47] tracking-[-0.022em]"
            style={{ color: "var(--text-on-dark-secondary)" }}
          >
            Confidential first conversation, no commitment. We provide a
            valuation read, a likely buyer profile, and a marketing strategy
            tailored to the asset before you decide whether to engage.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Pill variant="primary" href="/contact">
              Request a confidential valuation
            </Pill>
            <GhostLink href="/closed">View track record</GhostLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessCTA;
