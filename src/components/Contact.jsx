import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import contactBg from '../assets/contact-bg.jpg';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="contact-bg-wrapper">
            <img src={contactBg} alt="Anime sunset city" className="contact-bg-img" />
            <div className="contact-overlay" />
          </div>

          <div className="contact-inner">
            <div className="contact-left">
              <h2 className="contact-heading">
                Let's Build
                <br />
                Something Great
              </h2>
              <p className="contact-subtext">
                Have a project in mind or just want to connect? I'd love to hear from you.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <input
                    type="text"
                    name="name"
                    className="contact-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    id="contact-name"
                  />
                  <input
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    id="contact-email"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  className="contact-input"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  id="contact-subject"
                />
                <textarea
                  name="message"
                  className="contact-textarea"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="contact-message"
                  rows="3"
                />
                <button type="submit" className="contact-btn" id="contact-submit">
                  {submitted ? 'Message Sent!' : 'Get In Touch'}
                  <HiPaperAirplane style={{ transform: 'rotate(90deg)' }} />
                </button>
              </form>
            </div>

            <div className="contact-footer">
              <p className="contact-copyright">
                © 2026 {personalInfo.name}. All rights reserved.
              </p>
              <div className="contact-socials">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="contact-social-link"
                >
                  <FiGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="contact-social-link"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="contact-social-link"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
