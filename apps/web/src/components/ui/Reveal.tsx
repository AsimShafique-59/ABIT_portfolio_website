'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/lib/useInView'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
      style={{ transitionDelay: inView ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
