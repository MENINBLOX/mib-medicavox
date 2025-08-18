'use client';

import CommonHeader from '@/components/common/CommonHeader';
import CommonLayout from '@/components/common/CommonLayout';
import DoctorInfo from '@/components/patient/DoctorInfo';
import { useLanguageStore } from '@/stores/languageStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguageStore();
  const router = useRouter();

  useEffect(() => {
    if (!language) {
      router.push('/language');
    }
  }, [language, router]);

  return (
    <CommonLayout
      header={
        <CommonHeader>
          <DoctorInfo />
        </CommonHeader>
      }
    >
      {children}
    </CommonLayout>
  );
}
