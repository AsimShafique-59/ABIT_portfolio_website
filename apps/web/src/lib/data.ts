import servicesData from '../../content/services.json'
import testimonialsData from '../../content/testimonials.json'
import clientsData from '../../content/clients.json'
import { servicesFileSchema, testimonialsFileSchema, clientsFileSchema } from './content-schema'

export interface Location {
  city: string
  country: string
  region: 'UK' | 'Europe'
  flag: string
}

export type Service = ReturnType<typeof servicesFileSchema.parse>['services'][number]
export type Testimonial = ReturnType<typeof testimonialsFileSchema.parse>['testimonials'][number]
export type Client = ReturnType<typeof clientsFileSchema.parse>['clients'][number]

export const SERVICES: Service[] = servicesFileSchema.parse(servicesData).services

export const TESTIMONIALS: Testimonial[] = testimonialsFileSchema.parse(testimonialsData).testimonials

export const CLIENTS: Client[] = clientsFileSchema.parse(clientsData).clients

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

