import React from "react";

const CoursePage: React.FC = () => {
  const courseTitle = "Introduction à la Data Science";
  const courseInstructor = "Marie Dupont";
  const courseDuration = "3h 30min";
  const courseProgress = 40; // en pourcentage
  const courseResources = [
    { type: "Vidéo", title: "Vidéo d'introduction" },
    { type: "Article", title: "Les fondamentaux de la Data Science" },
    { type: "Quiz", title: "Quiz : Chapitre 1" },
  ];

  return (
    <div className="course-page-container">
      <header className="course-header">
        <div className="course-info">
          <h1>{courseTitle}</h1>
          <p className="instructor">
            Formateur : {courseInstructor} | Durée : {courseDuration}
          </p>
          <div className="course-progress-container">
            <div className="progress-label">
              Progression : {courseProgress}%
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${courseProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <button className="cta-button">Poser une question au formateur</button>
      </header>

      <section className="course-resources">
        <h2>Ressources du cours</h2>
        <div className="resources-grid">
          {courseResources.map((res, index) => (
            <div className="resource-card" key={index}>
              <div className="resource-icon">
                {res.type === "Vidéo" && "🎥"}
                {res.type === "Article" && "📄"}
                {res.type === "Quiz" && "❓"}
              </div>
              <h3>{res.title}</h3>
              <p>Type : {res.type}</p>
              <button className="cta-button secondary">Ouvrir</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
