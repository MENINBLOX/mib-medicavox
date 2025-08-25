'use client';

import { Flex, Typography } from 'antd';
import {
  AppLanguage,
  LANGUAGE_OPTIONS,
  useLanguageStore,
} from '@/components/language/store';
import LanguageCard from '@/components/language/LanguageCard';
import Center from '@/components/common/Center';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/components/auth/store';
import { useTranslation } from '@/components/language/hooks/useTranslation';

const { Title } = Typography;

export default function LanguageSelectionPage() {
  const { language, setLanguage } = useLanguageStore();
  const router = useRouter();
  const { isLoggedIn, setPreferredLanguage } = useAuthStore();
  const { t } = useTranslation();

  const handleClickLanguage = (code: AppLanguage) => {
    setLanguage(code);
    if (isLoggedIn) {
      setPreferredLanguage(code);
    }
    router.back();
  };

  return (
    <Center>
      <Flex vertical align="center" gap={16}>
        <Title level={2}>{t('language.selectLanguage')}</Title>
        <Flex gap={16} justify="center" wrap>
          {LANGUAGE_OPTIONS.map((opt) => (
            <LanguageCard
              key={opt.code}
              language={opt}
              selected={language === opt.code}
              onClick={() => handleClickLanguage(opt.code)}
            />
          ))}
        </Flex>
      </Flex>
    </Center>
  );
}
