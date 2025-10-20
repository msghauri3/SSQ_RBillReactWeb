// AppRBillWebReact/pages/Home.js
import React from 'react';
import BTForm from '../components/BTForm';
import ImageGrid from '../components/ImageGrid';
import '../styles/MainPage.css';

function Home() {
  return (
    <main className="main-page">
      <BTForm />
      <ImageGrid />
    </main>
  );
}

export default Home;