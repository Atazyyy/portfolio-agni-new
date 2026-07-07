import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/ui/Section';
import { GlassCard } from '../components/ui/Card';

const skills = [
  {
    category: 'Mobile Development',
    icon: '📱',
    items: ['Flutter', 'Dart', 'State Management', 'API Integration', 'CRUD'],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    items: ['FastAPI', 'Flask', 'REST API', 'Python', 'SQLite'],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    items: ['Prompt Engineering', 'Claude API', 'YOLOv8', 'EasyOCR', 'RNN'],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'],
  },
  {
    category: 'Technical Support',
    icon: '🔧',
    items: ['Hardware Troubleshooting', 'OS Installation', 'System Optimization', 'Drone Maintenance'],
  },
  {
    category: 'Programming',
    icon: '💻',
    items: ['Python', 'Dart', 'C++', 'JavaScript', 'Arduino'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="section about-hero">
        <div className="container">
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-avatar">
              <span>👨‍💻</span>
            </div>

            <div className="about-bio">
              <span className="section-label">About Me</span>
              <h1>Agni Miftah Fauzi</h1>
              <p className="role">Electrical Engineering & Software Developer</p>
              <p className="bio-text">
                Electrical Engineering fresh graduate (GPA 3.62/4.00) at Universitas Islam Negeri Sunan Gunung Djati Bandung
                with strong foundation in software development and system integration. Experienced in building mobile applications
                using Flutter and developing RESTful APIs with FastAPI, including AI-based receipt recognition using YOLOv8 and OCR.
              </p>
              <p className="bio-text">
                Detail-oriented problem solver with both software and technical support experience, seeking entry-level roles in
                Backend/Frontend Development, Mobile Application, Quality Assurance, or IT Support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Story */}
      <Section variant="alt">
        <SectionHeader
          label="My Journey"
          title="Background"
        />
        <motion.div
          className="about-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            As an Electrical Engineering student at UIN Sunan Gunung Djati Bandung, I developed a strong foundation in
            control systems, automation, and programming. My academic journey focused on combining hardware knowledge with
            software skills to create integrated solutions.
          </p>
          <p>
            During my studies, I discovered my passion for software development, particularly in mobile applications and AI.
            I pursued self-learning in Flutter, FastAPI, and machine learning, completing several projects that demonstrate
            my ability to apply technical concepts to real-world problems.
          </p>
          <p>
            Beyond academics, I gained practical experience through internships at ITB's Control and Computer Systems Lab,
            worked as a drone technician, and provided freelance technical support. These experiences sharpened my
            problem-solving abilities and taught me the value of systematic troubleshooting.
          </p>
        </motion.div>
      </Section>

      {/* Skills */}
      <Section>
        <SectionHeader
          label="Skills"
          title="Technologies & Tools"
          subtitle="The tools and technologies I work with to build digital solutions."
        />

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={itemVariants}>
              <GlassCard className="skill-category" hover={false}>
                <h3>
                  <span className="cat-icon">{skill.icon}</span>
                  {skill.category}
                </h3>
                <ul className="skill-list">
                  {skill.items.map((item) => (
                    <li key={item} className="skill-item">
                      <span className="skill-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Soft Skills */}
      <Section variant="alt">
        <SectionHeader label="Soft Skills" title="Personal Attributes" />
        <motion.div
          className="soft-skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard className="soft-skill-card" hover={false}>
            <span className="soft-skill-icon">🎯</span>
            <h3>Problem Solving</h3>
            <p>Systematic approach to identifying and resolving technical issues efficiently.</p>
          </GlassCard>
          <GlassCard className="soft-skill-card" hover={false}>
            <span className="soft-skill-icon">🔍</span>
            <h3>Detail Oriented</h3>
            <p>Meticulous attention to accuracy and quality in all work produced.</p>
          </GlassCard>
          <GlassCard className="soft-skill-card" hover={false}>
            <span className="soft-skill-icon">📊</span>
            <h3>Analytical Thinking</h3>
            <p>Strong analytical abilities to break down complex problems into manageable components.</p>
          </GlassCard>
        </motion.div>
      </Section>

      {/* Languages */}
      <Section>
        <SectionHeader label="Languages" title="Language Proficiency" />
        <motion.div
          className="languages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard className="language-card" hover={false}>
            <h3>🇮🇩 Indonesian</h3>
            <p className="language-level">Native</p>
          </GlassCard>
          <GlassCard className="language-card" hover={false}>
            <h3>🇬🇧 English</h3>
            <p className="language-level">Intermediate</p>
          </GlassCard>
        </motion.div>
      </Section>
    </div>
  );
}
