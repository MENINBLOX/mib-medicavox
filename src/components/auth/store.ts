'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppLanguage, useLanguageStore } from '@/components/language/store';

interface AuthState {
  isLoggedIn: boolean;
  preferredLanguage: AppLanguage;
  login: () => void;
  logout: () => void;
  setPreferredLanguage: (language: AppLanguage) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      preferredLanguage: 'ko',
      login: () =>
        set((state) => {
          try {
            useLanguageStore.getState().setLanguage(state.preferredLanguage);
          } catch {}
          return { isLoggedIn: true };
        }),
      logout: () => set({ isLoggedIn: false }),
      setPreferredLanguage: (language: AppLanguage) =>
        set({ preferredLanguage: language }),
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        if (state?.isLoggedIn) {
          try {
            useLanguageStore.getState().setLanguage(state.preferredLanguage);
          } catch {}
        }
      },
    }
  )
);
