import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FOUNDATIONS = [
  { highlight: '4+', label: 'YEARS EXPERIENCE', detail: 'Production Python backend engineering' },
  { label: 'BACKEND ENGINEERING', detail: 'Django, DRF & FastAPI service design' },
  { label: 'REST APIs', detail: 'Clean API contracts, authentication & rate limiting' },
  { label: 'SCALABLE SYSTEMS', detail: 'Normalized schemas & targeted database indexing' },
  { label: 'CLOUD & DISTRIBUTED', detail: 'Celery task queues, Redis caching & Docker' },
  { label: 'SYSTEM DESIGN', detail: 'Decoupled architecture & transactional integrity' },
];

const Identity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="identity"
      ref={ref}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #060608 0%, #08060a 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      }}
    >
      {/* Background ambient radial glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(239,68,68,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="scene-label">SCENE 02 — THE IDENTITY</div>

        {/* Massive Cinematic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4.5rem', maxWidth: '1050px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
            marginBottom: '1.75rem',
          }}>
            I BUILD THE SYSTEMS<br />
            <span style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #f97316 60%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              BEHIND THE EXPERIENCE.
            </span>
          </h2>

          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            lineHeight: 1.7,
            maxWidth: '750px',
          }}>
            While interfaces present the surface, my focus is on the foundations —
            designing relational schemas, REST APIs, asynchronous task workers,
            and cloud services that handle enterprise workflows reliably and predictably.
          </p>
        </motion.div>

        {/* Verified Engineering Foundations Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {FOUNDATIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(220, 38, 38, 0.15)',
                borderRadius: '3px',
                padding: '1.75rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.35)';
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.15)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, #ef4444, transparent)',
              }} />

              {item.highlight ? (
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 4.5vw, 4rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>
                  {item.highlight}
                </div>
              ) : (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                  ◈
                </div>
              )}

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#f3f4f6',
                letterSpacing: '0.12em',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}>
                {item.label}
              </div>

              <div style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.6 }}>
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identity;
