import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="section-header">
        <svg className="section-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <h2 id="projects-heading">Notable Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              {project.period && (
                <span className="project-period">{project.period}</span>
              )}
            </div>

            {project.type && (
              <div className="project-type">{project.type}</div>
            )}

            <p className="project-description">{project.description}</p>

            <div className="project-tech" role="list" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag" role="listitem">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.name} project`}
              >
                View Project →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      period: PropTypes.string,
      type: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default Projects;
