import React from "react"
import "../Styles/Footer.css"
//import "./index.css"

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return(
    <footer className="footer">
      <div className="footer-content">

        <div className="follow-us">
          <p>Follow Us</p>

          <ul className="sm-link-list">
            <li className="sm-logo">
              <a href="https://www.instagram.com/reel/DEZ1NxTp74-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">
                <i class='bx bxl-instagram-alt'></i>
              </a>
            </li>

            <li className="sm-logo">
              <a href="https://www.facebook.com/choo.yitshern.77" target="_blank">
                <i class='bx bxl-facebook-circle' ></i>
              </a>
            </li>

            <li className="sm-logo">
              <a href="#">
                <i class='bx bxl-twitter'></i>
              </a>
            </li>

          </ul>
        </div>
        
        <div className="links">
          <p>Quick Links</p>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Tourism Spots</a></li>
            <li><a href="#">Food & Beverages</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>

        <div className="contact-us links">
          <p>Contact Us</p>
          <ul>
            <li><a href="#">Phone xxx</a></li>
            <li><a href="#">Email xxx</a></li>
            <li><a href="#">Fax xxx</a></li>
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