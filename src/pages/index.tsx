import Navbar from '../components/navbar/navbar';
import LightDarkButton from '../components/light-dark-button/light-dark-button';
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
      <main>
        <h1>Hello World</h1>
        <LightDarkButton />
      </main>
    </>
  );
}
