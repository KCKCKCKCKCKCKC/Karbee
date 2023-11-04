import { TextInput, Group, Burger, rem, Image, Text, Tooltip, Avatar, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaSearch } from 'react-icons/fa';
import styles from './navbar.module.css';
import { ActionIcon } from '@mantine/core';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { BiSolidBell } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import { IconExternalLink } from '@tabler/icons-react';

export function Navbar() {
  //const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={styles.navbar}>
    <div className={styles.inner}>
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
        <Image
          src="Karbee Logo.svg"
          alt="Karbee Logo" 
          width={50}
          height={48}
        />
        <Text className={styles.logoText} visibleFrom="xs" />
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
        <Group ml={"var(--gap-logos)"} gap={"var(--gap-logos)"} className={styles.links} visibleFrom="md">
          <Tooltip label="Bookmarks">
            <ActionIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'orange', to: 'yellow', deg: 180 }}
              >
              <BsFillBookmarkStarFill color="var(--color-accent)" size="25px"/>
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Notifications">
            <ActionIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'orange', to: 'yellow', deg: 180 }}
              >
              <BiSolidBell color="var(--color-accent)" size="35px"/>
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Messages">
            <ActionIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: 'orange', to: 'yellow', deg: 180 }}
              >
              <MdMail color='var(--color-accent)' size ='35px'/>
            </ActionIcon>
          </Tooltip>
          <Group>
            <Avatar src={null} alt="no image here" color="var(--color-accent)" />
            <Menu width={200} shadow="md">
              <Menu.Target>
                <Button>Toggle menu</Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item component="a" href="https://mantine.dev">
                  Mantine website
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
                  component="a"
                  href="https://mantine.dev"
                  target="_blank"
                >
                  External link
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Group>
    </div>
    </header>
  );
};

export default Navbar;