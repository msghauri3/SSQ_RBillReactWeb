import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Button, Fade, Grid } from '@mui/material';
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
      title: "Beautiful Design Solutions",
      subtitle: "Creating stunning experiences that captivate and inspire",
      description: "We specialize in creating visually appealing and user-friendly designs that enhance user engagement and drive business growth.",
      image: {
        src: "/slider01.png",
        alt: "Design Solutions",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "#002e5b"
    },
    {
      title: "Modern Development",
      subtitle: "Building the future with cutting-edge technologies",
      description: "Our team uses the latest technologies and frameworks to build robust, scalable, and high-performance applications.",
      image: {
        src: "/slider06.jpg",
        alt: "Modern Development",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "#002e5b"
    },
    {
      title: "Innovation & Excellence",
      subtitle: "Pushing boundaries and delivering exceptional results",
      description: "We combine creativity with technical expertise to deliver innovative solutions that exceed client expectations.",
      image: {
        src: "/slider02.jpg",
        alt: "Innovation Excellence",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "#002e5b"
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
    <Box sx={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
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
              backgroundColor: slide.background,
              display: 'flex',
              alignItems: 'center',
              color: 'white'
            }}
          >
            {/* Using exact 50% width for both sides */}
            <Grid container sx={{ height: '100%', alignItems: 'center', width: '100%' }}>
              {/* Text Area - Exactly 50% */}
              <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                <Box sx={{ 
                  padding: { xs: 4, md: 8 },
                  textAlign: { xs: 'center', md: 'left' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 2,
                      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      fontSize: { xs: '2rem', md: '3rem' }
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2, 
                      opacity: 0.9,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      fontSize: { xs: '1.2rem', md: '1.5rem' }
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      opacity: 0.8,
                      lineHeight: 1.6,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {slide.description}
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
                      py: 1.5,
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
              </Grid>
              
              {/* Image Area - Exactly 50% */}
              <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  padding: { xs: 2, md: 4 }
                }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '400px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid rgba(255,255,255,0.2)',
                      overflow: 'hidden'
                    }}
                  >
                    <img 
                      src={slide.image.src} 
                      alt={slide.image.alt}
                      style={{ 
                        width: slide.image.width,
                        height: slide.image.height,
                        objectFit: slide.image.objectFit,
                        borderRadius: '14px'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Placeholder if image doesn't exist */}
                    <Box 
                      sx={{ 
                        display: 'none',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.7)',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                        padding: 2
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {slide.image.alt}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Image: {slide.image.src}
                      </Typography>
                      <Typography variant="caption">
                        Place your image in public folder
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
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