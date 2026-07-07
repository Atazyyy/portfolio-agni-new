import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Image, Video, Code } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { GlassCard } from '../components/ui/Card';
import { TagsContainer } from '../components/ui/Tag';
import { ButtonLink } from '../components/ui/Button';
import { getProjectBySlug } from '../data/projects';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const statusLabel =
    project.status === 'completed'
      ? 'Completed'
      : project.status === 'in-progress'
      ? 'In Progress'
      : 'Planned';

  return (
    <div className="project-detail-page">
      {/* Hero */}
      <section className="section project-hero">
        <div className="container">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <motion.div
            className="project-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="project-icon-lg"
              style={{ background: project.gradient }}
            >
              <span>{project.icon}</span>
            </div>

            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>

            <div className="project-tags">
              <TagsContainer tags={project.tags} />
            </div>

            <div className="project-links">
              {project.demoUrl && (
                <ButtonLink href={project.demoUrl} variant="primary" external>
                  <ExternalLink size={18} />
                  Live Demo
                </ButtonLink>
              )}
              {project.githubUrl && (
                <ButtonLink href={project.githubUrl} variant="outline" external>
                  <GitHubIcon />
                  Source Code
                </ButtonLink>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <Section>
          <h2 className="detail-section-title">
            <Image size={24} />
            Gallery
          </h2>
          <div className="project-gallery">
            {project.images.map((img, index) => (
              <GlassCard key={index} className="gallery-item" hover={false}>
                <div className="gallery-placeholder">
                  <Image size={48} />
                  <span>{img}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>
      )}

      {/* Video Demo */}
      {project.videoUrl && (
        <Section variant="alt">
          <h2 className="detail-section-title">
            <Video size={24} />
            Demo Video
          </h2>
          <GlassCard className="video-embed" hover={false}>
            <div className="video-placeholder">
              <Video size={48} />
              <span>Video Demo</span>
              <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Watch on YouTube
              </a>
            </div>
          </GlassCard>
        </Section>
      )}

      {/* Overview */}
      <Section>
        <h2 className="detail-section-title">
          <Code size={24} />
          Overview
        </h2>
        <GlassCard hover={false}>
          <p className="project-description">{project.description}</p>
        </GlassCard>
      </Section>

      {/* Features */}
      <Section variant="alt">
        <h2 className="detail-section-title">
          <span className="emoji-icon">✨</span>
          Features
        </h2>
        <div className="features-list">
          {project.features.map((feature, index) => (
            <GlassCard key={index} className="feature-item" hover={false}>
              <span className="feature-check">✓</span>
              <span>{feature}</span>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Tech Stack / Links */}
      <Section>
        <div className="project-info-grid">
          <GlassCard className="info-card" hover={false}>
            <h3>Project Info</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className={`info-value status-${project.status}`}>
                  {statusLabel}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Period</span>
                <span className="info-value">{project.period}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="info-card" hover={false}>
            <h3>Technologies</h3>
            <TagsContainer tags={project.tags} />
          </GlassCard>
        </div>
      </Section>

      {/* What I Learned */}
      <Section variant="alt">
        <h2 className="detail-section-title">
          <span className="emoji-icon">🎓</span>
          What I Learned
        </h2>
        <div className="learnings-list">
          {project.learnings.map((learning, index) => (
            <GlassCard key={index} className="learning-item" hover={false}>
              <span className="learning-arrow">→</span>
              <span>{learning}</span>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Navigation */}
      <Section>
        <div className="project-navigation">
          <Link to="/projects" className="btn btn-outline">
            <ArrowLeft size={18} />
            Back to All Projects
          </Link>
          {project.githubUrl && (
            <ButtonLink href={project.githubUrl} variant="primary" external>
              View on GitHub
              <ExternalLink size={18} />
            </ButtonLink>
          )}
        </div>
      </Section>
    </div>
  );
}
