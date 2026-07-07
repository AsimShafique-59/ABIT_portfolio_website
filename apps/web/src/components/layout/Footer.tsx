import Link from 'next/link'
import { SERVICES } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="gradient-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-blue flex items-center justify-center text-white font-black text-lg">
                A
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-xl">ABIT</span>
                <span className="text-blue-400 text-xs font-medium tracking-widest uppercase">Technical Services</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Enterprise IT services provider delivering managed IT, telecom, and data centre solutions across the UK and Europe since 2015.
            </p>
            <div className="flex gap-3">
              {['in', 'tw', 'gh'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all cursor-pointer uppercase"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-blue-200 hover:text-blue-400 text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About ABIT' },
                { href: '/locations', label: 'Locations' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/services', label: 'All Services' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-blue-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span>13 Whites Row, London, E1 7NF, United Kingdom</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+447760134112" className="hover:text-blue-400 transition-colors">
                  +44 (0)7760 134112
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:sales@abit-tech.com" className="hover:text-blue-400 transition-colors">
                  sales@abit-tech.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">💬</span>
                <span>WhatsApp 24×7 Service Desk</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🕐</span>
                <span>Chat: 8:30am – 6:30pm GMT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {year} ABIT Technical Services Ltd. Registered in England & Wales.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'GDPR'].map((t) => (
              <span key={t} className="text-blue-400 hover:text-blue-200 text-sm cursor-pointer transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
