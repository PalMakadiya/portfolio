import React from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCtaClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.introBadge}>
            <span className={styles.pulse}></span>
            Available for new opportunities
          </div>

          <h1 className={styles.title}>
            Hi, I am <span className={styles.gradientText}>Pal Makadiya</span>
          </h1>
          
          <h2 className={styles.subtitle}>
            Full Stack Web Developer
          </h2>

          <p className={styles.description}>
            Enthusiastic Full Stack Web Developer skilled in building responsive, efficient, and production-ready web applications. Experienced in developing scalable backend architectures, RESTful APIs, and optimized database management with clean, scalable code.
          </p>

          <div className={styles.ctaGroup}>
            <button onClick={() => handleCtaClick('projects')} className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => handleCtaClick('contact')} className="btn btn-secondary">
              Get In Touch <Mail size={18} />
            </button>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/PalMakadiya/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/palmakadiya-421331340" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:palmakadiya2005@gmail.com" className={styles.socialIcon} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageWrapper}>
            <img src="/portfolio_image.jpeg" alt="Pal Makadiya" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
