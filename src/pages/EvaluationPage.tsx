import React, { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
  selectedOption?: number;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    text: "Le Machine Learning consiste à ...",
    options: [
      "Analyser des données",
      "Faire du café",
      "Apprendre aux machines à améliorer leurs performances",
      "Jouer au foot",
    ],
  },
  {
    id: 2,
    text: "La Data Science est utilisée pour ...",
    options: [
      "Préparer le déjeuner",
      "Analyser et interpréter des données complexes",
      "Peindre un tableau",
      "Compter les moutons",
    ],
  },
];

const EvaluationPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const totalQuestions = questions.length;

  const timeRemaining = "10 min"; // exemple statique

  const handleOptionChange = (optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedOption = optionIndex;
    setQuestions(updatedQuestions);
  };

  const handleValidateAnswer = () => {
    // Ici, vous pouvez vérifier la réponse, afficher un feedback, etc.
    // Pour l’exemple, on passe à la question suivante :
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Logique de fin de quiz ou affichage des résultats
      alert("Évaluation terminée ! Affichage des résultats ...");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="evaluation-page-container">
      <header className="evaluation-header">
        <div className="header-info">
          <h1>Évaluation</h1>
          <p>Temps restant : {timeRemaining}</p>
        </div>
        <div className="progress-section">
          <div className="progress-info">
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="question-section">
        <div className="question-card">
          <h2>{currentQuestion.text}</h2>
          <ul className="options-list">
            {currentQuestion.options.map((option, idx) => (
              <li key={idx} className="option-item">
                <label>
                  <input
                    type="radio"
                    name={`q${currentQuestion.id}`}
                    checked={currentQuestion.selectedOption === idx}
                    onChange={() => handleOptionChange(idx)}
                  />
                  <span className="option-text">{option}</span>
                </label>
              </li>
            ))}
          </ul>
          <button className="cta-button" onClick={handleValidateAnswer}>
            Valider la réponse
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvaluationPage;
