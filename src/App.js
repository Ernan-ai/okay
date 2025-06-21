import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import SlideThree from './components/SlideThree/SlideThree';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    { component: SlideOne, number: "01" },
    { component: SlideTwo, number: "02" }, 
    { component: SlideThree, number: "03" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="landing-page">
      <Header scrollY={scrollY} />

      <div className="hero-section">
        <div 
          className="background-overlay"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="left-background">
          <div 
            className="left-bg-element"
            style={{
              transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`
            }}
          />
          <div className="left-bg-gradient" />
        </div>

        <CurrentSlideComponent scrollY={scrollY} />

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
      </div>
      
      <Footer />
    </div>
  );
};

export default App;