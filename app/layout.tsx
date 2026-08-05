import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Trust Production — Event Production & Rental",
    template: "%s | Trust Production",
  },
  description:
    "Event organizer, sound system rental, stage rental, and supporting event production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-ink-950 text-mist-100 font-body">
        {children}
      </body>
    </html>
  );
}

