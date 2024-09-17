import fetchGraphQL from '@/utils/contentful-graphql-client'

const IsPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData() {
  const query = `query {
  partnersCollection(preview: ${IsPreview}, limit:1){
    items{
      hero{
        title
        blurb
      }
      partnerListCollection(limit:10){
        items{
          id
          title
          anchorTitle
          itemsCollection(limit:10){
            items{
              __typename
              ... on ItemCard{
                heading
                blurb
                image{
                  url
                  title
                  description
                }
                primaryCtaUrl
              }
            }
          }
        }
      }
      ctaBlock{
        heading
        primaryCtaText
        primaryCtaUrl
        secondaryCtaText
        secondaryCtaUrl
      }
      seoMetadata{
        title
        description
        heading
        keywords
      }
    }
  }
}`

  const response = await fetchGraphQL(query)

  const {
    data: {
      partnersCollection: { items }
    }
  } = await response.json()

  return items[0]
}
