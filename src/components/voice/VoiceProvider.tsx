import useChatConnection from './hooks/useChatConnection';
import useStateSubscription from './hooks/useStateSubscription';

export default function VoiceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useChatConnection();
  useStateSubscription();

  return <>{children}</>;
}
