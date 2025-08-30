import { useEffect } from 'react';
import { useVoiceStore } from '../../store';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function useSubscription(eventName: string, handler: Function) {
  const { client } = useVoiceStore();

  useEffect(() => {
    if (!client) return;

    client.on(eventName, handler);

    return () => {
      if (!client) return;

      client.off(eventName, handler);
    };
  }, [client, eventName, handler]);
}
