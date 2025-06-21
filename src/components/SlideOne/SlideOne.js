import React from 'react';
import './SlideOne.css';

const SlideOne = ({ scrollY }) => {
  return (
    <div className="slide-one-container">
      <div className="slide-one-bg-image"></div>
      
      <div className="slide-one-people-silhouette"></div>
      
      <div className="slide-one-content">
        <div 
          className="slide-one-text-section"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <h1 className="slide-one-title">
            WE GENERATE<br />
            CREATIVE &<br />
            NOVATION IDEAS
          </h1>
          
          <p className="slide-one-subtitle">
            XOXO FAM BRUNCH RETRO INTELLIGENTSIA LIVE-EDGE VEGAN
          </p>
          
          <button className="slide-one-button">
            READ MORE
          </button>
        </div>
      </div>
      

    </div>
  );
};

export default SlideOne;