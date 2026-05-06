import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const stats: { value: string; label: string }[] = [
  { value: "$3.5B", label: "Sales volume in 2024" },
  { value: "72", label: "Transactions in 2024" },
  { value: "59K+", label: "Rooms sold" },
  { value: "670+", label: "Total transactions" },
];

export function HomeStats() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Built on track record</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            lead="The numbers."
            follow="Year by year."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div>
                <Counter
                  value={stat.value}
                  className="block text-[#1d1d1f] font-semibold tabular-nums text-[clamp(40px,5vw,72px)] leading-none tracking-[-0.04em]"
                />
                <p className="mt-3 text-[13px] tracking-[-0.014em] text-[#86868b]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeStats;
