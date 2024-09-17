import fetchGraphQL from '@/utils/contentful-graphql-client'

const IsPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData() {
  const query = `query {
 insightsCollection(preview: ${IsPreview}, limit:1){
    items{
      hero{
        title
        blurb
        image{
          url
          description
          title
        }
      }
      featuredItemsCollection(limit:2){
        items{
          title
          slug
          type
          category
          design
          jellyImage{
            url
            description
            title
            width
            height
          }
          shortSummary
          publishedDate
        }
      }ctaBlock{
        heading
        primaryCtaText
        primaryCtaUrl
        secondaryCtaText
        secondaryCtaUrl
      }
      allItemsCollection(limit:20){
        items{
          __typename
          ... on Blog{
          title
          slug
          type
          category
          design
          featuredImage{
            url
            description
            title
          }
          jellyImage{
            url
            description
            title
            width
            height
          }
          summary
          shortSummary
          publishedDate
          contentCollection(limit:15){
            items{
              __typename
              ... on ItemSectionText{
                blurb
              }
              __typename
              ... on ItemTestimonial{
                testimonial{
                  quote
                  reviewer{
                    name
                    company
                    role
                  }
                }
              }
              __typename
              ... on ItemCard{
                heading
                blurb
              }
            }
          }
        }
          __typename
          ... on ItemCard{
            blurb
          }
        }
      }
        seoMetadata{
        title
        description
        keywords
        heading
      }
    }
  }
}`

  const response = await fetchGraphQL(query)

  const {
    data: {
      insightsCollection: { items }
    }
  } = await response.json()

  return items[0]
}
