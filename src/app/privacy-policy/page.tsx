import { fetchData } from './query'
import { parse } from 'marked'

import './styles.scss'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const data = await fetchData()

  return {
    title: data.seoMetadata?.title,
    description: data.seoMetadata?.description
  }
}

export default async function Page() {
  const data = await fetchData()
  return (
    <>
      <div className="container">
        <div className="privacy_wrap">
          <h1>{data.title.toUpperCase()}</h1>
          <p dangerouslySetInnerHTML={{ __html: parse(data.description ?? '') }} />
        </div>
      </div>
    </>
  )
}
