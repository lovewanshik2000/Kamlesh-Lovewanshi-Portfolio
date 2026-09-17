import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 0,
    period: "Nov 2024 — Present",
    status: "CURRENT",
    title: "Software Engineer",
    subtitle: "Python Backend Developer",
    company: "Triazine Software Pvt. Ltd.",
    location: "India",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.3)",
    projects: [
      {
        name: "FMCG Secondary Sales & Distributor Management",
        client: "Godfrey Phillips India",
        points: [
          "Architected 100+ RESTful APIs with Django REST Framework powering Sales Force Automation, Distributor Management, and Secondary Sales reporting",
          "Built async pipeline using Celery + Redis for ERP data sync and report generation, improving reporting efficiency by 50%+",
          "Integrated SAP ERP, AWS S3, and third-party Payment Gateways for seamless enterprise operations",
          "Designed advanced query optimization and database indexing strategies on MySQL for high-volume data workloads"
        ]
      },
      {
        name: "Modern Trade Management System",
        client: "Godfrey Phillips India",
        points: [
          "Built scalable backend services for Outlet Mapping, Attendance, Route Planning, Inventory & Order Management",
          "Designed normalized PostgreSQL schemas for complex retail supply chain data",
          "Delivered analytics dashboards with aggregated Sales and Distribution insights via optimized API endpoints"
        ]
      },
      {
        name: "CUGL Domestic PNG Lifecycle System",
        client: "CUGL (City Gas Distribution)",
        points: [
          "Developed end-to-end gas connection lifecycle management: Registration → Billing → Field Operations → Customer Service",
          "Integrated SAP and CGD systems for regulatory compliance and billing automation",
          "Built customer-facing APIs and admin dashboards with role-based access control"
        ]
      },
      {
        name: "AGL File & Bill Tracking System",
        client: "AGL",
        points: [
          "Engineered a vendor billing workflow engine with multi-level approvals (Finance, HR, HSEQ)",
          "Automated contract mapping and compliance checks using Pandas for data validation",
          "Built vendor portals with real-time file status tracking and audit trails"
        ]
      }
    ],
    techStack: ["Python", "Django", "DRF", "MySQL", "PostgreSQL", "Celery", "Redis", "AWS S3", "SAP", "Docker"]
  },
  {
    id: 1,
    period: "Jan 2023 — Oct 2024",
    status: "PREVIOUS",
    title: "Full Stack Python Developer",
    subtitle: "Backend & Automation",
    company: "Hajela IAS Academy",
    location: "India",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
    projects: [
      {
        name: "Learning Management System (LMS)",
        client: "Internal",
        points: [
          "Designed and developed 30+ RESTful APIs for a full-featured LMS covering courses, batches, students, and assessments",
          "Implemented JWT-based authentication, role-based permissions, and session management",
          "Built course content delivery system with media file management integrated with storage services"
        ]
      },
      {
        name: "Test Series Generator — PDF Automation",
        client: "Internal",
        points: [
          "Automated extraction of structured test content from raw PDFs using Python, reducing manual prep time by 70%",
          "Built a processing pipeline to convert unstructured data → validated question banks → formatted Excel exports",
          "Dockerized the entire application stack and deployed with Nginx + Gunicorn on a Linux VPS"
        ]
      }
    ],
    techStack: ["Python", "Django", "DRF", "SQLite", "PostgreSQL", "Docker", "Nginx", "Gunicorn", "Pandas", "Git"]
  }
];

const Timeline = () => {
  const [activeExp, setActiveExp] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const current = experiences[activeExp];

  return (
    <section id="experience" className="section container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
          PROFESSIONAL EXPERIENCE
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
          4+ years building scalable backend systems across enterprise domains.
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {experiences.map((exp, i) => (
          <button
            key={i}
            onClick={() => { setActiveExp(i); setActiveProject(0); }}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: `1px solid ${activeExp === i ? exp.color : 'rgba(255,255,255,0.1)'}`,
              background: activeExp === i ? `${exp.color}20` : 'transparent',
              color: activeExp === i ? exp.color : 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeExp === i ? `0 0 20px ${exp.glow}` : 'none'
            }}
          >
            {i === 0 ? '● CURRENT' : '○ PREVIOUS'} — {exp.company.split(' ')[0].toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeExp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: `1px solid ${current.color}40`,
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: `0 0 40px ${current.glow}`,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {/* Company Header */}
          <div style={{
            padding: '2.5rem 3rem',
            borderBottom: `1px solid rgba(255,255,255,0.06)`,
            background: `linear-gradient(135deg, ${current.color}10, transparent)`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    padding: '0.2rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    background: `${current.color}30`,
                    color: current.color,
                    border: `1px solid ${current.color}50`,
                    letterSpacing: '0.1em'
                  }}>
                    {current.status}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {current.period}
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.25rem' }}>{current.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{current.subtitle}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: current.color }}>{current.company}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{current.location}</p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
              {current.techStack.map((t, i) => (
                <span key={i} style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  background: `${current.color}15`,
                  border: `1px solid ${current.color}30`,
                  color: '#e5e7eb'
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '400px' }}>
            {/* Project Tabs (Left sidebar) */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 0' }}>
              {current.projects.map((proj, pi) => (
                <button
                  key={pi}
                  onClick={() => setActiveProject(pi)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '1rem 1.5rem',
                    background: activeProject === pi ? `${current.color}15` : 'transparent',
                    borderLeft: activeProject === pi ? `3px solid ${current.color}` : '3px solid transparent',
                    border: 'none',
                    borderLeftWidth: '3px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: activeProject === pi ? current.color : 'transparent',
                    color: activeProject === pi ? '#fff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    lineHeight: 1.4,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', color: current.color, fontSize: '0.7rem', display: 'block', marginBottom: '0.25rem' }}>
                    PROJECT {String(pi + 1).padStart(2, '0')}
                  </span>
                  {proj.name}
                </button>
              ))}
            </div>

            {/* Project Detail (Right content) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                style={{ padding: '2.5rem 3rem' }}
              >
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: current.color,
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem'
                }}>
                  CLIENT — {current.projects[activeProject].client.toUpperCase()}
                </p>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.3 }}>
                  {current.projects[activeProject].name}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {current.projects[activeProject].points.map((point, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: pi * 0.08 }}
                      style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem' }}
                    >
                      <span style={{ color: current.color, marginTop: '0.35rem', flexShrink: 0 }}>▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Timeline;
