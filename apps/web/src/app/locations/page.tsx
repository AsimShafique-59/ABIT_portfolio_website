import type { Metadata } from 'next'
import LocationsContent from './LocationsContent'

export const metadata: Metadata = {
  title: 'IT Support Coverage | Manchester, Belgium & Germany',
  description: 'AB IT operates across the UK and Europe with direct coverage in Manchester, London, Brussels, Frankfurt and more. 450+ field engineers, 24×7.',
  keywords: ['IT support Manchester', 'IT support London', 'IT support UK', 'IT engineers Belgium', 'IT engineers Germany', 'field engineers Europe', 'IT coverage UK Europe', 'on-site IT support UK', 'data centre engineers UK', 'IT support Birmingham'],
  alternates: { canonical: '/locations' },
  openGraph: {
    url: '/locations',
    title: 'IT Support Coverage UK & Europe | AB IT and Technical Services',
    description: '450+ field engineers across UK and Europe — Manchester, London, Brussels, Frankfurt and more. 24×7 availability, 15-min response.',
    images: ['/og-image.png'],
  },
}

export default function LocationsPage() {
  return <LocationsContent />
}
