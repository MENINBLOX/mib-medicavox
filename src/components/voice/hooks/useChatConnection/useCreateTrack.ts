import { useVoiceStore } from '@/components/voice/store';
import AgoraRTC, { IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';
import { useEffect } from 'react';

export default function useCreateTrack() {
  const { uid, setLocalMicrophoneTrack } = useVoiceStore();

  useEffect(() => {
    if (!uid) return;

    let localMicrophoneTrack: IMicrophoneAudioTrack | null = null;

    AgoraRTC.createMicrophoneAudioTrack().then((track) => {
      localMicrophoneTrack = track;
      setLocalMicrophoneTrack(track);
    });

    return () => {
      if (localMicrophoneTrack) {
        localMicrophoneTrack.close();
      }

      setLocalMicrophoneTrack(null);
    };
  }, [uid, setLocalMicrophoneTrack]);

  return null;
}
