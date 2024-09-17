import '@/styles/globals.scss'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="container_wrap">{children}</div>
      </body>
    </html>
  )
}
