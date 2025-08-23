import useCreateClient from './useCreateClient';
import useChannelJoin from './useChannelJoin';
import useCreateTrack from './useCreateTrack';
import usePublishTrack from './usePublishTrack';

export default function useVoiceChat() {
  useCreateClient();
  useChannelJoin();
  useCreateTrack();
  usePublishTrack();
}
