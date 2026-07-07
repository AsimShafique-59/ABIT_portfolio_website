import { WHY_CHOOSE } from '@/lib/data'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Why ABIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
              A Trusted Partner for
              <br />
              <span className="text-blue-600">Enterprise IT Across Europe</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              For over 10 years, ABIT has been the go-to engineering partner for enterprises, carriers, and service providers across the UK and Europe. Our commitment to SLA performance, technical excellence, and flexibility sets us apart.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-slate-700 text-sm font-medium">SC-Cleared engineers available in the UK</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-slate-700 text-sm font-medium">Direct coverage across EMEA and APAC regions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-slate-700 text-sm font-medium">5,000+ tickets resolved with 98% SLA in last 12 months</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-slate-700 text-sm font-medium">Fully GDPR-compliant operations</span>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover group"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-slate-900 font-bold text-sm mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
