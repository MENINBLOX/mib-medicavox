'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import { useTranslation } from '@/hooks/useTranslation';

export default function EndConsultationButton() {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { t } = useTranslation();

  const handleEndConsultation = () => {
    logout();
    router.push('/doctor');
  };

  return (
    <Button type="primary" danger onClick={handleEndConsultation}>
      {t('doctor.endConsultation')}
    </Button>
  );
}
