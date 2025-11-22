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

module.exports = nextConfig;