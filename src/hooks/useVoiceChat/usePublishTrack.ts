import { useVoiceStore } from '@/stores/voiceStore';
import { useEffect } from 'react';

export default function usePublishTrack() {
  const { client, localMicrophoneTrack } = useVoiceStore();

  useEffect(() => {
    if (!client || !localMicrophoneTrack) return;

    client.publish(localMicrophoneTrack);

    return () => {
      client.unpublish(localMicrophoneTrack);
    };
  }, [client, localMicrophoneTrack]);
}
