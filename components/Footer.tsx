import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { site, waLink } from "@/lib/site";
import LocaleSwitcher from "./LocaleSwitcher";
import IKImage from "./shared/IKImage";

interface Props {
  locale: Locale;
  dictionary: Dictionary;
}

/** Localized footer with nav columns, contact block, and locale switcher. */
export default function Footer({ locale, dictionary }: Props) {
  const year = new Date().getFullYear();

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}#services`, label: dictionary.nav.services },
    { href: `/${locale}#events`, label: dictionary.nav.events },
    { href: `/${locale}#contact`, label: dictionary.nav.contact },
  ];

  return (
    <footer className="border-t hairline bg-ink-900">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center"
              aria-label={dictionary.header.logoAlt}
            >
              <IKImage
                publicId="brand/logo"
                alt={dictionary.header.logoAlt}
                width={180}
                height={54}
                className="w-auto object-contain"
              />
            </Link>
            <p className="mt-3 max-w-md text-sm text-mist-300">
              {dictionary.footer.tagline}
            </p>
            <div className="mt-6">
              <LocaleSwitcher
                locale={locale}
                ariaLabel={dictionary.footer.localeSwitcherLabel}
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mist-300">
              {dictionary.footer.navTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist-200 transition-colors hover:text-signal-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mist-300">
              {dictionary.footer.contactTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-mist-200">
              {site.email && <li>{site.email}</li>}
              {site.phone && <li>{site.phone}</li>}
              {site.serviceArea && <li>{site.serviceArea}</li>}
              <li>
                <a
                  href={waLink(dictionary.cta.quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal-400 hover:text-signal-300"
                >
                  {dictionary.contact.whatsappNumberLabel}: {site.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t hairline pt-6 text-xs text-mist-400 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.name}.{" "}
            {dictionary.footer.rightsReserved}
          </p>
          <a href="#main" className="text-mist-300 hover:text-signal-400">
            ↑ {dictionary.cta.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

