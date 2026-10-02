"use client";

import { locales } from "@/content/i18n";
import { useLanguage } from "./language-provider";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div className={`language-selector ${className}`.trim()} aria-label="Language">
      {locales.map((item) => (
        <button key={item} type="button" onClick={() => setLocale(item)} aria-pressed={locale === item} lang={item}>
          {item === "kk" ? "KZ" : item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
