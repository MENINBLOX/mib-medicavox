'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { GlobalOutlined } from '@ant-design/icons';

export default function LanguageChangeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/doctor/language');
  };

  return (
    <Button type="default" onClick={handleClick}>
      <GlobalOutlined />
      언어 변경
    </Button>
  );
}
