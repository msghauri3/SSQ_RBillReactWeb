import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Button, Fade } from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PlayArrow,
  Pause
} from '@mui/icons-material';

const SliderBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const slides = [
    {
      title: "You have the IDEA",
      subtitle: "We have the TECHNOLOGY",
      background: "#002e5b" // Solid blue color
    },
    {
      title: "Modern Development",
      subtitle: "Building the future with cutting-edge technologies",
      background: "#002e5b" // Solid blue color
    },
    {
      title: "Innovation & Excellence",
      subtitle: "Pushing boundaries and delivering exceptional results",
      background: "#002e5b" // Solid blue color
    }
  ];

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <Fade 
          key={index}
          in={currentSlide === index}
          timeout={1000}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: slide.background, // Changed to backgroundColor
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Box>
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                {slide.title}
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.9,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                {slide.subtitle}
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#002e5b',
                  borderRadius: '24px',
                  fontWeight: 'bold',
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Fade>
      ))}
      
      {/* Slide controls */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
      
      <IconButton
        onClick={() => setAutoPlay(!autoPlay)}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        {autoPlay ? <Pause /> : <PlayArrow />}
      </IconButton>
      
      {/* Slide indicators */}
      <Box sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1
      }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'white'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SliderBar;