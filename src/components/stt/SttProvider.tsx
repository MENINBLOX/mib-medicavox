import { useLanguageStore } from '../language/store';
import { useVoiceStore } from '../voice/store';
import { useStartSttAgent } from './hooks/query';
import { useEffect, useState } from 'react';
import useSttStreamListener from './hooks/useSttStreamListener';

export default function SttProvider() {
  const { language } = useLanguageStore();

  const { peerConnectionState, setSttAgentId } = useVoiceStore();

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
          console.log('succeed, setting sttAgentId', data.agent_id);
          setSttAgentId(data.agent_id);
        },
      });
    }
  }, [language, startSttAgent, peerConnectionState, setSttAgentId]);

  return null;
}
