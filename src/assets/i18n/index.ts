import { createI18n } from 'vue-i18n';
import zh from './zh-tw.json';
import en from './en-us.json';

console.log('zxcv', zh);

const i18n = createI18n({
  legacy: false,
  locale: 'zh-tw',
  fallbackLocale: 'zh-tw',
  messages: {
    'zh-tw': zh,
    'en-us': en,
  },
});

export default i18n;
