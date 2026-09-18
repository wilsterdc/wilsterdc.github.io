import { motion } from 'framer-motion';
import {
  HiServer,
  HiDatabase,
  HiShoppingBag,
  HiTerminal,
} from 'react-icons/hi';
import { RiReactjsLine } from 'react-icons/ri';
import { skills } from '../data/content';
import '../styles/Skills.css';

const iconMap = {
  server: HiServer,
  layout: RiReactjsLine,
  database: HiDatabase,
  cart: HiShoppingBag,
  code: HiTerminal,
};

export default function Skills() {
  const topSkills = skills.slice(0, 3);
  const bottomSkills = skills.slice(3);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="section-heading">Technologies I Work With</h2>
        </motion.div>

        <div className="skills-grid-top">
          {topSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || HiTerminal;
            return (
              <motion.div
                className="skill-category"
                key={skill.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="skill-category-header">
                  <Icon className="skill-category-icon" />
                  <h3 className="skill-category-title">{skill.category}</h3>
                </div>
                <ul className="skill-list">
                  {skill.items.map((item) => (
                    <li className="skill-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="skills-grid-bottom">
          {bottomSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || HiTerminal;
            return (
              <motion.div
                className="skill-category"
                key={skill.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="skill-category-header">
                  <Icon className="skill-category-icon" />
                  <h3 className="skill-category-title">{skill.category}</h3>
                </div>
                <ul className="skill-list">
                  {skill.items.map((item) => (
                    <li className="skill-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
