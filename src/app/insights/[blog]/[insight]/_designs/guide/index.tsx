import Image from 'next/image'
import { RocketLaunchIcon, ViewfinderCircleIcon, WindowIcon } from '@heroicons/react/24/solid'

import Connect from '@/components/connect'
import { Form } from './_components'

import './style.scss'

export default function Guide(props: any) {
  return (
    <div className="container">
      <div className="banner_wrap">
        <div className="banner_cd">
          <div className="banner_cal">
            <img src={props.data.featuredImage.url} alt={props.data.featuredImage.title} />
          </div>
          <div className="banner_cal">
            <div className="title">
              <img src="/guide.png"></img> {props.data.type}
            </div>
            <h1>{props.data.title}</h1>
            <p>{props.data.shortSummary}</p>
          </div>
        </div>
      </div>
      <div className="discover">
        <div className="title">
          <img src="/tech_icon.png" width={32} height={32}></img>
          {props.data.contentCollection.items[0].title}
        </div>
        <div className="discover_block">
          <div className="discover_col">
            <img src="/discover.png"></img>
          </div>
          <div className="discover_col">
            {props.data.contentCollection.items[0].itemsCollection.items.map((item: any, idx: number) => (
              <div className="block" key={idx}>
                <div className="icon">
                  {idx === 0 && <WindowIcon width={24} height={24}></WindowIcon>}
                  {idx === 1 && <RocketLaunchIcon width={24} height={24}></RocketLaunchIcon>}
                  {idx === 2 && <ViewfinderCircleIcon width={24} height={24}></ViewfinderCircleIcon>}
                </div>
                <h2>{item.heading}</h2>
                <p>{item.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact_wrap">
        <div className="contact">
          <div className="title">
            <Image src="/star.png" width={32} height={32} alt="Join" />
            Join
          </div>
          <div className="tray">
            <div className="tray_col">
              <div className="tray_col_wrap">
                <img src="/arrow_up.png" />
                <h2>{props.data.contentCollection.items[1].title}</h2>
                <p dangerouslySetInnerHTML={{ __html: props.data.contentCollection.items[1].blurb }} />
                <img src="/arrow_down.png" />
              </div>
            </div>
            <div className="tray_col">
              <Form ipAddress={props.ip} />
            </div>
          </div>
        </div>
      </div>
      <div className="connect">
        <Connect props={props.data.ctaBlock} />
      </div>
    </div>
  )
}
