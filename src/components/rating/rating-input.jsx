import React from 'react';
import PropTypes from 'prop-types';

const RatingInput = ({ratingScore, handleUserRatingChange}) => {
  return <>
    <input
      className="rating__input"
      id={`star-${ratingScore}`}
      type="radio"
      name="rating"
      value={ratingScore}
      onChange={({target}) => {
        const value = parseInt(target.value, 10);
        handleUserRatingChange(value);
      }}
    />
    <label className="rating__label" htmlFor={`star-${ratingScore}`}>{`Rating ${ratingScore}`}</label>
  </>;
};

RatingInput.propTypes = {
  ratingScore: PropTypes.number.isRequired,
  handleUserRatingChange: PropTypes.func.isRequired,
};

export default RatingInput;
