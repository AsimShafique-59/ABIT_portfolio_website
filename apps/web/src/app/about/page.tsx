import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ABIT Technical Services — 10+ years of enterprise IT, telecom, and data centre expertise across the UK and Europe.',
}

export default function AboutPage() {
  return <AboutContent />
}
