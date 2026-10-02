"use client";

import { useLanguage } from "./language-provider";

export function LocalizedSkipLink() {
  const { t } = useLanguage();
  return <a className="skip-link" href="#main-content">{t.common.skipToContent}</a>;
}
