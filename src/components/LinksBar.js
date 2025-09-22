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
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 1.5
        }}>
          {/* Logo from public folder with specific dimensions */}
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center'
          }}>
            <img 
              src="/logo02.png" // Path to your logo in public folder
              alt="Company Logo" 
              style={{ 
                width: '200px',   // Specific width
                height: '60px',   // Specific height
                objectFit: 'contain' // Maintain aspect ratio
              }}
            />
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