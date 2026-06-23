import Link from "next/link";

const ARTICLES = [
  {
    date: "Jun 16, 2026",
    title: "Charlotte, NC Multifamily Market Report Q1 2026",
    href: "/insights/charlotte-nc-multifamily-market-report-q1-2026",
    img: null,
    featured: true,
  },
  {
    date: "Jun 12, 2026",
    title: "Restaurant Brands Prioritize Franchisee Support for Long-Term Growth",
    href: "/insights/restaurant-brands-prioritize-franchisee-support-for-long-term-growth",
    img: "https://cms.matthews.com/wp-content/uploads/2026/06/Blog-Image-Generator-TL-30.jpg",
  },
  {
    date: "Jun 12, 2026",
    title: "The Squeeze on the Corner Drugstore: A Tale of Two Battles",
    href: "/insights/the-squeeze-on-the-corner-drugstore-a-tale-of-two-battles",
    img: "https://cms.matthews.com/wp-content/uploads/2026/06/CVS-Walgreens-Newsletter-2026_SBryant_Blog.jpg",
  },
  {
    date: "Jun 12, 2026",
    title: "The New Retail Leasing Playbook: Evidence Over Instinct",
    href: "/insights/the-new-retail-leasing-playbook",
    img: "https://cms.matthews.com/wp-content/uploads/2026/06/Retail-Leasing-in-New-Demand-Economy_Blog.jpg",
  },
];

export function MatthewsMarketIntel() {
  const [featured, ...rest] = ARTICLES;

  return (
    <section className="bg-white px-[70px] py-20">
      <div className="flex items-center justify-between mb-10">
        <h2
          className="text-[2rem] font-bold text-[#0a0f1a]"
          style={{ letterSpacing: "-0.5px" }}
        >
          Market Intel
        </h2>
        <Link
          href="/insights"
          className="text-[13px] font-semibold text-[#5d80b8] hover:opacity-70 transition-opacity"
        >
          View all insights →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Featured — spans 2 cols */}
        <Link
          href={featured.href}
          className="lg:col-span-2 rounded-[14px] overflow-hidden bg-[#0e1626] flex flex-col justify-end min-h-[300px] p-8 group"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
            {featured.date}
          </p>
          <h3 className="text-white text-[1.35rem] font-bold leading-[1.25] group-hover:opacity-80 transition-opacity">
            {featured.title}
          </h3>
          <span className="mt-4 text-[13px] font-semibold text-[#5d80b8]">Read More →</span>
        </Link>

        {/* Secondary articles */}
        {rest.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="rounded-[14px] overflow-hidden border border-black/[0.07] flex flex-col group hover:shadow-md transition-shadow"
          >
            {a.img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-44 object-cover"
              />
            )}
            <div className="flex flex-col flex-1 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40 mb-3">
                {a.date}
              </p>
              <h3 className="text-[#0a0f1a] text-[15px] font-bold leading-[1.35] flex-1 group-hover:text-[#5d80b8] transition-colors">
                {a.title}
              </h3>
              <span className="mt-4 text-[12px] font-semibold text-[#5d80b8]">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default MatthewsMarketIntel;
