import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import Spline from '@splinetool/react-spline/next'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

import TestimonialsCarousel from './carousel'

import './styles.scss'

export default function Testimonials(props: any) {
  return (
    <div className="testimonials">
      <Spline
        scene="https://prod.spline.design/fXOE3VtxLbfbXIH9/scene.splinecode"
        style={{ zIndex: '0', position: 'absolute', display: 'flex', justifyContent: 'center', width: '1125', height: '737' }}
        className="no_mobile"
      />
      <div className="testimonials_title  ">
        <Image src={'/hart.png'} width={32} height={32} alt="service icon"></Image>TESTIOMONIALS
      </div>

      <div className="mob_btn">
        <button>
          <ChevronLeftIcon strokeWidth="1"></ChevronLeftIcon>
        </button>
        <button>
          <ChevronRightIcon></ChevronRightIcon>
        </button>
      </div>
      <div className="tiles">
        <Marquee speed={40} autoFill>
          {props.testimonials.itemsCollection.items.map((item: any) => (
            <div className="tile" key={item.company}>
              <div className="profile">
                {/* <div className="head">
                <Image src={'/head.png'} width={67} height={67} alt="head"></Image>
              </div> */}
                <div className="name">
                  <span>{item.testimonial.reviewer.name}</span>
                  <span>
                    {item.testimonial.reviewer.role} at {item.testimonial.reviewer.company}
                  </span>
                </div>
              </div>
              <p>{item.testimonial.quote}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <TestimonialsCarousel testimonials={props.testimonials.itemsCollection.items} />
    </div>
  )
}
