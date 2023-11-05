import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import styles from './home/home.module.css';
import ArtCard from '../components/art-card/art-card';
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
        <p>Use article cards from mantine ui to construct the grid layout
          Use first article card w/ image for each card and 
          Articles cards grid for filling it with data and grid layout
        </p>
        <ArtCard />
      </main>
    </>
  );
}
