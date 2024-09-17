'use client'

import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function TestimonialsCarousel(props: any) {
  return (
    <div className="tiles mob">
      <Carousel autoPlay interval={5000} infiniteLoop showArrows={false} centerMode={true} centerSlidePercentage={100} dynamicHeight={false} selectedItem={0} stopOnHover>
        {props.testimonials.map((item: any, idx: number) => (
          <div className="tile" key={idx}>
            <div className="profile">
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
      </Carousel>
    </div>
  )
}
