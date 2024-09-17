import fetchGraphQL from '@/utils/contentful-graphql-client'

const isPreview = process.env.CONTENTFUL_PREVIEW ?? false

export async function fetchData(service: string) {
  const query = `query {
  servicesCollection(where:{slug:"${service}"}, limit:1, preview:${isPreview}){
    items{
      title
      slug
      hero{
        title
        blurb
        image{
          url
          description
          title
        }
        primaryCtaText
        primaryCtaUrl
        heroItems{
          itemsCollection(limit:2){
            items{
              __typename
              ... on ItemCard{
                heading
                cardsCollection(limit:4){
                  items{
                    heading
                  }
                }
              }
            }
          }
        }
      }
      issues{
        title
        blurb
        itemsCollection(limit:10){
          items{
            __typename
            ... on ItemCard{
              heading
            }
          }
        }
      }
      solution{
        title
        itemsCollection(limit:10){
          items{
            __typename
            ... on ItemCard{
              heading
              blurb
            }
          }
        }
      }
      clients{
        title
        blurb
        itemsCollection(limit:10){
          items{
            __typename
            ... on ItemCard{
              title
              image{
                url
                description
                title
              }
              primaryCtaUrl
            }
          }
        }
      }
      partnersCollection(limit:10){
        items{
          heading
          image{
            url
            description
            title
          }
          primaryCtaUrl
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
                image{
                  url
                  title
                  description
                }
                icon{
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
      impact{
        title
        blurb
        primaryCtaText
        primaryCtaUrl
        itemsCollection(limit:2){
          items{
            __typename
            ... on ItemCard{
              heading
              blurb
              cardsCollection(limit:10){
                items{
                  heading
                }
              }
            }
          }
        }
      }
      caseStudiesCollection(limit:2){
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
      process{
        title
        itemsCollection(limit:8){
          items{
            __typename
            ... on ItemCard{
              heading
              blurb
            }
          }
        }
      }
      whatSetsUsApart{
        title
        blurb
        itemsCollection(limit:4){
          items{
            __typename
            ... on ItemCard{
              heading
              blurb
              icon{
                url
                title
              }
              cardsCollection(limit:10){
                items{
                  heading
                }
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
          title
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
      servicesCollection: { items }
    }
  } = await response.json()

  return items[0]
}
