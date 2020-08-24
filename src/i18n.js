import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./locales/en/translation.json";
import kh from './locales/kh/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            kh: {
                translation: kh
            }
        },
        lng: "kh",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    }).then(r => r);

console.log(i18n.store.data)

export default i18n;