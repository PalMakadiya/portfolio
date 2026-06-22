import React from 'react';
import styles from './Projects.module.css';
import { Project } from '../types';
import { Folder } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, loading }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

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
            {projects.map((project) => (
              <article key={project.id} className={`${styles.projectRow} glass-panel`}>
                <div className={styles.projectLeft}>
                  <div className={styles.folderIconContainer}>
                    <Folder className={styles.folderIcon} size={22} />
                  </div>
                  <div className={styles.projectDetails}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      {project.featured && (
                        <span className={styles.featuredBadge}>Featured</span>
                      )}
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.tagsContainer}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
