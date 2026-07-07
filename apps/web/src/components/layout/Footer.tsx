'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useT } from '@/lib/i18n'
import { SERVICES } from '@/lib/data'

export default function Footer() {
  const t = useT()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="inline-block bg-white rounded-xl px-3 py-1.5 shadow-md shadow-blue-900/40">
                <Image
                  src="/logo.png"
                  alt="AB IT and Technical Services"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">{f.tagline}</p>
            <div className="flex gap-3">
              {['in', 'tw', 'gh'].map((s) => (
                <div key={s} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all cursor-pointer uppercase">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{f.servicesTitle}</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map((svc) => {
                const translated = t.services[svc.slug as keyof typeof t.services]
                return (
                  <li key={svc.slug}>
                    <Link href={`/services/${svc.slug}`} className="text-blue-200 hover:text-blue-400 text-sm transition-colors">
                      {translated?.title ?? svc.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{f.companyTitle}</h3>
            <ul className="space-y-3">
              {f.links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-blue-400 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{f.contactTitle}</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex gap-3"><span className="text-blue-400 mt-0.5">📍</span><span>{f.address}</span></li>
              <li className="flex gap-3"><span className="text-blue-400">📞</span><a href="tel:+447760134112" className="hover:text-blue-400 transition-colors">{f.phone}</a></li>
              <li className="flex gap-3"><span className="text-blue-400">✉️</span><a href="mailto:sales@abit-tech.com" className="hover:text-blue-400 transition-colors">{f.email}</a></li>
              <li className="flex gap-3"><span className="text-blue-400">💬</span><span>{f.whatsapp}</span></li>
              <li className="flex gap-3"><span className="text-blue-400">🕐</span><span>{f.chatHours}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">{f.rights.replace('{year}', String(year))}</p>
          <div className="flex gap-6">
            {f.legal.map((item) => (
              <span key={item} className="text-blue-400 hover:text-blue-200 text-sm cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
