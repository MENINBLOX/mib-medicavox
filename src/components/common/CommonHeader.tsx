import { Flex } from 'antd';
import { Header } from 'antd/es/layout/layout';

export default function CommonHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Header>
      <Flex
        align="center"
        justify="space-between"
        style={{
          height: '100%',
        }}
      >
        {children}
      </Flex>
    </Header>
  );
}
