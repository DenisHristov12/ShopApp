import { HiMenu, HiOutlineX } from 'react-icons/hi';

import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 4rem;
  background-color: red;
  /* padding: var(--space-xs); */
`;

const Nav = styled.nav`
  display: block;
  /* justify-content: space-between; */

  /* position: fixed;
  top: 0;
  left: 0; */
  width: 25rem;
  height: 100vh;
  background-color: #222; //test color
  color: white;
  padding: var(--space-sm) var(--space-sm) var(--space-sm) var(--space-md);
  transform: ${({ isOpened }) =>
    isOpened ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`;

const Ul = styled.ul`
  /* display: block; */
  /* padding: 0; */
  width: 100%;
`;

const Li = styled.li`
  /* width: 100%;
  height: 2rem; */
  padding: var(--space-xxs) var(--space-xs) !important;
  border-bottom: 1px solid blue;

  &:not(:last-child) {
    margin-bottom: var(--space-xxs);
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  width: 2rem;
  height: 2rem;

  svg {
    font-size: var(--text-md-1);
  }
`;

function MainNav() {
  const [isOpened, setIsOpened] = useState(false);
  // const menuRef = useRef(null);

  function handleOpenClose() {
    setIsOpened((opened) => !opened);
  }

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpened(false);
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);

  return (
    <Header>
      {isOpened === false ? (
        <Button onClick={handleOpenClose}>
          <HiMenu />
        </Button>
      ) : (
        <Nav isOpened={isOpened}>
          <Ul>
            <Li>
              <NavLink
                to="/"
                end>
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/about">About</NavLink>
            </Li>
            <Li>
              <NavLink to="/contacts">Contacts</NavLink>
            </Li>
          </Ul>

          <Button onClick={handleOpenClose}>
            <HiOutlineX />
          </Button>
        </Nav>
      )}
    </Header>
  );
}

export default MainNav;
