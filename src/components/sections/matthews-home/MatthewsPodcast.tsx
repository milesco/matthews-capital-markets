import Link from "next/link";

export function MatthewsPodcast() {
  return (
    <section className="bg-[#0e1626] px-[70px] py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#5d80b8] mb-6">
          The
        </p>
        <h2
          className="uppercase text-white leading-[0.9] mb-6"
          style={{
            fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-1px",
          }}
        >
          MATTHEWS<br />
          <span style={{ color: "#5d80b8" }}>MENTALITY</span>
        </h2>
        <p className="text-[1.1rem] font-semibold text-white mb-2">podcast</p>
        <p className="text-white/55 text-[15px] leading-[1.6] max-w-[420px] mb-8">
          Mindsets, motivations, and strategies behind the most successful
          individuals. Hosted by Kyle Matthews.
        </p>
        <Link
          href="https://www.thematthewsmentalitypodcast.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold transition-opacity hover:opacity-80"
          style={{ background: "#5d80b8", color: "#fff" }}
        >
          Listen In
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div className="rounded-[20px] overflow-hidden aspect-square max-w-[420px] bg-[#1a2540]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cms.matthews.com/wp-content/uploads/2025/08/image-8.jpg"
          alt="Matthews Mentality Podcast"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default MatthewsPodcast;
