'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.scss'
export default function Endorsement(props: any) {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className="endorsement_wrap">
      <div className="endorsement">
        <div className="endorsement_title  ">
          <Image src={'/star.png'} width={32} height={32} alt="service icon"></Image>Endorsement
        </div>
        <div className="title" dangerouslySetInnerHTML={{ __html: props.endorsements.title ?? '' }} />{' '}
        <div className="menu">
          <ul>
            {props.endorsements.itemsCollection.items.map((item: any, idx: number) => (
              <React.Fragment key={item.title}>
                <li>
                  <button className={idx === activeTab ? 'active' : ''} onClick={() => setActiveTab(idx)}>
                    {item.title}
                  </button>
                </li>
                <li></li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        {props.endorsements.itemsCollection.items.map(
          (item: any, idx: number) =>
            idx === activeTab && (
              <div className="work" key={idx}>
                <div className="work_col">
                  <h2>{item.heading}</h2>
                  <p>{item.blurb}</p>
                  <Link href={item.primaryCtaUrl ?? ''}>
                    {item.primaryCtaText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.99976 12.5L4.3786 10.8788L8.7574 6.50004L4.37869 2.12133L5.99985 0.500174L9.52302 4.02334L9.53681 8.96294L5.99976 12.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.3787 10.8787L11.9999 12.4999L16.3787 8.12107L16.3788 8.1212L18 6.50004L17.9998 6.49991L17.9999 6.49988L16.3787 4.87872L16.3787 4.87876L12 0.500048L10.3788 2.12121L14.7575 6.49991L10.3787 10.8787Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="work_col">
                  <Image src={item.image?.url ?? ''} width={200} height={200} alt={item.image?.title ?? ''} />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}
