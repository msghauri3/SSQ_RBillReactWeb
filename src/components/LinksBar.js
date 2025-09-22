import React, { useState } from 'react';
import { Paper, Container, Box, Button } from '@mui/material';

const LinksBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        borderRadius: 0,
        backgroundColor: 'white', // White background
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', // Space between logo and links
          alignItems: 'center',
          py: 1.5
        }}>
          {/* Logo space on the left */}
          <Box sx={{ 
            width: 120, 
            height: 40, 
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1
          }}>
            <span style={{ color: '#002e5b', fontWeight: 'bold' }}>LOGO</span>
          </Box>
          
          {/* Links aligned to the right */}
          <Box sx={{ display: 'flex' }}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                sx={{
                  color: activeTab === tab.id ? '#002e5b' : 'text.secondary',
                  borderBottom: activeTab === tab.id ? '3px solid' : '3px solid transparent',
                  borderColor: '#002e5b',
                  borderRadius: 0,
                  px: 3,
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 46, 91, 0.05)',
                    color: '#002e5b'
                  }
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default LinksBar;