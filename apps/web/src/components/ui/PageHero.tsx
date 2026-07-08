interface PageHeroProps {
  badge: string
  title: string
  highlight: string
  description: string
}

export function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  return (
    <section className="gradient-hero py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
          {title}
          <br />
          <span className="gradient-text">{highlight}</span>
        </h1>
        <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
