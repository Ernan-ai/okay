import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-branding">
          <div className="footer-logo">
            X<span className="logo-accent">E</span>N
          </div>
        </div>

        <div className="footer-section footer-navigation">
          <nav className="footer-nav">
            <a href="#" className="nav-link active">HOME</a>
            <a href="#" className="nav-link">ABOUT</a>
            <a href="#" className="nav-link">SERVICES</a>
            <a href="#" className="nav-link">PORTFOLIO</a>
            <a href="#" className="nav-link">BLOG</a>
            <a href="#" className="nav-link">CONTACT</a>
          </nav>
        </div>

        <div className="footer-section footer-contact">
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <span className="contact-text">EMAIL@XEN_AGENCY.COM</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">+23 8 8532 7834</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-address">
              <span className="contact-text">PO BOX 223158 OLIVER STREET</span>
              <span className="contact-text">EAST VICTORIA 2006 UK</span>
            </div>
          </div>
        </div>

        <div className="footer-section footer-social">
          <div className="social-links">
            <a href="#" className="social-link">INSTAGRAM</a>
            <a href="#" className="social-link">FACEBOOK</a>
            <a href="#" className="social-link">SPOTIFY</a>
            <a href="#" className="social-link">VIMEO</a>
            <a href="#" className="social-link">BEHANCE</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © COPYRIGHT 2019 XEN. THEME BY JINNA GIK
        </div>
        <div className="scroll-top">
          <button className="scroll-top-btn">
            <svg className="scroll-top-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;