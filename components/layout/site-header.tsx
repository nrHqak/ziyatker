"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const links = [
  { href: "/program", label: "PROGRAM" },
  { href: "/team", label: "TEAM" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="ZIYATKER home">
        <span>ZIYATKER</span>
        <small>NIS ATYRAU · 2026</small>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <button className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu">
        MENU +
      </button>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu"><X aria-hidden="true" /></button>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{link.label}
            </Link>
          ))}
        </nav>
        <p>ZIYATKER ekenindi Ūmytpa!</p>
      </div>
    </header>
  );
}
