import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'ABIT Technical Services — direct engineering coverage across the UK and Europe with 450+ field engineers available 24×7.',
}

const ukLocations = LOCATIONS.filter((l) => l.region === 'UK')
const euLocations = LOCATIONS.filter((l) => l.region === 'Europe')

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
            Coverage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            UK & European
            <br />
            <span className="gradient-text">Engineering Coverage</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            450+ field engineers deployed across 25+ countries, with 24×7 availability and SLA-guaranteed response times.
          </p>
        </div>
      </section>

      {/* Coverage stats bar */}
      <section className="gradient-blue py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '450+', label: 'Field Engineers' },
            { value: '25+', label: 'Countries Covered' },
            { value: '24×7', label: 'Availability' },
            { value: '15 min', label: 'Ticket Response' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* UK locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-4xl">🇬🇧</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900">United Kingdom</h2>
              <p className="text-slate-500 text-sm">Direct coverage with SC-cleared engineers available</p>
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

      {/* Europe locations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-4xl">🇪🇺</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Europe (EMEA)</h2>
              <p className="text-slate-500 text-sm">Direct coverage across major European markets</p>
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

      {/* Additional regions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8">Extended Global Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Asia Pacific (APAC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct and partner network coverage across APAC, including India, Singapore, Australia, and Japan. Our engineers coordinate seamlessly with local partners to deliver consistent service quality.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">Americas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Coverage across North and South America via our trusted partner network. We maintain the same SLA commitments and quality standards regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SC Clearance info */}
      <section className="gradient-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-6">🔐</div>
          <h2 className="text-3xl font-black text-white mb-4">SC-Cleared Engineers in the UK</h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">
            ABIT provides Security Cleared (SC) engineers for government, defence, and sensitive private-sector sites across the United Kingdom. All engineers carry full NDA agreements and comply with GDPR requirements.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 gradient-blue text-white font-bold rounded-2xl hover:scale-105 transition-all text-sm shadow-xl shadow-blue-500/30">
            Request SC-Cleared Engineers →
          </Link>
        </div>
      </section>
    </>
  )
}
