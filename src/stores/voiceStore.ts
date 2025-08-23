'use client';

import { create } from 'zustand';
import type {
  ConnectionState,
  IAgoraRTCClient,
  IMicrophoneAudioTrack,
} from 'agora-rtc-react';

type VoiceUid = number | string | null;

interface VoiceState {
  client: IAgoraRTCClient | null;
  uid: VoiceUid;
  isConnected: boolean;
  isLoading: boolean;
  error: Error | null;
  connectionState: ConnectionState;
  localMicrophoneTrack: IMicrophoneAudioTrack | null;
  setClient: (client: IAgoraRTCClient | null) => void;
  setJoinState: (params: {
    uid: VoiceUid;
    isConnected: boolean;
    isLoading: boolean;
    error: Error | null;
  }) => void;
  setConnectionState: (connectionState: ConnectionState) => void;
  setLocalMicrophoneTrack: (
    localMicrophoneTrack: IMicrophoneAudioTrack | null
  ) => void;
  reset: () => void;
}

const initialState: Omit<
  VoiceState,
  | 'setClient'
  | 'setJoinState'
  | 'setConnectionState'
  | 'setLocalMicrophoneTrack'
  | 'reset'
> = {
  client: null,
  uid: null,
  isConnected: false,
  isLoading: false,
  error: null,
  connectionState: 'DISCONNECTED',
  localMicrophoneTrack: null,
};

export const useVoiceStore = create<VoiceState>()((set) => ({
  ...initialState,
  setClient: (client) => set({ client }),
  setJoinState: ({ uid, isConnected, isLoading, error }) =>
    set({ uid, isConnected, isLoading, error }),
  setConnectionState: (connectionState) => set({ connectionState }),
  setLocalMicrophoneTrack: (localMicrophoneTrack) =>
    set({ localMicrophoneTrack }),
  reset: () => set({ ...initialState }),
}));
