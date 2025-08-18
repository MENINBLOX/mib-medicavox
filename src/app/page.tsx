import { Card, Col, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import Center from '@/components/common/Center';

export default function Home() {
  return (
    <Center>
      <Col>
        <Title level={1}>Medicavox</Title>
        <Flex gap="middle" justify="center">
          <Link href="/doctor">
            <Card hoverable>의료진</Card>
          </Link>
          <Link href="/patient">
            <Card hoverable>환자</Card>
          </Link>
        </Flex>
      </Col>
    </Center>
  );
}
