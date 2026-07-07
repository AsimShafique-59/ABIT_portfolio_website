import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore ABIT Technical Services — data centre, telecom, cloud, IT support, field engineers, managed security, and more across the UK and Europe.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
