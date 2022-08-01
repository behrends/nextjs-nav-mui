import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Box, Toolbar, Button } from '@mui/material';

export default function NavBar({ pages }) {
  const router = useRouter();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box flex={1} display="flex">
          {pages.map((page) => {
            // underline current screen in navbar if equal to route
            const style = {
              textDecoration:
                router.asPath === page.route ? 'underline' : 'none',
            };
            return (
              <Link key={page.name} href={page.route} passHref>
                <Button component="a" color="inherit" sx={style}>
                  {page.name}
                </Button>
              </Link>
            );
          })}
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
