import React from 'react';
import './SlideTwo.css';

const SlideTwo = ({ scrollY }) => {
  return (
    <div className="content-wrapper">
      <div className="content-grid">
        <div className="text-content">
          <div className="title-wrapper">
            <h1 
              className="main-title slide-two-title"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              PREMIUM DIGITAL EXPERIENCES
            </h1>
          </div>
          
          <div className="subtitle-section">
            <p 
              className="subtitle slide-two-subtitle"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              CRAFT BEER VINYL SUSTAINABLE ORGANIC DIRECT TRADE
            </p>
            
            <button 
              className="cta-button slide-two-button"
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
            className="visual-wrapper slide-two-visual"
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

export default SlideTwo;