import LoggedInNavbar from '@/components/navbar/navbar-logged-in';
import Banner from '@/components/banner/banner';
import styles from '@/home/home.module.css';
import SectionLinks from '@/components/section-links/section-links';
import Filter from '@/components/filter-toggle/filter/filter';
import ArtGrid from '@/components/art-grid/art-grid';
import { Divider } from '@mantine/core';

/* User logged in Home Page */
export default function Home() {
  return (
    <>
      <LoggedInNavbar />
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
      </main>
    </>
  );
}
