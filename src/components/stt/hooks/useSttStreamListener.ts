import { useEffect, useRef } from 'react';

import { useVoiceStore } from '@/components/voice/store';
import { UID } from 'agora-rtc-sdk-ng';

import protoRoot from '../protobuf/bundle';
import { useQuerySttAgentStatus } from './query';
import { SttDraftBuffer } from '../buffer';
import { useChatStore } from '@/components/chat/store';
import type { ChatMessage } from '@/components/chat/model';
import type { SttStreamChunk } from '../model';

const IDLE_MS = 1500;

export default function useSttStreamListener() {
  const { client, peerConnectionState, sttAgentId } = useVoiceStore();
  const upsertMessage = useChatStore((s) => s.upsertMessage);
  const bufferRef = useRef(new SttDraftBuffer(IDLE_MS));

  const { data: sttAgentStatus } = useQuerySttAgentStatus(sttAgentId);

  useEffect(() => {
    bufferRef.current.setHandlers({
      onBufferUpdate: (draft, isFinalized) => {
        const message = isFinalized
          ? bufferRef.current.normalize(draft.finalizedTokens)
          : draft.pendingText || '';

        const chatMessage: ChatMessage = {
          id: draft.id,
          speakerUid: draft.speakerUid,
          message,
          status: isFinalized ? 'finalized' : 'speaking',
          lastModifiedAt: new Date(),
        };
        upsertMessage(chatMessage);
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
