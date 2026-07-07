import type { Metadata } from 'next'
import Link from 'next/link'
import { WHY_CHOOSE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ABIT Technical Services — 10+ years of enterprise IT, telecom, and data centre expertise across the UK and Europe.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
            About ABIT
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            10+ Years Powering Enterprise
            <br />
            <span className="gradient-text">IT Across the UK & Europe</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            ABIT Technical Services is a trusted third-party IT support provider delivering managed IT, telecom, data centre, and cloud services to enterprises and carriers worldwide.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Built on Engineering <span className="text-blue-600">Excellence</span></h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Founded over a decade ago, ABIT Technical Services has grown from a UK-focused IT support business into a globally connected managed services provider with direct engineering presence across EMEA and APAC.
                </p>
                <p>
                  Our team of experienced engineers work closely with you to understand your business needs — identifying the right engineer for every challenge and delivering solutions with speed, precision, and full transparency.
                </p>
                <p>
                  We provide SC-cleared engineers within the UK for government and sensitive sites, and our flexible model means you only ever pay for the skills and capacity you actually need.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Founded', value: '2015' },
                { label: 'Engineers', value: '450+' },
                { label: 'Countries', value: '25+' },
                { label: 'SLA Rate', value: '98%' },
                { label: 'Tickets Resolved', value: '5,000+' },
                { label: 'Response Time', value: '15 min' },
              ].map((item) => (
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
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">Coverage</span>
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Global Reach, <span className="text-blue-600">Local Expertise</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12">
            We work across the UK, Europe, Africa, and Asia with a team of 450+ field engineers available 24 hours a day, 7 days a week.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { region: 'United Kingdom', detail: 'Direct coverage — SC-cleared engineers available', flag: '🇬🇧' },
              { region: 'Europe (EMEA)', detail: 'Direct coverage across major EU countries', flag: '🇪🇺' },
              { region: 'Asia Pacific', detail: 'APAC coverage via direct and partner network', flag: '🌏' },
              { region: 'Americas', detail: 'Coverage via our trusted partner network', flag: '🌎' },
            ].map((r) => (
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
            <h2 className="text-3xl font-black text-slate-900 mb-4">Why Choose <span className="text-blue-600">ABIT</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">Six reasons enterprises and carriers across Europe trust ABIT as their IT partner.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 card-hover group">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="gradient-blue py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Work Together?</h2>
          <p className="text-blue-100 mb-8">Contact our team to discuss your IT requirements. We respond within 2 hours.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all text-sm shadow-xl">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
