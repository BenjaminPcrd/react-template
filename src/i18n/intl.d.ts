import { Locale, LocaleMessage } from "./model";

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
