'use client';

import { Modal } from 'antd';
import { useTranslation } from '@/components/language/hooks/useTranslation';

interface EndConsultationConfirmModalProps {
  open: boolean;
  confirmLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function EndConsultationConfirmModal({
  open,
  confirmLoading,
  onConfirm,
  onCancel,
}: EndConsultationConfirmModalProps) {
  const { t } = useTranslation();

  return (
    <Modal
      centered
      maskClosable
      open={open}
      title={t('doctor.endConfirm.title')}
      onOk={onConfirm}
      onCancel={onCancel}
      okText={t('doctor.endConfirm.ok')}
      cancelText={t('doctor.endConfirm.cancel')}
      okButtonProps={{ type: 'primary' }}
      confirmLoading={confirmLoading}
    >
      {t('doctor.endConfirm.description')}
    </Modal>
  );
}
