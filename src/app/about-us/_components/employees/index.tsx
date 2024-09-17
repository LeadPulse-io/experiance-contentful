'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Employees(props: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true })

  return (
    <>
      <div className="weare_wrap">
        <div className="weare">
          <div className="data">
            <h2>{props.whoWeAre.title}</h2>
            <p>{props.whoWeAre.blurb}</p>
          </div>
          <div className="btn_about">
            <button
              onClick={() => {
                emblaApi?.scrollPrev()
              }}
            >
              <ChevronLeftIcon strokeWidth="1.5" width={24}></ChevronLeftIcon>
            </button>
            <button onClick={() => emblaApi?.scrollNext()}>
              <ChevronRightIcon strokeWidth="1.5" width={24}></ChevronRightIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="emp_wrap">
        <div className="employee" ref={emblaRef}>
          <div className="tray">
            {props.data.map((item: any, idx: number) => (
              <div className="tile" key={idx}>
                <img src={item.image.url} alt={item.name}></img>
                <div className="profile">
                  <h3>
                    {item.name}{' '}
                    <a href={item.linkedInUrl} target="_blank" rel="noreferrer noopener">
                      <img src="/in.png" alt="in"></img>
                    </a>
                  </h3>
                  <p>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
