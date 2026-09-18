import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { personalInfo } from '../data/content';
import heroBg from '../assets/hero-bg.jpg';
import '../styles/Hero.css';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src={heroBg} alt="Anime cityscape at night" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-name">
            Wilster
            <br />
            Dela Cruz
          </h1>
        </motion.div>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <button
            className="hero-btn hero-btn-primary"
            onClick={() => handleScroll('#projects')}
          >
            View My Projects
          </button>
          <button
            className="hero-btn hero-btn-secondary"
            onClick={() => handleScroll('#contact')}
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          onClick={() => handleScroll('#about')}
        >
          <HiArrowDown className="hero-scroll-icon" />
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
}
