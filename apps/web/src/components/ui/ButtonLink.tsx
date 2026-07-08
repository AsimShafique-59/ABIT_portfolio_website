import type { ReactNode } from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva('inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-95', {
  variants: {
    variant: {
      primary: 'gradient-blue text-white shadow-xl shadow-blue-500/30 hover:scale-105',
      inverse: 'bg-white text-blue-700 shadow-xl hover:bg-blue-50 hover:scale-105',
      glass: 'glass text-white font-semibold border border-white/20 hover:bg-white/15',
    },
    size: {
      default: 'px-8 py-4 rounded-2xl text-sm',
      sm: 'px-6 py-3 rounded-xl text-sm',
    },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
})

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string
  className?: string
  children: ReactNode
}

export function ButtonLink({ href, variant, size, className, children }: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className)
  const isExternal = href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
