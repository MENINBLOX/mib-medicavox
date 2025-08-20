import { AppLanguage } from '@/stores/languageStore';

// 번역 데이터 타입 정의
type TranslationData = {
  [key: string]: string | TranslationData;
};

// 번역 데이터를 동적으로 import
const translations: Record<AppLanguage, () => Promise<TranslationData>> = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ko: () => import('@/locales/ko.json').then((module) => module.default),
  id: () => import('@/locales/id.json').then((module) => module.default),
};

// 번역 데이터 캐시
const translationCache: Record<AppLanguage, TranslationData> = {} as Record<
  AppLanguage,
  TranslationData
>;

// 번역 함수
export async function t(key: string, language: AppLanguage): Promise<string> {
  try {
    // 캐시된 번역이 없으면 로드
    if (!translationCache[language]) {
      translationCache[language] = await translations[language]();
    }

    const keys = key.split('.');
    let value: string | TranslationData = translationCache[language];

    // 중첩된 키를 순회하며 값 찾기
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // 번역을 찾을 수 없으면 원본 키 반환
      }
    }

    return typeof value === 'string' ? value : key;
  } catch (error) {
    console.error(
      `Translation error for key "${key}" in language "${language}":`,
      error
    );
    return key; // 에러 발생 시 원본 키 반환
  }
}

// 동기적 번역 함수 (캐시된 데이터가 있는 경우)
export function tSync(key: string, language: AppLanguage): string {
  try {
    const cached = translationCache[language];
    if (!cached) {
      return key; // 캐시된 데이터가 없으면 원본 키 반환
    }

    const keys = key.split('.');
    let value: string | TranslationData = cached;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  } catch (error) {
    console.error(
      `Translation error for key "${key}" in language "${language}":`,
      error
    );
    return key;
  }
}

// 언어 변경 시 캐시 초기화
export function clearTranslationCache(): void {
  Object.keys(translationCache).forEach((key) => {
    delete translationCache[key as AppLanguage];
  });
}
