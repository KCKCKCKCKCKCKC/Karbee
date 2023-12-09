import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, rem } from '@mantine/core';
import styles from './filter.module.css';
import { TbFilterCog } from "react-icons/tb";

function Filter() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Filter" position="right">
        {
          <div>Press escape for quick close.</div>
        }
      </Drawer>

      <Button 
        className={styles.button}
        onClick={open} 
        leftSection={<TbFilterCog style={{ width: rem(14), height: rem(14) }} />}
        styles={{
            root: {
              backgroundColor: 'light-dark(var(--color-background), var(--color-dark-primary))',
              color: "var(--color-accent)",
            },
        }}
        >
        Filter
      </Button>
    </>
  );
}

export default Filter;