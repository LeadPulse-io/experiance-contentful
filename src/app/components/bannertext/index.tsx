'use client'
import React, { useEffect, useState } from 'react'

export default function Bannertext() {
  const partnerlist = ['Next.Js', 'Contentful', 'Headless CMS', 'React', 'Vercel', 'UI/UX', 'AEM', 'Hubspot', 'Svelte', 'Sanity']
  let initialvalue = 0
  let [mydata, setmydata] = useState(partnerlist[0])

  useEffect(() => {
    const interval = setInterval(() => {
      if (initialvalue < partnerlist.length - 1) {
        document.getElementById('partner')?.animate(
          [
            { transform: 'translateY(70px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(-70px)', opacity: 0 }
          ],

          {
            duration: 2300,
            iterations: Infinity,
            easing: 'linear'
          }
        )

        initialvalue++
        setmydata(partnerlist[initialvalue])
      } else {
        initialvalue = 0
        setmydata(partnerlist[initialvalue])
      }
    }, 2300)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <span id="partner">{mydata}</span>
    </>
  )
}
