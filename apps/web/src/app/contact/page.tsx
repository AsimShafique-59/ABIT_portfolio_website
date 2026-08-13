import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us | IT Support Manchester UK | Get a Quote',
  description: 'Contact AB IT for IT infrastructure, data centre support, cybersecurity & network solutions. UK, Belgium & Germany lines. We respond within 2 hours.',
  keywords: ['contact AB IT', 'IT support quote UK', 'IT services Manchester contact', 'hire IT engineers UK', 'data centre support quote', 'cybersecurity consultation UK', 'IT outsourcing UK contact'],
  alternates: { canonical: '/contact' },
  openGraph: {
    url: '/contact',
    title: 'Contact AB IT and Technical Services | IT Support UK & Europe',
    description: 'Get a quote for IT infrastructure, data centre support, cybersecurity, and network services. Response within 2 hours.',
    images: ['/og-image.png'],
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
