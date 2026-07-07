'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/data'

interface FormState {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-12 text-center">
        <div className="text-5xl mb-6">✅</div>
        <h3 className="text-2xl font-black text-slate-900 mb-4">Message Received!</h3>
        <p className="text-slate-600 leading-relaxed mb-8">
          Thank you for reaching out. A member of our team will respond within 2 hours during business hours.
          For urgent matters, please call <a href="tel:+447760134112" className="text-blue-600 font-semibold">+44 (0)7760 134112</a>.
        </p>
        <button
          onClick={() => { setForm(INITIAL); setSubmitted(false) }}
          className="px-6 py-3 gradient-blue text-white font-bold rounded-xl text-sm hover:scale-105 transition-all"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
      <h2 className="text-2xl font-black text-slate-900 mb-2">Send Us a Message</h2>
      <p className="text-slate-500 text-sm mb-8">Fill in the form and we will be in touch within 2 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Smith"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+44 7700 000000"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">Service of Interest</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
            <option value="other">Other / General Enquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 text-xs font-semibold mb-2 uppercase tracking-wide">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your requirements, location, and timeline..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 gradient-blue text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message →'
          )}
        </button>

        <p className="text-slate-400 text-xs text-center">
          By submitting this form you agree to our{' '}
          <span className="text-blue-500 cursor-pointer">Privacy Policy</span> and{' '}
          <span className="text-blue-500 cursor-pointer">Terms of Service</span>.
        </p>
      </form>
    </div>
  )
}
