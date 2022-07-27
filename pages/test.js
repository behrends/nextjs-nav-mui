import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Test() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3">Test</Typography>
      <Link href="/">Go Back Home</Link>
    </Box>
  );
}
