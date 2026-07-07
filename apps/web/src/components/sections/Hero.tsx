import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-hero min-h-[92vh] flex items-center relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blue-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              450+ Engineers · UK & Europe · 24×7
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Enterprise IT
              <br />
              <span className="gradient-text">Delivered With</span>
              <br />
              Precision
            </h1>

            <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-xl">
              ABIT Technical Services provides managed IT, telecom, data centre, and cloud solutions across the UK and Europe. Over 10 years of delivering mission-critical infrastructure support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-8 py-4 gradient-blue text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 text-sm"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/15 transition-all duration-200 text-sm border border-white/20"
              >
                Get a Quote →
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/10">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '450+', label: 'Field Engineers' },
                { value: '98%', label: 'SLA Achievement' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-blue-300 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — service cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: '🏢', title: 'Data Centre', desc: 'Rack, cabling, migrations' },
              { icon: '📡', title: 'Telecom', desc: '1G/10G/100G E2E testing' },
              { icon: '☁️', title: 'Cloud', desc: 'Hybrid & multi-cloud' },
              { icon: '💻', title: 'IT Support', desc: '24×7 remote & onsite' },
              { icon: '👷', title: 'Field Engineers', desc: '450+ across EU & UK' },
              { icon: '🔒', title: 'Security', desc: 'SOC, GDPR compliance' },
            ].map((card, i) => (
              <div
                key={card.title}
                className="glass rounded-2xl p-5 card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="text-white font-bold text-sm mb-1">{card.title}</h3>
                <p className="text-blue-300 text-xs">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
