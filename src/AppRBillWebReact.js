// AppRBillWebReact.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './AppRBillWebReact/components/Header';
import Header2 from './AppRBillWebReact/components/Header2';
import Home from './AppRBillWebReact/pages/Home';
import About from './AppRBillWebReact/pages/About';
import Projects from './AppRBillWebReact/pages/Projects';
import Contact from './AppRBillWebReact/pages/Contact';
import Footer from './AppRBillWebReact/components/Footer';

function AppRBillWebReact() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}>
        <Header />
        <Header2 />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRBillWebReact;