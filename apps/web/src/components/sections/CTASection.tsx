'use client'

import { useT } from '@/lib/i18n'
import { ButtonLink } from '@/components/ui/ButtonLink'

export default function CTASection() {
  const t = useT()
  const c = t.cta

  return (
    <section className="gradient-hero py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
          {c.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
          {c.h2_1}
          <br />
          <span className="gradient-text">{c.h2_2}</span>
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">{c.desc}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact" variant="inverse">{c.btnQuote}</ButtonLink>
          <ButtonLink href="mailto:sales@abit-tech.com" variant="glass">{c.btnEmail}</ButtonLink>
        </div>
        <p className="mt-8 text-blue-300 text-sm">{c.contact}</p>
      </div>
    </section>
  )
}
