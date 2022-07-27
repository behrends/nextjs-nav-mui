import * as React from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Button } from '@mui/material';

export default function NavBar({ pages }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box flex={1} display="flex">
          {pages.map((page) => (
            <Link key={page.name} href={page.route} passHref>
              <Button component="a" color="inherit">
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
        <Link href="/login" passHref>
          <Button component="a" color="inherit">
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
