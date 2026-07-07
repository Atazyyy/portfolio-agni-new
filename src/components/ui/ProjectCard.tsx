import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './Card';
import { TagsContainer } from './Tag';

interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const statusVariant =
    project.status === 'completed'
      ? 'success'
      : project.status === 'in-progress'
      ? 'warning'
      : 'default';

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card-link ${featured ? 'featured' : ''}`.trim()}
    >
      <GlassCard className="project-card">
        {/* Project Icon/Image */}
        <div
          className="project-card-image"
          style={{ background: project.gradient }}
        >
          <span className="project-card-icon">{project.icon}</span>
        </div>

        {/* Project Content */}
        <div className="project-card-content">
          <div className="project-card-header">
            <h3 className="project-card-title">{project.title}</h3>
            <span className={`tag tag-${statusVariant}`}>
              {project.status === 'completed'
                ? '✅'
                : project.status === 'in-progress'
                ? '🔄'
                : '📋'}{' '}
              {project.status.replace('-', ' ')}
            </span>
          </div>
          <p className="project-card-subtitle">{project.subtitle}</p>
          <TagsContainer tags={project.tags} />
        </div>

        {/* Hover Arrow */}
        <div className="project-card-arrow">
          <ArrowRight size={20} />
        </div>
      </GlassCard>
    </Link>
  );
}
