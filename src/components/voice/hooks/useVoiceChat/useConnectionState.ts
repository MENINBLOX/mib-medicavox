import { useEffect } from 'react';
import { useVoiceStore } from '../../store';
import AgoraRTC, {
  ConnectionState,
  IAgoraRTCRemoteUser,
  IDataChannelConfig,
  NetworkQuality,
  UID,
} from 'agora-rtc-sdk-ng';

export default function useConnectionStateSubscription() {
  const {
    client,
    setConnectionState,
    setNetworkQuality,
    setPeerConnectionState,
  } = useVoiceStore();

  useEffect(() => {
    AgoraRTC.onAutoplayFailed = () => {
      console.log('Autoplay failed!');
    };
  }, []);

  useEffect(() => {
    if (!client) return;

    const handleConnectionStateChange = (newState: ConnectionState) => {
      setConnectionState(newState);
    };

    client.on('connection-state-change', handleConnectionStateChange);

    return () => {
      if (!client) return;
      client.off('connection-state-change', handleConnectionStateChange);
    };
  }, [client, setConnectionState]);

  useEffect(() => {
    if (!client) return;

    const handleNetworkQuality = (networkQuality: NetworkQuality) => {
      switch (networkQuality.uplinkNetworkQuality) {
        case 0:
          setNetworkQuality('unknown');
          break;
        case 1:
        case 2:
          setNetworkQuality('good');
          break;
        case 3:
        case 4:
        case 5:
          setNetworkQuality('poor');
          break;
        case 6:
          setNetworkQuality('disconnected');
          break;
      }
    };

    client.on('network-quality', handleNetworkQuality);

    return () => {
      if (!client) return;
      client.off('network-quality', handleNetworkQuality);
    };
  }, [client, setNetworkQuality]);

  useEffect(() => {
    if (!client) return;

    const handlePeerConnectionStateChange = (
      newState: RTCPeerConnectionState
    ) => {
      setPeerConnectionState(newState);
    };

    client.on('peerconnection-state-change', handlePeerConnectionStateChange);

    return () => {
      if (!client) return;
      client.off(
        'peerconnection-state-change',
        handlePeerConnectionStateChange
      );
    };
  }, [client, setPeerConnectionState]);

  useEffect(() => {
    if (!client) return;

    const handleUserJoined = (user: IAgoraRTCRemoteUser) => {
      console.log('user-joined', user.uid, user.hasAudio);

      if (user.hasAudio) {
        user.audioTrack?.play();
      }
    };

    client.on('user-joined', handleUserJoined);

    return () => {
      if (!client) return;
      client.off('user-joined', handleUserJoined);
    };
  }, [client]);

  useEffect(() => {
    if (!client) return;

    const handleUserLeft = (user: IAgoraRTCRemoteUser, reason: string) => {
      console.log('user-left', user.uid, reason);
    };

    client.on('user-left', handleUserLeft);

    return () => {
      if (!client) return;
      client.off('user-left', handleUserLeft);
    };
  }, [client]);

  useEffect(() => {
    if (!client) return;

    const handleUserPublished = (
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
    };

    client.on('user-published', handleUserPublished);

    return () => {
      if (!client) return;
      client.off('user-published', handleUserPublished);
    };
  }, [client]);
}
