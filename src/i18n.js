import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Import your translation files
import translationEN from "./lang/en/translation.json";
import translationID from "./lang/id/translation.json";
import translationVI from "./lang/vi/translation.json";
import translationJA from "./lang/ja/translation.json";
import translationPT from "./lang/pt/translation.json";
import translationAR from "./lang/ar/translation.json";
import translationTH from "./lang/th/translation.json";
import translationES from "./lang/es/translation.json";
import translationDE from "./lang/de/translation.json";
import translationFR from "./lang/fr/translation.json";
import translationIT from "./lang/it/translation.json";
import translationKO from "./lang/ko/translation.json";
import translationTR from "./lang/tr/translation.json";
import translationRU from "./lang/ru/translation.json";
import translationFA from "./lang/fa/translation.json";
import translationMS from "./lang/ms/translation.json";
import translationBN from "./lang/bn/translation.json";
import translationAZ from "./lang/az/translation.json";
import translationZHCN from "./lang/zh-CN/translation.json";
import translationZHTW from "./lang/zh-TW/translation.json";

// Define the resources
const resources = {
  en: { translation: translationEN },
  id: { translation: translationID },
  vi: { translation: translationVI },
  ja: { translation: translationJA },
  pt: { translation: translationPT },
  ar: { translation: translationAR },
  th: { translation: translationTH },
  es: { translation: translationES },
  de: { translation: translationDE },
  fr: { translation: translationFR },
  it: { translation: translationIT },
  ko: { translation: translationKO },
  tr: { translation: translationTR },
  ru: { translation: translationRU },
  fa: { translation: translationFA },
  ms: { translation: translationMS },
  bn: { translation: translationBN },
  az: { translation: translationAZ },
  "zh-CN": { translation: translationZHCN },
  "zh-TW": { translation: translationZHTW },
};

// Initialize i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detects user language
  .use(HttpApi) // loads translations from your server
  .init({
    resources,
    fallbackLng: "en", // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
