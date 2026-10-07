import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const AI_TECHS = [
  { label: 'PyTorch',       group: 'DEEP LEARNING',  color: '#f97316' },
  { label: 'TensorFlow',    group: 'DEEP LEARNING',  color: '#f97316' },
  { label: 'Scikit-learn',  group: 'ML',              color: '#ef4444' },
  { label: 'YOLO',          group: 'COMPUTER VISION', color: '#a78bfa' },
  { label: 'OpenCV',        group: 'COMPUTER VISION', color: '#a78bfa' },
  { label: 'Hugging Face',  group: 'LLM',             color: '#fbbf24' },
  { label: 'LangChain',     group: 'LLM',             color: '#fbbf24' },
  { label: 'RAG',           group: 'LLM',             color: '#fbbf24' },
  { label: 'NumPy',         group: 'DATA',            color: '#34d399' },
  { label: 'Pandas',        group: 'DATA',            color: '#34d399' },
  { label: 'Generative AI', group: 'LLM',             color: '#fbbf24' },
  { label: 'Vector DBs',    group: 'LLM',             color: '#fbbf24' },
];

const STREAMS = [
  { label: 'Machine Learning',    icon: '◈' },
  { label: 'Computer Vision',     icon: '◈' },
  { label: 'Large Language Models', icon: '◈' },
  { label: 'Generative AI',       icon: '◈' },
  { label: 'RAG Pipelines',       icon: '◈' },
];

const AIExploration = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #060608 0%, #08060a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow center */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="scene-label">SCENE 07 — AI + BACKEND</div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem', maxWidth: '850px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}>
            INTELLIGENCE<br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              MEETS ENGINEERING.
            </span>
          </h2>

          {/* Architectural Formula Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.85rem 1.25rem',
            background: 'rgba(167, 139, 250, 0.05)',
            border: '1px solid rgba(167, 139, 250, 0.2)',
            borderRadius: '2px',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
          }}>
            <span style={{ color: '#ef4444' }}>BACKEND</span>
            <span style={{ color: '#6b7280' }}>+</span>
            <span style={{ color: '#10b981' }}>DATA</span>
            <span style={{ color: '#6b7280' }}>+</span>
            <span style={{ color: '#06b6d4' }}>CLOUD</span>
            <span style={{ color: '#6b7280' }}>+</span>
            <span style={{ color: '#a78bfa' }}>AI</span>
            <span style={{ color: '#6b7280' }}>+</span>
            <span style={{ color: '#f59e0b' }}>AUTOMATION</span>
            <span style={{ color: '#6b7280' }}>=</span>
            <span style={{ color: '#ffffff', letterSpacing: '0.1em' }}>INTELLIGENT SYSTEMS</span>
          </div>

          {/* Important distinction */}
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '2px',
            marginBottom: '1.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: '#a78bfa',
              letterSpacing: '0.15em',
              marginBottom: '0.4rem',
            }}>
              NOTE — EXPLORATION, NOT PRIMARY IDENTITY
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7 }}>
              My primary identity is <strong style={{ color: '#ef4444' }}>Python Backend Engineer & System Builder</strong>.
              AI/ML and Generative AI represent active exploration and growing exposure —
              I apply these technologies as extensions of backend engineering, not as a standalone discipline.
            </p>
          </div>

          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Exploring machine learning, computer vision, and large language models —
            and architecting how they integrate safely into production backend systems.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — streams */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#6b7280',
              marginBottom: '1.5rem',
            }}>
              AREAS OF EXPLORATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {STREAMS.map((stream, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(167,139,250,0.04)',
                    border: '1px solid rgba(167,139,250,0.1)',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)';
                    e.currentTarget.style.background = 'rgba(167,139,250,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.1)';
                    e.currentTarget.style.background = 'rgba(167,139,250,0.04)';
                  }}
                >
                  <span style={{ color: '#a78bfa', fontSize: '0.75rem' }}>{stream.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: '#d1d5db',
                    fontWeight: 500,
                  }}>
                    {stream.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — tech cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#6b7280',
              marginBottom: '1.5rem',
            }}>
              TECHNOLOGIES EXPLORED
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {AI_TECHS.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.06 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.4rem 0.8rem',
                    background: `${tech.color}08`,
                    border: `1px solid ${tech.color}25`,
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#d1d5db',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = tech.color + '60';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = tech.color + '15';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = tech.color + '25';
                    e.currentTarget.style.color = '#d1d5db';
                    e.currentTarget.style.background = tech.color + '08';
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: tech.color, flexShrink: 0 }} />
                  {tech.label}
                </motion.span>
              ))}
            </div>

            {/* Applied context */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '2px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: '#4b5563',
                letterSpacing: '0.15em',
                marginBottom: '0.6rem',
              }}>
                APPLIED IN PRODUCTION
              </p>
              <p style={{ color: '#9ca3af', fontSize: '0.8rem', lineHeight: 1.7 }}>
                Computer vision (YOLO) applied in fraud detection pipeline. Pandas used extensively for
                data processing pipelines across enterprise applications. Exploring LangChain and RAG
                architectures for backend integration patterns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIExploration;
