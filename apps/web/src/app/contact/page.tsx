import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABIT Technical Services. Sales team available by phone, email, WhatsApp 24×7, and live chat.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
