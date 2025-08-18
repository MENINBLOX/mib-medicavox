'use client';

import { Card, Flex, Typography } from 'antd';
import {
  AppLanguage,
  LANGUAGE_OPTIONS,
  useLanguageStore,
} from '@/stores/languageStore';
import styles from '../../page.module.css';
import langStyles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

const { Title, Text } = Typography;

export default function LanguageSelectionPage() {
  const { language, setLanguage } = useLanguageStore();
  const router = useRouter();
  const { isLoggedIn, setPreferredLanguage } = useAuthStore();

  const handleClickLanguage = (code: AppLanguage) => {
    setLanguage(code);
    if (isLoggedIn) {
      setPreferredLanguage(code);
    }
    router.back();
  };

  return (
    <div className={styles.centerLayout}>
      <Flex vertical align="center" gap={16}>
        <Title level={2}>Select Language</Title>
        <Flex gap={16} justify="center" wrap>
          {LANGUAGE_OPTIONS.map((opt) => (
            <Card
              key={opt.code}
              hoverable
              onClick={() => handleClickLanguage(opt.code)}
              className={`${langStyles.card} ${
                language === opt.code ? langStyles.selected : ''
              }`}
            >
              <div className={langStyles.flag}>{opt.flag}</div>
              <Text strong>{opt.nativeLabel}</Text>
            </Card>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
