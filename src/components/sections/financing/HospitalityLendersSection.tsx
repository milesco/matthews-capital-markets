const LENDERS = [
  {
    name: "Starwood Capital",
    logo: "/images/lenders/Starwood_Capital_Logo.jpg",
    dark: false,
  },
  {
    name: "JP Morgan",
    logo: "/images/lenders/JP-Morgan-Chase-Emblem.png",
    dark: false,
  },
  {
    name: "Wells Fargo",
    logo: "/images/lenders/wellsfargo.jpg",
    dark: false,
  },
  {
    name: "ArrowMark Partners",
    logo: "/images/lenders/AMlogo.png",
    dark: false,
  },
  {
    name: "Driftwood Capital",
    logo: "/images/lenders/DC-Logo-White.svg",
    dark: true,
  },
  {
    name: "Symetra",
    logo: "https://cms.matthews.com/wp-content/uploads/2025/08/symetra-logo-resize.png",
    dark: false,
  },
  {
    name: "UBS",
    logo: "https://cms.matthews.com/wp-content/uploads/2025/08/UBS-logo-scaled.png",
    dark: false,
  },
  {
    name: "Bloomfield Capital",
    logo: "/images/lenders/Bloomfield.png",
    dark: false,
  },
  {
    name: "Societe Generale",
    logo: "/images/lenders/logo_SocieteGenerale_600x300.webp",
    dark: false,
  },
];

export function HospitalityLendersSection() {
  return (
    <section className="bg-white px-[70px] py-20">
      <h2
        className="text-black mb-16 text-center"
        style={{
          fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          letterSpacing: "-0.5px",
        }}
      >
        Lenders We Work With
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {LENDERS.map((lender) => (
          <div
            key={lender.name}
            className="flex items-center justify-center rounded-[14px] border px-8"
            style={{
              height: "187px",
              minWidth: "220px",
              background: lender.dark ? "#0e1626" : "#ffffff",
              borderColor: lender.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lender.logo}
              alt={lender.name}
              className="max-h-[80px] max-w-[160px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HospitalityLendersSection;
