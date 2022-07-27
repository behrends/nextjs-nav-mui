import NavBar from './NavBar';

export default function Layout({ pages, children }) {
  return (
    <>
      <NavBar pages={pages} />
      <main>{children}</main>
    </>
  );
}
