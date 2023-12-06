import { Card, Overlay, Button, Text } from '@mantine/core';
import { IconPhoto, IconArrowRight } from '@tabler/icons-react';
import styles from './banner.module.css';

export function Banner() {
  return (
    <Card radius="md" className={styles.card}>
      <Overlay className={styles.overlay} opacity={0.80} zIndex={0} />

      <div className={styles.content}>
        <Text size="50px" fw={700} className={styles.title}>
          Bzzt!
        </Text>

        <Text className={styles.description}>
          We heard you like art. We do too. Click below to start posting or scroll down to start exploring!
        </Text>

        <Button
        className={styles.action}
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
        >
        Click Here To Start Posting
        </Button>
      </div>
    </Card>
  );
}

export default Banner;