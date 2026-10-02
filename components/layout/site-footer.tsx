"use client";

import Link from "next/link";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { useLanguage } from "@/components/i18n/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer" data-nav-theme="dark">
      <p className="footer-school">{t.footer.school}</p>
      <Link className="footer-social" href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer">@ziyatker.sc</Link>
      <LanguageSelector />
    </footer>
  );
}
