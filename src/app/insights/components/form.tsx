'use client'

import { useState } from 'react'
import { z } from 'zod'
import toast from 'react-hot-toast'

const FORM_DATA = {
  firstname: '',
  email: ''
}

const formSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  email: z
    .string()
    .email('Please enter a valid email')
    .refine(val => !val.endsWith('gmail.com'), { message: 'Please use your business email' })
})

export default function SubscribeForm(props: any) {
  const [formData, setFormData] = useState(FORM_DATA)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationResult = formSchema.safeParse(formData)
    if (!validationResult.success) {
      validationResult.error.errors.forEach(error => {
        toast.error(error.message)
      })
      return
    }

    function getCookie(name: string) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift()
    }

    const hutk = getCookie('hubspotutk')

    const { ...fields } = formData

    const userData = window.user

    const userFieldKeys = ['utm_campaign', 'utm_medium', 'utm_source', 'zi_websights___company_name', 'zi_websights___primary_industry', 'zi_websights___visitor_location']

    const user = Object.fromEntries(Object.entries(userData).filter(([key]) => userFieldKeys.includes(key)))

    const payload = {
      fields: [...Object.entries({ ...fields, ...user }).map(entry => ({ name: entry[0], value: Array.isArray(entry[1]) ? entry[1].join(';') : entry[1] }))],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        ipAddress: props.ipAddress,
        hutk
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to allow LeadPulse Inc. to store and process my personal information.',
          communications: [
            {
              value: true,
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
      body: JSON.stringify({ payload, formId: '8e0375d8-d5f5-46a6-bab3-18d4d7e5c271' }) // hubspot new form id 766d3bfa-1337-4f8a-81ed-d1c23409dfb2
    })

    if (!response.ok) {
      return
    }

    setFormData(FORM_DATA)
    setSubmitted(true)
    toast.success('Thank you for subscribing!')
  }
  return (
    <>
      {!submitted && (
        <div className="subscribe">
          <h2 dangerouslySetInnerHTML={{ __html: props.data }} />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label>First Name</label>
                <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required></input>
              </div>
              <div className="col">
                <label>Business Email</label>
                <input type="email" placeholder="Business Email" name="email" value={formData.email} onChange={handleChange} required></input>
              </div>
              <button type="submit">
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 17.9998L4.37884 16.3786L8.75764 11.9998L4.37893 7.62109L6.00009 5.99993L9.52326 9.5231L9.53706 14.4627L6 17.9998Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3787 16.3787L11.9999 17.9999L16.3787 13.6211L16.3788 13.6212L18 12L17.9998 11.9999L17.9999 11.9999L16.3787 10.3787L16.3787 10.3788L12 6.00006L10.3788 7.62121L14.7575 11.9999L10.3787 16.3787Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
