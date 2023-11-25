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
} from '@mantine/core';
import styles from './art-grid.module.css';

//Replace this with real data from Supabase later on
const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'user',
    date: 'August 18, 2022',
    tags: ['#Original ', '#fairies ', '#Ilovestudyingsomuch ', '#please ', '#help ', '#me ', '#mucho ', '#bueno ']
  },
  {
    title: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'user',
    date: 'August 27, 2022',
    tags: 'kys',
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'somerandompersonasdasddsadsaasdsad',
    date: 'September 9, 2022',
    tags: 'kys',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      user: 'somerandomperson',
    date: 'September 12, 2022',
    tags: 'kys',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      user: 'somerandomperson',
    date: 'September 12, 2022',
    tags: 'kys',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      user: 'somerandomperson',
    date: 'September 12, 2022',
    tags: 'kys',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      user: 'somerandomperson',
    date: 'September 12, 2022',
    tags: 'kys',
  },
];

export function ArtGrid() {
  const posts = mockdata.map((content) => (
    <Card key={content.title} p="xs" className={styles.card}>
      <AspectRatio ratio={1750 / 1750}>
        <Image src={content.image} radius="sm" />
      </AspectRatio>
      <Text className={styles.title} mt={8}>
        {content.title}
      </Text>
      <Group justify="space-between" mt={5} className={styles.footer}>
        <Center>
          <Avatar
            src={content.image}
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline fw={600} className={styles.avatarText}>
            {content.user}
          </Text>
        </Center>

        <Group gap={5} mr={0}>
          <ActionIcon className={styles.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={"var(--color-accent)"} />
          </ActionIcon>
          <ActionIcon className={styles.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={"var(--color-accent)"}
            />
          </ActionIcon>
          <ActionIcon className={styles.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={"var(--color-accent)"} />
          </ActionIcon>
        </Group>
      </Group>
      <Text c="dimmed" size="xs" mt={7}>
        {content.tags}
      </Text>
    </Card>  ));

  return (
    <Container size="xl" py="sm" mx={0}>
      <SimpleGrid 
        className={styles.grid}
        cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} 
        spacing="xs"
        verticalSpacing="xs"
        >
        {posts}
      </SimpleGrid>
    </Container>
  )
}

export default ArtGrid;

//For R18 or Warning label 
/*
      <Badge className={styles.rating} variant="gradient" gradient={{ from: 'red', to: 'red' }}>
        R18
      </Badge>
*/