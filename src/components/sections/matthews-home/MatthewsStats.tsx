export function MatthewsStats() {
  return (
    <div
      className="px-6 sm:px-10 lg:px-[70px] py-5 flex flex-wrap items-center gap-x-6 gap-y-2"
      style={{ background: "#0e1626", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-white/50 text-[12px] font-semibold uppercase tracking-[0.22em]">
        National Reach. Local Expertise.
      </p>
      <div className="h-4 w-px bg-white/15 hidden sm:block" aria-hidden="true" />
      <p className="text-white text-[13px] font-semibold">
        30+ Offices&nbsp;&nbsp;|&nbsp;&nbsp;$88.37B in Transactions
      </p>
    </div>
  );
}

export default MatthewsStats;
