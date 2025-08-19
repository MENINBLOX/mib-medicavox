'use client';

import { Flex } from 'antd';
import { useTranslation } from '@/hooks/useTranslation';

type GenderCode = 'male' | 'female';

interface Patient {
  id: string;
  name: string;
  gender: GenderCode;
  age: number;
  nationality: string;
  language: string;
}

export default function PatientInfo() {
  const { t } = useTranslation();

  const patient: Patient = {
    id: '1',
    name: 'Dino',
    gender: 'male',
    age: 23,
    nationality: 'USA',
    language: 'English',
  };

  return (
    <Flex align="center" gap="small">
      <span style={{ fontWeight: 'bold' }}>{patient.name}</span>
      <span>{t(`patient.gender.${patient.gender}`)}</span>
      <span>
        {patient.age}
        {t('patient.yearsOldSuffix')}
      </span>
      <span>{patient.nationality}</span>
      <span>{patient.language}</span>
    </Flex>
  );
}
