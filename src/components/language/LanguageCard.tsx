'use client';

import React from 'react';
import { Card, Flex, Typography, theme } from 'antd';
import { LanguageOption } from '@/components/language/store';

interface LanguageCardProps {
  language: LanguageOption;
  selected?: boolean;
  onClick?: () => void;
}

export default function LanguageCard({
  language,
  selected = false,
  onClick,
}: LanguageCardProps) {
  const { token } = theme.useToken();

  return (
    <Card
      hoverable
      variant="outlined"
      role="button"
      aria-pressed={selected}
      onClick={onClick}
      style={{
        minWidth: 220,
        textAlign: 'center',
        borderColor: selected ? token.colorPrimary : undefined,
      }}
    >
      <Flex vertical align="center" gap={8}>
        <span style={{ fontSize: 36 }}>{language.flag}</span>
        <Typography.Text strong>{language.nativeLabel}</Typography.Text>
      </Flex>
    </Card>
  );
}
