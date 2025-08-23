import { useVoiceStore } from '@/stores/voiceStore';
import { useEffect, useMemo, useState } from 'react';

export default function useMuteToggle() {
  const [isMuted, setIsMuted] = useState(false);
  const { localMicrophoneTrack } = useVoiceStore();

  useEffect(() => {
    if (!localMicrophoneTrack) {
      return () => {};
    } else {
      return () => {
        localMicrophoneTrack.setEnabled(isMuted);
      };
    }
  }, [localMicrophoneTrack, isMuted]);

  const toggleMute = useMemo(() => {
    return (shouldMute?: boolean) => {
      setIsMuted(shouldMute ?? !isMuted);
    };
  }, [isMuted]);

  return {
    toggleMute,
    isMuted,
  };
}
