import React from 'react';
import styles from './About.module.css';
import { GroupedSkills } from '../types';
import { Server, Database, Hammer, Cpu } from 'lucide-react';
import CountUp from './ui/CountUp';

interface AboutProps {
  skills: GroupedSkills;
  loading: boolean;
}

const About: React.FC<AboutProps> = ({ skills, loading }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Cpu className={styles.categoryIcon} size={20} />;
      case 'backend':
        return <Server className={styles.categoryIcon} size={20} />;
      case 'database':
        return <Database className={styles.categoryIcon} size={20} />;
      default:
        return <Hammer className={styles.categoryIcon} size={20} />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.grid}>
          {/* Bio block */}
          <div className={styles.bioContainer}>
            <p className={styles.bioText}>
              I am a dedicated software developer passionate about building digital products that combine beautiful, interactive design with efficient backend architectures. Over the past few years, I have specialized in React-based frameworks and Node.js microservices.
            </p>
            <p className={styles.bioText}>
              My development philosophy focuses on writing clean, self-documenting code, enforcing structural database schemas, and maintaining high visual polish. I look to build things that are fast, accessible, and robust.
            </p>
            <div className={styles.highlights}>
              <div className={`${styles.highlightCard} glass-panel`}>
                <span className={styles.highlightNum}>
                  <CountUp end={3} suffix="+" />
                </span>
                <span className={styles.highlightLabel}>Years Experience</span>
              </div>
              <div className={`${styles.highlightCard} glass-panel`}>
                <span className={styles.highlightNum}>
                  <CountUp end={15} suffix="+" />
                </span>
                <span className={styles.highlightLabel}>Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Skills block */}
          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>Technical Expertise</h3>

            {loading ? (
              <div className={styles.skeletonContainer}>
                {[1, 2, 3].map((n) => (
                  <div key={n} className={styles.skeletonBlock}>
                    <div className={styles.skeletonHeader}></div>
                    <div className={styles.skeletonList}>
                      <div className={styles.skeletonTag}></div>
                      <div className={styles.skeletonTag}></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : Object.keys(skills).length === 0 ? (
              <p>No skills data loaded.</p>
            ) : (
              <div className={styles.skillsGrid}>
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className={`${styles.skillCategoryCard} glass-panel`}>
                    <div className={styles.categoryHeader}>
                      {getCategoryIcon(category)}
                      <h4>{category}</h4>
                    </div>
                    <div className={styles.skillList}>
                      {skillList.map((skill) => (
                        <div key={skill.id} className={styles.skillItem}>
                          <div className={styles.skillMeta}>
                            <span className={styles.skillName}>{skill.name}</span>
                            <span className={styles.skillPercent}>{skill.proficiency}%</span>
                          </div>
                          <div className={styles.progressBarBg}>
                            <div 
                              className={styles.progressBarFill} 
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
