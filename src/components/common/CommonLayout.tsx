'use client';

import { Layout } from 'antd';

const { Content } = Layout;

export default function CommonLayout({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ height: '100vh' }}>
      {header}
      <Content style={{ padding: 0, overflow: 'scroll' }}>{children}</Content>
    </Layout>
  );
}
