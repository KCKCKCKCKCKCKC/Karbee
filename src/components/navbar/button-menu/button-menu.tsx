import { Button, Menu, rem, Text } from '@mantine/core';
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './button-menu.module.css';

export function ButtonMenu() {
  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="top-end"
      width={200}
      withinPortal
    >
      <Menu.Target>
        <Button
          className={styles.button}
          rightSection={
            <IconChevronDown style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          }
          pr={12}
        >
          Username
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>User Menu</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Gallery
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ButtonMenu;