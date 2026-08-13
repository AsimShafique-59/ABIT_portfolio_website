import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us | Manchester UK IT Company',
  description: 'Headquartered in Manchester, UK — 10+ years delivering enterprise IT infrastructure, data centre support & cybersecurity across UK and Europe.',
  keywords: ['about AB IT', 'IT company Manchester', 'IT services company UK', 'enterprise IT Manchester', 'IT infrastructure company Europe', 'data centre company UK', 'IT solutions provider Manchester'],
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: 'About AB IT and Technical Services | Manchester UK IT Company',
    description: '10+ years delivering enterprise IT infrastructure, data centre support, and cybersecurity across UK and Europe. 450+ engineers, 98% SLA.',
    images: ['/og-image.png'],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
