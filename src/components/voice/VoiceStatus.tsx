'use client';

import { Alert, Flex, Progress, Spin, Typography } from 'antd';
import { useVoiceStore } from '@/components/voice/store';
import { useEffect } from 'react';
import useMicrophoneLevel from './hooks/useMicrophoneLevel';

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
    <div style={{ margin: 12 }}>
      <Alert
        type="success"
        showIcon
        message={message}
        description={uid ? `UID: ${uid}` : undefined}
      />
      <MicLevelBar />
    </div>
  );
}

function MicLevelBar() {
  const level = useMicrophoneLevel(100);
  const percent = Math.min(100, Math.max(0, Math.round(level * 100)));

  return (
    <div style={{ marginTop: 8 }}>
      <Typography.Text>마이크 레벨</Typography.Text>
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor={percent > 60 ? '#52c41a' : '#1890ff'}
      />
    </div>
  );
}
