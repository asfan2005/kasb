import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kasblar Haqida',
  description: 'A kasblar haqida website with a tubelight navbar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}