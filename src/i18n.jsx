import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Charge les fichiers JSON
  .use(LanguageDetector) // Détecte la langue
  .use(initReactI18next) // Lie à React
  .init({
    fallbackLng: 'fr', // Langue par défaut
    debug: true,
    interpolation: {
      escapeValue: false, // React protège déjà contre les injections XSS
    }
  });

export default i18n;
