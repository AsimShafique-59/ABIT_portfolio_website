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
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 select-none"
            >
              <span className="text-base leading-none">{lang === 'en' ? '🇬🇧' : '🇩🇪'}</span>
              <span className="text-blue-200 text-xs">{lang === 'en' ? 'EN' : 'DE'}</span>
              <svg className="w-3 h-3 text-blue-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </button>

            <Link
              href="/contact"
              className="px-5 py-2.5 gradient-blue text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200"
            >
              {t.nav.quote}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile language toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2.5 py-2 rounded-lg glass border border-white/10 text-sm text-white"
            >
              <span>{lang === 'en' ? '🇬🇧' : '🇩🇪'}</span>
              <span className="text-blue-200 text-xs font-semibold">{lang === 'en' ? 'EN' : 'DE'}</span>
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
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active ? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'
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
              className="block text-center px-4 py-3 gradient-blue text-white rounded-xl text-sm font-semibold"
            >
              {t.nav.quote}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
