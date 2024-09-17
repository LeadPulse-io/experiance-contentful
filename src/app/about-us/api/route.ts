import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { payload, formId } = await request.json()

  const PortalId = process.env.HUB_SPOT_PORTAL_ID

  const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PortalId}/${formId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    return NextResponse.json({ message: 'error in submission' })
  }

  return NextResponse.json({ message: 'submitted' })
}
