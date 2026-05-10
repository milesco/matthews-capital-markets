import type { MetadataRoute } from "next";
import { listings } from "@/lib/data/listings";
import { team } from "@/lib/data/team";
import { insights } from "@/lib/data/insights";

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
  ];

  const listingRoutes: MetadataRoute.Sitemap = listings.map((l) => ({
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

  const teamRoutes: MetadataRoute.Sitemap = team.map((m) => ({
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

  return [
    ...staticRoutes,
    ...listingRoutes,
    ...teamRoutes,
    ...insightRoutes,
  ];
}
