import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for use of the AB IT and Technical Services website.',
  alternates: { canonical: '/terms' },
  openGraph: { url: '/terms', title: 'Terms of Service | AB IT and Technical Services', images: ['/og-image.png'] },
}

const SECTION_CLASS = 'space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base'

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Terms of"
        highlight="Service"
        description="Terms governing use of this website."
      />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <p className="text-slate-400 text-sm">Last updated: 13 August 2026</p>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">1. Acceptance</h2>
            <p>
              By accessing abitandtechnicalservices.com (the &ldquo;Site&rdquo;), operated by AB IT and Technical
              Services Limited (company number 14374097, registered office 10 Halliwell Lane, Manchester, M8 9ER,
              United Kingdom), you agree to these Terms of Service. If you do not agree, please do not use the Site.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">2. Use of the Site</h2>
            <p>
              The Site is provided for informational purposes to describe our IT infrastructure, data centre, network,
              and cybersecurity services and to let prospective clients get in touch. You agree not to misuse the
              Site, attempt to gain unauthorised access to any part of it, or use it in a way that could damage,
              disable, or impair its operation.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">3. Intellectual property</h2>
            <p>
              All content on the Site — including text, graphics, logos, and the AB IT and Technical Services brand —
              is owned by or licensed to AB IT and Technical Services Limited and is protected by copyright and
              trademark law. You may not reproduce, distribute, or create derivative works from Site content without
              our prior written consent.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">4. Enquiries and quotes</h2>
            <p>
              Submitting the contact form or requesting a quote does not itself create a binding service agreement.
              Any engagement for IT infrastructure, data centre, network, or cybersecurity services is governed by a
              separate, signed statement of work or services agreement between AB IT and the client.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">5. No warranty</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or
              implied. We do not guarantee the Site will be uninterrupted, error-free, or free of viruses or other
              harmful components.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">6. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, AB IT and Technical Services Limited shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of the Site. Nothing in these
              Terms limits liability for death, personal injury caused by negligence, or fraud, where such limitation
              is not permitted by law.
            </p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">7. Third-party links</h2>
            <p>The Site may reference third-party services or platforms. We are not responsible for the content or practices of any third-party site.</p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">8. Governing law</h2>
            <p>These Terms are governed by the laws of England and Wales, and any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">9. Changes to these Terms</h2>
            <p>We may update these Terms from time to time; the &ldquo;last updated&rdquo; date above will always reflect the latest version.</p>
          </div>

          <div className={SECTION_CLASS}>
            <h2 className="text-xl font-black text-slate-900">10. Contact</h2>
            <p>
              Questions about these Terms? Email{' '}
              <a href="mailto:muhammad.abdullah@abittechnical.co.uk" className="text-blue-600 hover:underline">
                muhammad.abdullah@abittechnical.co.uk
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
