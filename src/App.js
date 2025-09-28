// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Box, Fab } from '@mui/material';
// import { KeyboardArrowUp } from '@mui/icons-material';
// import TopBar from './components/TopBar';
// import LinksBar from './components/LinksBar';
// import Footer from './components/Footer';
// import ScrollTop from './components/ScrollTop';
// import HomePage from './components/pages/HomePage';
// import AboutPage from './components/pages/AboutPage';
// import ServicesPage from './components/pages/ServicesPage';
// import PortfolioPage from './components/pages/PortfolioPage';
// import ContactPage from './components/pages/ContactPage';
// import BillingComponent from './components/BillingComponent';

// const App = () => {
//   return (
//     <Router>
//       <Box sx={{ flexGrow: 1, backgroundColor: 'background.default' }}>
//         <style>
//           {`@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`}
//         </style>
        
        
//         <div id="back-to-top-anchor" />
        
//         {/* <TopBar /> */}
//         <LinksBar />
        
//         <Routes>
//           <Route path="/" element={<BillingComponent />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/portfolio" element={<PortfolioPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>

//         <Footer />
        
//         <ScrollTop>
//           <Fab color="primary" size="medium" aria-label="scroll back to top"
//             sx={{ backgroundColor: '#002e5b', '&:hover': { backgroundColor: '#00498a' } }}>
//             <KeyboardArrowUp />
//           </Fab>
//         </ScrollTop>
//       </Box>
//     </Router>
//   );
// };

// export default App;


// App.js
import React from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';
import LinksBar from './components/LinksBar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

import BillingComponent from './pages/BillingComponent';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NetMetering from './pages/NetMetering';

// MainPage renders all sections and auto-scrolls if location.state.scrollTo is present
const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const target = location.state?.scrollTo || (location.hash ? location.hash.slice(1) : null);
    if (target) {
      // small delay to ensure DOM mounted
      setTimeout(() => {
        scroller.scrollTo(target, { duration: 450, smooth: true, offset: -80 });
        // clear state so it doesn't re-trigger on navigation/back
        navigate(location.pathname, { replace: true, state: {} });
      }, 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount (state is read from initial location)

  return (
    <>
      <Element name="billing"><section id="billing"><BillingComponent /></section></Element>
      <Element name="about"><section id="about"><About /></section></Element>
      <Element name="projects"><section id="projects"><Projects /></section></Element>
      <Element name="contact"><section id="contact"><Contact /></section></Element>
    </>
  );
};

const App = () => {
  return (
    <Router>

      <div id="back-to-top-anchor" />
      <LinksBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/netmetering" element={<NetMetering />} />
      </Routes>

      <Footer />
      <ScrollTop>
         <Fab color="primary" size="medium" aria-label="scroll back to top"
             sx={{ backgroundColor: '#002e5b', '&:hover': { backgroundColor: '#00498a' } }}>
             <KeyboardArrowUp />
           </Fab>
      </ScrollTop>
      
    </Router>
  );
};

export default App;
