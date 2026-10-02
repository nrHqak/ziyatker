"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { useLanguage } from "@/components/i18n/language-provider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const { t } = useLanguage();
  const links = [
    { href: "/#home", label: t.nav.home, active: pathname === "/" && hash !== "#faq" },
    { href: "/program", label: t.nav.program, active: pathname === "/program" },
    { href: "/team", label: t.nav.team, active: pathname === "/team" },
    { href: "/journal", label: t.nav.journal, active: pathname.startsWith("/journal") },
    { href: "/#faq", label: t.nav.faq, active: pathname === "/" && hash === "#faq" },
  ];

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="desktop-nav" aria-label={t.nav.primaryLabel}>
        <div className="desktop-nav-links">
          {links.map((link) => <Link key={link.href} href={link.href} className={link.active ? "is-active" : ""}>{link.label}</Link>)}
        </div>
        <LanguageSelector />
      </nav>
      <button className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu">
        {t.nav.menu}
      </button>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="menu-close" type="button" onClick={() => setOpen(false)} aria-label={t.nav.close}><X aria-hidden="true" /></button>
        <nav aria-label={t.nav.mobileLabel}>
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className={link.active ? "is-active" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-meta">
          <LanguageSelector />
          <Link href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>@ziyatker.sc</Link>
        </div>
        <p lang="kk">екеніңді ұмытпа!</p>
      </div>
    </header>
  );
}
