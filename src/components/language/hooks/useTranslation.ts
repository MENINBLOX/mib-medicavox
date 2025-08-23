'use client';

import { useEffect, useState } from 'react';
import { useLanguageStore } from '@/components/language/store';
import { t, tSync } from '../utils/i18n';

export function useTranslation() {
  const language = useLanguageStore().language ?? 'en';
  const [isLoaded, setIsLoaded] = useState(false);

  // 언어가 변경될 때마다 번역 데이터 로드 상태 업데이트
  useEffect(() => {
    setIsLoaded(false);
    // 번역 데이터를 미리 로드하여 isLoaded 상태 업데이트
    t('common.medicavox', language).then(() => {
      setIsLoaded(true);
    });
  }, [language]);

  const translate = (key: string): string => {
    if (isLoaded) {
      return tSync(key, language);
    }
    // 로드되지 않은 경우 동기적 번역 시도 (캐시된 데이터가 있으면 사용)
    return tSync(key, language);
  };

  const translateAsync = async (key: string): Promise<string> => {
    return await t(key, language);
  };

  return {
    t: translate,
    tAsync: translateAsync,
    language,
    isLoaded,
  };
}
