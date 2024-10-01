import { ExperienceRoot, fetchBySlug, detachExperienceStyles } from '@contentful/experiences-sdk-react'

import { client } from '@/utils/contentful-client'
import Navbar from '@/components/navbar'

export const dynamic = 'force-dynamic'

interface Props {
  params: { locale: string; slug: string[] }
}

export default async function Page({ params: { slug } }: Props) {
  const experience = await fetchBySlug({
    client,
    slug: slug.join('/'),
    experienceTypeId: 'leadpulseLandingPage',
    localeCode: 'en-US'
  })

  const stylesheet = experience ? detachExperienceStyles(experience) : null

  const experienceJSON = experience ? JSON.stringify(experience) : null

  const localeCode = 'en-US'

  return (
    <>
      {stylesheet && (
        <style key="experiance-ss" data-ssg>
          {stylesheet}
        </style>
      )}
      <Navbar />
      <div className="w-full">
        <ExperienceRoot experience={experienceJSON} locale={localeCode} />
      </div>
    </>
  )
}
