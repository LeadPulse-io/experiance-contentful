'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Process(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true, slidesToScroll: 2 })

  return (
    <div className="process">
      <div className="process_title">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#151313" fillOpacity="0.03" />
          <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.1" />
          <rect x="8" y="13" width="4" height="6" fill="#F25930" />
          <rect x="14" y="10" width="4" height="12" fill="#F25930" />
          <rect x="20" y="7" width="4" height="18" fill="#F25930" />
        </svg>
        Process
      </div>
      <h2 dangerouslySetInnerHTML={{ __html: props.process.title }} />
      <div className="process_btns">
        <button
          onClick={() => {
            emblaApi?.scrollPrev()
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button onClick={() => emblaApi?.scrollNext()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="process_tray" ref={emblaRef}>
        <div className="process-container">
          {props.process.itemsCollection.items.map((item: any, idx: number) => (
            <React.Fragment key={idx}>
              <div className="process_tile">
                <p>{idx + 1}</p>
                <h3>{item.heading}</h3>
                <p>{item.blurb}</p>
              </div>
              {idx === props.process.itemsCollection.items.length - 1 ? '' : <div className="divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
