'use client';

import { useVoiceStore } from '@/stores/voiceStore';
import { useLocalMicrophoneTrack, usePublish, useJoin } from 'agora-rtc-react';
import { useEffect } from 'react';

const appId = '811ca6f1d4524a858798a8335c464e93';
const token =
  '007eJxTYPCM+By+ocZg//VbVRMnLljIaRctbD8pd2fvKYY8AcnwVysUGCwMDZMTzdIMU0xMjUwSLUwtzC0tEi2MjU2TTcxMUi2Nv0asyGgIZGRw8nvHyMgAgSA+D0NJanGJbnJGYl5eag4DAwAkXyHA';
const channel = 'test-channel';

export default function VoiceChannelManager() {
  const { setJoinState } = useVoiceStore();

  // 마이크 트랙 생성 (재생하지 않음)
  const micOn = true;
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);

  // 채널 자동 참여
  const {
    data: uid,
    error,
    isConnected,
    isLoading,
  } = useJoin({ appid: appId, token, channel }, true);

  // 마이크 트랙 발행 (서버에만 저장되도록 재생 없음)
  usePublish([localMicrophoneTrack]);

  // 상태를 store에 동기화
  useEffect(() => {
    setJoinState({
      uid,
      isConnected,
      isLoading,
      error,
    });
  }, [uid, isConnected, isLoading, error, setJoinState]);

  return null;
}
