import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Joinus.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const Joinus = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showLink, setShowLink] = useState(false);

  // Validate Oregon State Email
  const validateEmail = (value) => {
    const isOregonState = value.endsWith('@oregonstate.edu');
    setIsValid(isOregonState);
    setShowLink(isOregonState);
  };

  // Function to handle sending the email
  const handleDiscordClick = async () => {
    if (!isValid) {
      alert('Please use a valid Oregon State email.');
      return;
    }

    try {
      // Sending email using EmailJS
      await emailjs.send(
        'service_jz3t3tt', // Replace with your EmailJS service ID
        'template_jd1fu02', // Replace with your EmailJS template ID
        {
          to_email: email, // Use the email entered by the user
        },
        't1OpeCYcgnV-3wbeN' // Replace with your EmailJS public key
      );
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send welcome email. Please try again later.');
    }
  };

  // Handle form submission
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
              <NavLink to="/verification" className="joinus-discord-button">
                Join Discord
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Joinus;