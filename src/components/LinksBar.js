// components/LinksBar.js
import React from 'react';
import { Paper, Container, Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const LinksBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState('billing');

  const tabs = [
    { id: 'billing', label: 'Billing', type: 'scroll' },
    { id: 'about', label: 'About', type: 'scroll' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'contact', label: 'Contact', type: 'scroll' },
    { id: 'netmetering', label: 'Net Metering', type: 'route', path: '/netmetering' }
  ];

  React.useEffect(() => {
    if (location.pathname === '/netmetering') setActiveTab('netmetering');
  }, [location.pathname]);

  const handleClick = (tab) => {
    if (tab.type === 'route') {
      setActiveTab(tab.id);
      navigate(tab.path);
      return;
    }

    if (location.pathname === '/') {
      scroller.scrollTo(tab.id, { duration: 450, smooth: true, offset: -80 });
      setActiveTab(tab.id);
    } else {
      navigate('/', { state: { scrollTo: tab.id } });
      setActiveTab(tab.id);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        top: 40,           // ✅ matches TopBar height
        left: 0,
        right: 0,
        zIndex: 1100,      // ✅ below TopBar
        borderRadius: 0,
        transition: 'top 0.2s ease', // optional smoothness
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
          {/* Logo left me */}
          <Box>
            <img src="/logo.png" alt="logo" style={{ width: 70, objectFit: 'fill' }} />
          </Box>

          {/* Links center me */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            {tabs.map(tab => (
              <Button
                key={tab.id}
                onClick={() => handleClick(tab)}
                sx={{
                  color: activeTab === tab.id ? '#002e5b' : 'text.secondary',
                  borderBottom: activeTab === tab.id ? '3px solid #002e5b' : 'none',
                  borderRadius: 0,
                  px: 2.5,
                  fontSize: '0.95rem',
                  '&:hover': { backgroundColor: 'rgba(0,46,91,0.05)', color: '#002e5b' }
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
