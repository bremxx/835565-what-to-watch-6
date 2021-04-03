import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PlayerPreview from '../player-preview/player-preview';
import {useDispatch} from 'react-redux';
import {clearData} from '../../store/action';
import {START_PREVIEW_PLAYER_TIMEOUT} from '../../const';

const FilmCard = ({id, name, previewImage, previewVideoLink, handleFilmCardClick}) => {
  const [startPlayer, setStartPlayer] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  });

  const renderFilmCardContent = () => {
    return startPlayer
      ? <PlayerPreview
        previewVideoLink={previewVideoLink}
        previewImage={previewImage}
      />
      : <img src={previewImage} alt={name} width="280" height="175" />;
  };

  const onFilmCardClick = () => {
    setStartPlayer(false);
    dispatch(clearData());
    if (handleFilmCardClick) {
      handleFilmCardClick(id);
    }
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        setTimerId(() => setTimeout(() => setStartPlayer(true), START_PREVIEW_PLAYER_TIMEOUT));
      }}
      onMouseLeave={() => {
        clearTimeout(timerId);
        setTimerId(null);
        setStartPlayer(false);
      }}
    >
      <div className="small-movie-card__image">
        {renderFilmCardContent()}
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            to={`/films/${id}`}
            onClick={() => onFilmCardClick()}>
            {name}
          </Link>
        </h3>
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  handleFilmCardClick: PropTypes.func,
};

export default FilmCard;
