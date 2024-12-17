import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tableau de bord
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cours"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalogue"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Catalogue des Cours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/evaluation"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Évaluation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certifications"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chatbot"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Chatbot IA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/questionnaires"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mes Questionnaires
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
