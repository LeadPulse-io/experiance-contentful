// src/contentfulClient.ts

import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'preview.contentful.com'

  // host: process.env.CTFL_API_HOST,
  // needs to be access token if host = 'cdn.contentful.com' and preview token if 'preview.contentful.com'
})
