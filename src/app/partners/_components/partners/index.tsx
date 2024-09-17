'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Partners(props: any) {
  const [activeTab, setActiveTab] = useState(0)
  const [activeItem, setactiveItem] = useState('All')
  const dropdownRef = useRef(null)
  const [clientFilter, setClientFilter] = useState('All')

  const closeMobileMenu = () => {
    if (dropdownRef.current) {
      ;(dropdownRef.current as HTMLInputElement).checked = false
    }
  }

  const handleClientFilterChange = (event: any) => {
    setClientFilter(event.target.value)
  }

  const allItem = {
    id: 'all',
    anchorTitle: 'All'
  }

  const filteredPartners =
    clientFilter === 'All' ? props.data.partnerListCollection.items : props.data.partnerListCollection.items.filter((partner: any) => partner.anchorTitle === clientFilter)
  return (
    <div className="partner_wrap">
      <div className="partner">
        <h3>Filter by Technology</h3>
        <label className="mob_menu" htmlFor="mob_menu">
          {activeItem} <ChevronDownIcon width={24}></ChevronDownIcon>
        </label>
        <input type="checkbox" id="mob_menu" ref={dropdownRef}></input>
        <div className="menu">
          <div className="menu_wrap">
            {[allItem, ...props.data.partnerListCollection.items].map((item: any, idx: number) => (
              <Link
                href={`#${item.id}`}
                className={idx === activeTab ? 'active' : ''}
                key={item.anchorTitle}
                onClick={() => {
                  setActiveTab(idx)
                  setactiveItem(item.anchorTitle)
                  setClientFilter(item.anchorTitle)
                  closeMobileMenu()
                }}
              >
                {item.anchorTitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="tray">
          {filteredPartners.map((partner: any, idx: number) => (
            <div style={{ scrollMarginTop: '100px' }} className="try_block" key={partner.anchorTitle} id="all">
              <h2 style={{ scrollMarginTop: '100px' }} dangerouslySetInnerHTML={{ __html: partner.title }} id={partner.id} />
              <div className="tiles">
                {partner.itemsCollection.items.map((item: any) => (
                  <Link href={item.primaryCtaUrl} className=" tile_link" target="_blank" key={item.heading}>
                    <div className="tile" key={item.heading}>
                      {/* {item.primaryCtaUrl && (
                        <span className="link">
                          <ArrowTopRightOnSquareIcon width={24} color="black"></ArrowTopRightOnSquareIcon>
                        </span>
                      )} */}
                      <div className="logo">
                        <Image src={item.image?.url} alt={item.image?.title} width={76} height={76}></Image>
                      </div>
                      <div className="data">
                        <p>{item.heading}</p>
                        <p>{item.blurb}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
