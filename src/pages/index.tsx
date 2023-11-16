import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import styles from './home/home.module.css';
import ArtCard from '../components/art-card/art-card';
import ArtGrid from '../components/art-grid/art-grid';
import Head from 'next/head';
 
/* Entry point for app. Homepage */
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
        <title>Karbee</title>
      </Head>
      <Navbar />
      <main className={styles.home}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <h1>Explore</h1>
        <section>
          <ArtGrid />
        </section>
        <div>
          <div className={styles.card}>
          <ArtCard />
          <ArtCard />
          <ArtCard />
          </div>
          <br />
          <div className={styles.card}>
          <ArtCard />
          <ArtCard />
          <ArtCard />
          </div>
        </div>
      </main>
    </>
  );
}
