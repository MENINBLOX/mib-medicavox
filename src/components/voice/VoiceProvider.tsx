import useChannelJoin from './hooks/useVoiceChat/useChannelJoin';
import useCreateClient from './hooks/useVoiceChat/useCreateClient';
import useCreateTrack from './hooks/useVoiceChat/useCreateTrack';
import usePublishTrack from './hooks/useVoiceChat/usePublishTrack';

export default function VoiceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useCreateClient();
  useChannelJoin();
  useCreateTrack();
  usePublishTrack();

  return <>{children}</>;
}
