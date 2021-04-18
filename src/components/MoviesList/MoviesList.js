import React from 'react';
import css from './MoviesList.module.css';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={css.moviesListItem}>
          <NavLink
            to={{
              pathname: `${routes.moviePage}/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={css.moviesCard}
              src={
                poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={`${title} poster`}
            />
            <h4>{title}</h4>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
