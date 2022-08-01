import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import NavLink from './NavLink';

export default function NavBar({ pages }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box flex={1} display="flex">
          {pages.map((page) => (
            <NavLink name={page.name} href={page.route} />
          ))}
        </Box>
        <NavLink name="Login" href="/login" />
      </Toolbar>
    </AppBar>
  );
}
