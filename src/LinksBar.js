import React from 'react';
import { Paper, Container, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LinksBar = () => {
  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <Paper elevation={2} sx={{ position: 'sticky', top: 0, zIndex: 100, borderRadius: 0, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Company Logo" style={{ width: '120px', height: '40px', objectFit: 'contain' }} />
          </Box>
          
          <Box sx={{ display: 'flex' }}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                component={NavLink}
                to={tab.path}
                sx={{
                  color: 'text.secondary',
                  borderBottom: '3px solid transparent',
                  borderRadius: 0,
                  px: 3,
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 46, 91, 0.05)',
                    color: '#002e5b'
                  },
                  '&.active': {
                    color: '#002e5b',
                    borderColor: '#002e5b',
                    fontWeight: 'bold'
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