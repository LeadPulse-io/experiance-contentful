import fetchGraphQL from '@/utils/contentful-graphql-client'

const IsPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData() {
  const query = `query {
  aboutCollection(preview: ${IsPreview}, limit:1){
    items{
      hero{
        title
        blurb
      }
      whoWeAre{
        title
        blurb
        itemsCollection(limit:10){
          items{
            __typename
            ... on Person{
              name
              role
              image{
                url
                title
              }
              linkedInUrl
            }
          }
        }
      }
      whyChooseUs{
        title
        blurb
        itemsCollection(limit:5){
          items{
            __typename
            ... on ItemCard{
              heading
              blurb
            }
          }
        }
      }
      contactUs{
        heading
        blurb
        primaryCtaText
        primaryCtaUrl
      }
      joinUs{
        heading
        blurb
        primaryCtaText
        primaryCtaUrl
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
      aboutCollection: { items }
    }
  } = await response.json()

  return items[0]
}
