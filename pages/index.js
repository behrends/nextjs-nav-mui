import Head from 'next/head';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        <Typography variant="h2">Screen 1</Typography>
        <Card sx={{ minWidth: 275, my: 2 }} raised>
          <CardContent>
            <Typography variant="h4">TIF21A</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, my: 2 }} raised>
          <CardContent>
            <Typography variant="h4">TIF21B</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, my: 2 }} raised>
          <CardContent>
            <Typography variant="h4">TIF22A</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
