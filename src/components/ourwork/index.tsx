import Link from 'next/link'
import './styles.scss'
import Image from 'next/image'
const Ourwork = (props: any) => {
  return (
    <div className="ourwork_wrap">
      <div className="ourwork_title">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="rgba(255, 255, 255, 0.80)">
          <rect x="1" y="1" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.1" />
          <path
            d="M16.5 5.5L18.323 12.7145L25.1001 9.64161L20.5963 15.5651L27.2242 18.9477L19.785 19.1197L21.2727 26.4107L16.5 20.7016L11.7273 26.4107L13.215 19.1197L5.77579 18.9477L12.4037 15.5651L7.89985 9.64161L14.677 12.7145L16.5 5.5Z"
            fill="#F25930"
          />
        </svg>
        our work
      </div>
      {props.caseStudies.items.map((item: any, idx: number) => (
        <div className="work" key={idx}>
          <div className="work_col">
            <h2>{item.heading}</h2>
            <p>{item.blurb}</p>
            <Link href={item.primaryCtaUrl ?? ''}>
              {item.primaryCtaText}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.99976 12.5L4.3786 10.8788L8.7574 6.50004L4.37869 2.12133L5.99985 0.500174L9.52302 4.02334L9.53681 8.96294L5.99976 12.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3787 10.8787L11.9999 12.4999L16.3787 8.12107L16.3788 8.1212L18 6.50004L17.9998 6.49991L17.9999 6.49988L16.3787 4.87872L16.3787 4.87876L12 0.500048L10.3788 2.12121L14.7575 6.49991L10.3787 10.8787Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="work_col">
            <Image src={item.image?.url ?? ''} width={'200'} height={200} alt={item.image?.title ?? ''} />
          </div>
        </div>
      ))}
    </div>
  )
}
export default Ourwork
