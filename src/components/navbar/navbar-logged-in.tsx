import { TextInput, Group, rem, Image, Text, Tooltip, Avatar, Menu } from '@mantine/core';
import { FaSearch, FaHamburger } from 'react-icons/fa';
import styles from './navbar.module.css';
import { ActionIcon } from '@mantine/core';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { BiSolidBell } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import ButtonMenu from '../button-menu/button-menu';
import LightDarkButton from '../light-dark-button/light-dark-button';

export default function LoggedInNavbar() {

  return (
    <header className={styles.navbar}>
    <div className={styles.inner}>
      <Group>
        <Image
          src="Karbee Logo.svg"
          alt="Karbee Logo" 
          width={50}
          height={48}
        />
        <Text className={styles.logoText} visibleFrom="sm"/>
      </Group>

      <Group>
        <TextInput
            variant="filled"
            rightSectionPointerEvents="none"
            leftSection={<FaSearch style={{ width: rem(15), height: rem(15) }} stroke={1.5} color="var(--color-accent)" />}
            styles={{
              input: {
                backgroundColor: "var(--color-tertiary)",
                color: "var(--color-accent)",
              },
            }}
          />
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon
                hiddenFrom='lg'
                variant="filled"
                size="xl"
                color="var(--color-primary)"
                aria-label="Menu"
                >
                <FaHamburger size="35px" color="var(--color-accent)" />
              </ActionIcon>
            </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Profile</Menu.Label>
                <Menu.Item>
                  Settings
                </Menu.Item>
              </Menu.Dropdown>
          </Menu>
        <Group ml={"var(--gap-logos)"} gap={"var(--gap-logos)"} className={styles.links} visibleFrom="lg">
          <Tooltip label="Bookmarks">
            <ActionIcon
                component="a"
                href="/user-home/user-home"
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'rgba(255, 85, 0, 1)', to: 'yellow', deg: 174 }}
                >
              <BsFillBookmarkStarFill color="var(--color-accent)" size="25px"/>
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Notifications">
            <ActionIcon
                component="a"
                href="/user-home/user-home"
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'rgba(255, 85, 0, 1)', to: 'yellow', deg: 174 }}
                >
              <BiSolidBell color="var(--color-accent)" size="35px"/>
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Messages">
            <ActionIcon
                component="a"
                href="/user-home/user-home"
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'rgba(255, 85, 0, 1)', to: 'yellow', deg: 174 }}
                >
              <MdMail color='var(--color-accent)' size ='35px'/>
            </ActionIcon>
          </Tooltip>
          <LightDarkButton />

          <Group gap={0}>
            <Avatar component="a" href="/login-register/login-register" src={null} alt="no image here" color="var(--color-accent)" />
            <ButtonMenu />
          </Group>
        </Group>
      </Group>
    </div>
    </header>
  );
};