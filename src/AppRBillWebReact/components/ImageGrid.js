// AppRBillWebReact/components/ImageGrid.js
import React from 'react';
import '../styles/ImageGrid.css';

function ImageGrid() {
  const cities = [
    {
      id: 1,
      name: 'Karachi',
      image: '/karachi.jpg'
    },
    {
      id: 2,
      name: 'Orchards',
      image: '/lahore.jpg'
    },
    {
      id: 3,
      name: 'Downtown',
      image: '/nawabshah.jpg'
    },
    {
      id: 4,
      name: 'Riverside',
      image: '/rawalpindi.jpg'
    }
  ];

  return (
    <div className="image-grid-container">
      <h2 className="grid-title">Our Service Areas</h2>
      
      <div className="image-grid">
        {cities.map((city) => (
          <div key={city.id} className="grid-item">
            <div className="image-wrapper">
              <img 
                src={city.image} 
                alt={city.name}
                className="grid-image"
              />
            </div>
            <h3 className="city-caption">{city.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;