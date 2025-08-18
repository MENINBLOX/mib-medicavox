'use client';

import { Flex, Typography } from 'antd';

const { Text } = Typography;

interface Patient {
  id: string;
  name: string;
  gender: '남' | '여';
  age: number;
  nationality: string;
  language: string;
}

export default function PatientInfo() {
  const patient: Patient = {
    id: '1',
    name: 'Dino',
    gender: '남' as const,
    age: 23,
    nationality: '미국',
    language: 'English',
  };

  return (
    <Flex align="center" gap="small">
      <Text strong>{patient.name}</Text>
      <Text>{patient.gender}</Text>
      <Text>{patient.age}세</Text>
      <Text>{patient.nationality}</Text>
      <Text>{patient.language}</Text>
    </Flex>
  );
}
