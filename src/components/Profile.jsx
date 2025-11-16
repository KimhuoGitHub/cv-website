import React from 'react';
import './Profile.css';

const Profile = ({ profile }) => {
  return (
    <section className="profile">
      <div className="section-header">
        <svg className="section-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <h2>Profile</h2>
      </div>
      
      <div className="profile-content">
        <p className="summary">{profile.summary}</p>
        
        <div className="highlights">
          <h3>Core Competencies</h3>
          <ul>
            {profile.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {profile.openTo && (
          <div className="availability">
            <strong>Open to:</strong> {profile.openTo}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
