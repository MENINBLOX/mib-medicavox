'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export default function EndConsultationButton() {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleEndConsultation = () => {
    logout();
    router.push('/doctor');
  };

  return (
    <Button type="primary" danger onClick={handleEndConsultation}>
      진료 종료
    </Button>
  );
}
