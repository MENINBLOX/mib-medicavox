import { useVoiceStore } from '@/stores/voiceStore';
import { useLocalMicrophoneTrack, usePublish } from 'agora-rtc-react';

export default function useMicrophone(isMicOn = true) {
  const { isConnected } = useVoiceStore();

  if (!isConnected) return;

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(isMicOn);

  usePublish([localMicrophoneTrack]);

  return null;
}
