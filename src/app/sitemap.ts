import { MetadataRoute } from 'next'
import { allArticles } from '../data/loadArticles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://urbanobserver.com'

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/celebrity`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/scandals`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/drama`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/music`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/lifestyle`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/technology`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/health`, lastModified: new Date(), priority: 0.9 },
  ]

  const articles = allArticles.map(article => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...articles]
}