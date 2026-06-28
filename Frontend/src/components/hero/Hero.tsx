import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Download } from 'lucide-react';
import HeroSocials from './HeroSocials';
import HeroStats from './HeroStats';

const Hero: React.FC = () => {
  const words = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'Problem Solver'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

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
        <div className={styles.introBadge}>
          <span className={styles.pulse}></span>
          Available for new opportunities
        </div>

        <h1 className={styles.title}>
          Hi, I am <span className={styles.gradientText}>Pal Makadiya</span>
        </h1>
        
        <h2 className={styles.subtitle}>
          I build{' '}
          <span className={styles.typingField}>
            {words[index].substring(0, subIndex)}
            <span className={`${styles.cursor} ${blink ? styles.visible : ''}`}>|</span>
          </span>
        </h2>

        <p className={styles.description}>
          A Full Stack Developer specializing in crafting robust, high-performance web applications. I design responsive frontend architectures and clean relational APIs with strict database integration.
        </p>

        <div className={styles.ctaGroup} style={{ marginBottom: '2rem' }}>
          <button onClick={() => handleCtaClick('projects')} className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </button>
          <a 
            href="/Pal_Makadiya_Resume.pdf" 
            download="Pal_Makadiya_Resume.pdf" 
            className="btn btn-secondary"
          >
            Download Resume <Download size={18} />
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <HeroSocials />
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
