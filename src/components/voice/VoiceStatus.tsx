'use client';

import { Alert, Flex, Spin, Typography } from 'antd';
import { useVoiceStore } from '@/components/voice/store';
import { useEffect } from 'react';

export default function VoiceStatus() {
  const { uid, clientConnectionState, peerConnectionState, networkQuality } =
    useVoiceStore();

  useEffect(() => {
    console.log('clientConnectionState', clientConnectionState);
    console.log('peerConnectionState', peerConnectionState);
    console.log('networkQuality', networkQuality);
  }, [clientConnectionState, peerConnectionState, networkQuality]);

  if (
    clientConnectionState === 'CONNECTING' ||
    clientConnectionState === 'RECONNECTING'
  ) {
    return (
      <Flex align="center" justify="center" style={{ padding: 12 }}>
        <Spin />
        <Typography.Text style={{ marginLeft: 8 }}>
          음성 채널 연결 중…
        </Typography.Text>
      </Flex>
    );
  }

  let message: string;
  switch (clientConnectionState) {
    case 'DISCONNECTED':
      message = '연결 종료 됨';
      break;
    case 'CONNECTED':
      message = '음성 채널 연결됨';
      break;
    default:
      message = clientConnectionState.toString();
      break;
  }

  return (
    <Alert
      type="success"
      showIcon
      message={message}
      description={uid ? `UID: ${uid}` : undefined}
      style={{ margin: 12 }}
    />
  );
}
