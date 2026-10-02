"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/language-provider";

export default function NotFound() {
  const { t } = useLanguage();
  return <main id="main-content" className="not-found"><span>{t.notFound.kicker}</span><h1>{t.notFound.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><Link href="/#home">{t.notFound.link}</Link></main>;
}
