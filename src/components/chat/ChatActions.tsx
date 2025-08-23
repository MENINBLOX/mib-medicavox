'use client';

import { Button, Flex, Tooltip, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import KeyboardSvg from './KeyboardSvg';
import WaveformSvg from './WaveformSvg';
import KeyboardInputBar from './KeyboardInputBar';
import { useState } from 'react';
import useMuteToggle from '../voice/useMuteToggle';

type ChatActionsProps = {
  onKeyboardClick?: () => void;
};

export default function ChatActions({
  onKeyboardClick,
}: ChatActionsProps): React.JSX.Element {
  const keyboardButtonSize = 42;
  const voiceButtonSize = 64;
  const [showKeyboard, setShowKeyboard] = useState(false);
  const { toggleMute, isMuted } = useMuteToggle();

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
          <Tooltip title={showKeyboard ? '입력창 닫기' : '키보드 채팅'}>
            <Button
              shape="circle"
              type={showKeyboard ? 'default' : 'primary'}
              aria-label="keyboard-chat"
              onClick={() => {
                setShowKeyboard((v) => !v);
                onKeyboardClick?.();
              }}
              style={{
                pointerEvents: 'auto',
                width: keyboardButtonSize,
                height: keyboardButtonSize,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: showKeyboard ? '#f3f5f8' : undefined,
                color: showKeyboard ? '#3b59ff' : undefined,
                border: showKeyboard ? '1px solid #dbe0ea' : undefined,
              }}
            >
              {showKeyboard ? (
                <CloseOutlined style={{ fontSize: 20, color: '#3b59ff' }} />
              ) : (
                <KeyboardSvg size={22} color="#ffffff" />
              )}
            </Button>
          </Tooltip>
          <Tooltip title={isMuted ? '음성 인식 일시정지됨' : '음성 인식 중'}>
            <Button
              shape="circle"
              type="default"
              aria-label="toggle-mute"
              onClick={() => toggleMute()}
              style={{
                pointerEvents: 'auto',
                width: voiceButtonSize,
                height: voiceButtonSize,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isMuted ? '#9aa4b2' : '#3b59ff',
                background: isMuted ? '#f3f5f8' : '#ffffff',
                border: isMuted ? '2px solid #dbe0ea' : '2px solid #c6d4ff',
                boxShadow: isMuted
                  ? '0 6px 16px rgba(0,0,0,0.06)'
                  : '0 8px 24px rgba(0,0,0,0.12), 0 0 0 6px rgba(59,89,255,0.08)',
              }}
            >
              <WaveformSvg size={voiceButtonSize / 2} />
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
        <KeyboardInputBar />
      </Drawer>
    </div>
  );
}
