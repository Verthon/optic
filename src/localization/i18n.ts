import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { locales } from "./constants/locales";
import type { Language } from "@/localization/models/Language";

const isSupportedLocale = (locale: string): locale is Language => {
  return locales.includes(locale as Language);
};

// eslint-disable-next-line import/no-default-export
export default getRequestConfig(async ({ locale }) => {
  if (!isSupportedLocale(locale)) {
    return notFound();
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    messages:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (await import(`../localization/translations/${locale}.json`)).default,
  };
});
