import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/TourismSpots.css';


const TourismSpotsCard = ({ title, location, imageSrc, details, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-xl min-w-[180px] border "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-xl overflow-hidden h-80 w-96">
        {/* Image */}
        <img src={imageSrc} className="object-cover h-full w-full" />

        {/* Title and Location Overlay */}
        <div className="absolute top-0 left-0 right-0 text-mintgreen bg-green-300 bg-opacity-50 p-4">
          <p className="font-bold text-2xl">{title}</p>
          <p className="italic">{location}</p>
        </div>
      

      {/* Rating Stars */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 h-14 ">
        <div className=" bottom-3 flex items-center justify-center">
        <span className="text-4xl">{'🌟'.repeat(parseInt(rating))}</span>
        </div>
        </div>

        {/* Details Overlay on Hover */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 bg-white border-teal-400 p-4 rounded-md w-full md:w-full bottom-0 transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0 animate-bounceTwice' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-sm text-2x1 text-center">{details}</p>
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
