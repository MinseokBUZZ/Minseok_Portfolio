import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Loads translations from the server
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // use en if detected lng is not available
    debug: true, // set to false in production
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translations
    },
    interpolation: {
      escapeValue: false, // React escapes values by default
    },
    react: {
      useSuspense: false, // Optional: Set to true if using Suspense
    }
  });

export default i18n;
