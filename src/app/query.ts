import fetchGraphQL from '@/utils/contentful-graphql-client'

const IsPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData() {
  const query = `query {
  homeCollection(preview: ${IsPreview}, limit:1){
    items{
      hero{
        __typename
        ... on ComponentHero{
          title
          blurb
          primaryCtaText
          primaryCtaUrl
        }
      }
      clients{
        blurb
        itemsCollection{
          __typename
          ... on ItemSectionTextItemsCollection{
            items{
              __typename
              ...on ItemCard{
                title
                primaryCtaUrl
                image{
                  url
                  description
                  title
                }
              }
            }
          }
        }
      }
      partnersCollection(limit: 10){
        items{
          title
                primaryCtaUrl
                image{
                  url
                  description
                  title
                }
        }
      }
      servicesCollection(limit:3){
        items{
          heading
          blurb
          primaryCtaUrl
          primaryCtaText
          image{
            url
            description
            title
          }
        }
      }
      aboutOurTech{
        heading
        blurb
      }
      technologiesCollection(limit:10){
        items{
          id
          title
          anchorTitle
          itemsCollection(limit:10){
            items{
              __typename
              ... on ItemCard{
                heading
                icon{
                  url
                  title
                  description
                }
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
      whyWorkWithUs{
        title
        primaryCtaText
        primaryCtaUrl
        itemsCollection(limit:6){
          items{
            __typename
            ... on ItemCard{
              blurb
              image{
                url
              }
            }
          }
        }
      }
      testimonials{
        itemsCollection(limit:5){
          items{
            __typename
            ... on ItemTestimonial{
              testimonial{
                company
                quote
                logo{
                  url
                }
                reviewer{
                  name
                  company
                  role
                }
              }
            }
          }
        }
      }
      endorsements{
        title
        itemsCollection(limit:3){
          items{
            __typename
            ... on ItemCard{
              title
              heading
              blurb
              primaryCtaUrl
              primaryCtaText
              image{
                title
                url
                description
              }
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
      faq{
        title
        image{
          url
        }
        itemsCollection(limit:10){
          items{
            __typename
            ... on ItemCard{
              title
              blurb
            }
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
      homeCollection: { items }
    }
  } = await response.json()

  return items[0]
}
