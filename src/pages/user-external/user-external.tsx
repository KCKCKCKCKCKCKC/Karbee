import { SimpleGrid, Container, AspectRatio } from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  rem,
  Stack,
  Button,
  Flex,
  Space,
  Blockquote,
  Anchor,
  Divider
} from '@mantine/core';
import styles from './user-external.module.css';
import Navbar from '@/components/navbar/navbar';
import Filter from '@/components/filter/filter';
import { IconStar } from '@tabler/icons-react';
import { IconInfoCircle } from '@tabler/icons-react';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

//Replace this with real data from Supabase later on
const mockdata = [
  {
    title: 'How to Generate Abstract Art',
    image:
      'https://images.unsplash.com/photo-1701035858127-0f0e41ac8028?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Monke See Monke Do',
    image:
      'https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Cross Sound Ferry Lighthouse Cruises - All You Need to Know',
    image:
      'https://images.unsplash.com/photo-1701213327963-742e60643f28?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  }
  
];

const mockdata2 = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
  {
    title: 'My Waifu',
    image:
      'https://deepdreamgenerator.com/storage/fast_queue/temp_images/f4dec7893a7bca8ce17538a78bdc6c0cb4b40305.jpg'
  },
  {
    title: 'Esta Es Mi Familia',
    image:
      'https://www.format.com/wp-content/uploads/cursed-images-22.jpg'
  },
  {
    title: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
  {
    title: 'I am going to end it all',
    image:
      'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Human Pretzel Human Pretzel',
    image:
      'https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  },
  {
    title: 'Self Portrait',
    image:
      'https://images.unsplash.com/photo-1560579183-b7c69367cb00?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Cross Sound Ferry Lighthouse Cruises - All You Need to Know',
    image:
      'https://images.unsplash.com/photo-1701213327963-742e60643f28?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'My Little Brother’s first Poop-i-con',
    image:
      'https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Best Places to View Star Trails',
    image:
      'https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Monke See Monke Do',
    image:
      'https://images.unsplash.com/photo-1607317146126-64b09b69eb4e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'How to Generate Abstract Art',
    image:
      'https://images.unsplash.com/photo-1701035858127-0f0e41ac8028?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Never was much of a romantic, I could never take the intimacy',
    image:
      'https://i.redd.it/7klnjfumfz271.png'
  },
  {
    title: 'Me When Your Mom',
    image:
      'https://images.unsplash.com/photo-1615038552039-e1b271f14ec8?q=80&w=3265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  }
];

const mainLinks = [
  { link: '#', label: 'All' },
  { link: '#', label: 'Collections' },
  { link: '#', label: 'Requests' },
  { link: '#', label: 'Likes' },
];

export function User() {
  const posts = mockdata.map((content) => (
    <Card key={content.title} p="xs" className={styles.card}>
      <AspectRatio ratio={1750 / 1750}>
        <Image src={content.image} radius="sm" />
      </AspectRatio>
      <Text className={styles.title} mt={8}>
        {content.title}
      </Text>
    </Card>));

const gallery = mockdata2.map((content) => (
  <Card key={content.title} p="xs" className={styles.card}>
    <AspectRatio ratio={1000 / 1000}>
      <Image src={content.image} radius="sm" />
    </AspectRatio>
    <Text className={styles.titleSmall} mt={8}>
      {content.title}
    </Text>
  </Card>));
  const backgroundImg = 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const icon = <IconInfoCircle />;

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={styles.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));


  return (
    <Stack justify="center">
      <Navbar/>
      <AspectRatio ratio={16 / 3}>
        <Image src={backgroundImg} radius="sm" />
      </AspectRatio>
      <Container size={1600}>
        <Flex justify="flex-start" align="center">
          <Space w="sm" />
          <Group grow justify="flex-start" w={1250}>
            <Stack>
              <Avatar variant="filled" radius="l" size="150px" src="https://live.staticflickr.com/5/8635773_33dce81649_b.jpg" >
              </Avatar>
            </Stack>
          </Group>
        </Flex>

        <Flex justify="flex-start" align="center">
          <Space w="lg" />
          <Group grow justify="flex-start" w={1250}>
            <Stack>

              <Text className={styles.name} mt={8}>
                KarFrog
              </Text>

              <Text className={styles.followers}>
                768 followers
              </Text>

            </Stack>
          </Group>

          <Group gap="md" justify="flex-end">
            <Button variant="filled" color="rgba(255, 190, 48, 1)">
              Subscribe
            </Button>
            <Button variant="filled" color="orange">
              Follow
            </Button>
            <Button variant="filled" color="rgba(207, 207, 207, 1)">
              •••
            </Button>
            <Space w="lg" />
          </Group>
        </Flex>
        <Stack gap="lg">
          <Blockquote color="orange" radius="md" iconSize={40} cite="– KarFrog" icon={icon} mt="lg">
            Hi-ho, Kermit the Frog here! Life's a journey, not a destination. So here's to the road ahead, the friends you'll make, and always being true to yourself. Time's fun when you're having flies. As you face the future, remember, 'Rainbows are visions, but only illusions, and rainbows have nothing to hide.' So go out there and make your own rainbow, and always be true to yourself. Kermit the Frog, signing off!
          </Blockquote>
          <Divider className={styles.divider} color={"var(--color-accent)"} />

        </Stack>

        <h1 className={styles.explore}>Pinned Works</h1>
        <section className={styles.exploreNavigation}>
          <Divider className={styles.dividerShort} color={"var(--color-accent)"} />
        </section>

        <Container size="xl" py="sm" mx={40}>
          <SimpleGrid
            className={styles.grid}
            cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            spacing="xs"
            verticalSpacing="xs"
          >
            {posts}
          </SimpleGrid>
        </Container>

        <h1 className={styles.explore}>Gallery</h1>
        <section className={styles.exploreNavigation}>
          <Divider className={styles.dividerShort} color={"var(--color-accent)"} />
        </section>
        <Container size="xl" py="sm" mx={0} className={styles.mainLinks}>
          {mainItems}
        </Container>

        <Container size="xl" py="sm" mx={40}>
          <SimpleGrid
            className={styles.grid}
            cols={8} spacing="xs" verticalSpacing="xs"
          >
            {gallery}
          </SimpleGrid>
        </Container>

      </Container>
    </Stack >


  )
};


export default User;

//For R18 or Warning label 
/*
      <Badge className={styles.rating} variant="gradient" gradient={{ from: 'red', to: 'red' }}>
        R18
      </Badge>
*/



