import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/RatingStars.css';

const RatingStars = ({ initialRating = 0, totalStars = 5, isEditable = false, onRatingChange}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    if (isEditable) {
      setRating(value);
      if (onRatingChange) {
        onRatingChange(value);
      }
    }
  };

  const handleMouseEnter = (value) => {
    if (isEditable) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (isEditable) {
      setHoverRating(0);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverRating || rating);
        
        return (
          <span
            key={index}
            className={`star ${isActive ? 'active' : ''} ${isEditable ? 'editable' : ''} `}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

RatingStars.propTypes = {
  initialRating: PropTypes.number,
  totalStars: PropTypes.number,
  isEditable: PropTypes.bool,
  onRatingChange: PropTypes.func,
};

export default RatingStars;