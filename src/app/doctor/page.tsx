'use client';

import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useAuthStore } from '@/stores/authStore';
import Center from '@/components/common/Center';
import { useTranslation } from '@/hooks/useTranslation';
import ChatLog from '@/components/chat/ChatLog';
import ChatActions from '@/components/chat/ChatActions';
import VoiceChatProvider from '@/components/voice/VoiceChatProvider';
import VoiceStatus from '@/components/voice/VoiceStatus';

export default function DoctorPage() {
  const { isLoggedIn, login } = useAuthStore();
  const { t } = useTranslation();

  if (isLoggedIn) {
    return (
      <VoiceChatProvider>
        <VoiceStatus />
        <ChatLog />
        <ChatActions />
      </VoiceChatProvider>
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
