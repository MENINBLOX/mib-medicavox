import { useEffect, useState } from 'react';
import { useVoiceStore } from '../store';

export default function useMicrophoneLevel(pollIntervalMs: number = 100) {
  const { localMicrophoneTrack } = useVoiceStore();
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (!localMicrophoneTrack) {
      setLevel(0);
      return;
    }

    let isMounted = true;
    const intervalId = setInterval(() => {
      try {
        const nextLevel = localMicrophoneTrack.getVolumeLevel();
        if (isMounted) setLevel(nextLevel);
      } catch {
        // noop: getVolumeLevel may throw if track is disposed
      }
    }, pollIntervalMs);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [localMicrophoneTrack, pollIntervalMs]);

  return level;
}
