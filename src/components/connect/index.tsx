import Link from 'next/link'

import './styles.scss'

export default function Connect(props: any) {
  return (
    <>
      <div className="connect_block">
        <h3>{props.props.heading}</h3>
        {props.props.blurb ? <p>{props.props.blurb}</p> : ''}

        {props.props.primaryCtaText && (
          <Link href={props.props.primaryCtaUrl ?? ''} className="btn btn_white">
            {props.props.primaryCtaText}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99976 17.9998L4.3786 16.3787L8.7574 11.9999L4.37869 7.62118L5.99985 6.00002L9.52302 9.52319L9.53681 14.4628L5.99976 17.9998Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3787 16.3787L11.9999 17.9999L16.3787 13.621L16.3788 13.6212L18 12L17.9998 11.9999L17.9999 11.9999L16.3787 10.3787L16.3787 10.3787L12 6.00002L10.3788 7.62118L14.7575 11.9999L10.3787 16.3787Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        )}
        {props.props.secondaryCtaText && (
          <Link href={props.props.secondaryCtaUrl ?? ''} className="btn">
            {props.props.secondaryCtaText}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99976 17.9998L4.3786 16.3787L8.7574 11.9999L4.37869 7.62118L5.99985 6.00002L9.52302 9.52319L9.53681 14.4628L5.99976 17.9998Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3787 16.3787L11.9999 17.9999L16.3787 13.621L16.3788 13.6212L18 12L17.9998 11.9999L17.9999 11.9999L16.3787 10.3787L16.3787 10.3787L12 6.00002L10.3788 7.62118L14.7575 11.9999L10.3787 16.3787Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        )}
      </div>
    </>
  )
}
