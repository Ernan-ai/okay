import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Logo/logo-white.jpg';

const Header = ({ scrollY }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`header ${isHidden ? 'header-hidden' : ''}`}>
      <div className="logo">
        <img src={logo} alt="logo" className='logo'/>
      </div>
      <button className="menu-button">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
    </nav>
  );
};

export default Header;