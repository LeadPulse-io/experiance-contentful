import { MetadataRoute } from 'next'

const BaseUrl = process.env.BASE_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${BaseUrl}/sitemap.xml`
  }
}
