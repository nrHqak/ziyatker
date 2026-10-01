import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HashScrollRestorer } from "@/components/layout/hash-scroll-restorer";

const notoSans = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["cyrillic", "latin"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZIYATKER — NIS Atyrau 2026",
    template: "%s — ZIYATKER",
  },
  description:
    "The ZIYATKER student campaign at NIS Atyrau: team, proposed initiatives, documented experience, and campaign journal.",
  applicationName: "ZIYATKER",
  metadataBase: new URL("https://ziyatker-campaign-2026.turan-sat-2695.chatgpt.site"),
  openGraph: {
    title: "ZIYATKER — NIS Atyrau 2026",
    description:
      "Meet the ZIYATKER team, explore the 2026–2027 program, and follow the campaign journal.",
    type: "website",
    siteName: "ZIYATKER",
  },
  icons: {
    icon: "/images/brand/ziyatker-logo-dark.jpg",
    apple: "/images/brand/ziyatker-logo-dark.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#063e2d",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <HashScrollRestorer />
      </body>
    </html>
  );
}
