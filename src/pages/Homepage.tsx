import React from "react";
import "./Homepage.css"; // Importation du fichier CSS externe

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">LMS Innovant</h1>
        <nav className="nav">
          <a href="#" className="nav-link">
            Accueil
          </a>
          <a href="#" className="nav-link">
            Fonctionnalités
          </a>
          <a href="#" className="nav-link">
            Connexion
          </a>
          <a href="#" className="nav-button">
            Inscription
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">
          Apprenez de manière intelligente avec notre LMS
        </h2>
        <p className="hero-description">
          Une plateforme innovante utilisant l'IA pour optimiser votre
          apprentissage.
        </p>
        <a href="#" className="cta-button">
          Commencer Maintenant
        </a>
      </section>

      {/* Features Section */}
      <section className="features">
        <h3 className="features-title">Fonctionnalités Clés</h3>
        <ul className="features-list">
          <li>✅ Suivi de la progression personnalisé</li>
          <li>✅ Interaction facilitée avec les formateurs</li>
          <li>✅ Évaluations interactives et feedback instantané</li>
          <li>✅ Certifications et badges</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 LMS Innovant. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Homepage;
