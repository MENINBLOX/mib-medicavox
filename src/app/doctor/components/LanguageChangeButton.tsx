'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { GlobalOutlined } from '@ant-design/icons';
import { useLanguageStore } from '@/stores/languageStore';

export default function LanguageChangeButton() {
  const router = useRouter();
  const { languageLabel } = useLanguageStore();

  const handleClick = () => {
    router.push('/doctor/language');
  };

  return (
    <Button type="default" onClick={handleClick}>
      <GlobalOutlined />
      {languageLabel}
    </Button>
  );
}
