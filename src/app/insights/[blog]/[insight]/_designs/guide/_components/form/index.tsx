'use client'

import Link from 'next/link'
import { useState } from 'react'
import { z } from 'zod'
import toast from 'react-hot-toast'

export default function Form({ ipAddress }: any) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    agree: false
  })

  const formSchema = z.object({
    firstname: z.string().min(1, 'First name is required'),
    lastname: z.string().min(1, 'Last name is required'),
    email: z
      .string()
      .email('Please enter a valid email')
      .refine(val => !val.endsWith('gmail.com'), { message: 'Please use your business email' }),
    company: z.string().min(1, 'Company name is required'),
    agree: z.boolean()
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationResult = formSchema.safeParse(formData)
    if (!validationResult.success) {
      validationResult.error.errors.forEach(error => {
        toast.error(error.message)
      })
      return
    }

    const { agree, ...fields } = formData

    const userData = window.user

    const userFieldKeys = ['utm_campaign', 'utm_medium', 'utm_source', 'zi_websights___company_name', 'zi_websights___primary_industry', 'zi_websights___visitor_location']

    const user = Object.fromEntries(Object.entries(userData).filter(([key]) => userFieldKeys.includes(key)))

    const payload = {
      fields: [...Object.entries({ ...fields, ...user }).map(([name, value]) => ({ name, value }))],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        ipAddress
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: agree,
          text: 'I agree to allow LeadPulse Inc. to store and process my personal information.',
          communications: [
            {
              value: agree,
              subscriptionTypeId: 999,
              text: 'I agree to receive other communications from LeadPulse Inc.'
            }
          ]
        }
      }
    }

    const response = await fetch('/about-us/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ payload, formId: 'd1541cb2-c87d-4ab6-8857-462d0f4b0b44' })
    })

    if (!response.ok) {
      return
    }
    toast.success('Form submitted successfully')
    setFormData({ firstname: '', lastname: '', email: '', company: '', agree: false })
    setSubmitted(true)
  }

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label>
                First name <span>*</span>
              </label>
              <input type=" text" placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
            </div>
            <div className="col">
              <label>
                Last name <span>*</span>
              </label>
              <input type=" text" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>
                Business Email <span>*</span>
              </label>
              <input type=" text" placeholder="Business Email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col">
              <label>
                Company Name <span>*</span>
              </label>
              <input type=" text" placeholder="Company Name" name="company" value={formData.company} onChange={handleChange} required />
            </div>
          </div>
          <p>
            LeadPulse Inc. is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the
            products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of
            interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
          </p>
          <div className="agree">
            <label htmlFor="agree" />
            <input type="checkbox" id="agree" checked={formData.agree} name="agree" onChange={handleChange} />I agree to receive other communications from LeadPulse Inc..
          </div>
          <p>
            You may unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and
            respecting your privacy, please review our <Link href={'#'}>Privacy Policy</Link>.By clicking submit below, you consent to allow LeadPulse Inc. to store and process the
            personal information submitted above to provide you the content requested.
          </p>
          <button type="submit">
            Download the Guide
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5.99976L1.62116 4.3786L5.99996 8.7574L10.3787 4.37869L11.9998 5.99985L8.47666 9.52302L3.53706 9.53681L0 5.99976Z"
                fill="#F25930"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.62129 10.3787L0.000126441 11.9999L4.37893 16.3787L4.3788 16.3788L5.99996 18L6.00009 17.9998L6.00012 17.9999L7.62128 16.3787L7.62124 16.3787L12 12L10.3788 10.3788L6.00009 14.7575L1.62129 10.3787Z"
                fill="#F25930"
              />
            </svg>
          </button>
        </form>
      ) : (
        <p className="form-submitted">
          <span>Thank you :)</span>&nbsp;we will reach out to you !
        </p>
      )}
    </>
  )
}
