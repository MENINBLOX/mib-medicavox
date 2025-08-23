import { useVoiceStore } from '@/stores/voiceStore';
import { useEffect } from 'react';

export default function useCreateClient() {
  const { setClient: setStoreClient } = useVoiceStore();

  useEffect(() => {
    const initSdk = async () => {
      const AgoraRTC = (await import('agora-rtc-react')).default;
      const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      setStoreClient(client);
    };
    initSdk();

    return () => {
      setStoreClient(null);
    };
  }, [setStoreClient]);
}
