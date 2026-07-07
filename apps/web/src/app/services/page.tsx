import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore ABIT Technical Services — data centre, telecom, cloud, IT support, field engineers, managed security, and more across the UK and Europe.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Complete Enterprise IT
            <br />
            <span className="gradient-text">Services Portfolio</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From data centres and telecoms to cloud, security, and on-demand engineers — ABIT delivers the full stack of IT services your business depends on.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-100 rounded-3xl p-8 card-hover shadow-sm hover:border-blue-200"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-3xl mb-6 transition-all duration-300">
                  {service.icon}
                </div>

                <h2 className="text-slate-900 font-black text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.shortDesc}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  View Service <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gradient-dark py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Can&apos;t Find What You Need?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Our team provides custom solutions. Tell us your challenge and we&apos;ll design the right service for you.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 gradient-blue text-white font-bold rounded-2xl hover:scale-105 transition-all text-sm shadow-xl shadow-blue-500/30">
            Talk to Our Team →
          </Link>
        </div>
      </section>
    </>
  )
}
