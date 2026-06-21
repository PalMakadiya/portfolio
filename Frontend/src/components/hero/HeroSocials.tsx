import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const HeroSocials: React.FC = () => {
  return (
    <div className={styles.socials}>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href="mailto:pal@example.com" className={styles.socialIcon} aria-label="Email">
        <Mail size={20} />
      </a>
    </div>
  );
};

export default HeroSocials;
