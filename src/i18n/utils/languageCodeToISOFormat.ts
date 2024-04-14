export function languageCodeISOFormat(languageCode: string): string {
  if (/^[a-z]{2}_[a-zA-Z]{2}$/.test(languageCode)) {
    const [lang, region] = languageCode.split('_')
    return lang.concat('-', region.toUpperCase())
  }
  return languageCode
}
