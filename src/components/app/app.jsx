import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import Player from '../player/player.jsx';
import LoginPage from '../login/login-page.jsx';
import UserListPage from '../user-list/user-list-page.jsx';
import AddReviewPage from '../add-review/add-review-page.jsx';
import NotFoundScreen from '../not-found/not-found-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import {AppRoute} from '../../const.js';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmsList} from '../../store/api-actions.js';

const App = () => {
  const {films, isLoadedIndicator} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const onLoadFilms = () => {
    if (!isLoadedIndicator.areFilmsLoaded) {
      dispatch(fetchFilmsList());
    }
  };

  useEffect(() => onLoadFilms(), [isLoadedIndicator.areFilmsLoaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={(routerProps) =>
          <UserListPage
            films={films}
            {...routerProps}
          />}
        />
        <Route exact path={AppRoute.FILM} render={(routerProps) =>
          <FilmPage
            {...routerProps}
          />}
        />
        <PrivateRoute exact path={AppRoute.REVIEW} render={(routerProps) =>
          <AddReviewPage
            {...routerProps}
          />}
        />
        <Route exact path={AppRoute.PLAYER} render={(routerProps) =>
          <Player
            films={films}
            {...routerProps}
          />}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
