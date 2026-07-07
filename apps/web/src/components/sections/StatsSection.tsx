import { STATS } from '@/lib/data'

export default function StatsSection() {
  return (
    <section className="gradient-blue py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">Our Numbers Speak For Themselves</h2>
          <p className="text-blue-100">Delivering measurable results across the UK and Europe</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                {stat.prefix ?? ''}{stat.value}{stat.suffix ?? ''}
              </div>
              <div className="text-blue-200 text-xs font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
