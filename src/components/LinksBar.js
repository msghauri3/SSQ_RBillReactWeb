import React, { useState } from 'react';
import { Paper, Container, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const LinksBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  
  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    { id: 'netmetering', label: 'Net Metering', path: '/netmetering' }
  ];

  // Update activeTab when location changes
  React.useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveTab('home');
    } else {
      setActiveTab(currentPath.slice(1));
    }
  }, [location.pathname]);

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
              src="/logo02.png"
              alt="Company Logo" 
              style={{ 
                width: '200px',
                height: '60px',
                objectFit: 'contain'
              }}
            />
          </Box>
          
          {/* Links aligned to the right */}
          <Box sx={{ display: 'flex' }}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                component={Link}
                to={tab.path}
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