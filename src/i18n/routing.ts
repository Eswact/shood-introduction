import { defineRouting } from 'next-intl/routing';

const locales = ['en', 'tr', 'es'] as const;
const defaultLocale = 'en';
const localePrefix = 'always';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: localePrefix
});

export type Locale = (typeof locales)[number];