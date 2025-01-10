import React, { useEffect, useState } from 'react';
import PenanagMountainImage from '../StaticSources/PenangMountain.png';
import DecorativeClouds from '../StaticSources/PenangCloud.png'
import PenangLogo from '../StaticSources/PenangFlag3d.png'

const AnimatedStarting = () => {
  const [scrollScale, setScrollScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.body.style.overflow = 'visible';
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'visible';
  };
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      document.body.style.overflow = 'visible';
      document.body.style.overflowX = 'hidden';
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const zoomThreshold = 600;
    if (scrollPosition < zoomThreshold) {
      const scale = 1 + (scrollPosition * 0.003); // Adjust multiplier for zoom intensity
      setScrollScale(Math.min(scale, 2.0)); // Limit max zoom to 2.0
      setOpacity(1);
      setIsFixed(true);
      setShowHeaderBackground(false);
    }

    if (scrollPosition >= zoomThreshold) {
      const fadeStart = zoomThreshold;
      const fadeDistance = 300; // Total scroll distance for fading out
      const newOpacity = Math.max(1 - (scrollPosition - fadeStart) / fadeDistance, 0);
      setOpacity(newOpacity);
      setShowHeaderBackground(true);

    if (newOpacity === 0) setIsFixed(false);
    }
  };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className={`sidebar-overlay ${isOpen ? 'open' : 'close'}`} onClick={() => setIsOpen(false)}/>
      <div className={`HeaderBar ${showHeaderBackground ? 'with-background' : ''}`}>
        <div onClick={scrollToTop} className='Home-logo' role="button" tabIndex={0}>
          <img src= {PenangLogo} alt='Penang state' className='Penang  LogoPic'/>
          <p className='LogoTitle'>Penang</p>
        </div>

        <div className={`SectionNav ${isOpen ? 'open' : 'close'}`}>
          <button onClick={() => scrollToSection('AboutUs')} className='nav-link'>About Penang</button>
          <button onClick={() => scrollToSection('TourismSpots')} className='nav-link'>Tourism Spots</button>
          <button onClick={() => scrollToSection('Food&Beverages')} className='nav-link'>Food & Beverages</button>
          <button onClick={() => scrollToSection('Hotels')} className='nav-link'>Hotels</button>
          <button onClick={() => scrollToSection('Events')} className='nav-link'>Things to Do</button>
        </div>

        {/*Add About Penang section */}
        
        {/*Nav-button keeps? changed to>? */}

        <div className="nav-buttons">
          <button className="nav-button" onClick={toggleSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
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

    </div>
  );
};

export default AnimatedStarting;