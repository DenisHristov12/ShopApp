import { Outlet } from 'react-router-dom';
import MainNav from '../ui/MainNav';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
`;

function Layout() {
  return (
    <StyledLayout>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
}

export default Layout;
