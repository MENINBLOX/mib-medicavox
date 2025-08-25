import useSubscription from './useSubscription';
import { IAgoraRTCRemoteUser, IDataChannelConfig } from 'agora-rtc-sdk-ng';
import { useVoiceStore } from '../../store';

export default function useEchoRemoteUser() {
  const { client } = useVoiceStore();
  useSubscription('user-joined', (user: IAgoraRTCRemoteUser) => {
    console.log('user-joined', user.uid, user.hasAudio);

    if (user.hasAudio) {
      user.audioTrack?.play();
    }
  });

  useSubscription('user-left', (user: IAgoraRTCRemoteUser, reason: string) => {
    console.log('user-left', user.uid, reason);
    user.audioTrack?.stop();
  });

  useSubscription(
    'user-published',
    (
      user: IAgoraRTCRemoteUser,
      mediaType: 'audio' | 'video' | 'datachannel',
      config?: IDataChannelConfig
    ) => {
      console.log(
        'user-published',
        user.uid,
        mediaType,
        config?.id,
        config?.metadata
      );
      if (mediaType === 'audio') {
        (async () => {
          try {
            if (client) {
              await client.subscribe(user, 'audio');
            }
            user.audioTrack?.play();
          } catch (error) {
            console.error('subscribe/play audio failed', error);
          }
        })();
      }
    }
  );

  useSubscription(
    'user-unpublished',
    (
      user: IAgoraRTCRemoteUser,
      mediaType: 'audio' | 'video' | 'datachannel'
    ) => {
      console.log('user-unpublished', user.uid, mediaType);
      if (mediaType === 'audio') {
        user.audioTrack?.stop();
      }
    }
  );
}
