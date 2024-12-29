import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div className='mainpage-container'>
      {/* Animated background elements */}
      <div className="mainpage-background">
        <div className="mainpage-circle mainpage-circle1"></div>
        <div className="mainpage-circle mainpage-circle2"></div>
        <div className="mainpage-circle mainpage-circle3"></div>
      </div>

      {/* Content container */}
      <div className='mainpage-content'>
        {/* Header section with existing wave */}
        <div className='main-header'>
          <h1 className='mainpage-title'>Welcome to the OSU Dev Club</h1>
          <span className="wave">👋</span>
        </div>

        {/* Mission statement card */}
        <div className='mainpage-card mainpage-mission-card'>
          <h2 className='mainpage-card-title'>Our Mission</h2>
          <p className='mainpage-mission-text'>
          Welcome to the OSU Dev Club, a project built by a solo developer at Oregon State University!  
          This initiative is dedicated to fostering innovation, collaboration, and technical excellence.  
          Whether you're just starting your coding journey or you're an experienced developer, the OSU Dev Club provides a platform to grow your skills, explore exciting projects, and connect with like-minded students.

          </p>
        </div>

        {/* Features grid */}
        <div className='mainpage-features'>
          <div className='mainpage-card mainpage-feature-card'>
            <div className='mainpage-feature-icon'>💻</div>
            <h3 className='mainpage-feature-title'>Projects</h3>
            <p className='mainpage-feature-text'>
              Work on real-world projects and build your portfolio while learning from peers.
            </p>
          </div>

          <div className='mainpage-card mainpage-feature-card'>
            <div className='mainpage-feature-icon'>🤝</div>
            <h3 className='mainpage-feature-title'>Networking</h3>
            <p className='mainpage-feature-text'>
              Connect with fellow developers.
            </p>
          </div>

          <div className='mainpage-card mainpage-feature-card'>
            <div className='mainpage-feature-icon'>🎓</div>
            <h3 className='mainpage-feature-title'>Workshops</h3>
            <p className='mainpage-feature-text'>
              Learn new technologies and best practices through our regular workshops.
            </p>
          </div>

          <div className='mainpage-card mainpage-feature-card'>
            <div className='mainpage-feature-icon'>🚀</div>
            <h3 className='mainpage-feature-title'>Hackathons</h3>
            <p className='mainpage-feature-text'>
              Participate in exciting hackathons and coding competitions throughout the year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}