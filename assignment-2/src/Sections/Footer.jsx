import React from "react"
import "../Styles/Footer.css"

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
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
      document.body.style.overflowX ='hidden';
    }
  };

  return(
    <footer className="footer">
      <div className="footer-content">

        <div className="follow-us">
          <p>Follow Us</p>

          <ul className="sm-link-list">
            <li className="sm-logo">
              <a href="https://www.instagram.com/reel/DEZ1NxTp74-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-instagram-alt'></i>
              </a>
            </li>

            <li className="sm-logo">
              <a href="https://www.facebook.com/choo.yitshern.77" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-facebook-circle' ></i>
              </a>
            </li>

            <li className="sm-logo">
              <a href="https://youtu.be/xvFZjo5PgG0?si=HvSDLTbYvYHy2-3O" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-twitter'></i>
              </a>
            </li>

          </ul>
        </div>
        
        <div className="links">
          <p>Quick Links</p>
          <ul>
          <li> <button onClick={() => scrollToSection('AboutUs')} className='nav-link'>About Us</button></li>
            <li><button onClick={() => scrollToSection('TourismSpots')} className='nav-link'>Tourism Spots</button></li>
            <li> <button onClick={() => scrollToSection('Food&Beverages')} className='nav-link'>Food & Beverages</button></li>
            <li><button onClick={() => scrollToSection('Hotels')} className='nav-link'>Hotels</button></li>
            <li> <button onClick={() => scrollToSection('Events')} className='nav-link'>Things to Do</button></li>
          </ul>
        </div>

        <div className="contact-us links">
          <p>Contact Us</p>
          <ul>
            <li><p>H.P: 012-345 6789</p></li>
            <li><p>Email: penang@gov.my</p></li>
            <li><p>Fax: 1234 5678</p></li>
          </ul>
        </div>

      </div>

      <button className="nav-top-btn" onClick={scrollToTop}>
        <i class='bx bx-up-arrow-alt'></i>
      </button>

    </footer>
  );

};

export default Footer;