'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePreferencesStore } from '@/src/stores/preferences-store';

export default function LocaleInitializer() {
  const currentLocale = useLocale();
  const { locale: storedLocale, setLocale } = usePreferencesStore();

  useEffect(() => {
    if (currentLocale !== storedLocale) {
      setLocale(currentLocale as 'tr' | 'en' | 'es');
    }
  }, [currentLocale, storedLocale, setLocale]);

  return null;
}