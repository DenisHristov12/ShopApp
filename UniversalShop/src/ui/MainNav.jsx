import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  width: 25rem;
  height: 100vh;
  background-color: #222; //test color
  color: white;
  padding: 2rem;
  transform: ${({ isOpened }) =>
    isOpened ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;

  width: 2rem;
  height: 2rem;
`;

function MainNav() {
  const [isOpened, setIsOpened] = useState(false);

  function handleOpenClose() {
    setIsOpened((opened) => !opened);
  }

  return (
    <Header>
      {isOpened === false ? (
        <Button onClick={handleOpenClose}>OPEN</Button>
      ) : (
        <Nav isOpened={isOpened}>
          <ul>
            <li>
              <NavLink
                to="/"
                end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>

          <Button onClick={handleOpenClose}>X</Button>
        </Nav>
      )}
    </Header>
  );
}

export default MainNav;
