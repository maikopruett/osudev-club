import React, { useState } from 'react';
import './Joinus.css';


const Joinus = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const validateEmail = (value) => {
    const isOregonState = value.endsWith('@oregonstate.edu');
    setIsValid(isOregonState);
    setShowLink(isOregonState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowLink(true);
    }
  };

  return (
    <div className="joinus-container">
      <div className="joinus-mobile-bg">
        <div className="joinus-mobile-circle1"></div>
        <div className="joinus-mobile-circle2"></div>
      </div>

      <div className="joinus-card">
        <div className="joinus-content">
          <h1 className="joinus-title">Join Our Discord</h1>
          <p className="joinus-subtitle">Connect with fellow OSU developers!</p>
          
          <form onSubmit={handleSubmit} className="joinus-form">
            <div className="joinus-input-group">
              <label htmlFor="joinus-email" className="joinus-label">
                Oregon State Email
              </label>
              <input
                type="email"
                id="joinus-email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className="joinus-input"
                placeholder="your.name@oregonstate.edu"
              />
              {email && !isValid && (
                <p className="joinus-error">
                  Please use your Oregon State email address
                </p>
              )}
            </div>

            <div className={`joinus-button-container ${showLink ? 'show' : ''}`}>
              <button type="button" className="joinus-discord-button">
                Join Discord
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Joinus;