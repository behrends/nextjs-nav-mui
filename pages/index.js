import Head from 'next/head';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beispiel mit MUI</title>
        <meta name="description" content="MUI Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Willkommen!</h1>

        <Button variant="contained">Hello MUI!</Button>
      </main>

      <footer className={styles.footer}>TODO copyright</footer>
    </div>
  );
}
