import React from 'react'
import Link from 'next/link'
import { CalendarIcon } from '@heroicons/react/24/solid'

import { fetchData } from './query'
import Connect from '@/components/connect'
import Articles from './components/articles'
import { headers } from 'next/headers'

import './styles.scss'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const data = await fetchData()
  return {
    title: data.seoMetadata?.title,
    description: data.seoMetadata?.description,
    alternates: {
      canonical: 'https://www.leadpulse.io/insights'
    }
  }
}

export default async function Insights() {
  const headersList = headers()
  const ip = headersList.get('X-Forwarded-For') ?? '0.0.0.0'
  const data = await fetchData()
  // const dropdownRef = useRef(null)

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const getPublishedDate = (publishedDate: Date) => {
    return monthNames[new Date(publishedDate).getMonth()] + ' ' + new Date(publishedDate).getDate() + ', ' + new Date(publishedDate).getFullYear()
  }

  return (
    <div className="container">
      <div className="banner_insights">
        <h1 dangerouslySetInnerHTML={{ __html: data.hero.title }} />
        <p>{data.hero.blurb}</p>
      </div>

      <div className="featured">
        <div className="title">
          <img src="/tech_icon.png"></img> FEATURED
        </div>
        {data.featuredItemsCollection.items.map((item: any, idx: number) => (
          <div className="tray" key={idx}>
            <div className="tray_img">
              <img src={item.jellyImage.url} alt={item.jellyImage.title} width={item.jellyImage.width} height={item.jellyImage.height} />
            </div>
            <div className="tray_date">
              <div className="row">
                <span>{item.type}</span>

                <span>
                  {getPublishedDate(item.publishedDate)}
                  <CalendarIcon width={18} height={18}></CalendarIcon>
                </span>
              </div>
              <h2>{item.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: item.shortSummary }} />
              <Link href={`/insights/${item.type.replaceAll(' ', '-').toLowerCase()}/${item.slug}`}>
                <img src="doublearrow-left.png"></img>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="casestudy_wrap">
        <Articles data={data} ipAddress={ip} />
      </div>

      <div className="connect">
        <Connect props={data.ctaBlock} />
      </div>
    </div>
  )
}
