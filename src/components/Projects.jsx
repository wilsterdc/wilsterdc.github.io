import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';
import { projects } from '../data/content';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="section-heading">What I've Built</h2>
          <p className="section-subtext">
            Here are some of the projects I've worked on, from real-world business
            systems to e-commerce platforms.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-cover-img"
                />
                <div className="project-cover-overlay" />
                {project.logo && (
                  <div className="project-logo-badge">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className={`project-logo-img ${
                        project.id === 1 ? 'project-logo-circle' : 'project-logo-square'
                      }`}
                    />
                  </div>
                )}
                <a
                  className="project-live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site <HiExternalLink />
                </a>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-date">
                    <FiClock className="project-date-icon" /> {project.dateRange}
                  </span>
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
