'use client';

import { Empty } from 'antd';
import Center from '../common/Center';

export default function ChatLog(): React.JSX.Element {
  return (
    <Center>
      <Empty description="채팅이 없습니다" />
    </Center>
  );
}
