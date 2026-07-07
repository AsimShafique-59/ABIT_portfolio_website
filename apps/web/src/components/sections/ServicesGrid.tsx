'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n'
import { SERVICES } from '@/lib/data'

export default function ServicesGrid() {
  const t = useT()
  const s = t.servicesSection

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            {s.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            {s.h2_1}
            <br />
            <span className="text-blue-600">{s.h2_2}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{s.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const translated = t.services[service.slug as keyof typeof t.services]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white border border-slate-100 rounded-2xl p-6 card-hover shadow-sm hover:border-blue-200 hover:shadow-blue-50"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-2xl mb-5 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                  {translated?.title ?? service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {translated?.shortDesc ?? service.shortDesc}
                </p>
                <span className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {s.learnMore} <span>→</span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
