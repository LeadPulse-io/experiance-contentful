'use client'

import React, { useRef } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import './styles.scss'

const Technology = (props: any) => {
  const [activeTab, setActiveTab] = React.useState(0)
  const [activeDropdown, setActiveDropdown] = React.useState(props.data.items[0].anchorTitle)
  const dropdownRef = useRef(null)
  const handleClick = (idx: number, tab: string) => {
    setActiveTab(idx)
    setActiveDropdown(tab)
  }
  const closeMobileMenu = () => {
    if (dropdownRef.current) {
      ;(dropdownRef.current as HTMLInputElement).checked = false
    }
  }

  return (
    <div className="technology" id="canvas3d">
      <div className="technology_title">
        <Image src={'/tech_icon.png'} width={32} height={33} alt="Tech icon"></Image>Technology
      </div>
      <div className="technology_heading">
        <div className="title">
          <Image className="left_arrow" src={'/arrow_left.png'} width={23} height={52} alt="left arrow"></Image>
          <p dangerouslySetInnerHTML={{ __html: props.aboutOurTech.heading }} />
          <Image className="right_arrow" src={'/arrow_right.png'} width={23} height={52} alt="left arrow"></Image>
        </div>
        <p className="sub">{props.aboutOurTech.blurb}</p>
      </div>
      <div className="techno_tab">
        <div className="techno_tab_menu">
          <label className="mob_menu" htmlFor="dropdown">
            {activeDropdown}
          </label>
          <input type="checkbox" id="dropdown" ref={dropdownRef}></input>

          <ul id="dropdownlist">
            {props.data.items.map((item: any, idx: number) => (
              <React.Fragment key={idx}>
                <li>
                  <button className={idx === activeTab ? 'active' : ''} onMouseEnter={() => handleClick(idx, item.anchorTitle)} onClick={closeMobileMenu}>
                    {item.anchorTitle}
                  </button>
                </li>
                <li></li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="techno_tray">
          {props.data.items.map(
            (tech: any, idx: number) =>
              idx === activeTab && (
                <React.Fragment key={idx}>
                  {tech.itemsCollection.items.map((item: any, index: number) => (
                    <div className="tile" key={index}>
                      <Image src={item.icon.url} width={56} height={51} alt={item.icon.title}></Image>
                      <p>{item.heading}</p>
                    </div>
                  ))}
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </div>
  )
}
export default Technology
