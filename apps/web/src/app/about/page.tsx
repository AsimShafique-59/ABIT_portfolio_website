import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About AB IT and Technical Services | Manchester UK IT Company',
  description: 'AB IT and Technical Services — headquartered in Manchester, UK. 10+ years delivering enterprise IT infrastructure, data centre support, cybersecurity, and network solutions across the UK, Belgium, Germany, and Europe. 450+ engineers. 98% SLA.',
  keywords: ['about AB IT', 'IT company Manchester', 'IT services company UK', 'enterprise IT Manchester', 'IT infrastructure company Europe', 'data centre company UK', 'IT solutions provider Manchester'],
  openGraph: {
    title: 'About AB IT and Technical Services | Manchester UK IT Company',
    description: '10+ years delivering enterprise IT infrastructure, data centre support, and cybersecurity across UK and Europe. 450+ engineers, 98% SLA.',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
