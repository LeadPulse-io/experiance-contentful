import React from 'react'
import { notFound } from 'next/navigation'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

import { fetchData } from './query'
import Faq from '@/components/faq'
import Tech from '@/components/tech'
import Client from '@/components/client'
import Mssvg from '@/components/svg/SVG6'
import Ourwork from '@/components/ourwork'
import WebDSVG from '@/components/svg/SVG8'
import RevOpsSVG from '@/components/svg/SVG7'
import Technology from '@/components/technology'
import Shipfaster from '@/components/shipfaster/shipfaster'
import { Process } from './_components'

import './styles.scss'
import Image from 'next/image'
import Connect from '@/components/connect'
import { Cta } from '@/components/cta'

interface Props {
  params: {
    service: string
  }
}

export async function generateMetadata(props: Props) {
  const data = await fetchData(props.params.service)

  if (!Object.keys(data ?? {}).length) {
    notFound()
  }

  return {
    title: data.seoMetadata?.title,
    description: data.seoMetadata?.description,
    keywords: data.seoMetadata?.keywords,
    alternates: {
      canonical: `https://www.leadpulse.io/${props.params.service}`
    }
  }
}

export async function generateStaticParams() {
  return [{ service: 'website-development' }, { service: 'marketing-revops' }, { service: 'managed-services' }]
}

export default async function Page(props: Props) {
  const data = await fetchData(props.params.service)

  if (!Object.keys(data ?? {}).length) {
    notFound()
  }

  return (
    <>
      <div className="container">
        <div className={'bannerwebdev_wrap '}>
          <div className={props.params.service === 'website-development' ? 'bannerwebdev_svg wb' : 'bannerwebdev_svg '}>
            {props.params.service === 'managed-services' && <Mssvg></Mssvg>}
            {props.params.service === 'marketing-revops' && <RevOpsSVG></RevOpsSVG>}
            {props.params.service === 'website-development' && <WebDSVG></WebDSVG>}
          </div>
          <div className={props.params.service === 'website-development' ? 'banner_webdev hero_txt ' : 'banner_webdev '}>
            <div className="banner_webdev_heading">
              <h1 dangerouslySetInnerHTML={{ __html: data.hero.title }} />
              <p dangerouslySetInnerHTML={{ __html: data.hero.blurb }} />
              <Cta text={data.hero.primaryCtaText} url={data.hero.primaryCtaUrl} className={`border_${props.params.service}`} />
              {data.hero.heroItems?.itemsCollection?.items?.map((card: any, idx: number) => (
                <div className="sub_title" key={idx}>
                  <span className="btn">{card.heading}</span>
                  {card.cardsCollection.items?.map((item: any, index: number) => (
                    <>
                      {index % 2 === 0 && item.heading}
                      {index % 2 !== 0 && <span className="accent">{item.heading}</span>}
                      {/* Cobbling together middleware <span className="accent">Integrating 3rd-party reporting</span>Manual imports/exports of data */}
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {props.params.service !== 'managed-services' && (
          <div className="mob_show">
            {data.hero.heroItems?.itemsCollection?.items?.map((card: any, idx: number) => (
              <div className="sub_title" key={idx}>
                <span className="btn">{card.heading}</span>
                {card.cardsCollection.items?.map((item: any, index: number) => (
                  <>
                    {index % 2 === 0 && item.heading}
                    {index % 2 !== 0 && <span className="accent">{item.heading}</span>}
                    {/* Cobbling together middleware <span className="accent">Integrating 3rd-party reporting</span>Manual imports/exports of data */}
                  </>
                ))}
              </div>
            ))}
          </div>
        )}

        {data.issues && <Tech issues={data.issues} />}
        {data.solution && <Shipfaster data={data}></Shipfaster>}

        <Client props={data.clients} />
        <Cta text={data.hero.primaryCtaText} url={data.hero.primaryCtaUrl} className={`border_color`} />
        <Technology data={data.technologiesCollection} aboutOurTech={data.aboutOurTech} />
        {data.impact && (
          <div className="exepectations_wrap">
            <div className="exepectations">
              <div className="technology_title">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                  <rect x="1" y="0.5" width="31" height="31" rx="3.5" fill="#F25930" />
                  <rect x="1" y="0.5" width="31" height="31" rx="3.5" stroke="white" />
                  <path
                    d="M16.5 5L18.323 12.2145L25.1001 9.14161L20.5963 15.0651L27.2242 18.4477L19.785 18.6197L21.2727 25.9107L16.5 20.2016L11.7273 25.9107L13.215 18.6197L5.77579 18.4477L12.4037 15.0651L7.89985 9.14161L14.677 12.2145L16.5 5Z"
                    fill="white"
                  />
                </svg>
                EXPECTATIONS
              </div>
              <h2>{data.impact.title}</h2>
              <p>{data.impact.blurb}</p>
              <div className="compare">
                <div className="compare_col">
                  <h3>{data.impact.itemsCollection.items[0].heading}</h3>
                  <ul>
                    {data.impact.itemsCollection.items[0].cardsCollection.items.map((item: any, idx: number) => (
                      <li key={idx}>
                        <span>
                          <XCircleIcon width={24}></XCircleIcon>
                        </span>
                        <span>{item.heading}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="compare_col">
                  <img src="/Logo.png"></img>
                  <ul>
                    {data.impact.itemsCollection.items[1].cardsCollection.items.map((item: any, idx: number) => (
                      <li key={idx}>
                        <span>
                          <CheckCircleIcon width={24} color="#F25930"></CheckCircleIcon>
                        </span>
                        <span>{item.heading}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Cta text={'Learn more about us'} url={'/about-us'} />
            </div>
          </div>
        )}
        {data.websiteScanResult && (
          <div className="result">
            <div className="result_title">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#151313" fillOpacity="0.03" />
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" />
                <rect x="7" y="16" width="4" height="8" fill="#F25930" />
                <rect x="14" y="13" width="4" height="11" fill="#F25930" />
                <rect x="21" y="8" width="4" height="16" fill="#F25930" />
              </svg>
              Results
            </div>
            <h2>Your Results Are In</h2>
            <p>Major improvements, minor fixes. </p>
            <img src="/result_data.png"></img>
          </div>
        )}
        {data.caseStudiesCollection.items.length > 0 && <Ourwork caseStudies={data.caseStudiesCollection} />}
        {data.process && <Process process={data.process} />}
        {data.whatSetsUsApart && (
          <div className="expertise">
            <h2 dangerouslySetInnerHTML={{ __html: data.whatSetsUsApart.title }} />
            <p>{data.whatSetsUsApart.blurb}</p>
            <div className="expertise_tray">
              {data.whatSetsUsApart.itemsCollection.items.map((item: any, idx: number) => (
                <div className="expertise_tail" key={idx}>
                  {/*  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                    <rect width="75" height="75" rx="4" fill="#F25930" />
                    <path d="M35.5 22H52V32.3333H23V42.6667H52V53H37.5" stroke="white" strokeWidth="5" />
                    <rect x="30" y="17" width="6" height="10" fill="white" />
                    <circle cx="36" cy="53" r="5" fill="white" />
                  </svg> */}
                  <Image src={item.icon.url} width={75} height={75} alt={item.icon.title}></Image>
                  <h3>{item.heading}</h3>
                  <p>{item.blurb}</p>
                  <ul>
                    {item.cardsCollection.items.map((itm: any, index: number) => (
                      <li key={index}>{itm.heading}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="connect">
          <Connect props={data.contactUs} />
        </div>
        {data.faq && <Faq faq={data.faq} />}
      </div>
    </>
  )
}
