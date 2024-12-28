import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>

      {/* Projects Card */}
      <div className="projects-card" onClick={handleCardClick}>
        <h3 className="projects-card-title">OSU Dev Club</h3>
        <p className="projects-card-description">
          A solo project to build a platform for OSU students to <strong>host</strong> and <strong>attend</strong> events. Built with ReactJS and Supabase.
        </p>
      </div>

      {/* Modal for the OSU Dev Club project */}
      {isOpen && (
        <div className="projects-modal">
          <div className="projects-modal-content">
            <button className="projects-close-btn" onClick={handleCloseClick}>✖</button>
            <h3>OSU Dev Club</h3>
            <p><strong>Purpose:</strong> Connect OSU students through a platform for sharing and attending events.</p>
            <ul>
              <li><strong>Frontend:</strong> ReactJS</li>
              <li><strong>Backend:</strong> Supabase</li>
              <li><strong>Features:</strong> Event creation, RSVP, user authentication</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
