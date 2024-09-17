'use client'
import Link from 'next/link'
import { parse } from 'marked'
import React, { useRef, useState } from 'react'

import { CalendarIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import SubscribeForm from './form'
import { useRouter } from 'next/navigation'

export default function Articles(props: any) {
  const [activeType, setActiveType] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All Categories')
  const dropdownRef = useRef(null)
  const dropdownRef_two = useRef(null)
  const router = useRouter()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const getPublishedDate = (publishedDate: Date) => {
    return monthNames[new Date(publishedDate).getMonth()] + ' ' + new Date(publishedDate).getDate() + ', ' + new Date(publishedDate).getFullYear()
  }
  const closeMobileMenu = () => {
    if (dropdownRef.current) {
      ;(dropdownRef.current as HTMLInputElement).checked = false
    }
    if (dropdownRef_two.current) {
      ;(dropdownRef_two.current as HTMLInputElement).checked = false
    }
  }

  return (
    <div className="casestudy">
      <h3>Content type</h3>
      <label htmlFor="contenttype" className="contenttype">
        {activeType}
        <ChevronDownIcon width={24}></ChevronDownIcon>
      </label>
      <input type="checkbox" id="contenttype" ref={dropdownRef}></input>
      <div className="menu">
        <ul>
          <li>
            <button
              className={activeType === 'All' ? 'active' : ''}
              onClick={() => {
                setActiveType('All')
                closeMobileMenu()
              }}
            >
              All
            </button>
          </li>
          <li></li>
          <li>
            <button
              className={activeType === 'Guide' ? 'active' : ''}
              onClick={() => {
                setActiveType('Guide')
                closeMobileMenu()
              }}
            >
              Guide
            </button>
          </li>
          <li></li>
          {/* <li>
            <button className={activeType === 'Webinar' ? 'active' : ''} onClick={() => setActiveType('Webinar')}>
              Webinar
            </button>
          </li>
          <li></li> */}
          {/* <li>
            <button className={activeType === 'Article' ? 'active' : ''} onClick={() => setActiveType('Article')}>
              Article
            </button>
          </li>
          <li></li> */}
          {/* <li>
            <button className={activeType === 'News and Events' ? 'active' : ''} onClick={() => setActiveType('News and Events')}>
              News & Events
            </button>
          </li>
          <li></li> */}
          <li>
            <button
              className={activeType === 'Case Study' ? 'active' : ''}
              onClick={() => {
                setActiveType('Case Study')
                closeMobileMenu()
              }}
            >
              Case Study
            </button>
          </li>
          <li></li>
          <li>
            <button
              className={activeType === 'Blog' ? 'active' : ''}
              onClick={() => {
                setActiveType('Blog')
                closeMobileMenu()
              }}
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
      <div className="casestudy_tray">
        <h3>Category</h3>
        <label htmlFor="categoriestype" className="categoriestype">
          {activeCategory} <ChevronDownIcon width={24}></ChevronDownIcon>
        </label>
        <input type="checkbox" id="categoriestype" ref={dropdownRef_two}></input>
        <div className="side_menu">
          <div className="side_menu_wrap">
            <button
              className={activeCategory === 'All Categories' ? 'active' : ''}
              onClick={() => {
                setActiveCategory('All Categories')
                closeMobileMenu()
              }}
            >
              All Categories
            </button>
            <button
              className={activeCategory === 'Website Development' ? 'active' : ''}
              onClick={() => {
                setActiveCategory('Website Development')
                closeMobileMenu()
              }}
            >
              Website Development
            </button>
            <button
              className={activeCategory === 'Marketing Automation' ? 'active' : ''}
              onClick={() => {
                setActiveCategory('Marketing Automation')
                closeMobileMenu()
              }}
            >
              Marketing Automation Revops
            </button>
            <button
              className={activeCategory === 'App Development' ? 'active' : ''}
              onClick={() => {
                setActiveCategory('App Development')
                closeMobileMenu()
              }}
            >
              App Development
            </button>
          </div>
        </div>
        <div className="data">
          {props.data.allItemsCollection.items
            .filter((item: any) => {
              if (item.__typename !== 'Blog' || activeType === 'All') {
                return true
              }
              return item.type === activeType
            })
            .filter((item: any) => {
              if (item.__typename !== 'Blog' || activeCategory === 'All Categories') {
                return true
              }
              return item.category === activeCategory
            })
            .map((item: any, idx: number) => (
              <React.Fragment key={idx}>
                {item.__typename === 'Blog' && (
                  <div className="data_block" onClick={() => router.push(`/insights/${item.type.replaceAll(' ', '-').toLowerCase()}/${item.slug}`)}>
                    <div className="tray_img">
                      <img src={item.jellyImage?.url} alt={item.jellyImage.title} width={item.jellyImage.width} height={item.jellyImage.height} />
                    </div>
                    <div className="tray_date">
                      <h2>{item.title}</h2>
                      <p dangerouslySetInnerHTML={{ __html: parse(item.shortSummary) }} />
                      <div className="row">
                        <span>
                          {getPublishedDate(item.publishedDate)}&nbsp;
                          <CalendarIcon width={18} height={18}></CalendarIcon>
                        </span>
                        <span>{item.type}</span>
                        <Link href={`/insights/${item.type.replaceAll(' ', '-').toLowerCase()}/${item.slug}`}>
                          <img src="doublearrow-left.png"></img>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {item.__typename === 'ItemCard' && <SubscribeForm ipAddress={props.ipAddress} data={item.blurb} />}
              </React.Fragment>
            ))}
          {/* <div className="loadmore">
            <button>
              Load more
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 6.49976L2.12116 4.8786L6.49996 9.2574L10.8787 4.87869L12.4998 6.49985L8.97666 10.023L4.03706 10.0368L0.5 6.49976Z"
                  fill="#F25930"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.12129 10.8787L0.500126 12.4999L4.87893 16.8787L4.8788 16.8788L6.49996 18.5L6.50009 18.4998L6.50012 18.4999L8.12128 16.8787L8.12124 16.8787L12.5 12.5L10.8788 10.8788L6.50009 15.2575L2.12129 10.8787Z"
                  fill="#F25930"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
