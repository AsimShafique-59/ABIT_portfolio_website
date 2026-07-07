import type { Metadata } from 'next'
import LocationsContent from './LocationsContent'

export const metadata: Metadata = {
  title: 'IT Support Coverage UK & Europe | Manchester, Belgium, Germany | AB IT',
  description: 'AB IT and Technical Services operates across the UK and Europe — direct coverage in Manchester, London, Birmingham, Edinburgh, Brussels, Frankfurt, Amsterdam, and more. 450+ field engineers available 24×7 with 15-minute ticket response.',
  keywords: ['IT support Manchester', 'IT support London', 'IT support UK', 'IT engineers Belgium', 'IT engineers Germany', 'field engineers Europe', 'IT coverage UK Europe', 'on-site IT support UK', 'data centre engineers UK', 'IT support Birmingham'],
  openGraph: {
    title: 'IT Support Coverage UK & Europe | AB IT and Technical Services',
    description: '450+ field engineers across UK and Europe — Manchester, London, Brussels, Frankfurt and more. 24×7 availability, 15-min response.',
  },
}

export default function LocationsPage() {
  return <LocationsContent />
}
