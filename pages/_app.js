import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Layout
        pages={[
          { name: 'Index', route: '/' },
          { name: 'Screen2', route: '/screen2' },
          { name: 'Screen3', route: '/screen3' },
        ]}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
