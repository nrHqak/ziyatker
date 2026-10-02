"use client";

import Link from "next/link";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { useLanguage } from "@/components/i18n/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();
  const links = [
    { href: "/#home", label: t.nav.home },
    { href: "/program", label: t.nav.program },
    { href: "/team", label: t.nav.team },
    { href: "/journal", label: t.nav.journal },
    { href: "/#faq", label: t.nav.faq },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-brand"><strong>ZIYATKER</strong><p>{t.footer.school}</p></div>
      <nav aria-label={t.nav.footerLabel}>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <div className="footer-tools">
        <LanguageSelector />
        <Link className="footer-social" href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer">@ziyatker.sc</Link>
      </div>
    </footer>
  );
}
