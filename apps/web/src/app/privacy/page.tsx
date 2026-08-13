import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | GDPR',
  description: 'How AB IT and Technical Services collects, uses, and protects personal data, and your rights under UK GDPR.',
  alternates: { canonical: '/privacy' },
  openGraph: { url: '/privacy', title: 'Privacy Policy | AB IT and Technical Services', images: ['/og-image.png'] },
}

const SECTION_CLASS = 'space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base'

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy"
        highlight="Policy"
        description="How we collect, use, and protect your personal data."
      />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <p className="text-slate-400 text-sm">Last updated: 13 August 2026</p>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">1. Who we are</h2>
            <p>
              AB IT and Technical Services Limited (&ldquo;AB IT&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), company
              number 14374097, registered office 10 Halliwell Lane, Manchester, M8 9ER, United Kingdom, is the data
              controller for personal data collected through abitandtechnicalservices.com.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">2. What we collect</h2>
            <p>We collect personal data you give us directly, and a small amount of technical data automatically:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact form submissions:</strong> first and last name, email address, company, phone number, service of interest, and message content.</li>
              <li><strong>Language preference:</strong> your EN/DE choice, stored locally in your browser (localStorage) — this never leaves your device or reaches our servers.</li>
              <li><strong>Standard hosting logs:</strong> our host (Netlify) automatically records IP address, browser type, and request timestamps for security and reliability, as is standard for any website.</li>
            </ul>
            <p>We do not use advertising cookies or third-party tracking/analytics scripts on this site.</p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">3. Why we process it, and our legal basis</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Responding to enquiries</strong> submitted via the contact form — legal basis: legitimate interest in answering enquiries and taking pre-contractual steps at your request.</li>
              <li><strong>Delivering a contracted service</strong> once you become a client — legal basis: performance of a contract.</li>
              <li><strong>Keeping the site secure and operational</strong> (hosting logs) — legal basis: legitimate interest.</li>
            </ul>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">4. Who we share it with</h2>
            <p>
              We use the following processors to operate this site and respond to enquiries; none of them use your
              data for their own marketing purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Netlify, Inc.</strong> — website hosting and content delivery.</li>
              <li><strong>Decap CMS / Netlify Identity</strong> — used internally by our team to manage site content; not customer-facing.</li>
            </ul>
            <p>
              Some of these providers may process data on servers outside the UK/EEA. Where that happens, we rely on
              their standard contractual clauses or equivalent safeguards recognised under UK GDPR.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">5. How long we keep it</h2>
            <p>
              Contact form enquiries are retained for as long as needed to respond and for a reasonable follow-up
              period, and are deleted after 24 months of inactivity unless a client relationship exists. Client
              contract data is retained per our engagement terms and applicable statutory/tax requirements.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">6. Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Restrict or object to certain processing.</li>
              <li>Request a portable copy of your data.</li>
              <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ico.org.uk) if you believe we have mishandled your data.</li>
            </ul>
            <p>
              To exercise any of these rights, email{' '}
              <a href="mailto:muhammad.abdullah@abittechnical.co.uk" className="text-blue-600 hover:underline">
                muhammad.abdullah@abittechnical.co.uk
              </a>.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">7. Children</h2>
            <p>This site and our services are intended for business use and are not directed at children.</p>
          </div>

          <div className={SECTION_CLASS} id="gdpr">
            <h2 className="text-xl font-black text-slate-900">8. GDPR commitment</h2>
            <p>
              AB IT operates under a documented data protection policy, requires signed NDAs and GDPR training for
              staff handling client data, and processes personal data lawfully, fairly, and transparently in line
              with UK GDPR and the Data Protection Act 2018.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">9. Changes to this policy</h2>
            <p>We may update this policy from time to time; the &ldquo;last updated&rdquo; date above will always reflect the latest version.</p>
          </div>
        </div>
      </section>
    </>
  )
}
