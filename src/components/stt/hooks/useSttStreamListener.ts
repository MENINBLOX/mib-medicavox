import { useEffect } from 'react';

import { useVoiceStore } from '@/components/voice/store';
import { UID } from 'agora-rtc-sdk-ng';

import protoRoot from '../protobuf/bundle';
import { useQuerySttAgentStatus } from './query';

export default function useSttStreamListener() {
  const { client, peerConnectionState, sttAgentId } = useVoiceStore();

  useEffect(() => {
    if (sttAgentId) {
      console.log('sttAgentId', sttAgentId);
    }
  }, [sttAgentId]);

  const { data: sttAgentStatus } = useQuerySttAgentStatus(sttAgentId);

  useEffect(() => {
    if (sttAgentStatus) {
      console.log('sttAgentStatus', sttAgentStatus);
    }
  }, [sttAgentStatus]);

  useEffect(() => {
    if (!client || peerConnectionState !== 'connected') return;

    console.log('registering stream-message listener');
    const handleStreamMessage = (uid: UID, payload: Uint8Array) => {
      let textstream = protoRoot.Agora.SpeechToText.Text.decode(payload);
      console.log('stream-message', uid, textstream.uid, textstream.words);
    };

    client.on('stream-message', handleStreamMessage);

    return () => {
      if (!client) return;
      console.log('unsubscribing stream-message listener');
      client.off('stream-message', handleStreamMessage);
    };
  }, [client, peerConnectionState]);

  return null;
}
