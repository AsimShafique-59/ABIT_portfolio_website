'use client'

import { useT } from '@/lib/i18n'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

export default function StatsSection() {
  const t = useT()
  const s = t.statsSection

  return (
    <section className="gradient-blue py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">{s.title}</h2>
          <p className="text-blue-100">{s.desc}</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {s.stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 80} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                <CountUp value={`${stat.value}${stat.suffix}`} />
              </div>
              <div className="text-blue-200 text-xs font-medium leading-tight">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
