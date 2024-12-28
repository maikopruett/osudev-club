import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const openProject = () => {
    setIsOpen(true);
  };

  const closeProject = () => {
    setIsOpen(false);
  };

  return (
    <div className='projects-container'>
      {/* Project Card */}
      <div className='project-card' onClick={openProject}>
        <h3 className='project-title'>OSU Dev Club</h3>
        <p className='project-description'>
          A community of passionate developers at Oregon State University, 
          dedicated to fostering innovation and collaboration through exciting projects and events.
        </p>
      </div>

      {/* Modal for project details */}
      {isOpen && (
        <div className='project-modal'>
          <div className='project-modal-content'>
            <button className='close-btn' onClick={closeProject}>X</button>
            <h2 className='modal-title'>OSU Dev Club Project</h2>
            <p className='modal-description'>
              OSU Dev Club is an ongoing project designed to bring together developers at Oregon State University 
              to collaborate on projects, attend workshops, network with industry professionals, and more.
            </p>
            <div className='modal-features'>
              <h3>Key Features:</h3>
              <ul>
                <li>Community engagement through events and projects.</li>
                <li>Networking with fellow developers and industry leaders.</li>
                <li>Workshops and hackathons to enhance skills.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
