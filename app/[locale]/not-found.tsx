import Link from "next/link";
import { defaultLocale } from "@/lib/i18n/config";

export const metadata = { title: "404 — Page Not Found" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-6 text-center text-mist-100">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-mist-300">
        The page you’re looking for doesn’t exist yet.
      </p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
      >
        Back to home
      </Link>
    </main>
  );
}
