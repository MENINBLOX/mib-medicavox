'use client';

import { Alert, Flex, Spin, Typography } from 'antd';
import { useVoiceStore } from '@/components/voice/store';

export default function VoiceStatus() {
  const { isLoading, isConnected, error, uid } = useVoiceStore();

  if (error) {
    return (
      <Alert
        type="error"
        showIcon
        message="음성 연결 오류"
        description={String(error.message || error)}
        style={{ margin: 12 }}
      />
    );
  }

  if (isLoading && !isConnected) {
    return (
      <Flex align="center" justify="center" style={{ padding: 12 }}>
        <Spin />
        <Typography.Text style={{ marginLeft: 8 }}>
          음성 채널 연결 중…
        </Typography.Text>
      </Flex>
    );
  }

  if (isConnected) {
    return (
      <Alert
        type="success"
        showIcon
        message="음성 채널 연결됨"
        description={uid ? `UID: ${uid}` : undefined}
        style={{ margin: 12 }}
      />
    );
  }

  return null;
}
