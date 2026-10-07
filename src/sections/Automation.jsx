import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const TRANSFORMATIONS = [
  {
    id: 1,
    from: 'UNSTRUCTURED PDF',
    to: 'STRUCTURED DATA',
    tech: 'Python • Pandas • Regex',
    metric: 'PARSED SCHEMA',
    metricColor: '#f59e0b',
    description: 'Ingests multi-page exam documents, extracts unformatted text, and maps questions into validated relational schemas.',
    stage: 'PRODUCTION (Hajela IAS)',
  },
  {
    id: 2,
    from: 'JOB DESCRIPTION',
    to: 'SKILL REQUIREMENTS',
    tech: 'FastAPI • LangChain • Embeddings',
    metric: 'SEMANTIC EXTRACTION',
    metricColor: '#a78bfa',
    description: 'Extracts technical competencies, role requirements, and architecture signals from unstructured job postings.',
    stage: 'PERSONAL R&D (CareerPilot-AI)',
  },
  {
    id: 3,
    from: 'ENTERPRISE DOCUMENT',
    to: 'GROUNDED CONTEXT',
    tech: 'FastAPI • pgvector • RAG',
    metric: 'VECTOR RETRIEVAL',
    metricColor: '#f97316',
    description: 'Semantic text chunking with overlap, vector similarity search via pgvector, and context synthesis with source citations.',
    stage: 'PERSONAL R&D (Doc Intelligence)',
  },
  {
    id: 4,
    from: 'USER EVENT / REQUEST',
    to: 'SECURE BACKEND DISPATCH',
    tech: 'FastAPI • Server-Side Proxy',
    metric: 'SERVER-SIDE PROXY',
    metricColor: '#ef4444',
    description: 'Protects external API credentials server-side, routing actions through rate-limited, schema-validated backend endpoints.',
    stage: 'BACKEND ARCHITECTURE',
  },
  {
    id: 5,
    from: 'HEAVY API REQUEST',
    to: 'ASYNC BACKGROUND WORKER',
    tech: 'Celery • Redis Message Broker',
    metric: 'TASK QUEUES',
    metricColor: '#f59e0b',
    description: 'Offloads compute-heavy report generation and ERP sync jobs into Celery task queues, keeping HTTP responses non-blocking.',
    stage: 'PRODUCTION (FMCG Platform)',
  },
  {
    id: 6,
    from: 'ENTERPRISE SALES DATA',
    to: 'SCHEDULED ANALYTICS',
    tech: 'MySQL Indexing • Celery • AWS S3',
    metric: 'SCHEDULED ANALYTICS',
    metricColor: '#dc2626',
    description: 'Automates distributor and regional sales aggregations with targeted database indexing, delivering completed reports via AWS S3.',
    stage: 'PRODUCTION (Godfrey Phillips)',
  },
];

const Automation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="automation"
      ref={ref}
      className="section"
      style={{
        background: 'linear-gradient(180deg, #060608 0%, #08060a 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      }}
    >
      {/* Background ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '40%', right: '-5%',
        width: '650px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="scene-label">SCENE 08 — AUTOMATION ARCHITECTURE</div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem', maxWidth: '750px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
            AUTOMATE<br />
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              THE REPETITIVE.
            </span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.7 }}>
            True engineering value lies in turning manual bottlenecks into deterministic, self-healing pipelines.
            Transforming unstructured human inputs into validated, high-throughput digital workflows.
          </p>
        </motion.div>

        {/* 6 Transformation Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {TRANSFORMATIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === item.id ? 'rgba(255, 255, 255, 0.04)' : 'rgba(12, 8, 14, 0.75)',
                border: `1px solid ${hoveredCard === item.id ? 'rgba(245, 158, 11, 0.35)' : 'rgba(255, 255, 255, 0.06)'}`,
                borderRadius: '3px',
                padding: '1.75rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
                boxShadow: hoveredCard === item.id ? '0 12px 30px rgba(0, 0, 0, 0.7)' : 'none',
              }}
            >
              {/* Top Accent Line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: hoveredCard === item.id ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : 'transparent',
                transition: 'all 0.3s ease',
              }} />

              {/* Transformation Input/Output Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '1rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ color: '#d1d5db' }}>{item.from}</span>
                  <span style={{ color: '#f59e0b' }}>──►</span>
                  <span style={{ color: '#f59e0b' }}>{item.to}</span>
                </div>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: item.metricColor,
                  fontWeight: 700,
                  padding: '0.2rem 0.5rem',
                  background: `${item.metricColor}15`,
                  border: `1px solid ${item.metricColor}30`,
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                }}>
                  {item.metric}
                </span>
              </div>

              {/* Description */}
              <p style={{
                color: '#9ca3af',
                fontSize: '0.82rem',
                lineHeight: 1.65,
                marginBottom: '1.25rem',
              }}>
                {item.description}
              </p>

              {/* Footer: Tech Stack + Stage Tag */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                paddingTop: '0.75rem',
                borderTop: '1px dashed rgba(255, 255, 255, 0.05)',
                color: '#6b7280',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                <span style={{ color: '#d1d5db' }}>{item.tech}</span>
                <span style={{ color: '#9ca3af' }}>{item.stage}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;
