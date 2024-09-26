import Head from 'next/head'
import { ExperienceRoot, fetchBySlug, detachExperienceStyles } from '@contentful/experiences-sdk-react'

import { client } from '@/utils/contentful-client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

interface Props {
  params: { locale: string; slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  const experience = await fetchBySlug({
    client,
    slug,
    experienceTypeId: 'leadpulseLandingPage',
    localeCode: 'en-US'
  })

  const stylesheet = experience ? detachExperienceStyles(experience) : null

  const experienceJSON = experience ? JSON.stringify(experience) : null

  const localeCode = 'en-US'

  return (
    <>
      <Head>
        {stylesheet && (
          <style key="experiance-ss" data-ssg>
            {stylesheet}
          </style>
        )}
      </Head>
      <Navbar />
      <ExperienceRoot experience={experienceJSON} locale={localeCode} />
      <Footer />
    </>
  )
}
