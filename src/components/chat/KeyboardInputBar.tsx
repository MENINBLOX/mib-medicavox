'use client';

import { Button, Flex, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useState } from 'react';

type KeyboardInputBarProps = {
  onSend?: (text: string) => void;
};

export default function KeyboardInputBar({
  onSend,
}: KeyboardInputBarProps): React.JSX.Element {
  const [text, setText] = useState('');

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend?.(trimmed);
    setText('');
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '12px 16px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 40%)',
      }}
    >
      <Flex align="center" gap="small" style={{ pointerEvents: 'auto' }}>
        <Flex style={{ flex: 1 }}>
          <Input
            autoFocus
            size="large"
            placeholder="텍스트를 입력해주세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onPressEnter={handleSend}
          />
          <Button
            type="primary"
            size="large"
            icon={<SendOutlined />}
            onClick={handleSend}
            aria-label="send-text"
          />
        </Flex>
      </Flex>
    </div>
  );
}
