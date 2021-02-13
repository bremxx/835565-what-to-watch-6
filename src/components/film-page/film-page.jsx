import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import {mockPropTypes} from '../../prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmBackgroundBlock from '../film-bg/film-background-block';

const FilmPage = (props) => {
  const {films} = props;
  const {id: filmId} = props.match.params;
  const film = films.find((item) => item.id === parseInt(filmId, 10));
  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        {<FilmBackgroundBlock backgroundImage={film.backgroundImage} />}

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          {<Logo/>}

          {<UserBlock/>}
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
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
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

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{film.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">{`${film.scoresCount} ratings`}</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{film.description}</p>

              <p className="movie-card__director"><strong>{`Director: ${film.director}`}</strong></p>

              <p className="movie-card__starring"><strong>{`Starring: ${film.starring.map((star) => star)} and others`}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        {<FilmsList {...props} />}
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

FilmPage.propTypes = {
  films: mockPropTypes,
  match: PropTypes.object
};

export default FilmPage;
