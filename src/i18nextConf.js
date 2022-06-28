import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/js/bootstrap.js";

import "bootstrap/dist/css/bootstrap.min.css";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"]
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json"
    }
  });

