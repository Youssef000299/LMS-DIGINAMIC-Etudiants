// src/pages/PreCourseAssessmentPage.tsx

import React, { useState } from "react";

// Interface pour un questionnaire de niveau
interface LevelAssessment {
  id: number;
  title: string;
  description: string;
  level: string; // Niveau du questionnaire (Débutant, Intermédiaire, Avancé)
  status: "Not Started" | "In Progress" | "Completed";
}

const PreCourseAssessmentPage: React.FC = () => {
  const [assessments, setAssessments] = useState<LevelAssessment[]>([
    {
      id: 1,
      title: "Questionnaire Débutant en Programmation",
      description: "Évaluez vos compétences de base en programmation.",
      level: "Débutant",
      status: "Not Started",
    },
    {
      id: 2,
      title: "Questionnaire Intermédiaire en JavaScript",
      description: "Testez votre niveau intermédiaire en JavaScript.",
      level: "Intermédiaire",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Questionnaire Avancé en Machine Learning",
      description:
        "Évaluation pour les compétences avancées en Machine Learning.",
      level: "Avancé",
      status: "Completed",
    },
  ]);

  // Fonction pour afficher les détails d'un questionnaire
  const handleStartAssessment = (assessment: LevelAssessment) => {
    alert(
      `Démarrage du questionnaire :\n\nTitre : ${assessment.title}\nDescription : ${assessment.description}\nNiveau : ${assessment.level}`
    );
  };

  return (
    <div className="pre-course-assessment-container">
      <h1>Questionnaires de Niveau</h1>
      <p>Évaluez vos compétences avant de commencer les cours.</p>

      {/* Liste des questionnaires de niveau */}
      <section className="assessments-list-section">
        <h2>Liste des Questionnaires</h2>
        {assessments.length === 0 ? (
          <p>Aucun questionnaire disponible pour le moment.</p>
        ) : (
          <ul className="assessments-list">
            {assessments.map((assessment) => (
              <li key={assessment.id} className="assessment-item">
                <h3>{assessment.title}</h3>
                <p>{assessment.description}</p>
                <p>Niveau : {assessment.level}</p>
                <p>
                  Statut :{" "}
                  {assessment.status === "Not Started" && "🕒 Non commencé"}
                  {assessment.status === "In Progress" && "⏳ En cours"}
                  {assessment.status === "Completed" && "✅ Terminé"}
                </p>
                {assessment.status !== "Completed" && (
                  <button onClick={() => handleStartAssessment(assessment)}>
                    Démarrer le Questionnaire
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default PreCourseAssessmentPage;
