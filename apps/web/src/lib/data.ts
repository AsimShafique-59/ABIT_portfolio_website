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

export const SERVICES: Service[] = (servicesData as { services: Service[] }).services

export const TESTIMONIALS: Testimonial[] = (testimonialsData as { testimonials: Testimonial[] }).testimonials

export const CLIENTS: Client[] = (clientsData as { clients: Client[] }).clients

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

