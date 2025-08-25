'use client';

import { useVoiceStore } from '../voice/store';
import ChatBubble from './ChatBubble';
import { useChatStore } from './store';

function Padding({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        height: '100%',
        padding: 16,
        paddingBottom: 100,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        flex: '1 1 auto',
        overflowY: 'auto',
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {children}
    </div>
  );
}

export default function ChatLog(): React.JSX.Element {
  const messages = useChatStore((s) => s.messages);
  const { sttAgentId } = useVoiceStore();

  return (
    <Padding>
      <ScrollArea>
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            side={message.speakerUid === sttAgentId ? 'right' : 'left'}
            content={message.text}
            time={message.lastModifiedAt}
            status={message.status === 'finalized' ? 'verifying' : 'speaking'}
          />
        ))}
      </ScrollArea>
    </Padding>
  );
}
