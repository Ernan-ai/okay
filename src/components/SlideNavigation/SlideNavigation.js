import React from 'react';
import './SlideNavigation.css';

const SlideNavigation = ({ slides, currentSlide, setCurrentSlide, nextSlide, prevSlide }) => {
  return (
    <div className="slide-one-navigation">
      <div className="slide-one-scroll-indicator">
        <span>SCROLL</span>
        <div className="slide-one-scroll-line"></div>
      </div>
      
      <div className="slide-one-pagination">
        <div className="slide-one-nav-arrows">
          <button className="slide-one-nav-arrow" onClick={prevSlide}>‹</button>
          <button className="slide-one-nav-arrow" onClick={nextSlide}>›</button>
        </div>
        
        <div className="slide-one-dots">
          {slides.map((slide, index) => (
            <span 
              key={index}
              className={`slide-one-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              {slide.number}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideNavigation;