'use client';

import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useAuthStore } from '@/stores/authStore';
import Center from '@/components/common/Center';
import { useTranslation } from '@/hooks/useTranslation';

export default function DoctorPage() {
  const { isLoggedIn, login, logout } = useAuthStore();
  const { t } = useTranslation();

  if (isLoggedIn) {
    return (
      <Center>
        <Flex vertical align="center">
          <Title>{t('doctor.loggedIn')}</Title>
          <Button onClick={logout}>{t('doctor.logout')}</Button>
        </Flex>
      </Center>
    );
  }

  return (
    <Center>
      <Flex vertical align="center">
        <Title>{t('doctor.title')}</Title>
        <Button onClick={login}>{t('doctor.login')}</Button>
      </Flex>
    </Center>
  );
}
