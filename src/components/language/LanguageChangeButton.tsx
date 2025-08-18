'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { GlobalOutlined } from '@ant-design/icons';
import { getLabelByCode, useLanguageStore } from '@/stores/languageStore';

export default function LanguageChangeButton() {
  const router = useRouter();
  const { language } = useLanguageStore();
  const languageLabel = getLabelByCode(language);

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
