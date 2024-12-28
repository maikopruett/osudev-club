import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './Verification.css';

export default function Verification() {
  const [userEmail, setUserEmail] = useState('');
  const [resendSuccess, setResendSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleResendEmail = async () => {
    setIsLoading(true);
    try {
      // Replace with your logic to handle resend functionality
      // (e.g., sending a custom email with a link)
      console.log('Resending email...');
      setTimeout(() => {
        setResendSuccess(true);
        setTimeout(() => setResendSuccess(false), 3000);
      }, 1000); // Simulate delay
    } catch (error) {
      console.error('Error resending email:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="verification-wrapper">
      <BrowserView>
        <div className="verification-container animate-fade-in">
          <div className="verification-card">
            <div className="icon-container">
              <img src="/check.png" alt="Verification" className="check-icon animate-bounce" />
            </div>
            <h1 className="title">Check Your Email!</h1>
            {userEmail && (
              <div className="email-container animate-slide-up">
                <p className="email-label">We've sent a verification link to:</p>
                <p className="email-address">{userEmail}</p> {/* Display the email */}
              </div>
            )}
            <div className="info-box animate-slide-up">
              <p>Click the verification link in your email to complete your registration</p>
            </div>
            <div className="actions animate-slide-up">
              <button 
                onClick={handleResendEmail}
                className={`resend-button ${isLoading ? 'loading' : ''} ${resendSuccess ? 'success' : ''}`}
                disabled={isLoading || resendSuccess}
              >
                {resendSuccess ? 'Email Sent!' : isLoading ? 'Sending...' : 'Resend Email'}
              </button>
              <p className="help-text">
                Can't find the email? Check your spam folder or click above to resend.
              </p>
            </div>
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className="verification-container-mobile animate-fade-in">
          <div className="verification-card-mobile">
            <div className="icon-container">
              <img src="/check.png" alt="Verification" className="check-icon animate-bounce" />
            </div>
            <h1 className="title-mobile">Check Your Email!</h1>
            {userEmail && (
              <div className="email-container-mobile animate-slide-up">
                <p className="email-label-mobile">We've sent a verification link to:</p>
                <p className="email-address-mobile">{userEmail}</p> {/* Display the email */}
              </div>
            )}
            <div className="info-box-mobile animate-slide-up">
              <p>Click the verification link in your email to complete your registration</p>
            </div>
            <div className="actions-mobile animate-slide-up">
              <button 
                onClick={handleResendEmail}
                className={`resend-button-mobile ${isLoading ? 'loading' : ''} ${resendSuccess ? 'success' : ''}`}
                disabled={isLoading || resendSuccess}
              >
                {resendSuccess ? 'Email Sent!' : isLoading ? 'Sending...' : 'Resend Email'}
              </button>
              <p className="help-text-mobile">
                Can't find the email? Check your spam folder or click above to resend.
              </p>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
  );
}