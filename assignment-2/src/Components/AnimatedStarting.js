import React, { useEffect, useState } from 'react';
import PenanagMountainImage from '../Sources/PenangMountain.png';
import DecorativeClouds from '../Sources/PenangCloud.png'

const AnimatedStarting = () => {
  const [scrollScale, setScrollScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [isFixed, setIsFixed] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const zoomThreshold = 600;
    if (scrollPosition < zoomThreshold) {
      const scale = 1 + (scrollPosition * 0.003); // Adjust multiplier for zoom intensity
      setScrollScale(Math.min(scale, 2.0)); // Limit max zoom to 2.0
      setOpacity(1);
      setIsFixed(true);
    }

    if (scrollPosition >= zoomThreshold) {
      const fadeStart = zoomThreshold;
      const fadeDistance = 300; // Total scroll distance for fading out
      const newOpacity = Math.max(1 - (scrollPosition - fadeStart) / fadeDistance, 0);
      setOpacity(newOpacity);

    if (newOpacity === 0) setIsFixed(false);
    }

    

  };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="nav-buttons">
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className={`AnimatedPic ${isFixed ? 'fixed' : 'relative'}`} style={{
        opacity: opacity,
        pointerEvents: opacity > 0 ? 'auto' : 'none', 
      }}>
        <div className="mountain-image-container">
          <img
            src={PenanagMountainImage}
            alt="Penang mountain landscape"
            className="mountain-image"
            style={{
              transform: `scale(${scrollScale})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>

        <div className="cloud-container">
          <img
            src={DecorativeClouds}
            alt="Decorative clouds"
            className="cloud-image"
            style={{
              transform: `scale(${scrollScale})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>

        <div className="text-overlay">
          <h1 className="title" style={{
              transform: `scale(${scrollScale})`,
              transition: 'transform 0.3s ease-out'
            }}>Penang</h1>
        </div>
      </div>

      {/* Add space for scrolling */}
      <div style={{ height: '300vh' }}></div>
    </div>
  );
};

export default AnimatedStarting;