import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        X<span className="logo-accent">E</span>N
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