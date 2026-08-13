import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/data'
import { SITE_URL } from '@/app/layout'
import ServiceDetailContent from './ServiceDetailContent'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(props: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | UK & Europe`,
    description: `${service.shortDesc} Delivered across the UK, Belgium, Germany & Europe. 450+ engineers, 98% SLA, 24/7 availability.`.slice(0, 158),
    keywords: [service.title, `${service.title} UK`, `${service.title} Manchester`, `${service.title} Europe`, 'AB IT', 'IT services UK', 'enterprise IT UK'],
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      url: `/services/${slug}`,
      title: `${service.title} | AB IT and Technical Services UK & Europe`,
      description: `${service.shortDesc} Available across UK and Europe with 24/7 support.`,
      images: ['/og-image.png'],
    },
  }
}

export default async function ServiceDetailPage(props: PageProps<'/services/[slug]'>) {
  const { slug } = await props.params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.shortDesc,
    url: `${SITE_URL}/services/${slug}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Continent', name: 'Europe' },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceDetailContent slug={slug} />
    </>
  )
}
