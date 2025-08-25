import useConnectionState from './useConnectionState';
import useEchoRemoteUser from './useEchoRemoteUser';

export default function useStateSubscription() {
  useConnectionState();
  useEchoRemoteUser();
}
