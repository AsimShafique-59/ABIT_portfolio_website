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
    title: service.title,
    description: service.shortDesc,
  }
}

export default async function ServiceDetailPage(props: PageProps<'/services/[slug]'>) {
  const { slug } = await props.params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()
  return <ServiceDetailContent slug={slug} />
}
