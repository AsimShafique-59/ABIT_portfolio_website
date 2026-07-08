'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n'
import { SERVICES } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Reveal } from '@/components/ui/Reveal'

export default function ServicesContent() {
  const t = useT()
  const s = t.servicesPage

  return (
    <>
      <PageHero
        badge={s.badge}
        title={s.h1_1}
        highlight={s.h1_2}
        description={s.heroDesc}
        image="/images/hero/server-corridor-orange.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const tr = t.services[service.slug as keyof typeof t.services]
              return (
                <Reveal key={service.slug} delayMs={(i % 3) * 100}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block bg-white border border-slate-100 rounded-3xl p-8 card-hover shadow-sm hover:border-blue-200"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-3xl mb-6 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h2 className="text-slate-900 font-black text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      {tr?.title ?? service.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{tr?.shortDesc ?? service.shortDesc}</p>
                    <ul className="space-y-2 mb-6">
                      {(tr?.features ?? service.features).slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-slate-600 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      {s.viewService} <span>→</span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="gradient-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">{s.ctaH2}</h2>
          <p className="text-blue-200 mb-8 text-lg">{s.ctaDesc}</p>
          <ButtonLink href="/contact" variant="primary">{s.ctaBtn}</ButtonLink>
        </div>
      </section>
    </>
  )
}
