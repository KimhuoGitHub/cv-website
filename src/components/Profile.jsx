import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ profile }) => {
  return (
    <section className="profile" aria-labelledby="profile-heading">
      <div className="section-header">
        <svg className="section-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <h2 id="profile-heading">Profile</h2>
      </div>

      <div className="profile-content">
        <p className="summary">{profile.summary}</p>

        <div className="highlights">
          <h3>Core Competencies</h3>
          <ul>
            {profile.highlights.map((highlight) => (
              <li key={highlight.substring(0, 50)}>{highlight}</li>
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

Profile.propTypes = {
  profile: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    openTo: PropTypes.string,
  }).isRequired,
};

export default Profile;
