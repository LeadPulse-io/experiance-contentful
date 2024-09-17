import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

import { Blog, Guide } from './_designs'
import { fetchArticles, fetchData } from './query'

interface Props {
  params: {
    insight: string
    blog: string
  }
}

export async function generateMetadata(props: Props) {
  const data = await fetchData(props.params.insight)

  if (!Object.keys(data ?? {}).length) {
    notFound()
  }

  return {
    title: data.seoMetadata?.title ?? '',
    description: data.seoMetadata?.description ?? '',
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.shortSummary,
      url: `https://www.leadpulse.io/insights/${data.type.toLowerCase().replaceAll(' ', '-')}/${data.slug}`,
      images: {
        url: data.featuredImage.url,
        alt: data.featuredImage.title
      }
    },
    alternates: {
      canonical: `https://www.leadpulse.io/insights/${data.type.toLowerCase().replaceAll(' ', '-')}/${data.slug}`
    }
  }
}

export async function generateStaticParams() {
  const articles = await fetchArticles()

  return articles.allItemsCollection.items
    .filter(({ __typename }: any) => __typename === 'Blog')
    .map(({ slug, type }: any) => ({
      blog: type.toLowerCase().replaceAll(' ', '-'),
      insight: slug
    }))
}

export default async function Page(props: Props) {
  const headersList = headers()

  const ip = headersList.get('X-Forwarded-For') ?? '0.0.0.0'

  const data = await fetchData(props.params.insight)

  if (!Object.keys(data ?? {}).length) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.leadpulse.io/insights/${data.type.toLowerCase().replaceAll(' ', '-')}/${data.slug}`
    },
    headline: data.title,
    description: data.shortSummary,
    image: data.featuredImage.url
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {data.design === 'Blog' ? <Blog data={data} ipAddress={ip} /> : <Guide data={data} ip={ip} />}
    </>
  )
}
