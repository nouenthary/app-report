import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "../locales/en/en.json";
import kh from '../locales/kh/kh.json';

const DefaultLanguage: string = 'kh';
const FallBackLanguage: string = 'en';

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
        lng: DefaultLanguage,
        fallbackLng: FallBackLanguage,

        interpolation: {
            escapeValue: false
        }
    }).then(r => r);

export default i18n;