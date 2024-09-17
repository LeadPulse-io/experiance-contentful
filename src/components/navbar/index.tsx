'use client'

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/16/solid'
import './styles.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Navbar() {
  const mobileMenuCheckboxRef = useRef(null)
  const checkboxRef = useRef(null)
  const closeMobileMenu = () => {
    if (mobileMenuCheckboxRef.current) {
      ;(mobileMenuCheckboxRef.current as HTMLInputElement).checked = false
    }
    if (checkboxRef.current) {
      ;(checkboxRef.current as HTMLInputElement).checked = false
    }
  }

  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_logo">
          <Link href="/">
            <Image src="/Logo.png" width={'145'} height={'24'} alt="logo" />
          </Link>
        </div>
        <input type="checkbox" id="menubtn" ref={mobileMenuCheckboxRef} />
        <div className="mob_btn">
          <label htmlFor="menubtn" className="open">
            <Bars3Icon fill="#ffffff"></Bars3Icon>
          </label>
          <label htmlFor="menubtn" className="close">
            <XMarkIcon fill="#ffffff"></XMarkIcon>
          </label>
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <input type="checkbox" id="submenu_inp" ref={checkboxRef}></input>
              <label htmlFor="submenu_inp" className="submenu_link">
                What we Do <ChevronDownIcon width={20}></ChevronDownIcon>
              </label>
              <div className="submenu">
                <div className="submen_wrap">
                  <Link href={'/services/website-development'} onClick={closeMobileMenu}>
                    <span>Headless Website Development</span> Build dynamic, editable websites that engage visitors
                  </Link>
                  <Link href={'/services/marketing-revops'} onClick={closeMobileMenu}>
                    <span>RevOps</span> Transform processes into efficient, revenue-driving systems.
                  </Link>
                  <Link href={'/services/managed-services'} onClick={closeMobileMenu}>
                    <span>Managed Services</span> Your extended team for hassle-free site maintenance and diverse expertise.
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/insights" onClick={closeMobileMenu}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/partners" onClick={closeMobileMenu}>
                Partners
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about-us#contact-us" className="btn" onClick={closeMobileMenu}>
                Let&#39;s Connect
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.99976 17.9998L4.3786 16.3787L8.7574 11.9999L4.37869 7.62118L5.99985 6.00002L9.52302 9.52319L9.53681 14.4628L5.99976 17.9998Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3787 16.3787L11.9999 17.9999L16.3787 13.621L16.3788 13.6212L18 12L17.9998 11.9999L17.9999 11.9999L16.3787 10.3787L16.3787 10.3787L12 6.00002L10.3788 7.62118L14.7575 11.9999L10.3787 16.3787Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
