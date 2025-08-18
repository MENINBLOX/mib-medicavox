import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import styles from '../page.module.css';

export default function DoctorPage() {
  return (
    <div className={styles.centerLayout}>
      <Flex vertical align="center">
        <Title>의료진</Title>
        <Button>로그인</Button>
      </Flex>
    </div>
  );
}
