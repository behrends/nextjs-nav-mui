import Head from 'next/head';
import Box from '@mui/material/Box';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function createData(name, start, end) {
  return { name, start, end };
}

const rows = [
  createData('TIF21A', 'Oktober 2021', 'September 2024'),
  createData('TIF21B', 'Oktober 2021', 'September 2024'),
  createData('TIF22A', 'Oktober 2022', 'September 2025'),
  createData('WWI22A', 'Oktober 2022', 'September 2025'),
  createData('WWI23A', 'Oktober 2023', 'September 2026'),
];

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
        <Typography variant="h2">Screen 2</Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Kurs</TableCell>
                <TableCell>Start</TableCell>
                <TableCell>Ende</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.start}</TableCell>
                  <TableCell>{row.end}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
