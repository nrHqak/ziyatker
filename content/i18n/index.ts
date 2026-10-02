import { en } from "./en";
import { kk } from "./kk";
import { ru } from "./ru";
import type { Locale, Messages } from "./types";

export const messages: Record<Locale, Messages> = { ru, kk, en };
export const locales: Locale[] = ["kk", "ru", "en"];
export type { Locale, Messages } from "./types";
