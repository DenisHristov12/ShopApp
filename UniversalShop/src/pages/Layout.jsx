import { Outlet } from 'react-router-dom';
import MainNav from '../ui/MainNav';

function Layout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
