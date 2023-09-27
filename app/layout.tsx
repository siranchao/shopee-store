import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopee - Store',
  description: 'Shopee Store Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
