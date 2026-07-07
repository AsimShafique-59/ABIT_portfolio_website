import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABIT Technical Services. Sales team available by phone, email, WhatsApp 24×7, and live chat.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let&apos;s Talk About
            <br />
            <span className="gradient-text">Your IT Needs</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Our team responds within 2 hours. For emergency support, WhatsApp and phone lines are available 24×7.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: '📍',
                      label: 'Address',
                      value: '13 Whites Row, London, E1 7NF, United Kingdom',
                    },
                    {
                      icon: '📞',
                      label: 'Phone',
                      value: '+44 (0)7760 134112',
                      href: 'tel:+447760134112',
                    },
                    {
                      icon: '🌍',
                      label: 'International',
                      value: '+1 630 423 3333',
                      href: 'tel:+16304233333',
                    },
                    {
                      icon: '✉️',
                      label: 'Sales Email',
                      value: 'sales@abit-tech.com',
                      href: 'mailto:sales@abit-tech.com',
                    },
                    {
                      icon: '💬',
                      label: 'WhatsApp 24×7',
                      value: '+44 (0)7760 134112',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-slate-700 text-sm hover:text-blue-600 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-slate-700 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-slate-900 font-bold text-sm mb-4">Support Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Chat / Sales</span>
                    <span className="text-slate-700 font-medium">8:30am – 6:30pm GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">WhatsApp / Phone</span>
                    <span className="text-slate-700 font-medium">24×7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email Response</span>
                    <span className="text-slate-700 font-medium">Within 2 hours</span>
                  </div>
                </div>
              </div>

              {/* SLA reminder */}
              <div className="gradient-blue rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">Emergency Field Support?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  Need an engineer on-site within hours? Call our 24×7 line or WhatsApp us directly.
                </p>
                <a
                  href="tel:+447760134112"
                  className="block text-center px-4 py-2.5 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
