import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const TopBar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#002e5b',
        boxShadow: '0 4px 16px rgba(0, 46, 91, 0.3)',
        minHeight: '40px', // Reduced height
        py: 0.5 // Reduced padding
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        minHeight: '40px !important' // Force reduced height
      }}>
        <Typography 
          variant="h5" // Slightly smaller font
          component="h1" 
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #fff 30%, #f1f5f9 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.4rem' // Adjusted font size
          }}
        >
          coditium.com
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Button 
            color="inherit" 
            size="small" // Smaller button
            sx={{
              borderRadius: '6px',
              fontSize: '0.8rem',
              px: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Login
          </Button>
          <Button 
            variant="contained" 
            size="small" // Smaller button
            sx={{
              backgroundColor: 'white',
              color: '#002e5b',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;