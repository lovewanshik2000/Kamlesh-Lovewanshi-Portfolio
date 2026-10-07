import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CLUSTERS = [
  {
    id: 'backend',
    category: 'BACKEND',
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.35)',
    role: 'PRIMARY EXPERTISE',
    nodes: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'REST APIs', 'Microservices'],
    summary: 'Core backend engineering focusing on clean API design, scalable service boundaries, and robust request handling.',
  },
  {
    id: 'data',
    category: 'DATA',
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.35)',
    role: 'PERSISTENCE & STORAGE',
    nodes: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'pgvector', 'Database Indexing'],
    summary: 'Relational data modeling, schema normalization, query optimization, and memory caching strategies.',
  },
  {
    id: 'distributed',
    category: 'DISTRIBUTED SYSTEMS',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.35)',
    role: 'ASYNC ORCHESTRATION',
    nodes: ['Celery', 'Redis', 'RabbitMQ', 'Task Queues', 'Background Workers'],
    summary: 'Asynchronous task execution, message brokering, decoupled workers, and reliable background jobs.',
  },
  {
    id: 'cloud',
    category: 'CLOUD & DEVOPS',
    color: '#d1d5db',
    glow: 'rgba(209, 213, 219, 0.25)',
    role: 'INFRASTRUCTURE & CI/CD',
    nodes: ['AWS', 'Docker', 'NGINX', 'Jenkins', 'GitHub Actions', 'Gunicorn'],
    summary: 'Containerized environments, reverse proxy routing, automated test pipelines, and cloud asset storage.',
  },
  {
    id: 'aiml',
    category: 'AI / ML',
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.3)',
    role: 'EXPLORATION & APPLIED CV',
    nodes: ['PyTorch', 'TensorFlow', 'YOLO', 'OpenCV', 'Scikit-learn'],
    summary: 'Applied computer vision and machine learning exploration integrated into operational backend workflows.',
  },
  {
    id: 'genai',
    category: 'GENAI',
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.3)',
    role: 'RESEARCH & RAG PIPELINES',
    nodes: ['LLMs', 'LangChain', 'RAG', 'Embeddings', 'Vector Search', 'LLM APIs'],
    summary: 'Server-side retrieval-augmented generation architectures, dense vector search, and document intelligence research.',
  },
];

const TechUniverse = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCluster, setActiveCluster] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax on desktop
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="stack"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #08060a 0%, #060608 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      }}
    >
      {/* Background ambient radial glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '650px',
        background: 'radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="scene-label">SCENE 03 — THE ENGINEERING UNIVERSE</div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
            THE ENGINEERING<br />
            <span style={{
              background: 'linear-gradient(135deg, #ef4444, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              UNIVERSE.
            </span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', maxWidth: '650px', lineHeight: 1.7 }}>
            A structured engineering constellation: core backend frameworks, relational data platforms,
            asynchronous task queues, and applied AI systems orchestrated into reliable production architectures.
          </p>
        </motion.div>

        {/* Spatial Universe Stage */}
        <div style={{
          position: 'relative',
          background: 'rgba(10, 8, 14, 0.75)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          borderRadius: '4px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(220,38,38,0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}>
          {/* Top Stage Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#ef4444', boxShadow: '0 0 8px #ef4444',
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#e5e7eb', letterSpacing: '0.15em', fontWeight: 700 }}>
                KAMLESH // BACKEND ENGINEER
              </span>
            </div>

            {/* Cluster Navigation Pills */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {CLUSTERS.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCluster(i)}
                  style={{
                    padding: '0.35rem 0.7rem',
                    background: activeCluster === i ? `${c.color}20` : 'transparent',
                    border: `1px solid ${activeCluster === i ? c.color : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '2px',
                    color: activeCluster === i ? '#ffffff' : '#9ca3af',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {c.category}
                </button>
              ))}
            </div>
          </div>

          {/* Central Active Detail & Spatial Cluster Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}>
            {/* Left: Active Domain Card */}
            <motion.div
              key={activeCluster}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              <div style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                background: `${CLUSTERS[activeCluster].color}15`,
                border: `1px solid ${CLUSTERS[activeCluster].color}40`,
                borderRadius: '2px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: CLUSTERS[activeCluster].color,
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                fontWeight: 700,
              }}>
                {CLUSTERS[activeCluster].role}
              </div>

              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}>
                {CLUSTERS[activeCluster].category}
              </h3>

              <p style={{
                color: '#9ca3af',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}>
                {CLUSTERS[activeCluster].summary}
              </p>

              {/* Node Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {CLUSTERS[activeCluster].nodes.map((node, ni) => (
                  <motion.div
                    key={ni}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ni * 0.05 }}
                    style={{
                      padding: '0.45rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${CLUSTERS[activeCluster].color}35`,
                      borderRadius: '2px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#f3f4f6',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      boxShadow: `0 0 12px ${CLUSTERS[activeCluster].color}15`,
                    }}
                  >
                    <span style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: CLUSTERS[activeCluster].color,
                    }} />
                    {node}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Spatial Constellation Stage */}
            <div style={{
              position: 'relative',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle at center, rgba(220,38,38,0.05) 0%, transparent 70%)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '3px',
              overflow: 'hidden',
            }}>
              {/* Concentric Spatial Rings */}
              <div style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                border: '1px dashed rgba(220, 38, 38, 0.25)',
                borderRadius: '50%',
                animation: 'spin 40s linear infinite',
              }} />
              <div style={{
                position: 'absolute',
                width: '190px',
                height: '190px',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                borderRadius: '50%',
                animation: 'spin 25s linear infinite reverse',
              }} />

              {/* Central Core HUD Element */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                padding: '1.25rem',
                background: 'rgba(10, 8, 14, 0.95)',
                border: '1px solid rgba(220, 38, 38, 0.45)',
                borderRadius: '50%',
                width: '120px',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(220, 38, 38, 0.25)',
              }}>
                <span style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.2rem' }}>◈</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 800, color: '#fff' }}>
                  KAMLESH
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: '#f97316', letterSpacing: '0.08em' }}>
                  BACKEND
                </span>
              </div>

              {/* Orbiting Satellite Nodes */}
              {CLUSTERS.map((c, idx) => {
                const angle = (idx / CLUSTERS.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 135;
                const cx = Math.cos(angle) * radius;
                const cy = Math.sin(angle) * radius;

                return (
                  <motion.button
                    key={c.id}
                    onClick={() => setActiveCluster(idx)}
                    animate={{
                      x: cx + mousePos.x * 0.25,
                      y: cy + mousePos.y * 0.25,
                    }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    style={{
                      position: 'absolute',
                      padding: '0.35rem 0.65rem',
                      background: activeCluster === idx ? `${c.color}25` : 'rgba(15, 12, 18, 0.85)',
                      border: `1px solid ${activeCluster === idx ? c.color : 'rgba(255, 255, 255, 0.12)'}`,
                      borderRadius: '3px',
                      color: activeCluster === idx ? '#fff' : '#9ca3af',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      cursor: 'pointer',
                      zIndex: 3,
                      boxShadow: activeCluster === idx ? `0 0 16px ${c.glow}` : 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.category}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechUniverse;
