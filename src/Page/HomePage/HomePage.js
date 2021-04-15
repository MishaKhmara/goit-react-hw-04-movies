import { Component } from 'react';
import { Link } from 'react-router-dom';
import searchApi from '../../services/searchApi';
import css from './HomePage.module.css';

export class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    searchApi
      .GetMovieTrending()
      .then(results => this.setState({ movies: results }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <h1 className={css.title}>Trending today</h1>
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
export default HomePage;
