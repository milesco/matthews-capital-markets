import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";

export function ProcessHero() {
  return (
    <section className="bg-white pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-[1024px] px-6">
        <Eyebrow>Transaction Process</Eyebrow>
        <TwoToneHeadline
          as="h1"
          size="section"
          lead="From engagement to close."
          follow="A 24-week proven path."
        />
        <p className="mt-6 max-w-[64ch] text-[17px] leading-[1.47] tracking-[-0.022em] text-[color:var(--text-secondary)]">
          The hospitality team&apos;s published marketing playbook. Four
          phases, twenty-four weeks, refined across hundreds of closed
          transactions. Sellers see exactly what happens, when it happens,
          and what we deliver at every step.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[color:var(--divider)] pt-8 md:grid-cols-4">
          {[
            { value: "4", label: "Phases" },
            { value: "24", label: "Weeks to close" },
            { value: "60-90", label: "Days due diligence" },
            { value: "1", label: "Dedicated team" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {stat.label}
              </dt>
              <dd className="mt-2 font-semibold tabular-nums text-[clamp(28px,3.4vw,40px)] leading-none tracking-[-0.025em] text-[#1d1d1f]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default ProcessHero;
