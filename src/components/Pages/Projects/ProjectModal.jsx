// ProjectModal.jsx
import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="modal-image"
        />
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.fullDescription}</p>
        
        <h3>Features</h3>
        <ul className="modal-features">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className="modal-challenge-solution">
          <div>
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        </div>
        
        <div className="modal-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="modal-link">
            View on GitHub
          </a>
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="modal-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}