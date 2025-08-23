'use client';

import { Flex } from 'antd';
import { useAuthStore } from '@/components/auth/store';
import CommonHeader from '@/components/common/CommonHeader';
import CommonLayout from '@/components/common/CommonLayout';
import PatientInfo from '@/components/doctor/PatientInfo';
import EndConsultationButton from '@/components/doctor/EndConsultationButton';
import LanguageChangeButton from '@/components/language/LanguageChangeButton';

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
    <CommonLayout
      header={
        <CommonHeader>
          <Flex>
            <PatientInfo />
          </Flex>
          <Flex gap="small">
            <LanguageChangeButton />
            <EndConsultationButton />
          </Flex>
        </CommonHeader>
      }
    >
      {children}
    </CommonLayout>
  );
}
