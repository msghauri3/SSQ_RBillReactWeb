import React, { useEffect } from 'react';
import { Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';

import LinksBar from './components/LinksBar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

import Billing from './pages/Billing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NetMetering from './pages/NetMetering';

// Auto-scroll wrapper for hash or state.scrollTo
const ScrollToSection = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo || (location.hash ? location.hash.slice(1) : null);
    if (target) {
      setTimeout(() => {
        scroller.scrollTo(target, { duration: 450, smooth: true, offset: -80 });
        navigate(location.pathname, { replace: true, state: {} }); // clear state
      }, 60);
    }
  }, [location, navigate]);

  return children;
};

const MainPage = () => (
  <>
    <Element name="billing"><Billing /></Element>
    <Element name="about"><About /></Element>
    <Element name="projects"><Projects /></Element>
    <Element name="contact"><Contact /></Element>
  </>
);

const App = () => (
  <Router>
    <div id="back-to-top-anchor" />
    <LinksBar />
    
    <ScrollToSection>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/netmetering" element={<NetMetering />} />
      </Routes>
    </ScrollToSection>

    <Footer />

    <ScrollTop>
      <Fab
        color="primary"
        size="medium"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUp />
      </Fab>
    </ScrollTop>

  </Router>
);

export default App;
