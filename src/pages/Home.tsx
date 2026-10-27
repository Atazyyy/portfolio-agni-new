import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, BookOpen, Github, ExternalLink } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { GlassCard } from '../components/ui/Card';
import { ProjectCard } from '../components/ui/ProjectCard';
import { getFeaturedProjects } from '../data/projects';

export function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="status-dot" />
              <span>Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="name-line">Agni Miftah</span>
              <span className="name-line text-gradient">Fauzi</span>
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              AI Specialist & Software Developer
            </motion.p>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Building intelligent applications with Flutter, FastAPI, and AI.
              Merging software expertise with technical knowledge to create impactful solutions.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ButtonLink href="/projects" variant="primary" size="lg">
                View Projects
                <ArrowRight size={20} />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Contact Me
              </ButtonLink>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a href="https://github.com/Atazyyy" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://atapdigital.id" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Portfolio">
                <ExternalLink size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <Section variant="alt">
        <motion.div
          className="stats-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">3.62</span>
            <span className="stat-label">GPA</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Stack精通</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Learning</span>
          </div>
        </motion.div>
      </Section>

      {/* About Preview */}
      <Section id="about-preview">
        <div className="about-preview">
          <motion.div
            className="about-avatar-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-avatar">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="avatar-glow" />
          </motion.div>

          <motion.div
            className="about-preview-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Me</span>
            <h3>Electrical Engineering graduate passionate about AI & Software Development</h3>
            <p>
              Fresh graduate with a 3.62/4.00 GPA from UIN Sunan Gunung Djati Bandung.
              Strong foundation in software development with hands-on experience in mobile development (Flutter),
              backend APIs (FastAPI), and AI integration (YOLOv8, OCR, Claude API).
            </p>

            <div className="about-highlights">
              <motion.div
                className="about-highlight-item"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="icon-box">🎓</span>
                <span>Electrical Engineering, GPA 3.62/4.00</span>
              </motion.div>
              <motion.div
                className="about-highlight-item"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="icon-box">📱</span>
                <span>Flutter & FastAPI Developer</span>
              </motion.div>
              <motion.div
                className="about-highlight-item"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="icon-box">🤖</span>
                <span>AI & Machine Learning Enthusiast</span>
              </motion.div>
            </div>

            <Link to="/about" className="btn-ghost animated-link">
              Read more about me <span className="arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="featured-projects" variant="alt">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects showcasing my skills in mobile development, AI, and automation."
        />

        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-lg">
          <ButtonLink href="/projects" variant="outline">
            View All Projects
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </Section>

      {/* Skills Preview */}
      <Section id="skills-preview">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I work with to build digital solutions."
        />

        <div className="skills-preview-grid">
          {[
            { icon: '📱', title: 'Mobile Development', desc: 'Flutter, Dart, State Management, API Integration' },
            { icon: '⚙️', title: 'Backend Development', desc: 'FastAPI, REST API, Python, Flask, SQLite' },
            { icon: '🤖', title: 'AI & Machine Learning', desc: 'YOLOv8, EasyOCR, Claude API, Prompt Engineering' },
            { icon: '🎨', title: 'Frontend & Web', desc: 'React, TypeScript, Tailwind CSS, Framer Motion' },
          ].map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <GlassCard className="skill-preview-card">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section id="features" variant="alt">
        <SectionHeader
          label="Why Me"
          title="What I Bring"
          subtitle="A unique blend of hardware and software expertise."
        />

        <div className="features-grid">
          {[
            { icon: Zap, title: 'Quick Learner', desc: 'Able to rapidly adapt to new technologies through self-learning and hands-on practice.' },
            { icon: Code, title: 'Problem Solver', desc: 'Systematic approach to identifying and resolving technical issues efficiently.' },
            { icon: Sparkles, title: 'Detail Oriented', desc: 'Meticulous attention to accuracy and quality in all work produced.' },
            { icon: BookOpen, title: 'Documentation', desc: 'Strong documentation habits to ensure maintainability and knowledge transfer.' },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <GlassCard className="feature-card" hover={false}>
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section id="contact-cta" variant="alt">
        <div className="contact-cta">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in working together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm open to entry-level roles in Backend/Frontend Development, Mobile Application,
            Quality Assurance, or IT Support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonLink href="/contact" variant="primary" size="lg">
              Contact Me
              <ArrowRight size={20} />
            </ButtonLink>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
