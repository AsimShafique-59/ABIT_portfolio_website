'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n'
import { SERVICES } from '@/lib/data'

export default function ServicesContent() {
  const t = useT()
  const s = t.servicesPage

  return (
    <>
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">{s.badge}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {s.h1_1}<br /><span className="gradient-text">{s.h1_2}</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{s.heroDesc}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const tr = t.services[service.slug as keyof typeof t.services]
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white border border-slate-100 rounded-3xl p-8 card-hover shadow-sm hover:border-blue-200"
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
              )
            })}
          </div>
        </div>
      </section>

      <section className="gradient-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">{s.ctaH2}</h2>
          <p className="text-blue-200 mb-8 text-lg">{s.ctaDesc}</p>
          <Link href="/contact" className="inline-block px-8 py-4 gradient-blue text-white font-bold rounded-2xl hover:scale-105 transition-all text-sm shadow-xl shadow-blue-500/30">
            {s.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  )
}
