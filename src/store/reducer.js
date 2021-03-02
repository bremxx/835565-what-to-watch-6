import films from "../mock/films-mock";
import reviews from '../mock/reviews-mock.js';
import {getRandomNum} from "../utils";
import {ActionType} from "./action";
import {DEFAULT_GENRE as ALL_GENRES, INITIAL_FILMS_VISIBLE_NUM} from "../const";

const genres = new Set(films.reduce((acc, film) => {
  acc.push(film.genre);
  return acc;
}, []));

const initialState = {
  promoFilm: films[Math.floor(getRandomNum(0, films.length - 1))],
  currentGenre: ALL_GENRES,
  films,
  genres: [ALL_GENRES, ...genres],
  filmsToShow: films,
  reviews,
  filmsVisibleNum: INITIAL_FILMS_VISIBLE_NUM,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_SELECT:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.FILTER_FILMS:
      return {
        ...state,
        filmsToShow: state.currentGenre === ALL_GENRES ? films : films.filter((film) => film.genre === action.payload),
      };
    case ActionType.LOAD_MORE_FILMS:
      return {
        ...state,
        filmsVisibleNum: state.filmsVisibleNum + action.payload,
      };
  }
  return state;
};

export {
  reducer,
};
