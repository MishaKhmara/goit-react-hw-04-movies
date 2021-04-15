import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.Header}>
      <nav>
        <ul className={css.list}>
          <li className={css.listItem}>
            <NavLink
              exact
              to="/"
              className={css.link}
              activeClassName={css.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li className={css.listItem}>
            <NavLink
              to="/movies"
              className={css.link}
              activeClassName={css.activeLink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
