'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n'

export default function AboutContent() {
  const t = useT()
  const a = t.aboutPage
  const w = t.whyChooseUs

  return (
    <>
      {/* Page hero */}
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">{a.badge}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {a.h1_1}<br /><span className="gradient-text">{a.h1_2}</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">{a.heroDesc}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">{a.storyBadge}</span>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                {a.storyH2} <span className="text-blue-600">{a.storyH2Highlight}</span>
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>{a.storyP1}</p>
                <p>{a.storyP2}</p>
                <p>{a.storyP3}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {a.statsItems.map((item) => (
                <div key={item.label} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">{item.value}</div>
                  <div className="text-slate-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">{a.coverageBadge}</span>
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            {a.coverageH2_1} <span className="text-blue-600">{a.coverageH2_2}</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12">{a.coverageDesc}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {a.regions.map((r) => (
              <div key={r.region} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover text-center">
                <span className="text-4xl mb-4 block">{r.flag}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-2">{r.region}</h3>
                <p className="text-slate-400 text-xs">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              {a.whyH2} <span className="text-blue-600">{a.whyHighlight}</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">{a.whyDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {w.items.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 card-hover group">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry specialisations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">{a.industriesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 card-hover text-center">
                <span className="text-4xl mb-4 block">{ind.icon}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-3">{ind.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted clients */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-3">{a.clientsTitle}</h2>
            <p className="text-slate-500 text-sm">{a.clientsDesc}</p>
          </div>

          {/* Client cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {a.clients.map((client) => (
              <div key={client.name} className="flex flex-col items-center gap-2 px-4 py-5 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                <span className="text-slate-800 font-black text-sm group-hover:text-blue-700 transition-colors">{client.name}</span>
                <span className="text-xs text-slate-400 font-medium">{client.sector}</span>
              </div>
            ))}
          </div>

          {/* IKEA featured project callout */}
          <div className="gradient-blue rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-blue-500/20">
            <div className="text-5xl shrink-0">🏪</div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-white/20 text-blue-100 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                Featured Project
              </div>
              <h3 className="text-white font-black text-xl mb-2">{a.ikeaTitle}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{a.ikeaDesc}</p>
            </div>
            <div className="shrink-0 text-center">
              <div className="text-4xl font-black text-white">40+</div>
              <div className="text-blue-200 text-xs font-medium uppercase tracking-wider mt-1">Sites Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-blue py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">{a.ctaH2}</h2>
          <p className="text-blue-100 mb-8">{a.ctaDesc}</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all text-sm shadow-xl">
            {a.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  )
}
