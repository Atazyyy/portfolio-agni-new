import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, BookOpen } from 'lucide-react';
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
        <div className="hero-gradient" />
        <div className="hero-gradient-2" />

        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <span className="status-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Agni Miftah
              <br />
              <span className="text-gradient">Fauzi</span>
            </h1>

            <p className="hero-role text-gradient">
              Electrical Engineering & Software Developer
            </p>

            <p className="hero-tagline">
              Building modern applications with Flutter, FastAPI, and AI.
              Passionate about creating solutions that merge software expertise with technical knowledge.
            </p>

            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* About Preview */}
      <Section id="about-preview">
        <div className="about-preview">
          <motion.div
            className="about-avatar"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>👨‍💻</span>
          </motion.div>

          <motion.div
            className="about-preview-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Me</span>
            <h3>Electrical Engineering graduate passionate about software development</h3>
            <p>
              Fresh graduate with a 3.62/4.00 GPA from UIN Sunan Gunung Djati Bandung.
              Strong foundation in software development with hands-on experience in mobile development (Flutter),
              backend APIs (FastAPI), and AI integration (YOLOv8, OCR).
            </p>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <span className="icon-box">🎓</span>
                <span>Electrical Engineering, GPA 3.62/4.00</span>
              </div>
              <div className="about-highlight-item">
                <span className="icon-box">📱</span>
                <span>Flutter & FastAPI Developer</span>
              </div>
              <div className="about-highlight-item">
                <span className="icon-box">🤖</span>
                <span>AI & Machine Learning Enthusiast</span>
              </div>
            </div>

            <Link to="/about" className="btn-ghost">
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
          subtitle="A selection of projects showcasing my skills in mobile development, AI, and IoT."
        />

        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
          <GlassCard className="skill-preview-card">
            <span className="skill-icon">📱</span>
            <h3>Mobile Development</h3>
            <p>Flutter, Dart, State Management, API Integration, CRUD</p>
          </GlassCard>

          <GlassCard className="skill-preview-card">
            <span className="skill-icon">⚙️</span>
            <h3>Backend Development</h3>
            <p>FastAPI, REST API, SQLite, Python, Flask</p>
          </GlassCard>

          <GlassCard className="skill-preview-card">
            <span className="skill-icon">🤖</span>
            <h3>AI & Machine Learning</h3>
            <p>YOLOv8, EasyOCR, RNN, Prompt Engineering, Claude API</p>
          </GlassCard>

          <GlassCard className="skill-preview-card">
            <span className="skill-icon">🎨</span>
            <h3>Frontend & Web</h3>
            <p>React, TypeScript, Tailwind CSS, Framer Motion</p>
          </GlassCard>
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
          <GlassCard className="feature-card" hover={false}>
            <div className="feature-icon">
              <Zap size={28} />
            </div>
            <h3>Quick Learner</h3>
            <p>Able to rapidly adapt to new technologies and frameworks through self-learning and hands-on practice.</p>
          </GlassCard>

          <GlassCard className="feature-card" hover={false}>
            <div className="feature-icon">
              <Code size={28} />
            </div>
            <h3>Problem Solver</h3>
            <p>Systematic approach to identifying and resolving technical issues efficiently.</p>
          </GlassCard>

          <GlassCard className="feature-card" hover={false}>
            <div className="feature-icon">
              <Sparkles size={28} />
            </div>
            <h3>Detail Oriented</h3>
            <p>Meticulous attention to accuracy and quality in all work produced.</p>
          </GlassCard>

          <GlassCard className="feature-card" hover={false}>
            <div className="feature-icon">
              <BookOpen size={28} />
            </div>
            <h3>Documentation</h3>
            <p>Strong documentation habits to ensure maintainability and knowledge transfer.</p>
          </GlassCard>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section id="contact-cta" variant="alt">
        <div className="contact-cta">
          <span className="section-label">Get In Touch</span>
          <h2>Interested in working together?</h2>
          <p>
            I'm open to entry-level roles in Backend/Frontend Development, Mobile Application,
            Quality Assurance, or IT Support.
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Contact Me
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
