// next.config.js — FINAL & WORKING FOR CPANEL
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // ← THIS CREATES THE out/ FOLDER
  trailingSlash: true,        // ← Makes URLs like /entertainment/ (good for cPanel)
  images: {
    unoptimized: true,        // ← Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.tagdiv.com",
      },
    ],
  },
};

module.exports = nextConfig;