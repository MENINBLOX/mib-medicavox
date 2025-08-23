'use client';

import { create } from 'zustand';
import { IAgoraRTCClient, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';

type VoiceUid = number | string | null;

interface VoiceState {
  client: IAgoraRTCClient | null;
  uid: VoiceUid;
  isConnected: boolean;
  isLoading: boolean;
  error: Error | null;
  localMicrophoneTrack: IMicrophoneAudioTrack | null;
  setClient: (client: IAgoraRTCClient | null) => void;
  setUid: (uid: VoiceUid) => void;
  setJoinState: (params: {
    uid: VoiceUid;
    isConnected: boolean;
    isLoading: boolean;
    error: Error | null;
  }) => void;
  setLocalMicrophoneTrack: (
    localMicrophoneTrack: IMicrophoneAudioTrack | null
  ) => void;
  reset: () => void;
}

const initialState: Omit<
  VoiceState,
  'setClient' | 'setUid' | 'setJoinState' | 'setLocalMicrophoneTrack' | 'reset'
> = {
  client: null,
  uid: null,
  isConnected: false,
  isLoading: false,
  error: null,
  localMicrophoneTrack: null,
};

export const useVoiceStore = create<VoiceState>()((set) => ({
  ...initialState,
  setClient: (client) => set({ client }),
  setUid: (uid) => set({ uid }),
  setJoinState: ({ uid, isConnected, isLoading, error }) =>
    set({ uid, isConnected, isLoading, error }),
  setLocalMicrophoneTrack: (localMicrophoneTrack) =>
    set({ localMicrophoneTrack }),
  reset: () => set({ ...initialState }),
}));
