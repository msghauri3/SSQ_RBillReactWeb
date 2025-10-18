// AppRBillWebReact.js
import React from 'react';
import Header from './AppRBillWebReact/components/Header';
import Header2 from './AppRBillWebReact/components/Header2';
import MainPage from './AppRBillWebReact/pages/MainPage';
import ImageCarousel from './AppRBillWebReact/components/ImageCarousel';
import ImageGrid from './AppRBillWebReact/components/ImageGrid';  
import Footer from './AppRBillWebReact/components/Footer';

function AppRBillWebReact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Header2 />
      <MainPage />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default AppRBillWebReact;