'use client';

import { Flex, Typography } from 'antd';
import { useTranslation } from '@/hooks/useTranslation';

const { Text } = Typography;

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
      <Text strong>{patient.name}</Text>
      <Text>{t(`patient.gender.${patient.gender}`)}</Text>
      <Text>
        {patient.age}
        {t('patient.yearsOldSuffix')}
      </Text>
      <Text>{patient.nationality}</Text>
      <Text>{patient.language}</Text>
    </Flex>
  );
}
