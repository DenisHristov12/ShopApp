import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
}

export default MainNav;
