import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
    {
      title: "WE GENERATE CREATIVE & NOVATION IDEAS",
      subtitle: "XOXO FAM BRUNCH RETRO INTELLIGENTSIA LIVE-EDGE VEGAN",
      number: "01"
    },
    {
      title: "PREMIUM DIGITAL EXPERIENCES", 
      subtitle: "CRAFT BEER VINYL SUSTAINABLE ORGANIC DIRECT TRADE",
      number: "02"
    },
    {
      title: "INNOVATIVE BRAND SOLUTIONS",
      subtitle: "ARTISAN AUTHENTIC SMALL BATCH LETTERPRESS PORTLAND", 
      number: "03"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

        <div className="content-wrapper">
          <div className="content-grid">
            <div className="text-content">
              <div className="title-wrapper">
                <h1 
                  className="main-title"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`
                  }}
                >
                  {slides[currentSlide].title}
                </h1>
              </div>
              
              <div className="subtitle-section">
                <p 
                  className="subtitle"
                  style={{
                    transform: `translateY(${scrollY * 0.05}px)`
                  }}
                >
                  {slides[currentSlide].subtitle}
                </p>
                
                <button 
                  className="cta-button"
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
                className="visual-wrapper"
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