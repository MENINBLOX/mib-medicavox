'use client';

import { Flex } from 'antd';

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
      <span style={{ fontWeight: 'bold' }}>{doctor.name}</span>
      <span>{doctor.title}</span>
      <span>{doctor.department}</span>
    </Flex>
  );
}
