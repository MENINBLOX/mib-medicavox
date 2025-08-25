import { useVoiceStore } from '../../store';
import useSubscription from './useSubscription';
import { ConnectionState, NetworkQuality } from 'agora-rtc-sdk-ng';

export default function useConnectionState() {
  const { setConnectionState, setNetworkQuality, setPeerConnectionState } =
    useVoiceStore();

  useSubscription('connection-state-change', (newState: ConnectionState) => {
    setConnectionState(newState);
  });

  useSubscription('network-quality', (networkQuality: NetworkQuality) => {
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
  });

  useSubscription(
    'peerconnection-state-change',
    (newState: RTCPeerConnectionState) => {
      setPeerConnectionState(newState);
    }
  );
}
