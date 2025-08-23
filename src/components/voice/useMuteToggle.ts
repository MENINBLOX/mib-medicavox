import { useVoiceStore } from '@/stores/voiceStore';
import { useMemo } from 'react';

export default function useMuteToggle() {
  const { localMicrophoneTrack } = useVoiceStore();

  const toggleMute = useMemo(() => {
    if (!localMicrophoneTrack) {
      return () => {};
    } else {
      return () => {
        localMicrophoneTrack.setEnabled(!localMicrophoneTrack.enabled);
      };
    }
  }, [localMicrophoneTrack]);

  const isMuted = useMemo(() => {
    return !localMicrophoneTrack?.enabled;
  }, [localMicrophoneTrack?.enabled]);

  return {
    toggleMute,
    isMuted,
  };
}
