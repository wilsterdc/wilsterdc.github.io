import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="footer-socials">
          <a
            className="footer-social-link"
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            className="footer-social-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            className="footer-social-link"
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
