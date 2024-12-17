import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Tableau de bord</h1>

      <section className="stats-section">
        <div className="stat-card">
          <h2>Progression Globale</h2>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "65%" }}></div>
          </div>
          <p className="stat-value">65% du parcours</p>
        </div>

        <div className="stat-card">
          <h2>Compétences Acquises</h2>
          <p className="stat-value">3/5</p>
          <p className="stat-subtitle">Analyse, Visualisation, Extraction</p>
        </div>

        <div className="stat-card">
          <h2>Notifications</h2>
          <p className="stat-value">2</p>
          <p className="stat-subtitle">Nouvelles alertes</p>
        </div>
      </section>

      <section className="recommendations-section">
        <h2>Recommandations Personnalisées</h2>
        <div className="cards-container">
          <div className="recommendation-card">
            <h3>Approfondir le Machine Learning</h3>
            <p>Module avancé avec pratique sur des datasets réels.</p>
            <button className="cta-button">Commencer</button>
          </div>

          <div className="recommendation-card">
            <h3>Techniques de Visualisation</h3>
            <p>Atelier interactif pour maîtriser d3.js et Tableau.</p>
            <button className="cta-button">Commencer</button>
          </div>
        </div>
      </section>

      <section className="modules-section">
        <h2>Vos Modules en Cours</h2>
        <div className="cards-container">
          <div className="module-card">
            <h3>Introduction à la Data Science</h3>
            <div className="module-progress">
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
              <span>40% complété</span>
            </div>
          </div>

          <div className="module-card">
            <h3>Analyse Statistique</h3>
            <div className="module-progress">
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "80%" }}></div>
              </div>
              <span>80% complété</span>
            </div>
          </div>

          <div className="module-card">
            <h3>Machine Learning Fondamentaux</h3>
            <div className="module-progress">
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "20%" }}></div>
              </div>
              <span>20% complété</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
