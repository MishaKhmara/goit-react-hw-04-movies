import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../Page/HomePage/HomePage';
import MoviePage from '../../Page/MoviePage/MoviePage';
import MovieDetailsPage from '../../Page/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../../Page/NotFound/NotFound';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default Main;
