import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Lang = 'en' | 'de'

interface LanguageStore {
  lang: Lang
  toggleLang: () => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      lang: 'en',
      toggleLang: () => set({ lang: get().lang === 'en' ? 'de' : 'en' }),
    }),
    { name: 'abit-lang' }
  )
)
