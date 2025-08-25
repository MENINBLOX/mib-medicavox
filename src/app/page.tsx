'use client';

import { Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import Center from '@/components/common/Center';
import { useTranslation } from '@/components/language/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Center>
      <Flex vertical align="center">
        <Title level={1}>{t('common.medicavox')}</Title>
        <Flex gap="middle" justify="center">
          <Link href="/doctor">
            <Card hoverable>{t('home.doctor')}</Card>
          </Link>
          <Link href="/patient">
            <Card hoverable>{t('home.patient')}</Card>
          </Link>
        </Flex>
      </Flex>
    </Center>
  );
}
