import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopee: E-commerce Template Site',
  description: 'Shopee, E-commerce template store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
