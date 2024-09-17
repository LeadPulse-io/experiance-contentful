'use client'

import { useState } from 'react'
import Link from 'next/link'
import { z } from 'zod'
import toast from 'react-hot-toast'

const FORM_DATA = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  company: '',
  type_of_service: [''],
  inquiry_service_description: '',
  agree: false
}

const formSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z
    .string()
    .email('Please enter a valid email')
    .refine(val => !val.endsWith('gmail.com'), { message: 'Please use your business email' }),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().min(1, 'Company name is required'),
  type_of_service: z.array(z.string()),
  inquiry_service_description: z.string(),
  agree: z.boolean()
})

export default function ContactForm({ ipAddress }: { ipAddress: string }) {
  const [formData, setFormData] = useState(FORM_DATA)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked

      if (name === 'type_of_service') {
        return setFormData(prev => ({
          ...prev,
          type_of_service: prev['type_of_service'].includes(value) ? prev['type_of_service'].filter(item => item !== value) : [...prev['type_of_service'], value]
        }))
      }

      return setFormData(prevFormData => ({ ...prevFormData, [name]: isChecked }))
    }

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

    const { agree, ...fields } = formData

    const userData = window.user

    const userFieldKeys = ['utm_campaign', 'utm_medium', 'utm_source', 'zi_websights___company_name', 'zi_websights___primary_industry', 'zi_websights___visitor_location']

    const user = Object.fromEntries(Object.entries(userData).filter(([key]) => userFieldKeys.includes(key)))

    const payload = {
      fields: [...Object.entries({ ...fields, ...user }).map(entry => ({ name: entry[0], value: Array.isArray(entry[1]) ? entry[1].join(';') : entry[1] }))],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        ipAddress,
        hutk
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
      body: JSON.stringify({ payload, formId: 'bb910a89-d82f-4044-a035-d1f3868db9bb' })
    })

    if (!response.ok) {
      return
    }
    toast.success('Form submitted successfully')
    setFormData(FORM_DATA)
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
              <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
            </div>
            <div className="col">
              <label>
                Last name <span>*</span>
              </label>
              <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>
                Business Email <span>*</span>
              </label>
              <input type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col">
              <label>
                Phone Number <span>*</span>
              </label>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="col100">
              <label>
                Company Name <span>*</span>
              </label>
              <input type="text" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} /* required */ />
            </div>
          </div>
          <div className="row">
            <div className="col100">
              <label>
                What projects would you like support for? <span>*</span>
              </label>
              <label>
                <input type="checkbox" name="type_of_service" value="Headless Website" checked={formData.type_of_service.includes('Headless Website')} onChange={handleChange} />
                Headless Website Development
              </label>
              <label>
                <input type="checkbox" name="type_of_service" value="Revops" checked={formData.type_of_service.includes('Revops')} onChange={handleChange} />
                Revops
              </label>
              <label>
                <input type="checkbox" name="type_of_service" value="Managed Services" checked={formData.type_of_service.includes('Managed Services')} onChange={handleChange} />
                Managed Services
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col100">
              <label>Tell us more about your project.</label>
              <textarea name="inquiry_service_description" value={formData.inquiry_service_description} onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="contact_agree">
            <input type="checkbox" id="agree" name="agree" checked={Boolean(formData.agree)} onChange={handleChange} />
            <p>
              Subscribe to our marketing emails. Please review our <Link href={'/privacy-policy'}>Privacy policy</Link>.
            </p>
          </div>
          <button type="submit">
            Lets Talk
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 12.4526L4.37884 10.8315L8.75764 6.45268L4.37893 2.07397L6.00009 0.452811L9.52326 3.97598L9.53706 8.91558L6 12.4526Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3787 10.8314L11.9999 12.4525L16.3787 8.07371L16.3788 8.07384L18 6.45268L17.9998 6.45255L17.9999 6.45252L16.3787 4.83136L16.3787 4.83139L12 0.452685L10.3788 2.07384L14.7575 6.45255L10.3787 10.8314Z"
                fill="white"
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
