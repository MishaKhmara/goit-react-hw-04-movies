import { Component } from 'react';
import SearchForm from '../../components/MoviesSertch/MoviesSeartch';
import searchApi from '../../services/searchApi';
import { Link } from 'react-router-dom';
import css from './MoviePage.module.css';

export class MoviePage extends Component {
  state = {
    movies: [],
    page: '',
    error: null,
    query: '',
  };

  onQuerySearch = async query => {
    searchApi
      .GetSearchMovies(query)
      .then(results => this.setState({ movies: results }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onQuerySearch} />

        <ul className={css.moviesList}>
          {this.state.movies.map(({ id, poster_path, title }) => (
            <li key={id} className={css.moviesListItem}>
              <Link to={`${this.props.match.url}/${id}`}>
                <img
                  className={css.moviesCard}
                  src={
                    poster_path &&
                    `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
                  alt={`${title} poster`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default MoviePage;
