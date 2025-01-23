import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Art de Peau - Tatouages Uniques</h1>
        <p className="subtitle">Par [Nom de la Tatoueuse], artiste passionnée</p>
      </header>
      <section className="about">
        <h2>À propos</h2>
        <p>
          Bienvenue dans mon univers ! Je suis spécialisée dans des designs
          personnalisés et uniques, inspirés par la nature, l'art et vos
          histoires. Mon objectif est de créer des œuvres qui subliment votre
          peau tout en respectant vos envies.
        </p>
      </section>
      <section className="gallery">
        <h2>Galerie</h2>
        <div className="image-grid">
          <img src="/tattoo1.png" alt="Tatouage floral" />
          <img src="/tattoo2.png" alt="Tatouage minimaliste" />
          <img src="/tattoo3.png" alt="Tatouage animalier" />
        </div>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>
          Prête à franchir le pas ? Prenez rendez-vous ou posez vos questions !
        </p>
        <p>Email : <a href="mailto:tatoueuse@example.com">tatoueuse@example.com</a></p>
        <p>Téléphone : <a href="tel:+330123456789">+33 0 12 34 56 78 9</a></p>
      </section>
      <footer className="footer">
        <p>© 2025 Art de Peau - Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;