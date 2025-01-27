import React from 'react';
import './Gallery.css'

export default function Gallery() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Galerie</h2>
      <div className="image-grid">
          <img src="/tattoo1.png" alt="Tatouage floral" />
          <img src="/tattoo2.png" alt="Tatouage minimaliste" />
          <img src="/tattoo3.png" alt="Tatouage animalier" />
      </div>
    </section>
  );
}