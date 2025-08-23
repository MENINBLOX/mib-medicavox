'use client';

import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useAuthStore } from '@/components/auth/store';
import Center from '@/components/common/Center';
import { useTranslation } from '@/components/language/hooks/useTranslation';
import ChatLog from '@/components/chat/ChatLog';
import ChatActions from '@/components/chat/ChatActions';
import VoiceStatus from '@/components/voice/VoiceStatus';
import { lazy } from 'react';

const VoiceProvider = lazy(() => import('@/components/voice/VoiceProvider'));

export default function DoctorPage() {
  const { isLoggedIn, login } = useAuthStore();
  const { t } = useTranslation();

  if (isLoggedIn) {
    return (
      <VoiceProvider>
        <VoiceStatus />
        <ChatLog />
        <ChatActions />
      </VoiceProvider>
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
