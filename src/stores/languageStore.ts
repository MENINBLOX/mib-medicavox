'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AppLanguage = 'en' | 'ko' | 'id';

export interface LanguageOption {
  code: AppLanguage;
  nativeLabel: string;
  flag: string; // Use emoji flags to avoid additional icon deps
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', nativeLabel: 'English', flag: '🇺🇸' },
  { code: 'ko', nativeLabel: '한국어', flag: '🇰🇷' },
  { code: 'id', nativeLabel: 'Bahasa Indonesia', flag: '🇮🇩' },
];

function getLabelByCode(code: AppLanguage): string {
  const found = LANGUAGE_OPTIONS.find((opt) => opt.code === code);
  return found ? found.nativeLabel : code;
}

interface LanguageState {
  language: AppLanguage;
  languageLabel: string;
  setLanguage: (language: AppLanguage) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'ko',
      languageLabel: getLabelByCode('ko'),
      setLanguage: (language: AppLanguage) =>
        set({ language, languageLabel: getLabelByCode(language) }),
    }),
    {
      name: 'language-storage',
    }
  )
);
