import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import {filmPropTypes} from '../../prop-types';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import {connect} from 'react-redux';
import Loading from '../loading/loading';
import {fetchFilm} from '../../store/api-actions';
import {AuthorizationStatus, FilmsListLocation} from '../../const';

const FilmPage = ({film, isLoadedIndicator, match: {params}, onLoadFilm, authorizationStatus}) => {
  const [filmId, setFilmId] = useState(parseInt(params.id, 10));
  const handleFilmCardClick = (newId) => {
    setFilmId(newId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    onLoadFilm();
  }, [isLoadedIndicator.isFilmLoaded]);

  if (!isLoadedIndicator.isFilmLoaded) {
    return <Loading />;
  }

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <FilmBackgroundBlock backgroundImage={film.backgroundImage} name={film.name} />
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              {
                (authorizationStatus === AuthorizationStatus.AUTH &&
                <Link to={`${filmId}/review`} className="btn movie-card__button">Add review</Link>)
              }
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327" />
          </div>
          <FilmPageTabs film={film} filmId={filmId} />
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmsList id={filmId} genre={film.genre} location={FilmsListLocation.FILM_PAGE} handleFilmCardClick={handleFilmCardClick} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

const mapStateToProps = (state) => ({
  film: state.film,
  isLoadedIndicator: state.isLoadedIndicator,
  authorizationStatus: state.authorizationStatus,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {id: filmId} = ownProps.match.params;
  const {dispatch} = dispatchProps;
  return {
    ...stateProps,
    ...ownProps,
    onLoadFilm() {
      dispatch(fetchFilm(filmId));
    },
  };
};

FilmPage.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  match: PropTypes.object.isRequired,
  isLoadedIndicator: PropTypes.object.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {FilmPage};
export default connect(mapStateToProps, null, mergeProps)(FilmPage);
