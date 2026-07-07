import type { Metadata } from 'next'
import LocationsContent from './LocationsContent'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'ABIT Technical Services — direct engineering coverage across the UK and Europe with 450+ field engineers available 24×7.',
}

export default function LocationsPage() {
  return <LocationsContent />
}
