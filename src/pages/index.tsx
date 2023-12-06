import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import styles from './home/home.module.css';
import SectionLinks from '../components/section-links/section-links';
import Filter from '../components/filter-toggle/filter/filter';
import Toggle from '@/components/filter-toggle/toggle/toggle';
import ArtGrid from '../components/art-grid/art-grid';
import { Divider } from '@mantine/core';
import { Pagination } from '@mantine/core';
import Footer from '@/components/footer/footer';

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
              <Toggle />
              <Filter />
            </div>
          </div>
        </section>
        <section>
          <ArtGrid />
        </section>
        <Pagination className={styles.pagination} total={10} defaultValue={1} boundaries={1} color="var(--color-primary)" styles={{
              control: {
                color: "var(--color-accent)",
              },
            }}/>
      </main>
      <Footer />
    </>
  );
}
