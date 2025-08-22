import AgoraRTC, {
  AgoraRTCProvider,
  IAgoraRTCClient,
  useJoin,
} from 'agora-rtc-react';
import { useEffect, useState } from 'react';
import { useVoiceStore } from '@/stores/voiceStore';

const appId = '811ca6f1d4524a858798a8335c464e93';
const token =
  '007eJxTYPCM+By+ocZg//VbVRMnLljIaRctbD8pd2fvKYY8AcnwVysUGCwMDZMTzdIMU0xMjUwSLUwtzC0tEi2MjU2TTcxMUi2Nv0asyGgIZGRw8nvHyMgAgSA+D0NJanGJbnJGYl5eag4DAwAkXyHA';
const channel = 'test-channel';

export default function VoiceChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null);
  const { setClient: setStoreClient, setJoinState } = useVoiceStore();

  useEffect(() => {
    const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    setClient(client);
    setStoreClient(client);

    return () => {
      setStoreClient(null);
    };
  }, []);

  const {
    data: uid,
    error,
    isConnected,
    isLoading,
  } = useJoin({ appid: appId, token, channel }, !!client, client);

  useEffect(() => {
    setJoinState({
      uid,
      isConnected,
      isLoading,
      error,
    });
  }, [uid, isConnected, isLoading, error, setJoinState]);

  if (!client) return <>{children}</>;
  return <AgoraRTCProvider client={client}>{children}</AgoraRTCProvider>;
}
