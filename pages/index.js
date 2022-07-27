import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Screen 1</title>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1">Screen 1</Typography>
      </Box>
    </>
  );
}
