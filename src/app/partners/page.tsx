import Connect from '@/components/connect'
import './style.scss'
import { fetchData } from './query'
import { Partners } from './_components'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const data = await fetchData()

  return {
    title: data.seoMetadata?.title,
    description: data.seoMetadata?.description,
    alternates: {
      canonical: 'https://www.leadpulse.io/partner'
    }
  }
}

export default async function Page() {
  const data = await fetchData()

  return (
    <>
      <div className="container">
        <div className="bannerpartner_wrap">
          <div className="banner_partner">
            <h1>{data.hero.title}</h1>
            <p>{data.hero.blurb}</p>
          </div>
        </div>
        <Partners data={data} />

        <div className="connect">
          <Connect props={data.ctaBlock} />
        </div>
      </div>
    </>
  )
}
