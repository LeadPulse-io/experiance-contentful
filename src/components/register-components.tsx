'use client'

import { ExperienceRoot } from '@contentful/experiences-sdk-react'

interface ExperienceProps {
  experienceJSON: string | null
  locale: string
}

export default function Experience({ experienceJSON, locale }: ExperienceProps) {
  return <ExperienceRoot experience={experienceJSON} locale={locale} />
}
