// write a test for it

import { languageCodeISOFormat } from './languageCodeToISOFormat'
import { describe, expect, it } from 'vitest'

describe('languageCodeISOFormat', () => {
  it('should return the ISO format of the language code', () => {
    expect(languageCodeISOFormat('en_US')).toBe('en-US')
    expect(languageCodeISOFormat('en_GB')).toBe('en-GB')
    expect(languageCodeISOFormat('es_ES')).toBe('es-ES')
  })

  it('should return the language code if it is not in the correct format', () => {
    expect(languageCodeISOFormat('en')).toBe('en')
    expect(languageCodeISOFormat('es')).toBe('es')
  })
})
