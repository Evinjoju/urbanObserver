// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.tagdiv.com",
      },
    ],formats: ["image/avif", "image/webp"]
  },
};

module.exports = {
  experimental: {
    optimizeCss: true,
  },
  webpack: (config: { resolve: { fallback: { fs: boolean; }; }; }, { isServer }: any) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

module.exports = nextConfig;