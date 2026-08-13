import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SERVICES, LOCATIONS } from '@/lib/data'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const SITE_URL = 'https://abitandtechnicalservices.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AB IT and Technical Services | IT Infrastructure, Support & Cybersecurity UK & Europe',
    template: '%s | AB IT and Technical Services',
  },
  description:
    'IT infrastructure, data centre support, network cabling & cybersecurity across the UK & Europe. 450+ engineers, 98% SLA, 24/7 support.',
  keywords: [
    'IT support UK', 'IT infrastructure Manchester', 'data centre support UK', 'cybersecurity services UK',
    'network cabling UK', 'IT services Europe', 'data centre engineers Manchester', 'field engineers UK Europe',
    'managed IT services UK', 'server installation UK', 'IT support Belgium', 'IT support Germany',
    'rack and stack services', 'SIEM services UK', 'smart hands data centre', 'IT outsourcing UK',
    'network infrastructure Europe', 'DCIM services', 'IT support Manchester', 'enterprise IT UK',
    'AB IT Technical Services', 'ABIT', 'ab it and technical services',
  ],
  authors: [{ name: 'AB IT and Technical Services' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    siteName: 'AB IT and Technical Services',
    locale: 'en_GB',
    url: '/',
    description: 'Expert IT infrastructure, data centre support, cybersecurity, and 24/7 on-site & remote IT support across UK and Europe. 450+ engineers. 98% SLA.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AB IT and Technical Services | IT Infrastructure UK & Europe',
    description: 'Expert IT infrastructure, data centre support, cybersecurity, and 24/7 on-site & remote IT support across UK and Europe.',
    images: ['/og-image.png'],
  },
}

const AREA_SERVED_COUNTRIES = [...new Set(LOCATIONS.map((l) => l.country))]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'AB IT and Technical Services',
  description: 'Expert IT infrastructure, data centre support, network & cabling, cybersecurity, and 24/7 on-site & remote IT support across UK and Europe.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: ['+447760134112', '+32487720065', '+4917621472983'],
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
    ...AREA_SERVED_COUNTRIES.map((name) => ({ '@type': 'Country', name })),
    { '@type': 'Continent', name: 'Europe' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/services/${s.slug}` },
    })),
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:30',
      description: 'Chat and sales enquiries',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: '24/7 phone and WhatsApp support',
    },
  ],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 450 },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
