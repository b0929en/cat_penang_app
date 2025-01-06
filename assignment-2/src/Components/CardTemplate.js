// ItemSlot.js
import React, { useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import '../Styles/CardTemplate.css'
import RatingStars from './RatingStars';


const CardTemplate = ({ title, location, imageSrc, details, rating }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const closePopup = () => {
    setIsAnimating(false);
    // Wait for animation to complete before fully closing
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    // Add/remove no-scroll class on body when popup opens/closes
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('PopupOverlay')) {
      closePopup();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closePopup();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <div className='ItemSlot'>

      <div className='ItemCard' onClick={openPopup}>
        <img className='CardImg' src={imageSrc} alt={title} />
        <div className='CardInfo'>
          <h4 className='CardLocation'>{location}</h4>
          <p className='CardName'>{title}</p>
        </div>
      </div>

      {/* Pop-up Window */}
      {isOpen && (
        <>
          <div 
            className={`PopupOverlay ${isAnimating ? 'active' : ''}`}
            onClick={handleOverlayClick}
          >
            <div className={`WindowPop ${isAnimating ? 'active' : ''}`}>
              <div className='Left-Side'>
                <img className='PopupImage' src={imageSrc} alt={title} />
                <div className='Rating'>
                  <RatingStars 
                  initialRating={rating} 
                  isEditable={false}
                  //onRatingChange={(newRating) => console.log('New rating:', newRating)}
                  />
                </div>
              </div>

              <div className='Right-side'>
                <div className='PopupContent'>
                  <h3 className='PopName'>{title}</h3>
                  <p className='PopLocation'>Location: {location}</p>
                  
                  <p className='PopDetails'>{details}</p>
                </div>
              </div>
              
              <button className='CloseButton' onClick={closePopup}>×</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardTemplate;

CardTemplate.propTypes = {
  title: PropTypes.string.isRequired,     
  location: PropTypes.string.isRequired,  
  imageSrc: PropTypes.string.isRequired,  
  details: PropTypes.string,
  rating: PropTypes.number               
};