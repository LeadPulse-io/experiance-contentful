'use client'

import React, { useState } from 'react'

import AccordianSvg from '../svg/SVG4'

import './styles.scss'

function Shipfaster({ data }: any) {
  const [activeLayer, setActiveLayer] = useState<number>(0)

  const handleAccordionChange = (index: number): void => setActiveLayer(prevActiveLayer => (prevActiveLayer === index ? 1 : index))

  return (
    <div className="shipfaster_wrap">
      <div className="shipfaster">
        <div className="shipfaster_title">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="4" fill="#151313" fillOpacity="0.03" />
            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#151313" strokeOpacity="0.1" />
            <circle cx="16.5" cy="16.5" r="8.5" fill="#F25930" />
            <rect x="15" y="11" width="2" height="5" fill="#F8F8F8" />
            <rect x="23" y="16" width="2" height="6" transform="rotate(90 23 16)" fill="#F8F8F8" />
          </svg>
          SHIP FASTER
        </div>
        <h2 dangerouslySetInnerHTML={{ __html: data.solution.title }} />
        <div className="ship_faster_main">
          <div className="ship_faster_block">
            <div className="data">
              {data.solution.itemsCollection.items.map((item: any, idx: number) => (
                <div className={`accordion ${activeLayer === idx ? 'highlighted' : ''}`} key={idx}>
                  <label htmlFor={`accordion${idx}`} className="accordion_title" onMouseEnter={() => handleAccordionChange(idx)}>
                    {item.heading}
                  </label>
                  {/* <input type="checkbox" id={`accordion${idx}`} onMouseEnter={() => handleAccordionChange(idx)} checked={activeLayer === idx} /> */}
                  {/* <div className={`accordion_data ${activeLayer === idx ? 'open' : ''}`}>{item.blurb}</div> */}
                  <div className={`accordion_data ${activeLayer === idx ? 'open' : ''}`}>{item.blurb}</div>
                </div>
              ))}
            </div>
            <div className="image">
              <AccordianSvg activeLayer={activeLayer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipfaster
