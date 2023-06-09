import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

export default createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    en,
    pt
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    br: {
      currency: {
        style: 'currency',
        currency: 'BRL'
      }

    }
  }
})
