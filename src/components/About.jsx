import { motion } from 'framer-motion';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import aboutCharacter from '../assets/about-character.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="about-left">
            <h2 className="about-heading">
              Turning Ideas
              <br />
              Into Real-World
              <br />
              Applications
            </h2>

            {personalInfo.bio.map((paragraph, i) => (
              <p className="about-bio" key={i}>
                {paragraph}
              </p>
            ))}

            <div className="about-info-list">
              <div className="about-info-item">
                <HiLocationMarker className="about-info-icon" />
                <span className="about-info-label">Location</span>
                <span className="about-info-value">{personalInfo.location}</span>
              </div>
              <div className="about-info-item">
                <HiMail className="about-info-icon" />
                <span className="about-info-label">Email</span>
                <span className="about-info-value">
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
              </div>
              <div className="about-info-item">
                <FiGithub className="about-info-icon" />
                <span className="about-info-label">GitHub</span>
                <span className="about-info-value">
                  <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                    {personalInfo.github}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <img
              src={aboutCharacter}
              alt="Wilster Dela Cruz"
              className="about-character-img"
            />
            <div className="about-image-overlay" />
            <div className="about-japanese" aria-hidden="true">
              より良い未来を作る
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
