import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

import translationEN from '@/localization/EN/en.json'
import translationRU from '@/localization/RU/ru.json'
import translationGE from '@/localization/GE/ge.json'
import translationUZ from '@/localization/UZ/uz.json'

const resources = {
  en: translationEN,
  ge: translationGE,
  ru: translationRU,
  uz: translationUZ,
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    saveMissing: true,
    debug: true,
    supportedLngs: ['en', 'ru', 'ge', 'uz'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
