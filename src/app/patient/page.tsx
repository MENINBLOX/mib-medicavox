import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import styles from '../page.module.css';

export default function PatientPage() {
  return (
    <div className={styles.centerLayout}>
      <Flex vertical align="center">
        <Title>환자</Title>
      </Flex>
    </div>
  );
}
