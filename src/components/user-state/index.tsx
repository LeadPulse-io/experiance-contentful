'use client'

import { Suspense, useLayoutEffect } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    user: {
      [key: string]: string
    }
  }
}

function StoreState() {
  const searchParams = useSearchParams()

  useLayoutEffect(() => {
    window.user = {}

    searchParams.forEach((value, key) => (window.user = { ...window.user, [key]: value }))
  }, [searchParams])

  return <></>
}

export default function StoreUserState() {
  return (
    <Suspense>
      <StoreState />
    </Suspense>
  )
}
