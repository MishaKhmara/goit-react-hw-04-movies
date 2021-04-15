import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Reviews.module.css';

export class Reviews extends Component {
  render() {
    return (
      <nav>
        <ul className={css.list}>
          <li className={css.listItem}>
            <NavLink
              exact
              to="/movies/:movieId/cast"
              className={css.link}
              activeClassName={css.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={css.listItem}>
            <NavLink
              to="/movies/:movieId/reviews"
              className={css.link}
              activeClassName={css.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Reviews;
