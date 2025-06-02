import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';



const Footer = () => {
  return (
    <footer>
      <div className="footer-content container">
        <img src={ Logo } alt="Logo" className="footer-logo" />
        <div className="footer-links">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/our-menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li>Adress</li>
            <li>Phone number</li>
            <li>email</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Social Media Links</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
          </ul>
        </div>
        {/* <p>© {new Date().getFullYear()} Miguel Ortiz. All rights reserved.</p> */}
      </div>
    </footer>
  )
}
export default Footer;