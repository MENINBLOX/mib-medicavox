import { useLanguageStore } from '../language/store';
import { useVoiceStore } from '../voice/store';
import { useStartSttAgent } from './hooks/query';
import { useEffect, useState } from 'react';
import useSttStreamListener from './hooks/useSttStreamListener';

export default function SttProvider() {
  const { language } = useLanguageStore();

  const { peerConnectionState, client } = useVoiceStore();

  const [sttAgentId, setSttAgentId] = useState<string | null>(null);

  const { mutate: startSttAgent } = useStartSttAgent();

  useSttStreamListener();

  // useEffect(() => {
  //   if (sttAgentId) {
  //     console.log('sttAgentId', sttAgentId);
  //     client?.subscribe(sttAgentId, 'audio');
  //   }
  // }, [sttAgentId, client]);

  useEffect(() => {
    if (language && peerConnectionState === 'connected') {
      console.log('starting STT agent...', language);
      startSttAgent(language, {
        onSuccess: (data) => {
          setSttAgentId(data.agent_id);
        },
      });
    }
  }, [language, startSttAgent, peerConnectionState]);

  return null;
}
