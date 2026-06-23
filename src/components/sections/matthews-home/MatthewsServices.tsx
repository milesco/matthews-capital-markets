import Link from "next/link";

const SERVICES = [
  {
    eyebrow: "Investment Sales",
    headline: "Tailored Strategies to Drive Success",
    body: "Leading the Nation in Commercial Real Estate Investment Sales",
    href: "/services/investment-sales",
    cta: "Maximize Investment Sales",
    bg: "#0e1a2e",
    accent: "#5d80b8",
  },
  {
    eyebrow: "Debt Financing",
    headline: "Financing Solutions to Drive Results",
    body: "Customized Debt Financing Solutions for Commercial Real Estate Investments",
    href: "/services/debt-structured-finance",
    cta: "Find Debt Financing",
    bg: "#091525",
    accent: "#4a6fa0",
  },
  {
    eyebrow: "Auction Services",
    headline: "Certainty and Speed Through Auctions",
    body: "Accelerated Disposition Through Expert Auction Services",
    href: "/services",
    cta: "Unlock Auction Services",
    bg: "#0d1c30",
    accent: "#5d80b8",
  },
  {
    eyebrow: "Leasing",
    headline: "Optimizing Occupancy and Tenant Success",
    body: "Strategic Leasing Solutions to Maximize Asset Performance",
    href: "/services/leasing",
    cta: "Explore Leasing Services",
    bg: "#0a1622",
    accent: "#4a6fa0",
  },
];

export function MatthewsServices() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s) => (
        <div
          key={s.eyebrow}
          className="flex flex-col justify-between p-10 min-h-[380px]"
          style={{ background: s.bg, borderRight: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] mb-5"
              style={{ color: s.accent }}
            >
              {s.eyebrow}
            </p>
            <h2 className="text-white text-[1.4rem] font-bold leading-[1.25] mb-4">
              {s.headline}
            </h2>
            <p className="text-white/55 text-[14px] leading-[1.55]">{s.body}</p>
          </div>
          <Link
            href={s.href}
            className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold transition-opacity hover:opacity-70"
            style={{ color: s.accent }}
          >
            {s.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default MatthewsServices;
