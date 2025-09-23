import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import TopBar from './components/TopBar';
import LinksBar from './components/LinksBar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import PortfolioPage from './components/pages/PortfolioPage';
import ContactPage from './components/pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1, backgroundColor: 'background.default' }}>
        <style>
          {`@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`}
        </style>
        
        <div id="back-to-top-anchor" />
        
        <TopBar />
        <LinksBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        
        <ScrollTop>
          <Fab color="primary" size="medium" aria-label="scroll back to top"
            sx={{ backgroundColor: '#002e5b', '&:hover': { backgroundColor: '#00498a' } }}>
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </Box>
    </Router>
  );
};

export default App;