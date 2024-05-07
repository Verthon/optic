import { getTranslations } from "next-intl/server";

import type { TranslationsKeys } from "@/localization/models/TranslationsKeys";

export const getTypedTranslations = async () => {
  const t = await getTranslations();

  return t<TranslationsKeys>;
};
