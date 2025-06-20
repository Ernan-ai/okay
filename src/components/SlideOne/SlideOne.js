import React from 'react';
import './SlideOne.css';

const SlideOne = ({ scrollY }) => {
  return (
    <div className="content-wrapper">
      <div className="content-grid">
        <div className="text-content">
          <div className="title-wrapper">
            <h1 
              className="main-title slide-one-title"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              WE GENERATE CREATIVE & NOVATION IDEAS
            </h1>
          </div>
          
          <div className="subtitle-section">
            <p 
              className="subtitle slide-one-subtitle"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              XOXO FAM BRUNCH RETRO INTELLIGENTSIA LIVE-EDGE VEGAN
            </p>
            
            <button 
              className="cta-button slide-one-button"
              style={{
                transform: `translateY(${scrollY * 0.02}px)`
              }}
            >
              <span className="button-text">READ MORE</span>
              <div className="button-bg" />
            </button>
          </div>
        </div>

        <div className="visual-content">
          <div 
            className="visual-wrapper slide-one-visual"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          >
            <div className="visual-bg" />
            <div className="visual-card">
              <div className="card-overlay" />
              <div className="progress-bar">
                <div className="progress-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;