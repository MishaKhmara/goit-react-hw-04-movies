import React from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = ({ state }) => {
  return (
    <div className={css.Details}>
      <img
        className={css.images}
        src={
          state.poster_path &&
          `https://image.tmdb.org/t/p/w500/${state.poster_path}`
        }
        alt={`${state.title} poster`}
      />
      <div className={css.DetailsWraper}>
        <h1 className={css.movieTitle}>{state.title}</h1>
        <p> Release date: {state.release_date}</p>
        <p>
          User Score:
          <span> {state.vote_average * 10}%</span>
        </p>
        <h2>Overview</h2>
        <p>{state.overview}</p>
        <h2>Genres</h2>
        {state.genres.map(genre => (
          <span className={css.Genres} key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;
