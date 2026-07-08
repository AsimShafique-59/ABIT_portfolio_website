'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n'
import { SERVICES } from '@/lib/data'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Reveal } from '@/components/ui/Reveal'

interface Props {
  slug: string
}

export default function ServiceDetailContent({ slug }: Props) {
  const t = useT()
  const d = t.serviceDetailPage
  const service = SERVICES.find((s) => s.slug === slug)!
  const tr = t.services[slug as keyof typeof t.services]
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  const title = tr?.title ?? service.title
  const fullDesc = tr?.fullDesc ?? service.fullDesc
  const features = tr?.features ?? service.features
  const useCases = tr?.useCases ?? service.useCases

  return (
    <>
      <section className="gradient-hero py-28">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm mb-8 transition-colors">
            {d.backLink}
          </Link>
          <div className="w-20 h-20 rounded-3xl gradient-blue flex items-center justify-center text-4xl mx-auto mb-8 shadow-2xl shadow-blue-500/30">
            {service.icon}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">{title}</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            {tr?.shortDesc ?? service.shortDesc}
          </p>
        </Reveal>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-slate-900 mb-6">{d.aboutTitle}</h2>
              <p className="text-slate-600 leading-relaxed text-base mb-10">{fullDesc}</p>

              <h3 className="text-xl font-black text-slate-900 mb-6">{d.deliversTitle}</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((f, i) => (
                  <Reveal key={f} delayMs={(i % 4) * 60} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                  </Reveal>
                ))}
              </div>

              {useCases.length > 0 && (
                <>
                  <h3 className="text-xl font-black text-slate-900 mb-6">{d.useCasesTitle}</h3>
                  <div className="flex flex-wrap gap-3">
                    {useCases.map((u) => (
                      <span key={u} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium">{u}</span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div className="gradient-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-black mb-3">{d.quoteCardTitle}</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">{d.quoteCardDesc}</p>
                <ButtonLink href="/contact" variant="inverse" size="sm" className="w-full">{d.quoteCardBtn}</ButtonLink>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 space-y-4">
                <h3 className="text-slate-900 font-bold text-sm">{d.speakTitle}</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex gap-3"><span>📞</span><a href="tel:+447760134112" className="hover:text-blue-600 transition-colors">+44 (0)7760 134112</a></div>
                  <div className="flex gap-3"><span>✉️</span><a href="mailto:sales@abit-tech.com" className="hover:text-blue-600 transition-colors">sales@abit-tech.com</a></div>
                  <div className="flex gap-3"><span>💬</span><span>WhatsApp 24×7</span></div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                <h3 className="text-slate-900 font-bold text-sm mb-4">{d.commitmentTitle}</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {['⏱', '🚀', '📊', '🌍'].map((icon, i) => (
                    <li key={i} className="flex gap-3"><span className="text-blue-500">{icon}</span>{d.commitmentItems[i]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8">{d.relatedTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s, i) => {
              const relTr = t.services[s.slug as keyof typeof t.services]
              return (
                <Reveal key={s.slug} delayMs={i * 100}>
                  <Link href={`/services/${s.slug}`} className="block bg-white rounded-2xl p-6 border border-slate-100 card-hover group">
                    <span className="text-3xl mb-4 block">{s.icon}</span>
                    <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-blue-600 transition-colors">
                      {relTr?.title ?? s.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{relTr?.shortDesc ?? s.shortDesc}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
