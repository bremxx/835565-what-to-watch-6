import {APIRoute, AppRoute, AuthorizationStatus, REDIRECT_AFTER_REVIEW_POST_TIMEOUT} from "../const";
import {adaptFilmToClient} from "../utils";
import {getFavoriteFilms, getFilm, getFilmsList, getPromoFilm, getReviews, postFavoriteFilm, redirectToRoute, requireAuthorization, resetRequestStatus, setBadRequest, setGoodRequest} from "./action";

const fetchFilmsList = () => (next, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => next(getFilmsList(films)))
    .catch(() => {})
);

const fetchPromoFilm = () => (next, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => adaptFilmToClient(data))
    .then((promoFilm) => next(getPromoFilm(promoFilm)))
    .catch(() => {})
);

const fetchReviews = (id) => (next, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}${id}`)
    .then(({data}) => next(getReviews(data)))
    .catch(() => {})
);

const fetchFilm = (id) => (next, _getState, api) => (
  api.get(`${APIRoute.FILMS}${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => next(getFilm(film)))
    .catch(() => {})
);

const checkAuth = () => (next, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => next(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({email, password}) => (next, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => next(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => next(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {})
);

const logout = () => (next, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => next(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

const postReview = (id, {rating, comment}, callback) => (next, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}${id}`, {rating, comment})
    .then(({data}) => next(getReviews(data)))
    .then(() => next(setGoodRequest()))
    .then(() => setTimeout(() => {
      next(redirectToRoute(`/films/${id}`));
      next(resetRequestStatus());
    }, REDIRECT_AFTER_REVIEW_POST_TIMEOUT))
    .catch(() => {
      next(setBadRequest());
      callback();
    })
);

const fetchFavoriteFilms = () => (next, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => next(getFavoriteFilms(films)))
    .catch(() => {})
);

const postFilmToFavorites = (id, status) => (next, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${id}/${!status ? 1 : 0}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => next(postFavoriteFilm(film)))
    .catch(() => {})
);

export {
  fetchFilmsList,
  fetchPromoFilm,
  checkAuth,
  login,
  logout,
  fetchFilm,
  fetchReviews,
  postReview,
  fetchFavoriteFilms,
  postFilmToFavorites,
};
