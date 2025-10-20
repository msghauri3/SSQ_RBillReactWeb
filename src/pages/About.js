import React from 'react';
import '../styles/Pages.css';

function About() {
  return (
    <div className="page-container">
      <h2>About Us</h2>
      <div className="page-content">
        <p>
          Bahria Town Pvt Ltd is a leading real estate developer in Pakistan.
          We are committed to providing quality properties and excellent customer service.
        </p>
        <p>
          With over 20 years of experience, we have successfully developed multiple projects
          across major cities of Pakistan.
        </p>
        <h3>Our Mission</h3>
        <p>
          To develop sustainable and affordable housing communities that meet the needs
          of modern Pakistani families.
        </p>
      </div>
    </div>
  );
}

export default About;