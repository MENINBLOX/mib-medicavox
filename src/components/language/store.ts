'use client';

import { create } from 'zustand';
import { clearTranslationCache, t } from './utils/i18n';

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
  language: null, // 기본 언어 없음
  setLanguage: async (language: AppLanguage) => {
    clearTranslationCache(); // 언어 변경 시 번역 캐시 초기화

    // 새로운 언어의 번역 데이터를 미리 로드
    try {
      await t('common.medicavox', language);
    } catch (error) {
      console.error('Failed to preload translation data:', error);
    }

    set({ language });
  },
}));
