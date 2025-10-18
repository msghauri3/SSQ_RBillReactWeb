import React, { useState, useEffect } from 'react';
import '../styles/ImageCarousel.css';

function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/slider01.jpg',
    '/slider02.png',
    '/slider03.jpg'
  ];

  // Auto-play carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-section">
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="carousel-image"
          />
        </div>

        {/* Previous Button */}
        <button className="carousel-btn carousel-btn-prev" onClick={handlePrevious}>
          ❮
        </button>

        {/* Next Button */}
        <button className="carousel-btn carousel-btn-next" onClick={handleNext}>
          ❯
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;