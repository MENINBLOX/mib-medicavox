import { useEffect, useRef } from 'react';

import { useVoiceStore } from '@/components/voice/store';
import { UID } from 'agora-rtc-sdk-ng';

import protoRoot from '../protobuf/bundle';
import { useQuerySttAgentStatus } from './query';
import { SttDraftBufferManager } from '../buffer';
import { useChatStore } from '@/components/chat/store';
import type { SttStreamChunk } from '../model';

const IDLE_MS = 5000;

export default function useSttStreamListener() {
  const { client, peerConnectionState, sttAgentId } = useVoiceStore();
  const upsertMessage = useChatStore((s) => s.upsertMessage);
  const bufferRef = useRef(new SttDraftBufferManager(IDLE_MS));

  const { data: sttAgentStatus } = useQuerySttAgentStatus(sttAgentId);

  useEffect(() => {
    bufferRef.current.setHandlers({
      onBufferUpdate: (drafts, isFinal) => {
        const firstDraft = drafts[0];
        const { id: messageId, speakerUid } = firstDraft;

        upsertMessage({
          id: messageId,
          speakerUid,
          text: drafts.map((d) => d.text).join(' '),
          status: isFinal ? 'finalized' : 'speaking',
          lastModifiedAt: new Date(),
        });
      },
    });
  }, [upsertMessage]);

  useEffect(() => {
    if (sttAgentStatus) {
      console.log('sttAgentStatus', sttAgentStatus);
    }
  }, [sttAgentStatus]);

  useEffect(() => {
    if (!client || peerConnectionState !== 'connected') return;

    console.log('registering stream-message listener');

    const handleStreamMessage = (speakerUid: UID, payload: Uint8Array) => {
      console.log('received stream-message', speakerUid);
      let textstream;
      try {
        textstream = protoRoot.Agora.SpeechToText.Text.decode(payload);
      } catch (error) {
        console.error('TextStream 디코딩 중 오류 발생:', error);
        return;
      }

      const { time, words } = textstream;

      console.log('words', words);

      const receivedAt = new Date(Number(time));

      words.forEach((word) => {
        const chunk: SttStreamChunk = {
          speakerUid: speakerUid.toString(),
          text: String(word.text ?? ''),
          isFinal: word.isFinal ?? false,
          receivedAt,
        };
        bufferRef.current.push(chunk);
      });
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
