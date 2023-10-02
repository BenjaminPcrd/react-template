import { MessageFormatElement } from "react-intl";

import translation from "./translations";

export type Locale = keyof typeof translation;
export type LocaleMessage = keyof typeof translation.en;
export type LocaleMessages =
  | Record<LocaleMessage, string>
  | Record<LocaleMessage, MessageFormatElement[]>;
