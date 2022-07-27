import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SignIn from '../components/SignIn';

export default function Screen2() {
  return (
    <>
      <Head>
        <title>Login / Logout</title>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <SignIn />
      </Box>
    </>
  );
}
