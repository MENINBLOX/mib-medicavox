'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { IAgoraRTCClient } from 'agora-rtc-react';
import { useVoiceStore } from '@/stores/voiceStore';
const VoiceChannelManager = dynamic(() => import('./VoiceChannelManager'), {
  ssr: false,
});

const AgoraRTCProviderPrimitive = dynamic(
  () =>
    import('agora-rtc-react').then(({ AgoraRTCProvider }) => AgoraRTCProvider),
  {
    ssr: false,
  }
);

export default function VoiceChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null);
  const { setClient: setStoreClient } = useVoiceStore();

  useEffect(() => {
    const initSdk = async () => {
      const AgoraRTC = (await import('agora-rtc-react')).default;
      const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      setClient(client);
      setStoreClient(client);
    };
    initSdk();

    return () => {
      setStoreClient(null);
    };
  }, []);

  if (!client) return <>{children}</>;
  return (
    <AgoraRTCProviderPrimitive client={client}>
      <VoiceChannelManager />
      {children}
    </AgoraRTCProviderPrimitive>
  );
}
