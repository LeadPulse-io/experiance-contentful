import fetchGraphQL from '@/utils/contentful-graphql-client'

const IsPreview = process.env.CONTENTFUL_PREVIEW ?? false
const BaseUrl = process.env.BASE_URL

async function fetchData() {
  const query = `query {
    insightsCollection(preview: ${IsPreview}, limit: 1) {
      items {
        allItemsCollection(limit: 20) {
          items {
            __typename
            ... on Blog {
              sys {
                publishedAt
              }
              slug
              design
            }
          }
        }
      }
    }
  }
`
  const response = await fetchGraphQL(query)
  const {
    data: {
      insightsCollection: { items }
    }
  } = await response.json()

  return items[0]
}

export default async function sitemap() {
  const data = await fetchData()

  const currentDate = new Date().toISOString().split('T')[0]

  const InsightEntries = data.allItemsCollection.items
    .filter((item: { slug: string; design: string }) => item.slug && item.design)
    .map((item: { slug: string; design: string; sys: { publishedAt: string } }) => ({
      url: `${BaseUrl}/insights/${item.design}/${item.slug}`,
      lastModified: item.sys ? new Date(item.sys.publishedAt).toISOString().split('T')[0] : currentDate,
      changeFrequency: 'monthly',
      priority: 1
    }))

  return [
    {
      url: BaseUrl,
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${BaseUrl}/services/website-development`,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${BaseUrl}/services/marketing-revops`,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${BaseUrl}/services/managed-services`,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${BaseUrl}/about-us`,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${BaseUrl}/partners`,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${BaseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1
    },
    ...InsightEntries
  ]
}
