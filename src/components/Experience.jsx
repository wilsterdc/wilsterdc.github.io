import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import { experience, education } from '../data/content';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="section-heading">Work & Academic Experience</h2>
        </motion.div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experience.map((item, i) => (
              <motion.div
                className="experience-item"
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="experience-dot" />
                <div className="experience-header">
                  <div className="experience-title-group">
                    <span className="experience-role">{item.role}</span>
                    <span className="experience-separator"> | </span>
                    <span className="experience-company">
                      {item.companyUrl ? (
                        <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </span>
                  </div>
                  <span className="experience-type-badge">{item.type}</span>
                </div>
                {item.date && <p className="experience-date">{item.date}</p>}
                {item.details.length > 0 && (
                  <div className="experience-details">
                    {item.details.map((detail, j) => (
                      <p className="experience-detail" key={j}>
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="education-icon-container">
              <HiAcademicCap className="education-icon" />
            </div>
            <div className="education-info">
              <span className="education-label">Education</span>
              <h3 className="education-school">{education.school}</h3>
              <p className="education-degree">{education.degree}</p>
              <p className="education-date">{education.date}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
