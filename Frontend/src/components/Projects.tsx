import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Project } from '../types';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, loading }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Dynamically compute all tags available in loaded projects
  const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {/* Filter Navigation */}
        <div className={styles.filterNav}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${activeFilter === tag ? styles.active : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        {loading ? (
          <div className={styles.grid}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={`${styles.skeletonCard} glass-panel`}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonTitle}></div>
                  <div className={styles.skeletonText}></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <Folder size={48} className={styles.emptyIcon} />
            <p>No projects match the selected criteria.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <article key={project.id} className={`${styles.projectCard} glass-panel`}>
                {project.imageUrl && (
                  <div className={styles.cardImageContainer}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={styles.cardImage}
                      loading="lazy"
                    />
                    {project.featured && (
                      <span className={styles.featuredBadge}>Featured</span>
                    )}
                  </div>
                )}
                
                <div className={styles.cardContent}>
                  <div className={styles.tagsContainer}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.cardFooter}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionLink}
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionLink}
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
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
