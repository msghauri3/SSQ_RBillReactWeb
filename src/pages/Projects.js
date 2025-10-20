import React from 'react';
import '../styles/Pages.css';

function Projects() {
  return (
    <div className="page-container">
      <h2>Our Projects</h2>
      <div className="page-content">
        <div className="project-item">
          <h3>Bahria Town Karachi</h3>
          <p>A premium residential community with world-class amenities and infrastructure.</p>
        </div>
        <div className="project-item">
          <h3>Bahria Town Lahore</h3>
          <p>Located in the heart of Lahore, offering modern living spaces and facilities.</p>
        </div>
        <div className="project-item">
          <h3>Bahria Town Islamabad</h3>
          <p>A master-planned community designed for comfort and convenience.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;