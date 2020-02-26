import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// 语言包
import { lang as en } from "./assets/lang/en";
import { lang as zh } from "./assets/lang/zh";
import store from "./redux/store";
import { getItem } from "./utils/localstorage";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
};

getLang(getItem("lang").lang)

store.subscribe(() => {
  getLang(store.getState().lang);
});

function getLang(lng) {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng,

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });
}

export default i18n;
