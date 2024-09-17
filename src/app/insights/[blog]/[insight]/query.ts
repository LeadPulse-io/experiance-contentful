import fetchGraphQL from '@/utils/contentful-graphql-client'

const IsPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData(insight: string) {
  const query = `query {
  blogCollection(limit:1, where:{slug:"${insight}"}){
    items{
      sys{
        firstPublishedAt
        publishedAt
      }
      title
      slug
      minutesRead
      type
      category
      design
      publishedDate
      featuredImage{
        url
        title
        description
        width
        height
      }
      shortSummary
      summary
      contentCollection(limit:15){
        items{
          __typename
          ... on ItemSectionText{
            id
            title
            anchorTitle
            blurb
            image{
        url
        title
        description
      }
            itemsCollection(limit:10){
              items{
                __typename
                ...on ItemCard{
                  heading
                  blurb
                }
              }
            }
          }
          ... on ItemTestimonial{
            id
            title
            anchorTitle
            blurb
            testimonial{
              quote
              reviewer{
                name
                role
                company
              }
            }
          }
          ... on ItemCard{
            id
          }
        }
      }
      ctaBlock{
        heading
        blurb
        primaryCtaText
        primaryCtaUrl
        secondaryCtaText
        secondaryCtaUrl
      }
      subscribe{
        blurb
      }
      relatedPostsCollection(limit:3){
        items{
          title
          type
          slug
          jellyImage{
            url
            title
            description
          }
          shortSummary
          publishedDate
        }
      }
      testimonialsCollection(limit:5){
        items{
          company
          logo{
            url
          }
          reviewer{
            name
            role
          }
          quote
        }
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
      blogCollection: { items }
    }
  } = await response.json()

  return items[0]
}

export async function fetchArticles() {
  const query = `query {
  insightsCollection(preview: ${IsPreview}, limit: 1) {
    items {
      allItemsCollection(limit: 50) {
        items {
          __typename
          ... on Blog {
            slug
            type
          }
        }
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
