import { redirect } from "next/navigation";
import { defaultLocale } from "@/localization/constants/defaultLocale";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
