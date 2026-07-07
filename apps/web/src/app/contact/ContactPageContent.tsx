'use client'

import { useT } from '@/lib/i18n'
import ContactForm from './ContactForm'

export default function ContactPageContent() {
  const t = useT()
  const c = t.contactPage

  return (
    <>
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
            {c.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {c.h1_1}<br /><span className="gradient-text">{c.h1_2}</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{c.heroDesc}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">{c.infoTitle}</h2>
                <div className="space-y-5">
                  {c.contactItems.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</div>
                        {'href' in item && item.href ? (
                          <a href={item.href} className="text-slate-700 text-sm hover:text-blue-600 transition-colors">{item.value}</a>
                        ) : (
                          <span className="text-slate-700 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-slate-900 font-bold text-sm mb-4">{c.hoursTitle}</h3>
                <div className="space-y-3 text-sm">
                  {c.hours.map((h) => (
                    <div key={h.label} className="flex justify-between">
                      <span className="text-slate-500">{h.label}</span>
                      <span className="text-slate-700 font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gradient-blue rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">{c.emergencyTitle}</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">{c.emergencyDesc}</p>
                <a href="tel:+32487720065" className="block text-center px-4 py-2.5 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all">
                  {c.emergencyBtn}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
