import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/data'
import ServiceDetailContent from './ServiceDetailContent'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(props: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} UK & Europe | AB IT and Technical Services`,
    description: `${service.shortDesc} AB IT and Technical Services delivers ${service.title.toLowerCase()} across the UK, Belgium, Germany, and Europe. 450+ engineers, 98% SLA, 24/7 availability.`,
    keywords: [service.title, `${service.title} UK`, `${service.title} Manchester`, `${service.title} Europe`, 'AB IT', 'IT services UK', 'enterprise IT UK'],
    openGraph: {
      title: `${service.title} | AB IT and Technical Services UK & Europe`,
      description: `${service.shortDesc} Available across UK and Europe with 24/7 support.`,
    },
  }
}

export default async function ServiceDetailPage(props: PageProps<'/services/[slug]'>) {
  const { slug } = await props.params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()
  return <ServiceDetailContent slug={slug} />
}
