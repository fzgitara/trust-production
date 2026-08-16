"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { waLink } from "@/lib/site";
import LocaleSwitcher from "./LocaleSwitcher";
import IKImage from "./shared/IKImage";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/** Sticky top navigation with WhatsApp CTA + locale switcher. */
export default function Header({ locale, dictionary }: Props) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}#services`, label: dictionary.nav.services },
    { href: `/${locale}#events`, label: dictionary.nav.events },
    // { href: `/${locale}#equipment`, label: dictionary.nav.equipment },
    // { href: `/${locale}#gallery`, label: dictionary.nav.gallery },
    { href: `/${locale}#contact`, label: dictionary.nav.contact },
  ];

  const quoteHref = waLink(
    dictionary.cta.getQuoteOnWhatsApp
  );

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink-950/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center"
          aria-label={dictionary.header.logoAlt}
        >
          <IKImage
            publicId="brand/logo"
            alt={dictionary.header.logoAlt}
            width={160}
            height={48}
            priority
            className="w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              className="text-sm text-mist-200 transition-colors hover:text-signal-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitcher
            locale={locale}
            ariaLabel={dictionary.footer.localeSwitcherLabel}
          />
          <a
            href={quoteHref}
            className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
          >
            {dictionary.cta.getQuote}
          </a>
        </div>

        {/* Mobile: menu + switcher */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dictionary.header.close : dictionary.header.menu}
            className="inline-flex items-center justify-center rounded-md p-2 text-mist-100"
          >
            <span className="sr-only">
              {open ? dictionary.header.close : dictionary.header.menu}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t hairline bg-ink-900 lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-mist-100 hover:bg-ink-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between border-t hairline pt-4">
              <LocaleSwitcher
                locale={locale}
                ariaLabel={dictionary.footer.localeSwitcherLabel}
              />
              <a
                href={quoteHref}
                className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-5 py-2.5 text-sm font-semibold text-ink-950"
              >
                {dictionary.cta.getQuote}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

