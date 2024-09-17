import Link from 'next/link'
import './styles.scss'

export const Cta = (props: any) => {
  return (
    <>
      <Link href={props.url} className={`btn_cta ${props.className}`}>
        {props.text}&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99988 17.9999L4.37872 16.3787L8.75752 11.9999L4.37881 7.6212L5.99997 6.00004L9.52314 9.52321L9.53693 14.4628L5.99988 17.9999Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3788 16.3787L12 17.9999L16.3788 13.6211L16.3789 13.6212L18.0001 12L18 11.9999L18 11.9999L16.3788 10.3787L16.3788 10.3787L12.0001 6.00004L10.3789 7.6212L14.7576 11.9999L10.3788 16.3787Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </>
  )
}
