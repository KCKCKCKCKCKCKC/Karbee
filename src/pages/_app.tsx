// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import defaultTheme from '../../theme';
import Head from 'next/head';
import '@mantine/core/styles.css';
import '../../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={ defaultTheme }>
      <Head>
        <title>Karbee - Art Platform</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="description" content="From casual to professional, from fanwork to original, we welcome all. This is where creativity buzzes."/>
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

/* Initializes the pages. Component changes based on the page */