import Link from 'next/link'
import './styles.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="footer_wrap">
      <div className="footer_container">
        <div className="footer">
          <Image className="footer_logo" src="/Footer_logo.png" height={45} width={274} alt="footer_logo" />
          <div className="cols_wrapper">
            <div className="footer_col2">
              <p>What we do</p>
              <Link href="/services/website-development">
                Headless Website Development&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
              <Link href="/services/marketing-revops">
                RevOps&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
              <Link href="/services/managed-services">
                Managed Services&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
            </div>
            <div className="footer_col2">
              <Link href="/insights">
                Insights&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
              <Link href="/insights/guide/future-proof-your-website-with-our-tech-stack-guide">
                Content Download&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
              <Link href="/about-us">
                About Us&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
              <Link href="/partners">
                Partners&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
              <Link href="/about-us#contact-us">
                Let&apos;s Connect&nbsp;&nbsp;
                <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
                    fill="currentColor"
                    fillOpacity="currentOpacity"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <p>© 2024 LeadPulse. All rights reserved.</p>
          <div className="footer_row2_inner">
            <Link href="https://www.linkedin.com/company/leadpulse-io/" target="_blank">
              Linkedin
            </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
