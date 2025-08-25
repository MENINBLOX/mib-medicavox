import useSubscription from './useSubscription';
import { IAgoraRTCRemoteUser, IDataChannelConfig } from 'agora-rtc-sdk-ng';

export default function useRemoteUser() {
  useSubscription('user-joined', (user: IAgoraRTCRemoteUser) => {
    console.log('user-joined', user.uid, user.hasAudio);

    if (user.hasAudio) {
      user.audioTrack?.play();
    }
  });

  useSubscription('user-left', (user: IAgoraRTCRemoteUser, reason: string) => {
    console.log('user-left', user.uid, reason);
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
    }
  );
}
