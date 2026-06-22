import React from 'react';
import styles from './AcademicBackground.module.css';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const AcademicBackground: React.FC = () => {
  const educationList = [
    {
      degree: 'Bachelor of Technology (Computer)',
      institution: 'Ganpat University, Mehsana',
      duration: '2022 - 2026',
      grade: '8.3 CGPA',
      icon: <GraduationCap size={24} className={styles.academicIcon} />,
      color: 'hsl(var(--accent-primary))',
      glow: 'hsla(var(--accent-primary) / 0.15)'
    },
    {
      degree: 'High School (HSC)',
      institution: 'Uchhatar Madhyamic Kanya Vidhyalay, Rajkot',
      duration: '2020 - 2022',
      grade: '68%',
      icon: <BookOpen size={24} className={styles.academicIcon} />,
      color: 'hsl(var(--accent-secondary))',
      glow: 'hsla(var(--accent-secondary) / 0.15)'
    }
  ];

  return (
    <section id="academic" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Education</span>
          <h2 className="section-title">Academic <span className="pink-text">Background</span></h2>
          <p className="section-description">
            My academic details, degrees, and qualifications obtained during my learning journey.
          </p>
        </div>
        <div className={styles.grid}>
          {educationList.map((item, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} glass-panel`}
              style={{
                '--card-accent': item.color,
                '--card-glow': item.glow
              } as React.CSSProperties}
            >
              <div className={styles.cardLeft}>
                <div className={styles.iconContainer}>
                  {item.icon}
                </div>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.headerRow}>
                  <h3 className={styles.degreeTitle}>{item.degree}</h3>
                  <span className={styles.gradeBadge}>{item.grade}</span>
                </div>
                <h4 className={styles.institutionName}>{item.institution}</h4>
                <div className={styles.metaRow}>
                  <Calendar size={15} />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicBackground;
