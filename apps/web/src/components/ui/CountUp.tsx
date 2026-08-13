'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from '@/lib/useInView'

interface CountUpProps {
  value: string
  durationMs?: number
  className?: string
}

interface ParsedValue {
  number: number
  suffix: string
  hasComma: boolean
}

function parseValue(value: string): ParsedValue | null {
  const match = value.match(/^([\d,]+)(.*)$/)
  if (!match) return null

  const [, numberPart, suffix] = match
  const number = parseInt(numberPart.replace(/,/g, ''), 10)
  if (Number.isNaN(number)) return null

  return { number, suffix, hasComma: numberPart.includes(',') }
}

function formatCount(count: number, parsed: ParsedValue): string {
  const formattedNumber = parsed.hasComma ? count.toLocaleString('en-US') : String(count)
  return `${formattedNumber}${parsed.suffix}`
}

export function CountUp({ value, durationMs = 1600, className }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4)
  const parsed = useMemo(() => parseValue(value), [value])
  // Initial render (including the static/SSR HTML crawlers see) shows the real
  // value, not 0 — the count-up animation below overrides it client-side only
  // once the element scrolls into view.
  const [display, setDisplay] = useState(() => (parsed ? formatCount(parsed.number, parsed) : value))
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current || !parsed) return
    started.current = true

    const { number, suffix, hasComma } = parsed
    setDisplay(formatCount(0, parsed))
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(formatCount(Math.round(number * eased), { number, suffix, hasComma }))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, durationMs, parsed])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
