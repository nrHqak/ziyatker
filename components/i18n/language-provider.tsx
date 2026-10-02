"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Locale, type Messages } from "@/content/i18n";

const STORAGE_KEY = "ziyatker-locale-v1";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "ru" || value === "kk" || value === "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    setLocale(nextLocale) {
      setLocaleState(nextLocale);
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    },
    t: messages[locale],
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
