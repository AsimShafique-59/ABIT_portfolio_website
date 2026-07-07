import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'AB IT and Technical Services | IT Infrastructure, Support & Cybersecurity UK & Europe',
    template: '%s | AB IT and Technical Services',
  },
  description:
    'AB IT and Technical Services — expert IT infrastructure, data centre support, network & cabling, cybersecurity, and 24/7 on-site & remote IT support across the UK, Belgium, Germany, and Europe. 450+ engineers. 98% SLA. Based in Manchester.',
  keywords: [
    'IT support UK', 'IT infrastructure Manchester', 'data centre support UK', 'cybersecurity services UK',
    'network cabling UK', 'IT services Europe', 'data centre engineers Manchester', 'field engineers UK Europe',
    'managed IT services UK', 'server installation UK', 'IT support Belgium', 'IT support Germany',
    'rack and stack services', 'SIEM services UK', 'smart hands data centre', 'IT outsourcing UK',
    'network infrastructure Europe', 'DCIM services', 'IT support Manchester', 'enterprise IT UK',
    'AB IT Technical Services', 'ABIT', 'ab it and technical services',
  ],
  authors: [{ name: 'AB IT and Technical Services' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    siteName: 'AB IT and Technical Services',
    locale: 'en_GB',
    description: 'Expert IT infrastructure, data centre support, cybersecurity, and 24/7 on-site & remote IT support across UK and Europe. 450+ engineers. 98% SLA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AB IT and Technical Services | IT Infrastructure UK & Europe',
    description: 'Expert IT infrastructure, data centre support, cybersecurity, and 24/7 on-site & remote IT support across UK and Europe.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AB IT and Technical Services',
  description: 'Expert IT infrastructure, data centre support, network & cabling, cybersecurity, and 24/7 on-site & remote IT support across UK and Europe.',
  url: 'https://abittechnical.co.uk',
  telephone: ['+32487720065', '+4917621472983'],
  email: 'muhammad.abdullah@abittechnical.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 Halliwell Lane',
    addressLocality: 'Manchester',
    postalCode: 'M8 9ER',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '53.5074', longitude: '-2.2490' },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Belgium' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Continent', name: 'Europe' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Centre Support' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network & Cabling Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remote & On-site Technical Support' } },
    ],
  },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 450 },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
        <script dangerouslySetInnerHTML={{ __html: `if(window.netlifyIdentity){window.netlifyIdentity.on('init',function(u){if(!u){window.netlifyIdentity.on('login',function(){document.location.href='/admin/'})}})}` }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
