import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import styles from './home/home.module.css';
import SectionLinks from '../components/section-links/section-links';
import Filter from '../components/filter/filter';
import ArtGrid from '../components/art-grid/art-grid';
import Post from '@/components/post/post';
import { Divider } from '@mantine/core';

/* Just to show the profile page*/
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.home}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <h1 className={styles.explore}>Explore</h1>
        <section className={styles.exploreNavigation}>
          <Divider className={styles.divider} color={"var(--color-accent)"} />
          <div className={styles.pagesAndFilters}>
            <SectionLinks />
            <div className={styles.filters}>
              <Filter />
              <Filter />
            </div>
          </div>
        </section>
        <section>
          <ArtGrid />
        </section>
        <Post />
      </main>
    </>
  );
}
