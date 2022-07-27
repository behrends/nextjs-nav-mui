import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Screen2() {
  return (
    <>
      <Head>
        <title>Screen 2</title>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1">Screen 2</Typography>
      </Box>
    </>
  );
}
