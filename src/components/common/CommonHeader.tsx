import { Header } from 'antd/es/layout/layout';

export default function CommonHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Header
      style={{
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Header>
  );
}
