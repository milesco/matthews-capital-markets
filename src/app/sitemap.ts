import type { MetadataRoute } from "next";
import { listings } from "@/lib/data/listings";
import { team } from "@/lib/data/team";
import { insights } from "@/lib/data/insights";
import { closed } from "@/lib/data/closed";
import { markets } from "@/lib/data/markets";
import { brands } from "@/lib/data/brands";
import { services } from "@/lib/data/services";
import { offices } from "@/lib/data/offices";
import { mhiQuarters } from "@/lib/data/mhi";
import { glossary } from "@/lib/data/glossary";

const SITE_URL = "https://matthewshotelmarkets.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/listings`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/closed`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/process`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/research/mhi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const mhiRoutes: MetadataRoute.Sitemap = mhiQuarters.map((q) => ({
    url: `${SITE_URL}/research/mhi/${q.slug}`,
    lastModified: new Date(q.publishedAt),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossary.map((g) => ({
    url: `${SITE_URL}/glossary/${g.slug}`,
    lastModified: new Date(g.lastUpdated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const listingRoutes: MetadataRoute.Sitemap = listings
    .filter((l) => l.hasDetail !== false)
    .map((l) => ({
    url: `${SITE_URL}/listings/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
    images: [
      l.photo
        ? `${SITE_URL}${l.photo}`
        : `${SITE_URL}/listings/${l.slug}/opengraph-image`,
    ],
  }));

  const teamRoutes: MetadataRoute.Sitemap = team
    .filter((m) => m.hasBio !== false)
    .map((m) => ({
      url: `${SITE_URL}/team/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: m.photo
        ? [`${SITE_URL}${m.photo}`]
        : [`${SITE_URL}/team/${m.slug}/opengraph-image`],
    }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
    images: [`${SITE_URL}/insights/${i.slug}/opengraph-image`],
  }));

  const closedRoutes: MetadataRoute.Sitemap = closed.map((d) => ({
    url: `${SITE_URL}/closed/${d.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
    images: d.photo
      ? [`${SITE_URL}${d.photo}`]
      : [`${SITE_URL}/closed/${d.slug}/opengraph-image`],
  }));

  const marketRoutes: MetadataRoute.Sitemap = markets.map((m) => ({
    url: `${SITE_URL}/markets/${m.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [`${SITE_URL}/markets/${m.slug}/opengraph-image`],
  }));

  const brandRoutes: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${SITE_URL}/hotels-for-sale/${b.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
    images: [`${SITE_URL}/hotels-for-sale/${b.slug}/opengraph-image`],
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
    images: [`${SITE_URL}/services/${s.slug}/opengraph-image`],
  }));

  const officeRoutes: MetadataRoute.Sitemap = offices.map((o) => ({
    url: `${SITE_URL}/offices/${o.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${SITE_URL}/offices/${o.slug}/opengraph-image`],
  }));

  return [
    ...staticRoutes,
    ...listingRoutes,
    ...closedRoutes,
    ...teamRoutes,
    ...insightRoutes,
    ...marketRoutes,
    ...brandRoutes,
    ...serviceRoutes,
    ...officeRoutes,
    ...mhiRoutes,
    ...glossaryRoutes,
  ];
}
