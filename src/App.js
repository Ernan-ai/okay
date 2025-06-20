import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import SlideThree from './components/SlideThree/SlideThree';
import './App.css';

const LandingPage = () => {
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

        <div className="navigation-controls">
          <button 
            onClick={prevSlide}
            className="nav-button prev-button"
          >
            <svg className="nav-icon prev-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="nav-button next-button"
          >
            <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-text">SCROLL</div>
          <svg className="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="slide-numbers">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slide-number ${index === currentSlide ? 'active' : ''}`}
            >
              {slide.number}
            </button>
          ))}
        </div>

        <div className="vertical-text">
          CREATIVE AGENCY
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;