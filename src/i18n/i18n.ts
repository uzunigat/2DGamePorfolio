import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJSON from './en.json'
import esJSON from './es.json'
import frJSON from './fr.json'
import i18next from 'i18next'
import { languageCodeISOFormat } from './utils'

const initLocales = () => {
  i18next.use(initReactI18next).init({
    debug: true,
    resources: {
      en: {
        translation: enJSON,
      },
      es: {
        translation: esJSON,
      },
      fr: {
        translation: frJSON,
      },
    },
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  })
}

function changeLanguage(language: string) {
  const languageFormated = languageCodeISOFormat(language)
  i18next.changeLanguage(languageFormated)
}

export { initLocales, changeLanguage, i18n }
