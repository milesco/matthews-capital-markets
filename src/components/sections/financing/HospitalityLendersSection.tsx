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
    logo: "/images/lenders/driftwood-capital.png",
    dark: false,
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
    logo: "/images/lenders/Bloomfield2.png",
    dark: false,
  },
  {
    name: "Societe Generale",
    logo: "/images/lenders/logo_SocieteGenerale_600x300.webp",
    dark: false,
  },
];

function LenderCard({ lender }: { lender: typeof LENDERS[number] }) {
  return (
    <div
      className="flex items-center justify-center rounded-[14px] border px-8 w-full"
      style={{
        height: "187px",
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
  );
}

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

      {/* Single 10-col grid: row 1 = 5×2cols, row 2 = spacer + 4×2cols + spacer */}
      <div className="grid grid-cols-10 gap-5">
        {LENDERS.slice(0, 5).map((lender) => (
          <div key={lender.name} className="col-span-2">
            <LenderCard lender={lender} />
          </div>
        ))}
        <div className="col-span-1" />
        {LENDERS.slice(5).map((lender) => (
          <div key={lender.name} className="col-span-2">
            <LenderCard lender={lender} />
          </div>
        ))}
        <div className="col-span-1" />
      </div>
    </section>
  );
}

export default HospitalityLendersSection;
