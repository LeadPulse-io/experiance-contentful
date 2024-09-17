'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { parse } from 'marked'
import { useRouter } from 'next/navigation'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CalendarIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

import './styles.scss'
import Image from 'next/image'
import SubscribeForm from '@/app/insights/components/form'

export default function Blog(props: any) {
  const router = useRouter()
  const [activeTab, setActiveTab] = React.useState('our_story_mastery')
  const [activeDropdown, setActiveDropdown] = React.useState(props.data.contentCollection.items[0].anchorTitle ?? props.data.contentCollection.items[1].anchorTitle)
  const dropdownRef = useRef(null)
  const handleClick = (idx: string, tab: string) => {
    setActiveTab(idx)
    setActiveDropdown(tab)
  }
  const closeMobileMenu = () => {
    if (dropdownRef.current) {
      ;(dropdownRef.current as HTMLInputElement).checked = false
    }
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const getPublishedDate = (publishedDate: Date) => {
    return monthNames[new Date(publishedDate).getMonth()] + ' ' + new Date(publishedDate).getDate() + ', ' + new Date(publishedDate).getFullYear()
  }

  return (
    <div className="container">
      <div className="banner_blog">
        <div className="banner_blog_wrap">
          <div className="banner_col">
            <img src={props.data.featuredImage.url} alt={props.data.featuredImage.title} />
          </div>
          <div className="banner_col">
            <div className="row">
              <span>
                {getPublishedDate(props.data.publishedDate)}
                <CalendarIcon width={18} height={18}></CalendarIcon>
              </span>
              <span>{props.data.category}</span>
            </div>
            <h1>{props.data.title}</h1>
          </div>
        </div>
      </div>
      <div className="blogdata_wrap">
        <div className="blog_data">
          <div className="blog_menu">
            <div className="mob_title">Table of content</div>
            <label htmlFor="dropdown" className="dropdown_menu">
              {activeDropdown} <ChevronDownIcon width={24}></ChevronDownIcon>
            </label>
            <input type="checkbox" id="dropdown" ref={dropdownRef}></input>
            <div className="blog_menu_wrap">
              <Link className="back" href="/insights">
                &lt;- Back to blog
              </Link>
              <ul>
                {props.data.contentCollection.items.map(
                  (item: any) =>
                    item.anchorTitle && (
                      <li key={item.id}>
                        <Link
                          className={item.id === activeTab ? 'active' : ''}
                          href={''}
                          onClick={() => closeMobileMenu()}
                          onMouseOver={e => {
                            e.preventDefault()
                            router.push(`#${item.id}`)
                            handleClick(item.id, item.anchorTitle)
                          }}
                        >
                          {item.anchorTitle}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
            <div className="mob_icon">
              <Link href={'#'}>
                <Image src="/mail.png" width={32} height={32} alt="mail"></Image>
              </Link>
              <Link href={'#'}>in</Link>
            </div>
          </div>
          <div className="blog_try">
            <div className="summary-short" dangerouslySetInnerHTML={{ __html: parse(props.data.summary) }} />
            {props.data.contentCollection.items.map(
              (item: any) =>
                item.__typename === 'ItemSectionText' && (
                  <React.Fragment key={item.id}>
                    {item.title && <h2 id={item.id}>{item.title}</h2>}
                    <p dangerouslySetInnerHTML={{ __html: parse(item.blurb) }} />
                  </React.Fragment>
                )
            )}
            {props.data.subscribe && (
              <SubscribeForm ipAddress={props.ipAddress} data={props.data.subscribe.blurb} />
              /*  <div className="subscribe">
                <h2 dangerouslySetInnerHTML={{ __html: props.data.subscribe.blurb }} />
                <form>
                  <div className="row">
                    <div className="col">
                      <label>First Name</label>
                      <input type="text" placeholder="First Name"></input>
                    </div>
                    <div className="col">
                      <label>Business Email</label>
                      <input type="text" placeholder="Business Email"></input>
                    </div>
                    <button>
                      Subscribe
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 17.9998L4.37884 16.3786L8.75764 11.9998L4.37893 7.62109L6.00009 5.99993L9.52326 9.5231L9.53706 14.4627L6 17.9998Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.3787 16.3787L11.9999 17.9999L16.3787 13.6211L16.3788 13.6212L18 12L17.9998 11.9999L17.9999 11.9999L16.3787 10.3787L16.3787 10.3788L12 6.00006L10.3788 7.62121L14.7575 11.9999L10.3787 16.3787Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div> */
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
