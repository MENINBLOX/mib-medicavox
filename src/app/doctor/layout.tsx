'use client';

import { Flex, Layout } from 'antd';
import { useAuthStore } from '@/stores/authStore';
import PatientInfo from '@/components/doctor/PatientInfo';
import EndConsultationButton from '@/components/doctor/EndConsultationButton';
import LanguageChangeButton from '@/components/language/LanguageChangeButton';

const { Header, Content } = Layout;

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <div>{children}</div>;
  }

  return (
    <Layout style={{ height: '100vh' }}>
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
        <Flex>
          <PatientInfo />
        </Flex>
        <Flex gap="small">
          <LanguageChangeButton />
          <EndConsultationButton />
        </Flex>
      </Header>

      <Content style={{ padding: 0, overflow: 'scroll' }}>{children}</Content>
    </Layout>
  );
}
