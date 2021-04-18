import { Component } from 'react';
import SearchForm from '../../components/MoviesSertch/MoviesSeartch';
import searchApi from '../../services/searchApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import queryString from 'query-string';
import PropTypes from 'prop-types';

export class MoviePage extends Component {
  state = {
    movies: [],
    page: '',
    error: null,
    query: '',
  };
  componentDidMount() {
    const { location } = this.props;

    const { query } = queryString.parse(location.search);

    query &&
      searchApi.GetSearchMovies(query).then(results => {
        this.setState({ movies: results });
      });
  }

  handleSubmit = query => {
    const { history } = this.props;
    this.setState({ query });
    searchApi
      .GetSearchMovies(query)
      .then(results => {
        this.setState({ movies: results });
      })
      .catch(error => console.log(error));

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />

        <MoviesList movies={this.state.movies} location={this.props.location} />
      </>
    );
  }
}

MoviePage.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    query: PropTypes.string,
  }).isRequired,
};

export default MoviePage;
