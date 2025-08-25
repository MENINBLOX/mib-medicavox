import { useEffect } from 'react';
import { useVoiceStore } from '../../store';

export default function useSubscription(
  eventName: string,
  handler: (...args: any[]) => void
) {
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
