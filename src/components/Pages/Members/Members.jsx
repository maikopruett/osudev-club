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
    <div className="memberspage-container">
      {/* Animated background elements */}
      <div className="memberspage-background">
        <div className="memberspage-circle memberspage-circle1"></div>
        <div className="memberspage-circle memberspage-circle2"></div>
        <div className="memberspage-circle memberspage-circle3"></div>
      </div>

      {/* Content container */}
      <div className="memberspage-content">
        {/* Header section */}
        <div className="main-header">
          <h1 className="memberspage-title">Members Page Coming Soon!</h1>
        </div>

        {/* Mission statement card */}
        <div className="memberspage-card memberspage-mission-card">
          <h2 className="memberspage-card-title">About the Members Section</h2>
          <p className="memberspage-mission-text">
            The members section will allow you to view all members in a scrollable menu. 
            You’ll be able to see the number of active users currently on the Discord server in real time.
          </p>
        </div>

        {/* Features grid */}
        <div className="memberspage-features">
          <div className="memberspage-card memberspage-feature-card">
            <div className="memberspage-feature-icon">👥</div>
            <h3 className="memberspage-feature-title">Scrollable Member List</h3>
            <p className="memberspage-feature-text">
              View a scrollable list of all members, with quick access to their profiles.
            </p>
          </div>

          <div className="memberspage-card memberspage-feature-card">
            <div className="memberspage-feature-icon">📊</div>
            <h3 className="memberspage-feature-title">Active Users</h3>
            <p className="memberspage-feature-text">
              See how many members are currently active on the Discord server, updated in real time.
            </p>
          </div>

          <div className="memberspage-card memberspage-feature-card">
            <div className="memberspage-feature-icon">🔒</div>
            <h3 className="memberspage-feature-title">Privacy Settings</h3>
            <p className="memberspage-feature-text">
              Customize your privacy settings to control who can view your profile and activities.
            </p>
          </div>

          <div className="memberspage-card memberspage-feature-card">
            <div className="memberspage-feature-icon">💬</div>
            <h3 className="memberspage-feature-title">Chat Integration</h3>
            <p className="memberspage-feature-text">
              Connect with other members directly through integrated chat features.
            </p>
          </div>
        </div>

        {/* Active users card */}
        <div className="memberspage-card">
          <h3 className="memberspage-card-title">Current Active Users</h3>
          <p className="memberspage-mission-text">There are currently {activeUsers} users active on the Discord server.</p>
        </div>
      </div>
    </div>
  );
}
