import React, { useRef, useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { Project } from '../types';
import { Folder } from 'lucide-react';

interface ProjectRowProps {
  project: Project;
  formattedIndex: string;
  indexColor: string;
  indexGlow: string;
  tagBg: string;
  tagBorder: string;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  formattedIndex,
  indexColor,
  indexGlow,
  tagBg,
  tagBorder
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article 
      ref={rowRef}
      className={`${styles.projectRow} glass-panel ${isVisible ? styles.visible : ''}`}
      style={{ 
        '--hover-color': indexColor,
        '--hover-glow': indexGlow
      } as React.CSSProperties}
    >
      <div className={styles.projectLeft}>
        <div className={styles.indexIconColumn}>
          <div className={styles.folderIconContainer}>
            <span className={styles.projectEmoji}>
              {project.title.toLowerCase().includes('car management') ? '🚗' : 
               project.title.toLowerCase().includes('company') ? '🏢' : '🍽️'}
            </span>
          </div>
          <span className={styles.projectIndex} style={{ color: indexColor }}>
            {formattedIndex}
          </span>
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectHeader}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
          </div>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.tagsContainer}>
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className={styles.tag}
                style={{
                  '--tag-color': indexColor,
                  '--tag-bg': tagBg,
                  '--tag-border': tagBorder
                } as React.CSSProperties}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, loading }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">My <span className="pink-text">Projects</span></h2>
          <p className="section-description">
            Explore some of my recent full stack developments, web services, and interactive projects.
          </p>
        </div>

        {/* Showcase list container */}
        {loading ? (
          <div className={styles.list}>
            {[1, 2].map((n) => (
              <div key={n} className={`${styles.skeletonRow} glass-panel`}>
                <div className={styles.skeletonLeft}>
                  <div className={styles.skeletonIcon}></div>
                  <div className={styles.skeletonTextGroup}>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonText}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className={styles.emptyState}>
            <Folder size={48} className={styles.emptyIcon} />
            <p>No projects found.</p>
          </div>
        ) : (
          <div className={styles.list}>
            {projects.map((project, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              const indexColor = index === 0 ? 'hsl(var(--accent-primary))' : index === 1 ? 'hsl(var(--accent-secondary))' : 'hsl(190 90% 50%)';
              const indexGlow = index === 0 ? 'hsla(var(--accent-primary) / 0.15)' : index === 1 ? 'hsla(var(--accent-secondary) / 0.15)' : 'hsla(190 90% 50% / 0.15)';
              const tagBg = index === 0 ? 'hsla(var(--accent-primary) / 0.08)' : index === 1 ? 'hsla(var(--accent-secondary) / 0.08)' : 'hsla(190 90% 50% / 0.08)';
              const tagBorder = index === 0 ? 'hsla(var(--accent-primary) / 0.25)' : index === 1 ? 'hsla(var(--accent-secondary) / 0.25)' : 'hsla(190 90% 50% / 0.25)';
              
              return (
                <ProjectRow
                  key={project.id}
                  project={project}
                  formattedIndex={formattedIndex}
                  indexColor={indexColor}
                  indexGlow={indexGlow}
                  tagBg={tagBg}
                  tagBorder={tagBorder}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
