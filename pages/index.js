import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CourseCard from '../components/CourseCard';

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
        <CourseCard name="TIF21A" />
        <CourseCard name="TIF21B" />
        <CourseCard name="TIF22A" />
      </Box>
    </>
  );
}
