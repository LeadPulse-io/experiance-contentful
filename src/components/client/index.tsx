import Image from 'next/image'

import './style.scss'
import Marquee from 'react-fast-marquee'

export default function Client(props: any) {
  return (
    <>
      <div className="clients_wrap">
        <div className="client_heading">
          <span>
            <Image src="/arrow_left.png" width={'23'} height={'52'} alt="truenorth" className="left_arrow" />
          </span>
          <p>{props.props.blurb}</p>
          <span>
            <Image src="/arrow_right.png" width={'23'} height={'52'} alt="truenorth" className="right_arrow" />
          </span>
        </div>
        <div className="clients">
          <div className="client_row">
            <Marquee speed={40} autoFill>
              {props.props.itemsCollection.items.map((item: any) => (
                <div className="client" key={item.title}>
                  <Image src={item.image.url} width={'117'} height={'43'} alt={item.image.title} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  )
}
