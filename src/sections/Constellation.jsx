import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: "LANGUAGES & CORE",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.4)",
    items: ["Python", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    label: "BACKEND FRAMEWORKS",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.4)",
    items: ["Django", "Django REST Framework", "FastAPI", "Celery", "Redis"]
  },
  {
    label: "DATABASES",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"]
  },
  {
    label: "DATA & AI/ML",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.4)",
    items: ["Pandas", "NumPy", "Scikit-learn", "Apache Spark", "Databricks", "MLflow", "LLM Fine-tuning", "Vector DBs"]
  },
  {
    label: "CLOUD & DEVOPS",
    color: "#10b981",
    glow: "rgba(16,185,129,0.4)",
    items: ["AWS S3", "AWS EC2", "Docker", "Nginx", "Gunicorn", "CI/CD", "GitHub Actions"]
  },
  {
    label: "TOOLS & INTEGRATIONS",
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.4)",
    items: ["SAP Integration", "Payment Gateway", "REST APIs", "Git", "Postman", "Jira"]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const Constellation = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="stack" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>TECH STACK</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
          Technologies I architect, build, and ship production systems with.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            variants={cardVariants}
            onMouseEnter={() => setHovered(ci)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === ci
                ? `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))`
                : 'rgba(255,255,255,0.02)',
              border: `1px solid ${hovered === ci ? cat.color + '80' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '16px',
              padding: '2rem',
              cursor: 'default',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: hovered === ci ? `0 0 30px ${cat.glow}, inset 0 0 20px ${cat.glow}20` : 'none',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: cat.color,
                boxShadow: `0 0 10px ${cat.color}`
              }} />
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: cat.color,
                fontWeight: 600
              }}>
                {cat.label}
              </h3>
            </div>

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.items.map((tech, ti) => (
                <motion.span
                  key={ti}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    background: `${cat.color}15`,
                    border: `1px solid ${cat.color}40`,
                    color: '#e5e7eb',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Constellation;
