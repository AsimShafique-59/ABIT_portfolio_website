import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'ABIT Technical Services — Managed IT & Data Centre Solutions',
    template: '%s | ABIT Technical Services',
  },
  description:
    'Enterprise IT services across the UK and Europe. Data centre, telecom, cloud, managed security and 450+ on-demand field engineers with 24×7 support.',
  keywords: ['managed IT services', 'data centre', 'telecom', 'cloud', 'field engineers', 'UK', 'Europe'],
  authors: [{ name: 'ABIT Technical Services Ltd' }],
  openGraph: {
    type: 'website',
    siteName: 'ABIT Technical Services',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
