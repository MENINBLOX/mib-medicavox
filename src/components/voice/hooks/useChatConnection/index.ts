import useChannelJoin from './useChannelJoin';
import useCreateClient from './useCreateClient';
import useCreateTrack from './useCreateTrack';
import usePublishTrack from './usePublishTrack';

export default function useChatConnection() {
  useCreateClient();
  useChannelJoin();
  useCreateTrack();
  usePublishTrack();
}
