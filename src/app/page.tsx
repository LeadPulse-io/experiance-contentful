import React from 'react'
import { createExperience, fetchBySlug, ExperienceRoot, detachExperienceStyles } from '@contentful/experiences-sdk-react'

import { client } from '@/utils/contentful-client'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
// import Experience from '@/components/Experience'

import './styles.scss'

import Experience from '@/components/register-components'

import '@/utils/experiance-config'
import '@/utils/registeredTokens'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const experience = await fetchBySlug({
    client,
    slug: 'home',
    experienceTypeId: 'landingPage',
    localeCode: 'en-US'
  })

  const stylesheet = detachExperienceStyles(experience!)

  const experienceJSON = experience ? JSON.stringify(experience) : null

  return (
    <>
      <Navbar />
      {stylesheet && <style>{stylesheet}</style>}
      <Experience experienceJSON={experienceJSON} locale={'en-US'} />
      <Footer />
    </>
  )
}
