import { cn } from './cn'

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('px-4', 'text-white')).toBe('px-4 text-white')
  })

  it('drops falsy values', () => {
    expect(cn('px-4', false && 'hidden', undefined, 'text-white')).toBe('px-4 text-white')
  })

  it('resolves conflicting tailwind utilities in favor of the last one', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8')
  })
})
