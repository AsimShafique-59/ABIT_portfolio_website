import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact AB IT | IT Support Manchester UK | Get a Quote',
  description: 'Contact AB IT and Technical Services for IT infrastructure, data centre support, cybersecurity, and network solutions. Call Belgium: +32 487 720065 | Germany: +49 176 21472983 | Email: muhammad.abdullah@abittechnical.co.uk. We respond within 2 hours.',
  keywords: ['contact AB IT', 'IT support quote UK', 'IT services Manchester contact', 'hire IT engineers UK', 'data centre support quote', 'cybersecurity consultation UK', 'IT outsourcing UK contact'],
  openGraph: {
    title: 'Contact AB IT and Technical Services | IT Support UK & Europe',
    description: 'Get a quote for IT infrastructure, data centre support, cybersecurity, and network services. Response within 2 hours.',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
