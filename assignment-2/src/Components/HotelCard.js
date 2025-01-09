import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/HotelCard.css';

const HotelCard = ({ title, location, imageSrc, details, rating }) => {
  const [isFlipped, setIsFlipped] = useState(false); // Track if the card is flipped

  const toggleFlip = () => setIsFlipped(!isFlipped); // Toggle the flip state

  return (
    <div className="HotelCard">
      {/* Card Container */}
      <div className={`Card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
        {/* Front of the Card */}
        <div className="CardFront">
          <img className="CardImage" src={imageSrc} alt={title} />
          <div className="CardOverlay">
            <h3>{title}</h3>
            <p>{location}</p>
            <p>{rating}</p>
          </div>
        </div>

        {/* Back of the Card */}
        <div className="CardBack">
          <p>{details ? details : 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default HotelCard;
