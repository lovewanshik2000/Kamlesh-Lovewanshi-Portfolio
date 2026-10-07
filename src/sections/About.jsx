import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PRINCIPLES = [
  {
    num: '01',
    title: 'ARCHITECTURE FIRST',
    desc: 'Decisions made early define operational survival. Explicit service contracts, clean domain boundaries, and modular schemas prevent technical debt before it begins.',
  },
  {
    num: '02',
    title: 'OPTIMIZE THE BOTTLENECK',
    desc: 'Performance optimization is never generic. Identify the exact constraint — whether query indexing, serialization overhead, cache miss ratios, or blocking I/O — and measure the delta.',
  },
  {
    num: '03',
    title: 'RESILIENCE BY DESIGN',
    desc: 'Failures are inevitable in distributed systems. Non-blocking asynchronous queues, circuit breakers, idempotency, and graceful degradation keep services operational.',
  },
  {
    num: '04',
    title: 'AUTOMATE THE REPETITIVE',
    desc: 'Manual operational tasks are architectural defects. Turning repeated manual processes into deterministic pipelines creates compounding engineering value.',
  },
  {
    num: '05',
    title: 'AI AS A MULTIPLIER',
    desc: 'AI/ML and GenAI are powerful extensions of scalable backend systems. Meaningful AI products depend on solid data pipelines, fast retrieval, and clean API orchestration.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #08060a 0%, #060608 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      }}
    >
      {/* Subtle ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '750px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(220,38,38,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="scene-label">SCENE 09 — THE ENGINEER</div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4.5rem', maxWidth: '850px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}>
            THE ENGINEER<br />
            <span style={{
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              BEHIND THE SYSTEM.
            </span>
          </h2>

          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            I am Kamlesh Lovewanshi — a Software Engineer and Python Backend Developer with 4+ years of hands-on
            experience designing and deploying high-throughput systems, event-driven architectures, and REST APIs.
          </p>

          <p style={{ color: '#6b7280', fontSize: '0.92rem', lineHeight: 1.75 }}>
            Based in Noida, India, my day-to-day focus spans Django REST Framework, FastAPI, Celery background worker pipelines,
            Redis caching, and optimized relational schemas across PostgreSQL and MySQL. While engineering scalable backends remains
            my primary discipline, I actively explore and integrate computer vision (YOLO) and generative AI (RAG, pgvector, LangChain)
            to build intelligent, self-automating business platforms.
          </p>
        </motion.div>

        {/* 4 Core Principles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '3px',
                padding: '2rem 1.5rem',
                position: 'relative',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.35)';
                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#ef4444',
                letterSpacing: '0.15em',
                marginBottom: '0.75rem',
                fontWeight: 700,
              }}>
                PRINCIPLE // {p.num}
              </div>

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
              }}>
                {p.title}
              </h3>

              <p style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
