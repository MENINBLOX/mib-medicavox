'use client';

import { useVoiceStore } from '@/stores/voiceStore';
import useChannelJoin from './useChannelJoin';
import useCreateClient from './useCreateClient';
import useMicrophone from './useMicrophone';
import dynamic from 'next/dynamic';

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
  const { client } = useVoiceStore();

  useCreateClient();
  useChannelJoin();
  useMicrophone();

  if (!client) return <>{children}</>;

  return (
    <AgoraRTCProviderPrimitive client={client}>
      {children}
    </AgoraRTCProviderPrimitive>
  );
}
