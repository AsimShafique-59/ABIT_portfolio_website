'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n'
import { LOCATIONS } from '@/lib/data'

export default function LocationsContent() {
  const t = useT()
  const l = t.locationsPage
  const ukLocations = LOCATIONS.filter((loc) => loc.region === 'UK')
  const euLocations = LOCATIONS.filter((loc) => loc.region === 'Europe')

  return (
    <>
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">{l.badge}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {l.h1_1}<br /><span className="gradient-text">{l.h1_2}</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{l.heroDesc}</p>
        </div>
      </section>

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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8">{l.extendedTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{l.apacTitle}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{l.apacDesc}</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{l.americasTitle}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{l.americasDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-6">🔐</div>
          <h2 className="text-3xl font-black text-white mb-4">{l.scTitle}</h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">{l.scDesc}</p>
          <Link href="/contact" className="inline-block px-8 py-4 gradient-blue text-white font-bold rounded-2xl hover:scale-105 transition-all text-sm shadow-xl shadow-blue-500/30">
            {l.scBtn}
          </Link>
        </div>
      </section>
    </>
  )
}
