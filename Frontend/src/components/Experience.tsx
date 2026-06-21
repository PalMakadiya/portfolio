import React from 'react';
import styles from './Experience.module.css';
import { Experience as ExperienceType } from '../types';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
  loading: boolean;
}


const Experience: React.FC<ExperienceProps> = ({ experiences, loading }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Timeline</h2>

        {loading ? (
          <div className={styles.timelineSkeleton}>
            {[1, 2].map((n) => (
              <div key={n} className={styles.skeletonItem}>
                <div className={styles.skeletonDot}></div>
                <div className={styles.skeletonBody}></div>
              </div>
            ))}
          </div>
        ) : experiences.length === 0 ? (
          <p>No experiences found.</p>
        ) : (
          <div className={styles.timeline}>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.timelineItem}>
                {/* Icon marker */}
                <div className={styles.timelineMarker}>
                  <div className={styles.markerCircle}>
                    {exp.category === 'Work' ? (
                      <Briefcase size={16} />
                    ) : (
                      <GraduationCap size={16} />
                    )}
                  </div>
                </div>

                {/* Card contents */}
                <div className={`${styles.timelineContent} glass-panel`}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <h4 className={styles.companyName}>{exp.company}</h4>
                    </div>
                    <span className={`${styles.categoryTag} ${exp.category === 'Work' ? styles.tagWork : styles.tagEdu}`}>
                      {exp.category}
                    </span>
                  </div>

                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </span>
                    {exp.location && (
                      <span className={styles.metaItem}>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </span>
                    )}
                  </div>

                  <ul className={styles.bulletList}>
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
