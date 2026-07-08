import Image from 'next/image'
import { Reveal } from './Reveal'

interface PageHeroProps {
  badge: string
  title: string
  highlight: string
  description: string
  image?: string
}

export function PageHero({ badge, title, highlight, description, image }: PageHeroProps) {
  return (
    <section className="gradient-hero py-28 relative overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d24]/90 via-[#0f2060]/85 to-[#050d24]/95" />
        </>
      )}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 glass text-blue-300 text-sm font-semibold rounded-full mb-6 border border-blue-400/20">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
          {title}
          <br />
          <span className="gradient-text">{highlight}</span>
        </h1>
        <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
      </Reveal>
    </section>
  )
}
