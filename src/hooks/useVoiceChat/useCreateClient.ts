import { useVoiceStore } from '@/stores/voiceStore';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useEffect } from 'react';

export default function useCreateClient() {
  const { setClient: setStoreClient } = useVoiceStore();

  useEffect(() => {
    const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    setStoreClient(client);

    return () => {
      setStoreClient(null);
    };
  }, [setStoreClient]);
}
