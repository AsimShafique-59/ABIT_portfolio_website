import { useLanguageStore } from './useLanguageStore'

describe('useLanguageStore', () => {
  beforeEach(() => {
    useLanguageStore.setState({ lang: 'en' })
  })

  it('defaults to English', () => {
    expect(useLanguageStore.getState().lang).toBe('en')
  })

  it('toggles between en and de', () => {
    useLanguageStore.getState().toggleLang()
    expect(useLanguageStore.getState().lang).toBe('de')

    useLanguageStore.getState().toggleLang()
    expect(useLanguageStore.getState().lang).toBe('en')
  })
})
