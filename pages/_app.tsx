import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/helpers/normalize.scss';
import '../styles/helpers/icon.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Top App</title>
      <link rel="icon" href="/favicon..ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
