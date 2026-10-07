import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Preserved experience data ─────────────────────────── */
const experiences = [
  {
    id: 0,
    period: 'Nov 2024 — Present',
    year: '2024–25',
    status: 'CURRENT',
    title: 'Software Engineer',
    subtitle: 'Python Backend Developer',
    company: 'Triazine Software Pvt. Ltd.',
    location: 'Noida, India',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.3)',
    projects: [
      {
        name: 'FMCG Secondary Sales & Distributor Management',
        client: 'Godfrey Phillips India',
        points: [
          'Architected 100+ RESTful APIs with Django REST Framework powering Sales Force Automation, Distributor Management, and Secondary Sales reporting',
          'Built async pipeline using Celery + Redis for ERP data synchronization and background report generation',
          'Integrated SAP ERP, AWS S3, and third-party Payment Gateways for seamless enterprise operations',
          'Applied database indexing and query optimization on MySQL, reducing report turnaround time by ~40%',
        ],
      },
      {
        name: 'Modern Trade Management System',
        client: 'Godfrey Phillips India',
        points: [
          'Built scalable backend services for Outlet Mapping, Attendance, Route Planning, Inventory & Order Management',
          'Designed normalized PostgreSQL schemas for complex retail supply chain data',
          'Delivered analytics dashboards with aggregated Sales and Distribution insights via optimized API endpoints',
        ],
      },
      {
        name: 'CUGL Domestic PNG Lifecycle System',
        client: 'CUGL (City Gas Distribution)',
        points: [
          'Developed end-to-end gas connection lifecycle management: Registration → Billing → Field Operations → Customer Service',
          'Integrated SAP and CGD systems for regulatory compliance and billing automation',
          'Built customer-facing APIs and admin dashboards with role-based access control',
        ],
      },
      {
        name: 'AGL File & Bill Tracking System',
        client: 'AGL',
        points: [
          'Engineered a vendor billing workflow engine with multi-level approvals (Finance, HR, HSEQ)',
          'Automated contract mapping and compliance checks using Pandas for data validation',
          'Built vendor portals with real-time file status tracking and audit trails',
        ],
      },
    ],
    techStack: ['Python', 'Django', 'DRF', 'MySQL', 'PostgreSQL', 'Celery', 'Redis', 'AWS S3', 'SAP', 'Docker'],
  },
  {
    id: 1,
    period: 'Jan 2023 — Oct 2024',
    year: '2023–24',
    status: 'PREVIOUS',
    title: 'Full Stack Python Developer',
    subtitle: 'Backend & Automation',
    company: 'Hajela IAS Academy',
    location: 'India',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.3)',
    projects: [
      {
        name: 'Learning Management System (LMS)',
        client: 'Internal',
        points: [
          'Designed and developed 30+ RESTful APIs for a full-featured LMS covering courses, batches, students, and assessments',
          'Implemented JWT-based authentication, role-based permissions, and session management',
          'Built course content delivery system with media file management integrated with storage services',
        ],
      },
      {
        name: 'Test Series Generator — PDF Automation',
        client: 'Internal',
        points: [
          'Automated extraction of structured test content from raw PDFs using Python, reducing manual prep time by 70%',
          'Built a processing pipeline to convert unstructured data → validated question banks → formatted Excel exports',
          'Dockerized the entire application stack and deployed with Nginx + Gunicorn on a Linux VPS',
        ],
      },
    ],
    techStack: ['Python', 'Django', 'DRF', 'SQLite', 'PostgreSQL', 'Docker', 'Nginx', 'Gunicorn', 'Pandas', 'Git'],
  },
];

/* ── Timeline section ──────────────────────────────────── */
const Timeline = () => {
  const [activeExp, setActiveExp]     = useState(0);
  const [activeProj, setActiveProj]   = useState(0);
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const current    = experiences[activeExp];

  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #08060a 0%, #060608 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow top */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, right: '-10%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="scene-label">SCENE 04 — CAREER TIMELINE</div>

        <div ref={titleRef} style={{ marginBottom: '5rem', opacity: 0 }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
            THE CAREER<br />
            <span style={{
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              TIMELINE.
            </span>
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '460px', fontSize: '0.95rem' }}>
            4+ years building scalable backend systems across enterprise domains.
          </p>
        </div>

        {/* Horizontal timeline bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          marginBottom: '4rem',
          position: 'relative',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
        }}>
          {experiences.map((exp, i) => (
            <React.Fragment key={i}>
              <button
                onClick={() => { setActiveExp(i); setActiveProj(0); }}
                style={{
                  flex: '1 0 180px',
                  padding: '1.25rem 1.5rem',
                  background: activeExp === i ? `${exp.color}12` : 'transparent',
                  border: `1px solid ${activeExp === i ? exp.color + '60' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '2px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeExp === i ? `0 0 30px ${exp.glow}` : 'none',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.4rem',
                }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: activeExp === i ? exp.color : '#374151',
                    boxShadow: activeExp === i ? `0 0 8px ${exp.glow}` : 'none',
                    transition: 'all 0.3s ease',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: activeExp === i ? exp.color : '#6b7280',
                  }}>
                    {exp.status}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  letterSpacing: '0.05em',
                  color: activeExp === i ? '#fff' : '#6b7280',
                  transition: 'color 0.3s ease',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}>
                  {exp.year}
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: '#4b5563',
                  letterSpacing: '0.05em',
                }}>
                  {exp.company.split(' ').slice(0, 2).join(' ')}
                </p>
              </button>

              {/* Connector */}
              {i < experiences.length - 1 && (
                <div style={{
                  width: '40px',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(239,68,68,0.4), rgba(249,115,22,0.4))',
                  flexShrink: 0,
                }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'rgba(12,8,6,0.8)',
              border: `1px solid ${current.color}30`,
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: `0 0 60px ${current.glow}`,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            {/* Company header */}
            <div style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              background: `linear-gradient(135deg, ${current.color}08, transparent)`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Accent line top */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${current.color}, transparent)`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      padding: '0.2rem 0.6rem',
                      background: `${current.color}20`,
                      border: `1px solid ${current.color}40`,
                      borderRadius: '2px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.15em',
                      color: current.color,
                    }}>
                      {current.status}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: '#6b7280',
                    }}>
                      {current.period}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}>
                    {current.title}
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{current.subtitle}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: current.color,
                    marginBottom: '0.2rem',
                  }}>
                    {current.company}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>{current.location}</p>
                </div>
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
                {current.techStack.map(t => (
                  <span key={t} style={{
                    padding: '0.2rem 0.6rem',
                    background: `${current.color}10`,
                    border: `1px solid ${current.color}25`,
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#d1d5db',
                    letterSpacing: '0.05em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(200px, 260px) 1fr',
              minHeight: '380px',
            }}
              className="exp-projects-grid"
            >
              {/* Sidebar */}
              <div style={{ borderRight: '1px solid rgba(255,255,255,0.04)', padding: '1.5rem 0' }}>
                {current.projects.map((proj, pi) => (
                  <button
                    key={pi}
                    onClick={() => setActiveProj(pi)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.9rem 1.5rem',
                      background: activeProj === pi ? `${current.color}10` : 'transparent',
                      borderLeft: `2px solid ${activeProj === pi ? current.color : 'transparent'}`,
                      border: 'none',
                      borderLeftWidth: '2px',
                      borderLeftStyle: 'solid',
                      borderLeftColor: activeProj === pi ? current.color : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: current.color,
                      letterSpacing: '0.12em',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}>
                      PROJECT {String(pi + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: activeProj === pi ? '#fff' : '#6b7280',
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease',
                    }}>
                      {proj.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProj}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)' }}
                >
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: current.color,
                    letterSpacing: '0.15em',
                    marginBottom: '0.5rem',
                  }}>
                    CLIENT — {current.projects[activeProj].client.toUpperCase()}
                  </p>
                  <h4 style={{
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    fontWeight: 700,
                    marginBottom: '2rem',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}>
                    {current.projects[activeProj].name}
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {current.projects[activeProj].points.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pi * 0.07 }}
                        style={{
                          display: 'flex',
                          gap: '0.75rem',
                          color: '#9ca3af',
                          lineHeight: 1.7,
                          fontSize: '0.875rem',
                        }}
                      >
                        <span style={{
                          color: current.color,
                          marginTop: '0.35rem',
                          flexShrink: 0,
                          fontSize: '0.6rem',
                        }}>
                          ▸
                        </span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
