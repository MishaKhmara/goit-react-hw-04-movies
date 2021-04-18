import { NavLink, withRouter } from 'react-router-dom';
import css from './SecondaryNav.module.css';

const Reviews = ({ url, location }) => {
  return (
    <nav>
      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location },
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
              state: { from: location },
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

export default withRouter(Reviews);
