import fetchGraphQL from '@/utils/contentful-graphql-client'

const isPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData() {
  const query = `query {
  pageCollection(preview:${isPreview}, where:{slug:"privacy-policy"}, limit:1){
    items{
      title
      description
      seoMetadata{
        title
        description
      }
    }
  }
}`

  const response = await fetchGraphQL(query)

  const {
    data: {
      pageCollection: { items }
    }
  } = await response.json()

  return items[0]
}
