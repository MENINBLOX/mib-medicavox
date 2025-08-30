'use client';

import { create } from 'zustand';
import {
  ConnectionState,
  IAgoraRTCClient,
  IMicrophoneAudioTrack,
} from 'agora-rtc-sdk-ng';
import { AGORA_APP_ID, AGORA_CHANNEL, AGORA_TOKEN } from './config';

type VoiceUid = number | string | null;

type NetworkQuality = 'good' | 'poor' | 'unknown' | 'disconnected';

interface VoiceState {
  client: IAgoraRTCClient | null;
  uid: VoiceUid;
  clientConnectionState: ConnectionState;
  networkQuality: NetworkQuality;
  peerConnectionState: RTCPeerConnectionState;
  localMicrophoneTrack: IMicrophoneAudioTrack | null;
  appId: string;
  channelName: string;
  token: string;
  sttAgentId: string | null;
  setSttAgentId: (sttAgentId: string | null) => void;
  setClient: (client: IAgoraRTCClient | null) => void;
  setUid: (uid: VoiceUid) => void;
  setConnectionState: (connectionState: ConnectionState) => void;
  setNetworkQuality: (networkQuality: NetworkQuality) => void;
  setPeerConnectionState: (peerConnectionState: RTCPeerConnectionState) => void;
  setLocalMicrophoneTrack: (
    localMicrophoneTrack: IMicrophoneAudioTrack | null
  ) => void;
  reset: () => void;
}

const initialState: Omit<
  VoiceState,
  | 'setClient'
  | 'setUid'
  | 'setConnectionState'
  | 'setNetworkQuality'
  | 'setPeerConnectionState'
  | 'setLocalMicrophoneTrack'
  | 'setSttAgentId'
  | 'reset'
> = {
  client: null,
  uid: null,
  clientConnectionState: 'DISCONNECTED',
  networkQuality: 'unknown',
  peerConnectionState: 'closed',
  localMicrophoneTrack: null,
  appId: AGORA_APP_ID,
  channelName: AGORA_CHANNEL,
  token: AGORA_TOKEN,
  sttAgentId: null,
};

export const useVoiceStore = create<VoiceState>()((set) => ({
  ...initialState,
  setClient: (client) => set({ client }),
  setUid: (uid) => set({ uid }),
  setConnectionState: (connectionState) =>
    set({ clientConnectionState: connectionState }),
  setNetworkQuality: (networkQuality) => set({ networkQuality }),
  setPeerConnectionState: (peerConnectionState) => set({ peerConnectionState }),
  setLocalMicrophoneTrack: (localMicrophoneTrack) =>
    set({ localMicrophoneTrack }),
  setSttAgentId: (sttAgentId) => set({ sttAgentId }),
  reset: () => set({ ...initialState }),
}));
