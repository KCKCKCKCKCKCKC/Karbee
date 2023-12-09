import { SimpleGrid, Container, AspectRatio, BackgroundImage } from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Text,
  ActionIcon,
  Badge,
  Group,
  Avatar,
  rem,
} from '@mantine/core';
import styles from './art-grid.module.css';

//Replace this with real data from Supabase later on
const mockdata = [
  {
    title: 'Moonlight',
    image:
      'https://media.nga.gov/iiif/aee8484d-34b4-41b1-acc2-07499f5bbddc/full/!588,600/0/default.jpg',
    user: 'National Gallery of Art',
    date: 'November 18, 2023',
    tags: ['#Original ', '#trees ', '#river ', '#please ', '#help ', '#me ', '#que ', '#suave ']
  },
  {
    title: 'North American Trees',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'Insert some user here',
    date: 'August 27, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Snow in New York',
    image:
      'https://media.nga.gov/iiif/243000de-3236-4cca-b4d5-6f4fe08b5ad7/full/!588,600/0/default.jpg',
    user: 'National Gallery of Art',
    date: 'November 9, 2023',
    tags: ['#Robert Henri ', '#New York'],
  },
  {
    title: 'Blue Morning',
    image:
      'https://media.nga.gov/iiif/acc96e3f-6b67-443a-b2af-6d6ba7d1b664/full/!588,600/0/default.jpg',
    user: 'National Gallery of Art',
    date: 'November 12, 2023',
    tags: '#Add tags',
  },
  {
    title: 'Spring Woods',
    image:
      'https://media.nga.gov/iiif/79cb3eba-4af9-4197-87a3-d61ca03ed227/full/!588,600/0/default.jpg',
    user: 'National Gallery of Art',
    date: 'December 1, 2023',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'jesus',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
  {
    title: 'Add Title Here',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    user: 'chris',
    date: 'September 12, 2022',
    tags: '#Add tags',
  },
];

export function ArtGrid() {
  const posts = mockdata.map((content) => (
    <Card key={content.title} p="xs" className={styles.card}>
      <AspectRatio ratio={1750 / 1750}>
        <BackgroundImage component="a" href="/post/post" src={content.image} radius="sm" />
      </AspectRatio>
      <Text className={styles.title} mt={8}>
        {content.title}
      </Text>
      <div className={styles.avatarAndLikes}>
        <Group justify="space-between" mt={5}>
          <div className={styles.avatar}>
            <Avatar
              src={content.image}
              size={24}
              radius="xl"
              mr="xs"
            />
            <Text component="a" href="/user-external/user-external">
              <Text className={styles.user}>
                {content.user}
              </Text>
            </Text>
          </div>

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
      </div>
      <Text c="dimmed" size="xs" mt={7}>
        {content.tags}
      </Text>
    </Card>));

  return (
    <Container size="xl" pt="sm" pb="xl" mx={0}>
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