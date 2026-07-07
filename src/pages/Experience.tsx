import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/ui/Section';
import { GlassCard } from '../components/ui/Card';

const timeline = [
  {
    date: '2020 - 2024',
    title: 'Electrical Engineering',
    subtitle: 'UIN Sunan Gunung Djati Bandung',
    description: 'Bachelor degree with GPA 3.62/4.00. Focus on control systems, automation, and embedded systems.',
  },
  {
    date: '2023',
    title: 'Drone Technician',
    subtitle: 'Freelance',
    description: 'Provided drone maintenance and repair services. Troubleshooting hardware and software issues.',
  },
  {
    date: '2022',
    title: 'Control Systems Intern',
    subtitle: 'ITB Control & Computer Systems Lab',
    description: 'Assisted in bioreactor control system development. Learned PLC programming and PID tuning.',
  },
  {
    date: '2021 - 2022',
    title: 'Technical Support',
    subtitle: 'Freelance',
    description: 'Provided hardware/software troubleshooting, OS installation, and system optimization services.',
  },
];

const organizations = [
  {
    date: '2021',
    name: 'Robotika ITB',
    role: 'Member',
    description: 'Participated in robotics competitions. Built line follower and sumo robots.',
  },
  {
    date: '2020',
    name: 'HME (Himpunan Mahasiswa Elektro)',
    role: 'Member',
    description: 'Participated in academic and social activities. Organized technical workshops.',
  },
];

export function Experience() {
  return (
    <div className="experience-page">
      {/* Hero */}
      <section className="section experience-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Background</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              Experience & Education
            </h1>
            <p className="section-subtitle">
              My educational background, work experience, and organizational involvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <Section>
        <SectionHeader label="Timeline" title="Education & Work" />
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <GlassCard className="timeline-card" hover={false}>
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Organizations */}
      <Section variant="alt">
        <SectionHeader label="Organizations" title="Involvement" />
        <div className="organizations-grid">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="org-card" hover={false}>
                <div className="org-header">
                  <h3>{org.name}</h3>
                  <span className="org-role">{org.role}</span>
                </div>
                <p className="org-date">{org.date}</p>
                <p className="org-desc">{org.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionHeader label="Certifications" title="Achievements" />
        <motion.div
          className="certs-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="cert-card" hover={false}>
            <span className="cert-icon">🏆</span>
            <h3>Dean's List</h3>
            <p>Academic Excellence Award</p>
          </GlassCard>
          <GlassCard className="cert-card" hover={false}>
            <span className="cert-icon">🤖</span>
            <h3>Robot Competition</h3>
            <p>Line Follower Robot - 2nd Place</p>
          </GlassCard>
          <GlassCard className="cert-card" hover={false}>
            <span className="cert-icon">📜</span>
            <h3>IEEE Certification</h3>
            <p>Introduction to AI/ML</p>
          </GlassCard>
        </motion.div>
      </Section>
    </div>
  );
}
