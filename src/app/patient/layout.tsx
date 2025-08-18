import CommonHeader from '@/components/common/CommonHeader';
import CommonLayout from '@/components/common/CommonLayout';
import DoctorInfo from '@/components/patient/DoctorInfo';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
