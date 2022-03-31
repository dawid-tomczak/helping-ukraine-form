import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      PL: {
        translation: {
          'Kartka z areny': 'Kartka z areny',
          'Czego brakuje?': 'Czego brakuje?',
          Produkt: 'Produkt',
          Chleb: 'Chleb',
          Mleko: 'Mleko',
          Płatki: 'Płatki',
          Bułki: 'Bułki',
          Ilość: 'Ilość',
          Prześlij: 'Prześlij',
        },
      },
      UK: {
        translation: {
          'Kartka z areny': 'Листівка з арени',
          'Czego brakuje?': 'Чого не вистачає?',
          Produkt: 'Продукт',
          Chleb: 'Хліб',
          Mleko: 'Молоко',
          Płatki: 'Зернові',
          Bułki: 'Булочки',
          Ilość: 'Кількість',
          Prześlij: 'Подати',
        },
      },
    },
  });

export default i18n;
