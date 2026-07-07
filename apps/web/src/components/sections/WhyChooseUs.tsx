'use client'

import { useT } from '@/lib/i18n'

export default function WhyChooseUs() {
  const t = useT()
  const w = t.whyChooseUs

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              {w.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
              {w.h2_1}
              <br />
              <span className="text-blue-600">{w.h2_2}</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">{w.desc}</p>
            <div className="flex flex-col gap-4">
              {w.bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs shrink-0">✓</div>
                  <span className="text-slate-700 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {w.items.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover group">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
