import React from 'react';
import PropTypes from 'prop-types';
import './Experience.css';

const ExperienceItem = ({ job }) => {
  return (
    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3 className="company">{job.company}</h3>
          <h4 className="position">{job.position}</h4>
        </div>
        <div className="meta">
          <span className="period">{job.period}</span>
          <span className="location">{job.location}</span>
        </div>
      </div>

      <ul className="achievements">
        {job.achievements.map((achievement) => (
          <li key={achievement.substring(0, 50)}>{achievement}</li>
        ))}
      </ul>
    </article>
  );
};

const Experience = ({ experience }) => {
  return (
    <section className="experience" aria-labelledby="experience-heading">
      <div className="section-header">
        <svg className="section-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <h2 id="experience-heading">Professional Experience</h2>
      </div>

      <div className="experience-list">
        {experience.map((job) => (
          <ExperienceItem key={`${job.company}-${job.period}`} job={job} />
        ))}
      </div>
    </section>
  );
};

const jobPropType = PropTypes.shape({
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
});

ExperienceItem.propTypes = {
  job: jobPropType.isRequired,
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(jobPropType).isRequired,
};

export default Experience;
