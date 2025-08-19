'use client';

import { Button, Flex } from 'antd';
import KeyboardSvg from './KeyboardSvg';
import WaveformSvg from './WaveformSvg';

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

  return (
    <Flex
      gap="middle"
      justify="center"
      align="center"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 24,
        paddingInline: 16,
        pointerEvents: 'none',
      }}
    >
      <Button
        shape="circle"
        type="primary"
        aria-label="keyboard-chat"
        onClick={onKeyboardClick}
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
      <Button
        shape="circle"
        type="default"
        aria-label="voice-chat"
        onClick={onVoiceClick}
        style={{
          pointerEvents: 'auto',
          width: voiceButtonSize,
          height: voiceButtonSize,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3b59ff',
          boxShadow:
            '0 8px 24px rgba(0,0,0,0.12), 0 0 0 6px rgba(59,89,255,0.08)',
        }}
      >
        <WaveformSvg size={32} />
      </Button>
    </Flex>
  );
}
