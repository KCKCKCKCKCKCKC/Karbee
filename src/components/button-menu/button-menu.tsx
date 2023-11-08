import { Button, Menu, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './button-menu.module.css';

export function ButtonMenu() {
  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="top-end"
      width={100}
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
          Profile
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component="a"
          href="/login-register/login-register"
        >
          Log In
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ButtonMenu;