import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <Typography 
      variant="h2" 
      component="h2" 
      sx={{
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #6366f1, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 3,
        minHeight: '70px'
      }}
    >
      {displayedText}
      <Box 
        component="span" 
        sx={{ 
          animation: 'blink 1s infinite',
          ml: 0.5
        }}
      >
        |
      </Box>
    </Typography>
  );
};

export default AnimatedText;