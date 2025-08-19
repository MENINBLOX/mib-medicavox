'use client';

import ChatBubble from './ChatBubble';

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
  return (
    <Padding>
      <ScrollArea>
        <ChatBubble
          side="left"
          content="안녕하세요, 어디가 불편하신가요?"
          time={new Date()}
          status="verified"
        />
        <ChatBubble
          side="right"
          content="가끔 어지럽고 가슴이 답답해요."
          time={new Date()}
          status="verifying"
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
        <ChatBubble
          side="left"
          content="증상이 언제부터였나요?"
          time={new Date()}
        />
      </ScrollArea>
    </Padding>
  );
}
