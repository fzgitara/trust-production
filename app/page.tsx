import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/config";

/**
 * Root route redirects to the default locale (`/id`) so the canonical
 * localized home lives under the locale prefix.
 */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
