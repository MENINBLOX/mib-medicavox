import { useVoiceStore } from '@/stores/voiceStore';
import { useLocalMicrophoneTrack, usePublish } from 'agora-rtc-react';
import { useEffect } from 'react';

export default function useMicrophone(isMicOn = true) {
  const { isConnected, setLocalMicrophoneTrack } = useVoiceStore();

  if (!isConnected) return;

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(isMicOn);

  useEffect(() => {
    setLocalMicrophoneTrack(localMicrophoneTrack);
  }, [localMicrophoneTrack, setLocalMicrophoneTrack]);

  usePublish([localMicrophoneTrack]);

  return null;
}
