import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsSection from '@/components/sections/StatsSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: { absolute: 'AB IT and Technical Services | IT Infrastructure, Data Centre & Cybersecurity UK' },
  description: 'UK-based IT infrastructure, data centre support, network & cabling, and cybersecurity across UK and Europe. 450+ engineers, 98% SLA.',
  keywords: [
    'IT support UK', 'data centre support Manchester', 'IT infrastructure UK', 'cybersecurity services UK',
    'network cabling UK', 'field engineers UK Europe', 'IT services Manchester', 'managed IT services UK',
    'server installation UK', 'smart hands UK', 'rack and stack Manchester', 'SIEM services UK',
    'IT support Belgium', 'IT engineers Germany', 'enterprise IT services UK', 'AB IT', 'ABIT Technical Services',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'AB IT and Technical Services | IT Infrastructure UK & Europe',
    description: 'Expert IT infrastructure, data centre support, cybersecurity, and 24/7 on-site & remote IT support. 450+ engineers across UK and Europe.',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
