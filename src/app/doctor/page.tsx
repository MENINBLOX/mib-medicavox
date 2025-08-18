'use client';

import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useAuthStore } from '@/stores/authStore';
import styles from '../page.module.css';

export default function DoctorPage() {
  const { isLoggedIn, login, logout } = useAuthStore();

  if (isLoggedIn) {
    return (
      <div className={styles.centerLayout}>
        <Flex vertical align="center">
          <Title>의료진 로그인됨</Title>
          <Button onClick={logout}>로그아웃</Button>
        </Flex>
      </div>
    );
  }

  return (
    <div className={styles.centerLayout}>
      <Flex vertical align="center">
        <Title>의료진</Title>
        <Button onClick={login}>로그인</Button>
      </Flex>
    </div>
  );
}
