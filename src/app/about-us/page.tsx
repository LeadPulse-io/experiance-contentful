import Image from 'next/image'
import { headers } from 'next/headers'

import { fetchData } from './query'
import { Employees } from './_components'
import ContactForm from './_components/form'

import './styles.scss'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const data = await fetchData()

  return {
    title: data.seoMetadata?.title,
    description: data.seoMetadata?.description
  }
}

export default async function Page() {
  const headersList = headers()

  const ip = headersList.get('X-Forwarded-For') ?? '0.0.0.0'

  const data = await fetchData()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.leadpulse.io'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://www.leadpulse.io/about-us'
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <div className="banner_aboutusbg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1440">
            <g className="circle_blur">
              <circle cx="720" cy="70" fill="white" id="svg_1" r="290"></circle>
            </g>
            <g className="circle_full">
              <circle cx="720" cy="70" fill="white" id="svg_1" r="230"></circle>
            </g>
            <g className="circle_line">
              <g className="circle_one">
                <circle cx="720" cy="70" fill="white" id="svg_1" r="628" stroke="white" fillOpacity={0} strokeOpacity={0.4}></circle>
              </g>

              <g className="circle_line_blur">
                <circle cx="720" cy="70" fill="white" id="svg_1" r="711" stroke="white" fillOpacity={0} strokeOpacity={1}></circle>
              </g>
              <g className="circle_two">
                <circle cx="720" cy="70" fill="white" id="svg_1" r="936" stroke="white" fillOpacity={0} strokeOpacity={1}></circle>
              </g>
              <g className="circle_three">
                <circle cx="720" cy="70" fill="white" id="svg_1" r="1089" stroke="white" fillOpacity={0} strokeOpacity={1}></circle>
              </g>
            </g>
          </svg>
          <div className="banner_aboutus">
            <h1 dangerouslySetInnerHTML={{ __html: data.hero.title }} />
            <p>{data.hero.blurb}</p>
          </div>
        </div>
        <Employees data={data.whoWeAre.itemsCollection.items} whoWeAre={data.whoWeAre} />
        <div className="us_block_wap">
          <div className="us_block">
            <h2>{data.whyChooseUs.title}</h2>
            <p>{data.whyChooseUs.blurb}</p>
            <div className="tray">
              {data.whyChooseUs.itemsCollection.items.map((item: any, idx: number) => (
                <div className="tile" key={idx}>
                  <h3>{item.heading}</h3>
                  <p>{item.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact_wrap" id="contact-us">
          <div className="contact">
            <div className="title">
              <Image src="/star.png" width={32} height={32} alt="Join" />
              contact us
            </div>
            <div className="tray">
              <div className="tray_col">
                <div className="tray_col_wrap">
                  <img src="/arrow_up.png" />
                  <h2>Tell us about your business.</h2>
                  <p>If youre ready to find out what makes us different, tell us a bit about your business and well reach out to book your consultation.</p>
                  <img src="/arrow_down.png" />
                </div>
              </div>
              <div className="tray_col">
                <ContactForm ipAddress={ip} />
              </div>
            </div>
          </div>
        </div>
        <div className="us_block_wap nobg">
          <div className="us_block">
            <h2>{data.joinUs.heading}</h2>
            <p>{data.joinUs.blurb}</p>
            <Link href={data.joinUs.primaryCtaUrl} className="btn" target="_blank">
              {data.joinUs.primaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
