import Head from 'next/head';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

        <Button variant="contained">Hello MUI!</Button>
      </Box>
    </>
  );
}
