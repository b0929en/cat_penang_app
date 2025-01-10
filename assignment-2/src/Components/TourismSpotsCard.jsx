import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/TourismSpots.css';


const TourismSpotsCard = ({ title, location, imageSrc, details, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-xl w-auto max-w-[300px] border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="relative rounded-xl overflow-hidden h-80 w-full">
        
        <img src={imageSrc} alt="tourism-spot" className="object-cover h-full w-full" />

        
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-4">
          <p className="font-medium text-base">{location}</p>
          <p className="font-semibold text-xl">{title}</p>
        </div>
        
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md w-full h-full bottom-0 transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0 animate-bounceTwice' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-base text-center pl-6 pr-6 pt-4">{details}</p>
          <div className="flex flex-col justify-between h-auto">
            <div className="flex-grow"></div> {/* This pushes the stars to the bottom */}
            <span className="text-xl absolute left-1/2 transform -translate-x-1/2 bottom-4">{'🌟'.repeat(parseInt(rating))}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

TourismSpotsCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default TourismSpotsCard;
