'use client';

import { Flex, Typography } from 'antd';

const { Text } = Typography;

interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
}

export default function DoctorInfo() {
  const doctor: Doctor = {
    id: '1',
    name: 'Dr. Chulsoo Kim',
    title: 'Professor',
    department: 'Surgery',
  };

  return (
    <Flex align="center" gap="small">
      <Text strong>{doctor.name}</Text>
      <Text>{doctor.title}</Text>
      <Text>{doctor.department}</Text>
    </Flex>
  );
}
