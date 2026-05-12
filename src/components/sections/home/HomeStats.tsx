import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const supportingStats: { value: string; label: string }[] = [
  { value: "8,600+", label: "Rooms" },
  { value: "30", label: "Cities" },
  { value: "12", label: "States" },
];

export function HomeStats() {
  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-[1024px] px-6">
        {/* One reveal wraps the entire block, Apple product-page restraint */}
        <Reveal>
          <div>
            <Eyebrow>Matthews Hospitality · 2019–2021</Eyebrow>

            <TwoToneHeadline
              size="section"
              lead="$890M+ closed in hospitality."
              follow="Texas, the Sun Belt, and beyond."
            />

            <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[color:var(--divider)] pt-12 sm:grid-cols-3 sm:gap-8">
              {supportingStats.map((stat) => (
                <div key={stat.label}>
                  <Counter
                    value={stat.value}
                    className="block text-[#1d1d1f] font-semibold tabular-nums text-[clamp(32px,4vw,56px)] leading-none tracking-[-0.03em]"
                  />
                  <p className="mt-3 text-[13px] tracking-[-0.014em] text-[#86868b]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--text-tertiary)]">
              As of Q4 2021
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeStats;
