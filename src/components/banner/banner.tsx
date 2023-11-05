import { Card, Overlay, Button, Text } from '@mantine/core';
import classes from './banner.module.css';

export function Banner() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.80} zIndex={0} />

      <div className={classes.content}>
        <Text size="var(--font-size-logo)" fw={700} className={classes.title}>
          Bzzt!
        </Text>

        <Text size="md" className={classes.description}>
          We heard you like art. We do too. Click below to start posting or scroll down to start exploring!
        </Text>

        <Button className={classes.action} variant="white" color="dark" size="xs">
          Book now
        </Button>
      </div>
    </Card>
  );
}

export default Banner;