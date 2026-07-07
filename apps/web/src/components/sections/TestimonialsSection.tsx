'use client'

import { useT } from '@/lib/i18n'

export default function TestimonialsSection() {
  const t = useT()
  const tm = t.testimonials

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            {tm.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            {tm.h2_1}
            <br />
            <span className="text-blue-600">{tm.h2_2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tm.items.map((item) => (
            <div key={item.name} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm card-hover relative">
              <div className="absolute top-6 right-8 text-6xl text-blue-100 font-black leading-none select-none">"</div>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">{item.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">{item.name}</div>
                  <div className="text-slate-400 text-xs">{item.role} · {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
