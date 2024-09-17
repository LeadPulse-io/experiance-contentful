'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

export default function Technologies(props: any) {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <div className="techno_tab">
      <div className="techno_tab_menu">
        <label className="mob_menu" htmlFor="dropdown">
          Framework <ChevronUpDownIcon width={24}></ChevronUpDownIcon>
        </label>
        <input type="checkbox" id="dropdown"></input>

        <ul>
          {props.technologies.items.map((item: any, idx: number) => (
            <React.Fragment key={item.title}>
              <li>
                <button className={idx === activeTab ? 'active' : ''} onClick={() => setActiveTab(idx)}>
                  {item.anchorTitle}
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="techno_tray">
        {props.technologies.items.map(
          (technology: any, idx: number) =>
            idx === activeTab && (
              <React.Fragment key={idx}>
                {technology.itemsCollection.items.map((item: any, index: number) => (
                  <div className="tile" key={index}>
                    <Image src={item.icon?.url} width={56} height={51} alt="react"></Image>
                  </div>
                ))}
              </React.Fragment>
            )
        )}
      </div>
    </div>
  )
}
