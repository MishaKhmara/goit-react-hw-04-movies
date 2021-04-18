import { Component, Suspense, lazy } from 'react';
import searchApi from '../../services/searchApi';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

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

    searchApi
      .GetMovieDetails(movieId)
      .then(data => this.setState({ ...data }))
      .catch(error => console.log(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <MovieDetails state={this.state} />

        <h3>Additional information</h3>
        {this.state.isLoading && <Loader />}
        <SecondaryNav url={this.props.match.url} />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={`${this.props.match.url}/cast`}
              render={props => (
                <Cast {...props} id={this.props.match.params.movieId} />
              )}
            />
            <Route
              exact
              path={`${this.props.match.url}/reviews`}
              render={props => (
                <Reviews {...props} id={this.props.match.params.movieId} />
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
