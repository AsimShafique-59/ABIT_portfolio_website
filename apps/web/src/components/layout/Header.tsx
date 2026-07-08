'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguageStore } from '@/store/useLanguageStore'
import { useT } from '@/lib/i18n'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { lang, toggleLang } = useLanguageStore()
  const t = useT()

  const NAV_LINKS = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/locations', label: t.nav.locations },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050d24]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AB IT and Technical Services"
              width={150}
              height={50}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav + controls, grouped so they sit together on the right */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-white' : 'text-blue-200/70 hover:text-white'
                    }`}
                  >
                    {label}
                    {active && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-blue-500" />}
                  </Link>
                )
              })}
            </nav>

            <div className="w-px h-5 bg-white/10" />

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 text-sm font-medium text-blue-200/80 hover:text-white transition-colors duration-200 select-none"
            >
              <span className="text-base leading-none">{lang === 'en' ? '🇬🇧' : '🇩🇪'}</span>
              <span>{lang === 'en' ? 'EN' : 'DE'}</span>
            </button>

            <Link
              href="/contact"
              className="px-5 py-2.5 gradient-blue text-white text-sm font-semibold rounded-full border border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03] transition-all duration-200"
            >
              {t.nav.quote}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile language toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 text-sm font-medium text-blue-200/80"
            >
              <span>{lang === 'en' ? '🇬🇧' : '🇩🇪'}</span>
              <span>{lang === 'en' ? 'EN' : 'DE'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1437] border-t border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium border-l-2 transition-all ${
                  active ? 'border-blue-500 text-white bg-white/5' : 'border-transparent text-blue-200/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-3 gradient-blue text-white rounded-full text-sm font-semibold"
            >
              {t.nav.quote}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
