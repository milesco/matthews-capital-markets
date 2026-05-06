import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotel-team-site.vercel.app"),
  title: "Matthews Hotel Team — National Hospitality Investment Sales",
  description:
    "Matthews hospitality team. National hotel investment sales — select-service, full-service, resort, lifestyle. Austin, Texas.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Matthews Hotel Team — National Hospitality Investment Sales",
    description:
      "Hotel investment sales backed by Matthews Real Estate Investment Services. 30+ offices, 1M+ investors, $84.3B closed.",
    type: "website",
  },
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
      <body className="min-h-screen bg-[color:var(--surface)] text-[color:var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
