import React from 'react';
import styles from './About.module.css';
import { GroupedSkills } from '../types';
import { Server, Database, Hammer, Cpu } from 'lucide-react';

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

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react.js':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#61DAFB" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
          </svg>
        );
      case 'node.js':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 2L2 7.8v11.6L12 22l10-5.8V7.8L12 2zm8 14.4l-8 4.6-8-4.6V8.8l8-4.6 8 4.6v7.6z" fill="#339933" />
            <path d="M12 5.5v13l5.5-3.2V8.7L12 5.5z" fill="#66cc33" />
          </svg>
        );
      case 'express.js':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
            <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
          </svg>
        );
      case 'postgresql':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 'prisma orm':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 2L2.5 19.5h19L12 2zm-6.5 15.5L12 6l6.5 11.5h-13z" fill="#5A67D8" />
            <path d="M12 6l5 9H7l5-9z" fill="#4C51BF" />
          </svg>
        );
      case 'javascript':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <text x="12" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="900" fill="#000000" textAnchor="middle">JS</text>
          </svg>
        );
      case 'html & css':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E34F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTechColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react.js':
        return { solid: '#61DAFB', glow: 'rgba(97, 218, 251, 0.08)' };
      case 'node.js':
        return { solid: '#339933', glow: 'rgba(51, 153, 51, 0.08)' };
      case 'express.js':
        return { solid: '#ffffff', glow: 'rgba(255, 255, 255, 0.08)' };
      case 'postgresql':
        return { solid: '#336791', glow: 'rgba(51, 103, 145, 0.08)' };
      case 'prisma orm':
        return { solid: '#5A67D8', glow: 'rgba(90, 103, 216, 0.08)' };
      case 'javascript':
        return { solid: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.08)' };
      case 'html & css':
        return { solid: '#E34F26', glow: 'rgba(227, 79, 38, 0.08)' };
      default:
        return { solid: 'hsl(var(--accent-primary))', glow: 'hsla(var(--accent-primary), 0.08)' };
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

            <div className={styles.techStackSection}>
              <h4 className={styles.techStackTitle}>Core Tech Stack</h4>
              <div className={styles.techStackList}>
                {['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JavaScript', 'HTML & CSS'].map((tech) => {
                  const colors = getTechColor(tech);
                  return (
                    <span 
                      key={tech} 
                      className={styles.techBadge}
                      style={{ 
                        '--tech-color-solid': colors.solid, 
                        '--tech-color-glow': colors.glow 
                      } as React.CSSProperties}
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  );
                })}
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
