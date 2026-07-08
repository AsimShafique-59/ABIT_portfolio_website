import { z } from 'zod'

export const serviceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortDesc: z.string().min(1),
  fullDesc: z.string().min(1),
  icon: z.string().min(1),
  color: z.string().min(1),
  features: z.array(z.string()).min(1),
  useCases: z.array(z.string()),
})

export const testimonialSchema = z.object({
  quote: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
})

export const clientSchema = z.object({
  name: z.string().min(1),
  sector: z.string().min(1),
  logo: z.string().min(1),
})

export const servicesFileSchema = z.object({ services: z.array(serviceSchema).min(1) })
export const testimonialsFileSchema = z.object({ testimonials: z.array(testimonialSchema).min(1) })
export const clientsFileSchema = z.object({ clients: z.array(clientSchema).min(1) })
