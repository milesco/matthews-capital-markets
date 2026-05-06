import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin Turbopack workspace root to silence the multi-lockfile warning
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 1080, 1200, 1470, 1920, 2560],
    minimumCacheTTL: 31536000,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
