import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import CoursePage from "./pages/CoursePage";
import MessagingPage from "./pages/MessagingPage";
import EvaluationPage from "./pages/EvaluationPage";
import CertificationPage from "./pages/CertificationPage";
import CourseCatalog from "./pages/CourseCatalog";
import ChatbotPage from "./pages/ChatbotPage";
import QuestionnairePage from "./pages/QuestionnairePage";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cours" element={<CoursePage />} />
            <Route path="/messages" element={<MessagingPage />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/certifications" element={<CertificationPage />} />
            <Route path="/catalogue" element={<CourseCatalog />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/questionnaires" element={<QuestionnairePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
