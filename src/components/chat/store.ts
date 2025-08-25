'use client';

import { create } from 'zustand';
import type { ChatMessage } from './model';

interface ChatState {
  messages: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
  updateMessage: (msg: ChatMessage) => void;
  upsertMessage: (msg: ChatMessage) => void;
  clear: () => void;
}

export const useChatStore = create<ChatState>()((set) => ({
  messages: [],
  addMessage: (msg) => set((s) => ({ messages: [...s.messages, msg] })),
  updateMessage: (msg) =>
    set((s) => ({
      messages: s.messages.map((m) => (m.id === msg.id ? msg : m)),
    })),
  upsertMessage: (msg) =>
    set((s) => {
      const exists = s.messages.some((m) => m.id === msg.id);
      return exists
        ? { messages: s.messages.map((m) => (m.id === msg.id ? msg : m)) }
        : { messages: [...s.messages, msg] };
    }),
  clear: () => set({ messages: [] }),
}));
