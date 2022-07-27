import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
      <Layout
        pages={[
          { name: 'Screen 1', route: '/' },
          { name: 'Screen 2', route: '/screen2' },
          { name: 'Screen 3', route: '/screen3' },
        ]}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
