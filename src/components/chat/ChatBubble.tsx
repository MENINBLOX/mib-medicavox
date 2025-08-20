'use client';

import { Space, Tag, Typography } from 'antd';

export type ChatValidationStatus =
  | 'none'
  | 'verifying'
  | 'verified'
  | 'flagged'
  | 'error';

type ChatBubbleProps = {
  side: 'left' | 'right';
  content: React.ReactNode;
  time: string | Date;
  status?: ChatValidationStatus; // 검증 상태 표시 및 색상
  maxWidthPct?: number; // 버블 최대 너비 비율 (기본 72)
};

const { Text } = Typography;

function formatTime(value: string | Date): string {
  if (typeof value === 'string') return value;
  const d = value;
  const hh = `${d.getHours()}`.padStart(2, '0');
  const mm = `${d.getMinutes()}`.padStart(2, '0');
  return `${hh}:${mm}`;
}

function getStylesByStatus(status: ChatValidationStatus | undefined) {
  switch (status) {
    case 'verifying':
      return {
        background: '#fffbe6',
        border: '1px solid #ffe58f',
        color: '#614700',
        label: '검증중',
      } as const;
    case 'verified':
      return {
        background: '#f6ffed',
        border: '1px solid #b7eb8f',
        color: '#135200',
        label: '검증 완료',
      } as const;
    case 'flagged':
      return {
        background: '#fff7e6',
        border: '1px solid #ffd591',
        color: '#873800',
        label: '확인 필요',
      } as const;
    case 'error':
      return {
        background: '#fff1f0',
        border: '1px solid #ffa39e',
        color: '#a8071a',
        label: '오류',
      } as const;
    default:
      return {
        background: '#ffffff',
        border: '1px solid #e5e6eb',
        color: 'inherit',
        label: undefined,
      } as const;
  }
}

export default function ChatBubble({
  side,
  content,
  time,
  status = 'none',
  maxWidthPct = 72,
}: ChatBubbleProps): React.JSX.Element {
  const styles = getStylesByStatus(status);
  const borderRadius =
    side === 'right' ? '16px 16px 4px 16px' : '16px 16px 16px 4px';

  return (
    <div
      style={{
        padding: '8px 12px',
        display: 'flex',
        justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      <Space
        direction="vertical"
        size={4}
        style={{ maxWidth: `${maxWidthPct}%` }}
      >
        <div
          style={{
            padding: '10px 12px',
            borderRadius,
            background: styles.background,
            border: styles.border,
            color: styles.color,
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
            wordBreak: 'break-word',
          }}
        >
          {typeof content === 'string' ? (
            <Text style={{ color: 'inherit' }}>{content}</Text>
          ) : (
            content
          )}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: side === 'right' ? 'row' : 'row-reverse',
          }}
        >
          {styles.label && (
            <Tag
              color={
                status === 'verified'
                  ? 'green'
                  : status === 'flagged'
                    ? 'gold'
                    : status === 'error'
                      ? 'red'
                      : 'default'
              }
              style={{ marginInlineEnd: 0 }}
            >
              {styles.label}
            </Tag>
          )}
          <Text type="secondary" style={{ fontSize: 12 }}>
            {formatTime(time)}
          </Text>
        </div>
      </Space>
    </div>
  );
}
