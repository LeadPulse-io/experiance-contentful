import 'server-only'

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENV ?? 'master'

export default async function fetchGraphQL(query: string) {
  const RequestURL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}` as const

  return await fetch(RequestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query }),
    next: {
      tags: ['contentful'],
      revalidate: 10
    }
  })
}
