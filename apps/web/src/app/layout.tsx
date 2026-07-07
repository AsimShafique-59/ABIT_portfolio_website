import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'AB IT and Technical Services — IT Infrastructure, Support & Cybersecurity',
    template: '%s | AB IT and Technical Services',
  },
  description:
    'Comprehensive IT infrastructure, support, and cybersecurity solutions across the UK and Europe. Data centre support, network & cabling, IT support, and 24/7 remote & on-site technical support.',
  keywords: ['IT infrastructure', 'data centre support', 'cybersecurity', 'network cabling', 'IT support', 'Manchester', 'UK', 'Europe'],
  authors: [{ name: 'AB IT and Technical Services' }],
  openGraph: {
    type: 'website',
    siteName: 'AB IT and Technical Services',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
