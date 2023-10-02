import { Locale, LocaleMessage } from "./type";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: LocaleMessage;
    }

    interface IntlConfig {
      locale: Locale;
    }
  }
}
