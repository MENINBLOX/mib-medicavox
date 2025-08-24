import { useLanguageStore } from '../language/store';
import { useVoiceStore } from '../voice/store';
import { useStartSttAgent } from './hooks';
import { useEffect } from 'react';

export default function SttProvider() {
  const { language } = useLanguageStore();

  const { peerConnectionState } = useVoiceStore();

  const { mutate: startSttAgent } = useStartSttAgent();

  useEffect(() => {
    if (language && peerConnectionState === 'connected') {
      console.log('starting STT agent...', language);
      startSttAgent(language);
    }
  }, [language, startSttAgent, peerConnectionState]);

  return null;
}
