import React from 'react';
import './Skills.css';

const SkillBar = ({ skill }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div
        className="skill-progress"
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuenow={skill.level}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="skill-progress-fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <section className="skills" aria-labelledby="skills-heading">
      <div className="section-header">
        <svg className="section-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
        <h2 id="skills-heading">Skills</h2>
      </div>

      <div className="skills-content">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.technical.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="ai-tools">
          <h3>AI Development Tools</h3>
          <div className="skills-grid">
            {skills.aiTools.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skills-list">
            {skills.soft.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
