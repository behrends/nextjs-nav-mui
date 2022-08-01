import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export default function NavLink({ name, href }) {
  const router = useRouter();

  // underline current screen in navbar if equal to route
  const style = {
    textDecoration: router.asPath === href ? 'underline' : 'none',
  };
  return (
    <Link href={href} passHref>
      <Button component="a" color="inherit" sx={style}>
        {name}
      </Button>
    </Link>
  );
}
