// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://urban-observer.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/entertainment`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/celebrity`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/scandals`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/drama`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/lifestyle`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/technology`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/health`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/pricingPlan`, lastModified: new Date(), priority: 0.7 },
  ];
}