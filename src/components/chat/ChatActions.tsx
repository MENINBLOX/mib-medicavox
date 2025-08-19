'use client';

import { Button, Flex, Tooltip, Drawer } from 'antd';
import KeyboardSvg from './KeyboardSvg';
import WaveformSvg from './WaveformSvg';
import KeyboardInputBar from './KeyboardInputBar';
import { useState } from 'react';

type ChatActionsProps = {
  onKeyboardClick?: () => void;
  onVoiceClick?: () => void;
};

export default function ChatActions({
  onKeyboardClick,
  onVoiceClick,
}: ChatActionsProps): React.JSX.Element {
  const keyboardButtonSize = 42;
  const voiceButtonSize = 64;
  const [isVoiceActive, setIsVoiceActive] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          marginBottom: showKeyboard ? 100 : 24,
          paddingInline: 16,
          transition: 'margin-bottom 240ms ease',
        }}
      >
        <Flex gap="middle" justify="center" align="center">
          <Tooltip title="키보드 채팅">
            <Button
              shape="circle"
              type="primary"
              aria-label="keyboard-chat"
              onClick={() => {
                setShowKeyboard(true);
                onKeyboardClick?.();
              }}
              style={{
                pointerEvents: 'auto',
                width: keyboardButtonSize,
                height: keyboardButtonSize,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <KeyboardSvg size={22} color="#ffffff" />
            </Button>
          </Tooltip>
          <Tooltip
            title={isVoiceActive ? '음성 인식 중' : '음성 인식 일시정지'}
          >
            <Button
              shape="circle"
              type="default"
              aria-label="voice-chat"
              onClick={() => {
                setIsVoiceActive((prev) => !prev);
                onVoiceClick?.();
              }}
              style={{
                pointerEvents: 'auto',
                width: voiceButtonSize,
                height: voiceButtonSize,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isVoiceActive ? '#3b59ff' : '#9aa4b2',
                background: isVoiceActive ? '#ffffff' : '#f3f5f8',
                border: isVoiceActive
                  ? '2px solid #c6d4ff'
                  : '2px solid #dbe0ea',
                boxShadow: isVoiceActive
                  ? '0 8px 24px rgba(0,0,0,0.12), 0 0 0 6px rgba(59,89,255,0.08)'
                  : '0 6px 16px rgba(0,0,0,0.06)',
              }}
            >
              <WaveformSvg size={32} />
            </Button>
          </Tooltip>
        </Flex>
      </div>
      <Drawer
        placement="bottom"
        open={showKeyboard}
        mask={false}
        closable={false}
        getContainer={false}
        height={88}
        styles={{
          body: { padding: 0 },
          content: { background: 'transparent' },
          wrapper: { boxShadow: 'none' },
        }}
        style={{
          pointerEvents: 'auto',
        }}
        onClose={() => setShowKeyboard(false)}
      >
        <KeyboardInputBar
          onSend={() => setShowKeyboard(false)}
          onClose={() => setShowKeyboard(false)}
        />
      </Drawer>
    </div>
  );
}
