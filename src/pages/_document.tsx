import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//For Mantine UI
/* special file used to customize the HTML structure and add global elements
 (such as styles, scripts, or meta tags) to the application's pages. Unlike pages 
 or layouts, and it's not meant for rendering content visible to users. Instead, 
 it helps configure the initial structure and assets that the pages use. */