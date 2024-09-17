'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import './style.scss'

let Partner = (props: any) => {
  return (
    <>
      <div className="partners">
        <div className="partner">Partners</div>
        <Marquee>
          {props.props.items.map((item: any) => (
            <div className="partner" key={item.title}>
              <Image src={item.image.url} width={'117'} height={'43'} alt={item.image.title} />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  )
}

export default Partner
