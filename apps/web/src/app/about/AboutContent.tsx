'use client'

import Image from 'next/image'
import { useT } from '@/lib/i18n'
import { CLIENTS } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

export default function AboutContent() {
  const t = useT()
  const a = t.aboutPage
  const w = t.whyChooseUs

  return (
    <>
      <PageHero
        badge={a.badge}
        title={a.h1_1}
        highlight={a.h1_2}
        description={a.heroDesc}
        image="/images/hero/technician-rack-install.jpg"
        ctaLabel={t.nav.quote}
        ctaHref="/contact"
      />

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">{a.storyBadge}</span>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                {a.storyH2} <span className="text-blue-600">{a.storyH2Highlight}</span>
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>{a.storyP1}</p>
                <p>{a.storyP2}</p>
                <p>{a.storyP3}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-5">
              {a.statsItems.map((item, i) => (
                <Reveal key={item.label} delayMs={i * 80} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">
                    <CountUp value={item.value} />
                  </div>
                  <div className="text-slate-500 text-sm">{item.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="gradient-blue py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: heading + desc */}
            <div className="md:max-w-sm text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-white/20 text-blue-100 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">{a.coverageBadge}</span>
              <h2 className="text-2xl font-black text-white mb-2">
                {a.coverageH2_1} <span className="text-blue-200">{a.coverageH2_2}</span>
              </h2>
              <p className="text-blue-200 text-sm leading-relaxed">{a.coverageDesc}</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-white/20" />

            {/* Right: region pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {a.regions.map((r) => (
                <div key={r.region} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 backdrop-blur-sm">
                  <span className="text-3xl shrink-0">{r.flag}</span>
                  <div>
                    <div className="text-white font-black text-sm">{r.region}</div>
                    <div className="text-blue-200 text-xs mt-0.5">{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              {a.whyH2} <span className="text-blue-600">{a.whyHighlight}</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">{a.whyDesc}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {w.items.map((item, i) => (
              <Reveal key={item.title} delayMs={(i % 3) * 100} className="bg-slate-50 rounded-2xl p-6 card-hover group">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry specialisations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16">{a.industriesTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {a.industries.map((ind, i) => (
              <Reveal key={ind.name} delayMs={(i % 4) * 80} className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-full gradient-blue flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0 p-4">
                  <Image src={ind.logo} alt={ind.name} width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-black text-xs uppercase tracking-wide mb-2">{ind.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </Reveal>
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
            {CLIENTS.map((client, i) => (
              <Reveal key={client.name} delayMs={(i % 6) * 60} className="flex flex-col items-center gap-3 px-4 py-5 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                <div className="relative w-full h-10">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="150px"
                    className="object-contain"
                  />
                </div>
                <span className="text-slate-700 font-bold text-xs group-hover:text-blue-700 transition-colors">{client.name}</span>
                <span className="text-xs text-slate-400 font-medium">{client.sector}</span>
              </Reveal>
            ))}
          </div>

          {/* IKEA featured project callout */}
          <Reveal className="gradient-blue rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-blue-500/20">
            <div className="shrink-0 bg-white rounded-2xl p-3 shadow-lg">
              <div className="relative w-20 h-12">
                <Image src="/clients/ikea.svg" alt="IKEA" fill sizes="80px" className="object-contain" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-white/20 text-blue-100 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                Featured Project
              </div>
              <h3 className="text-white font-black text-xl mb-2">{a.ikeaTitle}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{a.ikeaDesc}</p>
            </div>
            <div className="shrink-0 text-center">
              <div className="text-4xl font-black text-white">
                <CountUp value="40+" />
              </div>
              <div className="text-blue-200 text-xs font-medium uppercase tracking-wider mt-1">Sites Delivered</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-blue py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">{a.ctaH2}</h2>
          <p className="text-blue-100 mb-8">{a.ctaDesc}</p>
          <ButtonLink href="/contact" variant="inverse">{a.ctaBtn}</ButtonLink>
        </div>
      </section>
    </>
  )
}
