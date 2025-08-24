import { useEffect } from 'react';
import { useVoiceStore } from '../../store';
import { ConnectionState, NetworkQuality } from 'agora-rtc-sdk-ng';

export default function useConnectionStateSubscription() {
  const {
    client,
    setConnectionState,
    setNetworkQuality,
    setPeerConnectionState,
  } = useVoiceStore();

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
}
