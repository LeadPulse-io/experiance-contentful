import { parse } from 'marked'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

import './styles.scss'

export default function Faq(props: any) {
  return (
    <div className="faq">
      <h3>{props.faq.title}</h3>
      <div className="faq_block">
        {props.faq.itemsCollection.items.map((faq: any, idx: number) => (
          <div className="data" key={idx}>
            <div className="accordion">
              <label htmlFor={`accordion_faq${idx}`} className="accordion_title">
                {faq.title} <ChevronDownIcon width={20} color="#F25930"></ChevronDownIcon>
              </label>
              <input type="checkbox" id={`accordion_faq${idx}`}></input>
              <div className="accordion_data" dangerouslySetInnerHTML={{ __html: parse(faq.blurb ?? '') }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
