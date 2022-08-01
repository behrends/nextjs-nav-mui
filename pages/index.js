import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Courses from '../components/Courses';

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">Index</Typography>
        <Courses />
      </Box>
    </>
  );
}
