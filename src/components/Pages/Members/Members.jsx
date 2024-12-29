import React, { useEffect, useState } from 'react';
import './Members.css';

const Members = () => {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="members-container">
      <div className={`content-wrapper ${visible ? 'visible' : ''}`}>
        <h1 className="title">
          {'Members'.split('').map((letter, index) => (
            <span 
              key={index} 
              className="floating-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <div className="coming-soon-text">Coming Soon</div>
        
        <button 
          className="info-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
        
        <div className={`info-section ${isExpanded ? 'expanded' : ''}`}>
          <div className="info-content">
            <h2 className="info-header">Upcoming Discord Integration</h2>
            
            <section className="info-block">
              <h3 className="info-subheader">Real-Time Server Analytics</h3>
              <p>Our upcoming Members page will seamlessly integrate with your Discord server, providing comprehensive analytics and insights through our specialized bot. Stay informed about your community's growth and engagement patterns with just a glance.</p>
            </section>

            <section className="info-block">
              <h3 className="info-subheader">Key Features</h3>
              <div className="feature-grid">
                <div className="feature-item">
                  <h4>Member Activity</h4>
                  <p>Track active users, engagement rates, and peak activity times</p>
                </div>
                <div className="feature-item">
                  <h4>Role Analytics</h4>
                  <p>Monitor role distribution and member progression</p>
                </div>
                <div className="feature-item">
                  <h4>Channel Insights</h4>
                  <p>Analyze channel popularity and usage patterns</p>
                </div>
                <div className="feature-item">
                  <h4>Growth Metrics</h4>
                  <p>View detailed membership growth and retention statistics</p>
                </div>
              </div>
            </section>

            <section className="info-block">
              <h3 className="info-subheader">Coming Updates</h3>
              <p>We're continuously working to enhance your server management experience. Stay tuned for regular updates and new features that will help you better understand and grow your community.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;