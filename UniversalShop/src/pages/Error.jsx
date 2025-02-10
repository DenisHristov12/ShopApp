import styled from 'styled-components';
import MainNav from '../ui/MainNav';

const Main = styled.main`
  text-align: center;
`;

function Error() {
  return (
    <>
      <MainNav />
      <Main>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </Main>
    </>
  );
}

export default Error;
