import { servicesFileSchema, testimonialsFileSchema, clientsFileSchema } from './content-schema'

describe('content-schema', () => {
  it('accepts a well-formed services file', () => {
    const result = servicesFileSchema.safeParse({
      services: [
        {
          slug: 'data-centre',
          title: 'Data Centre Support',
          shortDesc: 'short',
          fullDesc: 'full',
          icon: '🏢',
          color: 'blue',
          features: ['Smart hands'],
          useCases: [],
        },
      ],
    })
    expect(result.success).toBe(true)
  })

  it('rejects a service missing required fields', () => {
    const result = servicesFileSchema.safeParse({ services: [{ slug: 'data-centre' }] })
    expect(result.success).toBe(false)
  })

  it('rejects an empty testimonials list', () => {
    const result = testimonialsFileSchema.safeParse({ testimonials: [] })
    expect(result.success).toBe(false)
  })

  it('accepts a well-formed clients file', () => {
    const result = clientsFileSchema.safeParse({
      clients: [{ name: 'IKEA', sector: 'Retail', logo: '/clients/ikea.svg' }],
    })
    expect(result.success).toBe(true)
  })
})
