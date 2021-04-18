import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../Page/HomePage/HomePage';
import MoviePage from '../../Page/MoviePage/MoviePage';
import MovieDetailsPage from '../../Page/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../../Page/NotFound/NotFound';
import routes from '../../routes';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.moviePage} component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default Main;
