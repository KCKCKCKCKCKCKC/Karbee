import { useState } from 'react';
import { Anchor, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './section-links.module.css';

//    { link: '#', label: 'Following' },
//    { link: '#', label: 'Challenges' },

const mainLinks = [
    { link: '#', label: 'Latest' },
    { link: '#', label: 'Recommended' },
  ];
  
  export function SectionLinks() {
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
        <Group gap={0} justify="flex-end" className={styles.mainLinks}>
            {mainItems}
        </Group>
    );
  }

  export default SectionLinks;