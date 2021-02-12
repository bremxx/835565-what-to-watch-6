import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mock/films-mock.js';
import reviews from './mock/reviews-mock.js';
import {getRandomNum} from './utils';

const promoFilm = films[Math.floor(getRandomNum(0, films.length - 1))];

ReactDOM.render(
    <App
      promoFilm={promoFilm}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
