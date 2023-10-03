import { IntlConfig } from "react-intl";

import translation from "./translations";
import { Locale, LocaleMessages } from "./model";

const defaultLocale: Locale = Object.keys(translation)[0] as Locale;

const locale = ((): Locale => {
  const language = navigator.languages?.length
    ? navigator.languages[0]
    : navigator.language;

  const locale = language.split("-")[0];
  if (locale in translation) {
    return locale as Locale;
  }
  return defaultLocale;
})();

export const intlConfig: IntlConfig = {
  defaultLocale,
  locale,
  messages: translation[locale] as LocaleMessages,
};
