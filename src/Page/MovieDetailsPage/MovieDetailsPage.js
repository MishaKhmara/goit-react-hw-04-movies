import { Component } from 'react';
import searchApi from '../../services/searchApi';
import css from './MovieDetailsPage.module.css';
import Reviews from '../../components/Reviews/Reviews';
import { Route } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
    searchApi
      .GetMovieDetails(movieId)
      .then(data => this.setState({ ...data }))
      .catch(error => console.log(error));
  }

  render() {
    const {
      title,
      release_date,
      vote_average,
      overview,
      genres,
      poster_path,
    } = this.state;
    return (
      <>
        <div className={css.Details}>
          <img
            className={css.images}
            src={
              poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt={`${title} poster`}
          />
          <div className={css.DetailsWraper}>
            <h1 className={css.movieTitle}>{title}</h1>
            <p> Release date: {release_date}</p>
            <p>
              User Score:
              <span> {vote_average * 10}%</span>
            </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres.map(genre => (
              <span className={css.Genres} key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <Reviews />
        <Route
          exact
          path="/movies/:movieId/cast"
          render={() => <h1>hello</h1>}
        />
        <Route
          exact
          path="/movies/:movieId/reviews"
          render={() => <h2>hello2</h2>}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
