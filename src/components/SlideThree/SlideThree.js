import React from 'react';
import './SlideThree.css';

const SlideThree = ({ scrollY }) => {
  return (
    <div className="content-wrapper">
      <div className="content-grid">
        <div className="text-content">
          <div className="title-wrapper">
            <h1 
              className="main-title slide-three-title"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              INNOVATIVE BRAND SOLUTIONS
            </h1>
          </div>
          
          <div className="subtitle-section">
            <p 
              className="subtitle slide-three-subtitle"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              ARTISAN AUTHENTIC SMALL BATCH LETTERPRESS PORTLAND
            </p>
            
            <button 
              className="cta-button slide-three-button"
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
            className="visual-wrapper slide-three-visual"
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

export default SlideThree;