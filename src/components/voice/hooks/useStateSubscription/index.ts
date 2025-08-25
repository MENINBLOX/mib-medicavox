import useConnectionState from './useConnectionState';
import useRemoteUser from './useRemoteUser';

export default function useStateSubscription() {
  useConnectionState();
  useRemoteUser();
}
