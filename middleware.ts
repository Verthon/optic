import createMiddleware from "next-intl/middleware";

import { locales } from "@/localization/constants/locales";
import { defaultLocale } from "@/localization/constants/defaultLocale";
import { localePrefix } from "@/localization/navigation";

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: localePrefix,
});

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
