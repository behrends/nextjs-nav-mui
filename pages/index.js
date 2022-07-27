import Head from 'next/head';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beispiel mit MUI</title>
        <meta name="description" content="MUI Example" />
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1">Willkommen!</Typography>

        <Link href="/test">Go to Test page</Link>
      </Box>
    </>
  );
}
