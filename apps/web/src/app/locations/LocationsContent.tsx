'use client'

import { useT } from '@/lib/i18n'
import { LOCATIONS } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/ButtonLink'

export default function LocationsContent() {
  const t = useT()
  const l = t.locationsPage
  const ukLocations = LOCATIONS.filter((loc) => loc.region === 'UK')
  const euLocations = LOCATIONS.filter((loc) => loc.region === 'Europe')

  return (
    <>
      <PageHero badge={l.badge} title={l.h1_1} highlight={l.h1_2} description={l.heroDesc} />

      <section className="gradient-blue py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {l.coverageStats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-4xl">🇬🇧</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900">{l.ukTitle}</h2>
              <p className="text-slate-500 text-sm">{l.ukSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {ukLocations.map((loc) => (
              <div key={loc.city} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 card-hover text-center">
                <span className="text-3xl mb-3 block">{loc.flag}</span>
                <div className="text-slate-900 font-bold text-sm">{loc.city}</div>
                <div className="text-slate-400 text-xs mt-1">{loc.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-4xl">🇪🇺</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900">{l.euTitle}</h2>
              <p className="text-slate-500 text-sm">{l.euSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5">
            {euLocations.map((loc) => (
              <div key={loc.city} className="bg-white rounded-2xl p-5 border border-slate-100 card-hover text-center">
                <span className="text-3xl mb-3 block">{loc.flag}</span>
                <div className="text-slate-900 font-bold text-sm">{loc.city}</div>
                <div className="text-slate-400 text-xs mt-1">{loc.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-6">🔐</div>
          <h2 className="text-3xl font-black text-white mb-4">{l.scTitle}</h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">{l.scDesc}</p>
          <ButtonLink href="/contact" variant="primary">{l.scBtn}</ButtonLink>
        </div>
      </section>
    </>
  )
}
