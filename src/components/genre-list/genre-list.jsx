import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getGenres} from '../../store/utility-reducer/selectors';
import classNames from 'classnames';
import {DEFAULT_GENRE, GENRES_MAX_VISIBLE_NUM} from '../../const';
import {GenreListStyle} from './genre-list-style';

const GenreList = ({currentGenre, handleGenreSelect}) => {
  const genres = useSelector((state) => getGenres(state)).slice(0, GENRES_MAX_VISIBLE_NUM);
  genres.unshift(DEFAULT_GENRE);
  const cn = classNames;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genreItem) =>
        <li
          className={
            cn(
                {"catalog__genres-item--active": currentGenre === genreItem},
                `catalog__genres-item`
            )
          }
          key={`genreItem_${genreItem}`}>
          <span
            className="catalog__genres-link"
            style={GenreListStyle.ITEM}
            onClick={({target}) => {
              handleGenreSelect(target.textContent);
            }}
          >{genreItem}
          </span>
        </li>)}
    </ul>
  );
};

GenreList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  handleGenreSelect: PropTypes.func.isRequired,
};

export default memo(GenreList);
