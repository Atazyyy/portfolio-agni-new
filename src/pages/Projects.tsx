import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

type StatusFilter = 'all' | 'completed' | 'in-progress';

export function Projects() {
  const [filter, setFilter] = useState<StatusFilter>('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <div className="projects-page">
      <section className="section projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Portfolio</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              All Projects
            </h1>
            <p className="section-subtitle">
              A collection of projects showcasing my skills in mobile development, AI/ML, IoT, and electronics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="project-filter">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({projects.length})
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({projects.filter((p) => p.status === 'completed').length})
            </button>
            <button
              className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
              onClick={() => setFilter('in-progress')}
            >
              In Progress ({projects.filter((p) => p.status === 'in-progress').length})
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>No projects found with this filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
