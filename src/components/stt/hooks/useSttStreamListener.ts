import { useEffect, useRef } from 'react';

// import protobuf from 'protobufjs/light';
import { useVoiceStore } from '@/components/voice/store';
import { UID } from 'agora-rtc-sdk-ng';

import protoRoot from '../protobuf/bundle';

const STT_PUB_BOT_UID = process.env.NEXT_PUBLIC_TEMP_AGORA_PUB_BOT_UID ?? ''; // 서버에서 사용한 pubBotUid와 동일하게 유지

type OnText = (msg: any) => void;

export default function useSttStreamListener(onText?: OnText) {
  const { client, peerConnectionState } = useVoiceStore();
  //   const textTypeRef = useRef<protobuf.Type | null>(null);

  useEffect(() => {
    if (!client || peerConnectionState !== 'connected') return;

    console.log('registering stream-message listener');
    const handleStreamMessage = (uid: UID, payload: Uint8Array) => {
      console.log('stream-message', uid);
      // let textstream = protoRoot.Agora.SpeechToText.Text.decode(payload);

      // console.log(textstream);
    };

    client.on('stream-message', handleStreamMessage);

    return () => {
      if (!client) return;
      client.off('stream-message', handleStreamMessage);
    };
  }, [client, peerConnectionState]);

  /*
  useEffect(() => {
    if (!client) return;

    let cleanup = () => {};
    let canceled = false;

    (async () => {
      // public/SttMessage.proto (문서 원문) 필요
      const root = await protobuf.load('/SttMessage.proto');
      if (canceled) return;
      textTypeRef.current = root.lookupType('Agora.SpeechToText.Text');

      const handler = (
        uid: string | number,
        _streamId: number,
        data: Uint8Array | string
      ) => {
        if (String(uid) !== String(STT_PUB_BOT_UID)) return;
        try {
          const bytes =
            typeof data === 'string' ? new TextEncoder().encode(data) : data;
          const msg = textTypeRef.current!.decode(bytes as Uint8Array);
          onText?.(msg);
        } catch (e) {
          console.error('STT decode error', e);
        }
      };

      client.on('stream-message', handler);
      cleanup = () => client.off('stream-message', handler);
    })();

    return () => {
      canceled = true;
      cleanup();
    };
  }, [client, onText]);
  */

  return null;
}
