import { NavLink } from 'react-router-dom';
import css from './SecondaryNav.module.css';

const Reviews = ({ url, location }) => {
  return (
    <nav>
      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: location,
            }}
            className={css.link}
            activeClassName={css.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: location,
            }}
            className={css.link}
            activeClassName={css.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Reviews;
