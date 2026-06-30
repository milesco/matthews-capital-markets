const LENDER_CATEGORIES = [
  {
    label: "LifeCo Lender",
    lenders: [
      { name: "Symetra", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/symetra-logo-resize.png" },
      { name: "Assurity", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/Assurity_Logo.jpg" },
      { name: "CFG", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/cfglogoblue.webp" },
      { name: "Pacific Life", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/piamidam14988.jpg" },
      { name: "Ameritas", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/Ameritas_Bison_Tag_WEB_color.webp" },
      { name: "Standard Insurance", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/standard-logo.svg" },
      { name: "OneAmerica", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/one-america.jpg" },
    ],
  },
  {
    label: "Multifamily Agency Lender",
    lenders: [
      { name: "Agency Lender", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/c173ef88-ea40-4bb4-bcd7-67d639de503d.jpeg" },
      { name: "Lument", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/LUMENT_Logo.jpg" },
      { name: "Regions Bank", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/Regions-Bank-2016.webp" },
    ],
  },
  {
    label: "Credit Union",
    lenders: [
      { name: "RBFCU", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/rbfcu-credit-union.png" },
      { name: "Eastman Credit Union", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/eastman-credit-union.jpg" },
      { name: "TruStone", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/trustone-logo-831568e9-credit-union.png" },
      { name: "American First Credit Union", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/american-first-credit-union.png" },
    ],
  },
  {
    label: "Private / Bridge",
    lenders: [
      { name: "Newpoint", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/newpoint-logo.png" },
      { name: "RCG Longview", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/rcg-longview.png" },
      { name: "Thorofare", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/thorofare-symbol-logotype-rgb1.jpg" },
      { name: "Corebridge Financial", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/corebridge-financial.png" },
    ],
  },
  {
    label: "Bank",
    lenders: [
      { name: "Capstar", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/capstar-logo.jpg" },
      { name: "US Bank", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/US_Bank_logo.png" },
      { name: "UBS", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/UBS-logo-scaled.png" },
      { name: "FFB", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/FFB_logo_JPG.jpg" },
      { name: "First Savings Bank", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/first-savings-bank-scaled.jpg" },
      { name: "Union Bank", logo: "https://cms.matthews.com/wp-content/uploads/2025/08/Union_Bank_logo_2017.svg.png" },
    ],
  },
];

export function LendersSection() {
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
        Lenders We&rsquo;ve Worked With
      </h2>

      <div className="space-y-12">
        {LENDER_CATEGORIES.map((cat) => (
          <div key={cat.label}>
            {/* Category label */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-5 text-center">
              {cat.label}
            </p>
            {/* Logo grid */}
            <div className="flex flex-wrap justify-center gap-5">
              {cat.lenders.map((lender) => (
                <div
                  key={lender.name}
                  className="flex items-center justify-center rounded-[14px] border border-black/[0.08] bg-white px-10"
                  style={{ height: "187px", minWidth: "220px" }}
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
            {/* Divider */}
            <div className="mt-12 border-t border-black/[0.06]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LendersSection;
