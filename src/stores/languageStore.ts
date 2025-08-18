'use client';

import { create } from 'zustand';

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

export function getLabelByCode(code: AppLanguage | null): string {
  if (!code) {
    return '언어 선택';
  }

  const found = LANGUAGE_OPTIONS.find((opt) => opt.code === code);
  return found ? found.nativeLabel : code;
}

interface LanguageState {
  language: AppLanguage | null;
  setLanguage: (language: AppLanguage) => void;
}

export const useLanguageStore = create<LanguageState>()((set) => ({
  language: null,
  setLanguage: (language: AppLanguage) => set({ language }),
}));
