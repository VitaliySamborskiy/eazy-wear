import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import { LOCALS } from "./constants/local.ts";

i18n
	.use(HttpApi)
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: LOCALS.UK,

		interpolation: {
			escapeValue: false,
		},
		debug: true,

		backend: {
			loadPath: `./locales/{{lng}}/{{ns}}.json`,
		},
		ns: ["components"],
		defaultNS: "components",
	});

export { i18n };
