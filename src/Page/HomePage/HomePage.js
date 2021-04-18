import { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
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
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
export default HomePage;
