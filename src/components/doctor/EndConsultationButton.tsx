'use client';

import { Button } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/components/auth/store';
import { useTranslation } from '@/components/language/hooks/useTranslation';
import EndConsultationConfirmModal from '@/components/doctor/EndConsultationConfirmModal';

export default function EndConsultationButton() {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      logout();
      router.push('/doctor');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Button type="primary" danger onClick={handleOpen}>
        {t('doctor.endConsultation')}
      </Button>
      <EndConsultationConfirmModal
        open={open}
        confirmLoading={loading}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
}
