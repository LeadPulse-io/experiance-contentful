import Marquee from 'react-fast-marquee'

import './styles.scss'

let Tech = (props: any) => {
  return (
    <>
      <div className="tech_main">
        <h2 dangerouslySetInnerHTML={{ __html: props.issues.title }} />
        <p>{props.issues.blurb}</p>
        <div className="tech_block">
          <div className="tech_marquee">
            <div className="tech_marquee_row">
              <Marquee autoFill speed={40}>
                {props.issues.itemsCollection.items.slice(0, 3).map((item: any, idx: number) => (
                  <span className={idx === 2 ? 'span_10' : ''} key={idx}>
                    {item.heading}
                  </span>
                ))}
              </Marquee>
            </div>
            <div className="tech_marquee_row">
              <Marquee autoFill speed={60}>
                {props.issues.itemsCollection.items.slice(3, 6).map((item: any, idx: number) => (
                  <span className={idx === 0 ? 'span_80' : ''} key={idx}>
                    {item.heading}
                  </span>
                ))}
              </Marquee>
            </div>
            <div className="tech_marquee_row">
              <Marquee autoFill speed={50}>
                {props.issues.itemsCollection.items.slice(6, props.issues.itemsCollection.items.length + 1).map((item: any, idx: number) => (
                  <span className={idx === 0 ? 'span_50' : ''} key={idx}>
                    {item.heading}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Tech
