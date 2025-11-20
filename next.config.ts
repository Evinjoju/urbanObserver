// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.tagdiv.com",
        pathname: "/newspaper_urban_observer_pro/wp-content/uploads/**",
      },
    ],
  },

  // These are the correct modern options (swcMinify was removed in Next.js 12+)
  reactStrictMode: true,
  // swcMinify is now ALWAYS ON and cannot be disabled — so remove it completely
};

export default nextConfig;