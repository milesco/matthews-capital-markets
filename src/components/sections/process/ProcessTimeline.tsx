import { transactionProcess } from "@/lib/data/process";

export function ProcessTimeline() {
  return (
    <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <ol className="space-y-5">
          {transactionProcess.map((phase, idx) => (
            <li
              key={phase.name}
              className="rounded-[18px] bg-white p-6 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[260px_1fr]">
                {/* Left rail: phase number + name + week range */}
                <div>
                  <div className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                    Phase {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2
                    className="mt-3 font-[family-name:var(--font-fraunces)] font-medium text-[#1d1d1f]"
                    style={{
                      fontSize: "clamp(22px, 2.4vw, 28px)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {phase.name}
                  </h2>
                  <div className="mt-4 inline-flex items-center rounded-full bg-[#0071e3]/10 px-3 py-1 text-[12px] font-medium tracking-[-0.01em] text-[#0071e3]">
                    {phase.weeks}
                  </div>
                  {phase.weeksNote && (
                    <p className="mt-2 text-[12px] tracking-[-0.01em] text-[color:var(--text-tertiary)]">
                      {phase.weeksNote}
                    </p>
                  )}
                </div>

                {/* Right: step list */}
                <ol className="relative space-y-5 md:border-l md:border-[color:var(--divider)] md:pl-8">
                  {phase.steps.map((step, j) => (
                    <li key={j}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                        {step.weekLabel}
                      </p>

                      <p className="mt-1.5 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]">
                        {step.action}
                      </p>
                      {step.bullets && step.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)] before:mr-2 before:content-['—']"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessTimeline;
