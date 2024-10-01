'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { ComponentDefinition } from '@contentful/experiences-sdk-react'

import './style.scss'

export function Client(props: any) {
  console.log(props)

  return (
    <>
      <div className="clients_wrap">
        <div className="client_heading">
          <span>
            <Image src="/arrow_left.png" width={'23'} height={'52'} alt="truenorth" className="left_arrow" />
          </span>
          <p>{props.blurb ?? ''}</p>
          <span>
            <Image src="/arrow_right.png" width={'23'} height={'52'} alt="truenorth" className="right_arrow" />
          </span>
        </div>
        <div className="clients">
          <div className="client_row">
            <Marquee speed={40} autoFill>
              {props.clients?.map((item: any) => (
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

export const ClientDefinition: ComponentDefinition = {
  id: 'clients',
  name: 'Clients',
  category: 'Options',
  builtInStyles: ['cfBackgroundColor'],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: 'Add a carousel to the canvas'
  },
  variables: {
    // there are two types of variables, content variables and design variables
    blurb: {
      displayName: 'Blurb',
      type: 'Text', //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: 'blurb',
      group: 'content'
    },
    clients: {
      displayName: 'Clients',
      type: 'Object',
      items: {
        type: 'Link',
        validations: [
          {
            linkContentType: ['itemCard']
          }
        ],
        linkType: 'Entry'
      },
      // bind to a string list
      listText: {
        displayName: 'List Text',
        type: 'Array'
      },
      // bind to an entry reference
      entryReference: {
        displayName: 'Entry Reference',
        type: 'Link'
      },
      // bind to a list of entries
      listReference: {
        displayName: 'List Entry Reference',
        type: 'Array'
      }
    }
  }
}
