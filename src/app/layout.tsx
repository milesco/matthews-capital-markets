import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // userScalable: true is the default; never block pinch-zoom (WCAG 2.1
  // success criterion 1.4.4).
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage",
    template: "%s | Matthews Hotel Markets",
  },
  description:
    "National hotel brokerage: investment sales, capital markets, and acquisition advisory. Select-service, full-service, resort, and boutique hotels. $84.3B closed across 30+ offices.",
  applicationName: "Matthews Hotel Markets",
  keywords: [
    "hotel broker",
    "hotel investment sales",
    "sell my hotel",
    "hospitality brokerage",
    "hotel financing",
    "hotel for sale",
    "select service hotel",
    "boutique hotel for sale",
    "luxury resort for sale",
    "hospitality capital markets",
    "hotel cap rates",
    "Matthews Real Estate Investment Services",
  ],
  authors: [{ name: "Matthews Hotel Markets", url: SITE_URL }],
  creator: "Matthews Hotel Markets",
  publisher: "Matthews Real Estate Investment Services",
  category: "Real Estate",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/matthews-logo.jpg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Matthews Hotel Markets",
    title:
      "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage",
    description:
      "Hotel investment sales, capital markets, and acquisition advisory. Active listings, closed transactions, and quarterly outlooks from a national hospitality brokerage team.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage",
    description:
      "Hotel investment sales, capital markets, and acquisition advisory. Active listings, closed transactions, and quarterly outlooks.",
  },
};

// JSON-LD knowledge graph. RealEstateAgent (subtype of LocalBusiness)
// inherits local-pack eligibility while signaling industry specificity;
// chosen over plain Organization for that reason.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#org`,
      additionalType: "https://schema.org/FinancialService",
      name: "Matthews Hotel Markets",
      alternateName: "Matthews Hotel Team",
      url: SITE_URL,
      logo: `${SITE_URL}/images/matthews-logo.jpg`,
      image: `${SITE_URL}/images/hero-landscape.jpg`,
      description:
        "National hotel investment sales, capital markets, and acquisition advisory. Select-service, full-service, resort, and boutique hotels.",
      parentOrganization: {
        "@type": "Organization",
        name: "Matthews Real Estate Investment Services",
        url: "https://www.matthews.com",
      },
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: [
        "Hotel Investment Sales",
        "Hospitality Brokerage",
        "Hotel Capital Markets",
        "Select-Service Hotels",
        "Full-Service Hotels",
        "Boutique Hotels",
        "Resort Sales",
        "Hotel Valuation",
        "Hotel Cap Rates",
        "Hotel Acquisition Advisory",
        "Hospitality Investment Sales",
      ],
      sameAs: [
        "https://www.linkedin.com/company/matthews-hotel-markets/",
        "https://www.matthews.com",
      ],
      location: [
        {
          "@type": "Place",
          "@id": `${SITE_URL}/#hq-austin`,
          name: "Austin Headquarters",
          address: {
            "@type": "PostalAddress",
            streetAddress: "515 Congress Ave., Suite 2410",
            addressLocality: "Austin",
            addressRegion: "TX",
            postalCode: "78701",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          "@id": `${SITE_URL}/#office-denver`,
          name: "Denver Office",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Denver",
            addressRegion: "CO",
            addressCountry: "US",
          },
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hotelteam@matthews.com",
        areaServed: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Matthews Hotel Markets",
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body className="min-h-screen bg-[color:var(--surface)] text-[color:var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
