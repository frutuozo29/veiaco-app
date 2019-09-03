import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import pt from './locales/pt'
import en from './locales/en'

console.log(en)
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      pt: {
        translation: pt
      },
      en: {
        translation: en
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng'
    }
  })

export default i18n
