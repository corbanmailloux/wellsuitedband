import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wellsuitedband.com',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://wellsuitedband.com/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
