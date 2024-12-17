import React from "react";

interface Certification {
  id: number;
  title: string;
  status: "Acquis" | "En cours";
  description: string;
  badgeIcon?: string;
}

const mockCertifications: Certification[] = [
  {
    id: 1,
    title: "Badge Data Analysis",
    status: "Acquis",
    description:
      "Démontre votre compétence en analyse de données et en manipulation de datasets.",
    badgeIcon: "📊",
  },
  {
    id: 2,
    title: "Badge Machine Learning",
    status: "En cours",
    description:
      "Valide votre compréhension des algorithmes de machine learning et leur mise en œuvre.",
    badgeIcon: "🤖",
  },
  {
    id: 3,
    title: "Certification Data Visualization",
    status: "Acquis",
    description:
      "Prouve votre maîtrise des outils de visualisation et de présentation de données.",
    badgeIcon: "📈",
  },
];

const CertificationPage: React.FC = () => {
  return (
    <div className="certification-page-container">
      <header className="certification-header">
        <h1>Certifications et Badges</h1>
        <p>
          Retrouvez ici vos badges et certifications obtenus au cours de votre
          apprentissage.
        </p>
      </header>

      <section className="certifications-grid">
        {mockCertifications.map((cert) => (
          <div className="certification-card" key={cert.id}>
            <div className="badge-icon">{cert.badgeIcon}</div>
            <h2>{cert.title}</h2>
            <p className="status">
              Statut : <strong>{cert.status}</strong>
            </p>
            <p className="description">{cert.description}</p>

            {cert.status === "Acquis" ? (
              <button className="cta-button">Télécharger le certificat</button>
            ) : (
              <button className="cta-button secondary" disabled>
                En cours...
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default CertificationPage;
