import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Screen3() {
  return (
    <>
      <Head>
        <title>Screen 3</title>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">Screen 3</Typography>
      </Box>
    </>
  );
}
