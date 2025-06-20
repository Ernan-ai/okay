import React from 'react';
import './Header.css';
import logo from '../Logo/logo-white.jpg';

const Header = ({ scrollY }) => {
 const halfwayPoint = window.innerHeight / 2;
 const isHidden = scrollY > halfwayPoint;
 
 return (
   <nav 
     className={`header ${isHidden ? 'header-hidden' : ''}`}
   >
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