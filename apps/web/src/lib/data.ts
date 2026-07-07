import servicesData from '../../content/services.json'
import testimonialsData from '../../content/testimonials.json'
import clientsData from '../../content/clients.json'

export interface Service {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  icon: string
  color: string
  features: string[]
  useCases: string[]
}

export interface Stat {
  value: string
  label: string
  prefix?: string
  suffix?: string
}

export interface Location {
  city: string
  country: string
  region: 'UK' | 'Europe'
  flag: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface Client {
  name: string
  sector: string
  logo: string
}

export const SERVICES: Service[] = servicesData as Service[]

export const TESTIMONIALS: Testimonial[] = testimonialsData as Testimonial[]

export const CLIENTS: Client[] = clientsData as Client[]

export const STATS: Stat[] = [
  { value: '10', suffix: '+', label: 'Years of Experience' },
  { value: '450', suffix: '+', label: 'Field Engineers' },
  { value: '25', suffix: '+', label: 'Countries Covered' },
  { value: '5000', suffix: '+', label: 'Tickets Resolved (12 mo)' },
  { value: '98', suffix: '%', label: 'SLA Achievement Rate' },
  { value: '15', suffix: ' min', label: 'Ticket Response Time' },
]

export const LOCATIONS: Location[] = [
  { city: 'London', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Manchester', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Birmingham', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Edinburgh', country: 'United Kingdom', region: 'UK', flag: '🇬🇧' },
  { city: 'Amsterdam', country: 'Netherlands', region: 'Europe', flag: '🇳🇱' },
  { city: 'Frankfurt', country: 'Germany', region: 'Europe', flag: '🇩🇪' },
  { city: 'Paris', country: 'France', region: 'Europe', flag: '🇫🇷' },
  { city: 'Stockholm', country: 'Sweden', region: 'Europe', flag: '🇸🇪' },
  { city: 'Warsaw', country: 'Poland', region: 'Europe', flag: '🇵🇱' },
  { city: 'Madrid', country: 'Spain', region: 'Europe', flag: '🇪🇸' },
  { city: 'Milan', country: 'Italy', region: 'Europe', flag: '🇮🇹' },
  { city: 'Brussels', country: 'Belgium', region: 'Europe', flag: '🇧🇪' },
]

export const WHY_CHOOSE: { title: string; desc: string; icon: string }[] = [
  { title: 'UK & Europe Coverage', desc: 'Direct coverage across EMEA regions with 450+ engineers ready to deploy anywhere.', icon: '🌍' },
  { title: 'SC-Cleared Engineers', desc: 'We provide Security Cleared (SC) engineers within the UK for government and sensitive sites.', icon: '🔐' },
  { title: '98% SLA Achievement', desc: 'Our 15-minute response time and 2-4 hour on-site targets are backed by a 98% SLA record.', icon: '📊' },
  { title: 'Multi-Technology Expertise', desc: 'From data centres and telecom to cloud and security — one partner for all your IT needs.', icon: '⚡' },
  { title: 'GDPR Compliant', desc: 'Fully GDPR-compliant operations with trained staff, signed NDAs, and a documented data policy.', icon: '✅' },
  { title: '10+ Years Experience', desc: 'Trusted by enterprises and carriers across the UK and Europe for over a decade.', icon: '🏆' },
]
