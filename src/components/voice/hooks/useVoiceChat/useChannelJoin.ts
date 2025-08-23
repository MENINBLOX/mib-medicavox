import { useVoiceStore } from '@/components/voice/store';
import { useEffect } from 'react';

const appId = '811ca6f1d4524a858798a8335c464e93';
const token =
  '007eJxTYPCM+By+ocZg//VbVRMnLljIaRctbD8pd2fvKYY8AcnwVysUGCwMDZMTzdIMU0xMjUwSLUwtzC0tEi2MjU2TTcxMUi2Nv0asyGgIZGRw8nvHyMgAgSA+D0NJanGJbnJGYl5eag4DAwAkXyHA';
const channel = 'test-channel';

export default function useChannelJoin() {
  const { client, setUid } = useVoiceStore();

  useEffect(() => {
    if (!client) return;

    client.join(appId, channel, token).then((uid) => {
      setUid(uid);
    });

    return () => {
      client.leave().then(() => {
        setUid(null);
      });
    };
  }, [client, setUid]);
}
