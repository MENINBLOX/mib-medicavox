'use client';

import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Center from '@/components/common/Center';
import { useTranslation } from '@/hooks/useTranslation';

export default function PatientPage() {
  const { t } = useTranslation();

  return (
    <Center>
      <Flex vertical align="center">
        <Title>{t('patient.title')}</Title>
      </Flex>
    </Center>
  );
}
