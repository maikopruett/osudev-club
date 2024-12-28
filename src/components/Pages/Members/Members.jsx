import React, { useEffect, useState } from 'react';
import './Members.css';

export default function Members() {
  const [activeUsers, setActiveUsers] = useState(0);

  // Simulate fetching the active user count from the Discord server (this is just an example)
  useEffect(() => {
    const fetchActiveUsers = async () => {
      // You can replace this with a real API call to get the number of active users
      setActiveUsers(123); // Example number of active users
    };

    fetchActiveUsers();
  }, []);

  return (
    <div className="mainpage-container">
      {/* Animated background elements */}
      <div className="mainpage-background">
        <div className="mainpage-circle mainpage-circle1"></div>
        <div className="mainpage-circle mainpage-circle2"></div>
        <div className="mainpage-circle mainpage-circle3"></div>
      </div>

      {/* Content container */}
      <div className="mainpage-content">
        {/* Header section */}
        <div className="main-header">
          <h1 className="mainpage-title">Members Component Coming Soon!</h1>
        </div>

        {/* Mission statement card */}
        <div className="mainpage-card mainpage-mission-card">
          <h2 className="mainpage-card-title">About the Members Section</h2>
          <p className="mainpage-mission-text">
            The members section will allow you to view all members in a scrollable menu. 
            You’ll be able to see the number of active users currently on the Discord server in real time.
          </p>
        </div>

        {/* Features grid */}
        <div className="mainpage-features">
          <div className="mainpage-card mainpage-feature-card">
            <div className="mainpage-feature-icon">👥</div>
            <h3 className="mainpage-feature-title">Scrollable Member List</h3>
            <p className="mainpage-feature-text">
              View a scrollable list of all members, with quick access to their profiles.
            </p>
          </div>

          <div className="mainpage-card mainpage-feature-card">
            <div className="mainpage-feature-icon">📊</div>
            <h3 className="mainpage-feature-title">Active Users</h3>
            <p className="mainpage-feature-text">
              See how many members are currently active on the Discord server, updated in real time.
            </p>
          </div>

          <div className="mainpage-card mainpage-feature-card">
            <div className="mainpage-feature-icon">🔒</div>
            <h3 className="mainpage-feature-title">Privacy Settings</h3>
            <p className="mainpage-feature-text">
              Customize your privacy settings to control who can view your profile and activities.
            </p>
          </div>

          <div className="mainpage-card mainpage-feature-card">
            <div className="mainpage-feature-icon">💬</div>
            <h3 className="mainpage-feature-title">Chat Integration</h3>
            <p className="mainpage-feature-text">
              Connect with other members directly through integrated chat features.
            </p>
          </div>
        </div>

        {/* Active users card */}
        <div className="mainpage-card">
          <h3 className="mainpage-card-title">Current Active Users</h3>
          <p className="mainpage-mission-text">There are currently {activeUsers} users active on the Discord server.</p>
        </div>
      </div>
    </div>
  );
}
