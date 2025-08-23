import { useVoiceStore } from '@/components/voice/store';
import { useEffect } from 'react';

export default function useChannelJoin() {
  const { client, setUid, appId, channelName, token } = useVoiceStore();

  useEffect(() => {
    if (!client) return;

    client.join(appId, channelName, token).then((uid) => {
      setUid(uid);
    });

    return () => {
      client.leave().then(() => {
        setUid(null);
      });
    };
  }, [client, setUid]);
}
