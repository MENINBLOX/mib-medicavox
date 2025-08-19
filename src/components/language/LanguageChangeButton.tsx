'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { GlobalOutlined } from '@ant-design/icons';
import { getLabelByCode, useLanguageStore } from '@/stores/languageStore';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageChangeButton() {
  const router = useRouter();
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const languageLabel = language
    ? getLabelByCode(language)
    : t('common.selectLanguage');

  const handleClick = () => {
    router.push('/language');
  };

  return (
    <Button type="default" onClick={handleClick}>
      <GlobalOutlined />
      {languageLabel}
    </Button>
  );
}
