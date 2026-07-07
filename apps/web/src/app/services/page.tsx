import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'IT Services UK & Europe | Data Centre, Cybersecurity, Network Cabling',
  description: 'Full portfolio of enterprise IT services from AB IT and Technical Services — data centre support, network & cabling, cybersecurity (SIEM, vulnerability assessment), IT support, and 24/7 remote & on-site engineers across the UK and Europe.',
  keywords: ['IT services UK', 'data centre services UK', 'cybersecurity services UK', 'network cabling UK', 'IT support UK Europe', 'managed IT services', 'field engineers UK', 'SIEM services UK', 'smart hands UK', 'rack and stack UK'],
  openGraph: {
    title: 'IT Services UK & Europe | Data Centre, Cybersecurity, Network Cabling | AB IT',
    description: 'Data centre support, cybersecurity, network cabling, IT support and 24/7 remote & on-site engineers across UK and Europe.',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
