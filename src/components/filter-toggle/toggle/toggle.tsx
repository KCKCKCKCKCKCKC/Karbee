import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
} from '@tabler/icons-react';
import styles from './toggle.module.css';
import { IconChevronDown } from '@tabler/icons-react';

function Toggle() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button 
          styles={{
            root: {
              backgroundColor: 'light-dark(var(--color-background), var(--color-dark-primary))',
              color: "var(--color-accent)",
            },
          }}
          pr={"var(--gap-close)"}>
          Toggle
          <IconChevronDown className={styles.button} style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Toggle Menu</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Toggle;