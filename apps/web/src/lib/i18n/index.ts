'use client'

import { useLanguageStore } from '@/store/useLanguageStore'
import { en } from './en'
import { de } from './de'

export function useT() {
  const lang = useLanguageStore((s) => s.lang)
  return lang === 'de' ? de : en
}

export type { Translation } from './en'
