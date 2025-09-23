import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const HorizontalCardCarousel = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(cards.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsToShow;
    return cards.slice(startIndex, startIndex + cardsToShow);
  };

  // Function to get fallback image based on card index
  const getFallbackImage = (cardIndex) => {
    const fallbackImages = [
      '/cards/card01.png',
      '/cards/card02.png', 
      '/cards/card03.png',
      '/cards/card04.png',
      '/cards/card05.png',
      '/cards/card06.png'
    ];
    return fallbackImages[cardIndex % fallbackImages.length] || '/card01.png';
  };

  if (!cards || cards.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No cards to display
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      position: 'relative', 
      maxWidth: '1200px', 
      margin: '0 auto',
      px: { xs: 1, sm: 2, md: 4 }
    }}>
      
      {/* Navigation Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: { xs: -10, sm: -20 },
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 3,
          zIndex: 10,
          '&:hover': {
            backgroundColor: 'grey.100',
            transform: 'translateY(-50%) scale(1.1)'
          },
          display: cards.length <= cardsToShow ? 'none' : 'flex'
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: { xs: -10, sm: -20 },
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 3,
          zIndex: 10,
          '&:hover': {
            backgroundColor: 'grey.100',
            transform: 'translateY(-50%) scale(1.1)'
          },
          display: cards.length <= cardsToShow ? 'none' : 'flex'
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Cards Container */}
      <Box sx={{ 
        display: 'flex',
        gap: 3,
        overflow: 'hidden',
        justifyContent: 'center',
        minHeight: '400px'
      }}>
        {getCurrentCards().map((card, index) => {
          // Calculate the actual index in the original cards array
          const actualIndex = currentIndex * cardsToShow + index;
          
          return (
            <Card 
              key={actualIndex}
              sx={{ 
                minWidth: { 
                  xs: '100%', 
                  sm: `calc(50% - 12px)`, 
                  md: `calc(33.333% - 16px)` 
                },
                maxWidth: { 
                  xs: '100%', 
                  sm: `calc(50% - 12px)`, 
                  md: `calc(33.333% - 16px)` 
                },
                height: '380px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
            >
              {/* Top: Image from Public Folder */}
              <CardMedia
                component="img"
                height="200"
                image={card.image} 
                alt={card.title || 'Card image'}
                sx={{ 
                  objectFit: 'cover',
                  borderBottom: '2px solid',
                  borderColor: 'divider'
                }}
                onError={(e) => {
                  console.error(`Image failed to load: ${card.image}`);
                  // Use different fallback image based on card index
                  e.target.src = getFallbackImage(actualIndex);
                }}
              />
              
              {/* Bottom: Text Content */}
              <CardContent sx={{ 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                p: 3
              }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#002e5b',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    minHeight: '64px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {card.title || 'Untitled'}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.6,
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    mb: 2
                  }}
                >
                  {card.description || 'No description available.'}
                </Typography>
                
                {card.buttonText && (
                  <Box sx={{ mt: 'auto' }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'primary.main',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        '&:hover': { 
                          textDecoration: 'underline' 
                        }
                      }}
                    >
                      {card.buttonText} →
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {currentIndex + 1} / {totalSlides}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? '#002e5b' : 'grey.300',
                  margin: '0 4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: currentIndex === index ? '#002e5b' : 'grey.500'
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HorizontalCardCarousel;