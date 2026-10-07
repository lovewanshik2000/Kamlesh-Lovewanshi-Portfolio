import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDemoSimulator from '../components/ProjectDemoSimulator';

/* ══════════════════════════════════════════════════════
   PROJECT DATA — 5 projects (3 enterprise + 2 R&D)
══════════════════════════════════════════════════════ */
const projects = [
  /* ─────────────── 01 ─────────────── */
  {
    num: '01',
    name: 'FMCG SECONDARY SALES & DISTRIBUTOR MANAGEMENT',
    client: 'Godfrey Phillips India Ltd.',
    badge: 'ENTERPRISE',
    badgeColor: '#ef4444',
    tagline: 'End-to-end Sales Force Automation and Distributor Management platform for a national FMCG network.',
    tech: ['Python', 'Django', 'DRF', 'MySQL', 'Celery', 'Redis', 'AWS S3', 'SAP', 'JWT', 'SAML2 SSO', 'Swagger', 'SQLAlchemy', 'Pandas'],
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.25)',
    impact: '40% faster report generation through indexing and query optimization.',
    pipeline: [
      { label: 'SAP / ERP',      desc: 'Enterprise data source — distributor master data and sales orders' },
      { label: 'Django REST API', desc: '100+ endpoints across SFA, DMS, and reporting modules' },
      { label: 'JWT / SAML2',    desc: 'Token-based auth with SSO for enterprise field force' },
      { label: 'Celery + Redis', desc: 'Async report generation and ERP sync jobs' },
      { label: 'MySQL',          desc: 'Indexed, normalized schema for high-volume sales data' },
      { label: 'AWS S3',         desc: 'Report storage and delivery pipeline' },
    ],
    bullets: [
      'Architected 100+ RESTful API endpoints across Sales Force Automation, Distributor Management, and Secondary Sales Reporting modules using Django REST Framework.',
      'Built async data pipeline with Celery + Redis for ERP synchronization and scheduled report generation, reducing report turnaround time by ~40% through targeted database indexing.',
      'Implemented enterprise authentication with JWT and SAML2 SSO, supporting multi-tier role-based access control for field officers, managers, and distributors.',
      'Integrated SAP ERP and third-party payment gateways; managed AWS S3 storage for report and media asset delivery.',
      'Applied SQLAlchemy and Pandas for complex data aggregation and analytical reporting across multi-region sales datasets.',
    ],
  },

  /* ─────────────── 02 ─────────────── */
  {
    num: '02',
    name: 'POPcorn — FRAUD DETECTION SYSTEM',
    client: 'PVR Cinemas',
    badge: 'ENTERPRISE',
    badgeColor: '#f97316',
    tagline: 'Computer-vision-backed fraud monitoring platform integrated into cinema ticketing operations.',
    tech: ['Python', 'Django', 'REST APIs', 'YOLO', 'OpenCV', 'AWS S3', 'PostgreSQL'],
    color: '#f97316',
    glow: 'rgba(249,115,22,0.25)',
    impact: 'Real-time anomaly detection integrated into ticketing and entry workflows.',
    pipeline: [
      { label: 'CCTV / Camera Feed', desc: 'Live or recorded cinema entry and concession footage' },
      { label: 'YOLO Model',         desc: 'Object detection and anomaly flagging' },
      { label: 'Django API',         desc: 'Receives detection events, applies business rules' },
      { label: 'Fraud Processor',    desc: 'Evaluates detection metadata against ticket records' },
      { label: 'AWS S3',             desc: 'Evidence image and clip storage' },
      { label: 'PostgreSQL',         desc: 'Incident records, audit trail, analytics' },
    ],
    bullets: [
      'Developed Django REST backend that ingests detection events from YOLO-based computer vision models monitoring cinema entry and concession points.',
      'Designed fraud processing logic to cross-reference object detection metadata with ticketing records and access logs for anomaly classification.',
      'Built evidence storage pipeline integrating AWS S3 for flagged frame and clip archival with structured PostgreSQL audit trail.',
      'Implemented API endpoints for incident review, fraud categorization, and dashboard data delivery to operations teams.',
    ],
  },

  /* ─────────────── 03 ─────────────── */
  {
    num: '03',
    name: 'AUTOMATED QUESTION BANK GENERATOR',
    client: 'Hajela IAS Academy',
    badge: 'ENTERPRISE',
    badgeColor: '#f59e0b',
    tagline: 'PDF-to-structured-data automation pipeline that eliminated 70% of manual question bank preparation.',
    tech: ['Python', 'Django', 'DRF', 'Pandas', 'PostgreSQL', 'Docker', 'NGINX', 'Gunicorn', 'Git'],
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
    impact: '70% reduction in manual preparation time. Dockerized and deployed to production.',
    pipeline: [
      { label: 'PDF Upload',     desc: 'Raw exam papers and question sets ingested via API' },
      { label: 'Text Extractor', desc: 'Structured content extraction from unformatted PDFs' },
      { label: 'Pandas Pipeline',desc: 'Data cleaning, normalization, and validation' },
      { label: 'Question Parser', desc: 'Identifies question type, options, and answers' },
      { label: 'PostgreSQL',      desc: 'Structured question bank with tagging and metadata' },
      { label: 'Excel Export',   desc: 'Formatted output for exam delivery systems' },
    ],
    bullets: [
      'Designed and built an end-to-end PDF ingestion and content extraction pipeline using Python and Pandas, transforming raw exam papers into structured, validated question bank records.',
      'Implemented multi-stage processing: text extraction → content normalization → question classification → metadata tagging → formatted Excel export.',
      'Built REST API with Django DRF for upload management, processing status tracking, and export retrieval.',
      'Dockerized the full stack (Django + PostgreSQL + NGINX + Gunicorn) and deployed to a Linux VPS, reducing manual preparation time by approximately 70%.',
    ],
  },

  /* ─────────────── 04 ─────────────── */
  {
    num: '04',
    name: 'CAREERPILOT — AI JOB DISCOVERY & APPLICATION ENGINE',
    client: 'Personal R&D Project',
    badge: 'PERSONAL / R&D',
    badgeColor: '#a78bfa',
    tagline: 'AI-powered job discovery, scoring, and application workflow automation platform.',
    tech: ['Python', 'FastAPI', 'LangChain', 'LLM APIs', 'Playwright', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.25)',
    impact: 'Personal R&D — exploring AI-driven job parsing, embeddings-based matching, and asynchronous task queues.',
    pipeline: [
      { label: 'Job Sources',     desc: 'Scraped and API-sourced job listings' },
      { label: 'LLM Parser',     desc: 'LangChain + LLM for JD extraction and skill mapping' },
      { label: 'Skill Matcher',  desc: 'Resume-to-JD scoring via semantic similarity' },
      { label: 'Celery Workers', desc: 'Async job processing and scheduled crawling' },
      { label: 'App Workflow',   desc: 'Browser automation via Playwright [EXPERIMENTAL]' },
      { label: 'PostgreSQL',     desc: 'Job tracking, status, and application history' },
    ],
    bullets: [
      'Building a FastAPI backend that orchestrates LLM-based job description parsing — extracting skills, requirements, and seniority signals from unstructured job posts.',
      'Implementing semantic resume-to-JD matching using embeddings and cosine similarity to generate relevance scores and application priority.',
      'Designed async pipeline with Celery + Redis for scheduled job discovery, deduplication, and processing queue management.',
      'Exploring Playwright-based browser automation for application workflow steps [EXPERIMENTAL — not production-deployed].',
      'PostgreSQL schema designed for full job lifecycle tracking: discovery → scoring → application → follow-up → status.',
    ],
    note: 'PERSONAL R&D — Components are at varying stages. AI parsing is functional; browser automation is experimental.',
  },

  /* ─────────────── 05 ─────────────── */
  {
    num: '05',
    name: 'AI DOCUMENT INTELLIGENCE & KNOWLEDGE COPILOT',
    client: 'Personal R&D Project',
    badge: 'PERSONAL / R&D',
    badgeColor: '#60a5fa',
    tagline: 'RAG-based document understanding platform — ask questions across uploaded documents, get grounded answers.',
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'Embeddings', 'pgvector', 'Redis', 'Celery', 'Docker', 'LLM APIs'],
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.25)',
    impact: 'Personal R&D — exploring end-to-end RAG architecture, semantic chunking, and pgvector retrieval.',
    pipeline: [
      { label: 'Document Upload', desc: 'PDF, DOCX, TXT ingested via FastAPI endpoint' },
      { label: 'Text Chunker',   desc: 'Semantic chunking with overlap for context preservation' },
      { label: 'Embeddings',     desc: 'Dense vector representations via embedding model' },
      { label: 'pgvector / VDB', desc: 'Vector similarity search for chunk retrieval' },
      { label: 'RAG Retriever',  desc: 'Ranked context assembly and reranking' },
      { label: 'LLM Response',   desc: 'Grounded, source-cited answer generation' },
    ],
    bullets: [
      'Architecting a FastAPI backend with full RAG pipeline — document ingestion, chunking strategy, embedding generation, vector storage, and retrieval-augmented generation.',
      'Implementing semantic chunking with configurable overlap to preserve context boundaries during retrieval.',
      'Using pgvector (PostgreSQL extension) for vector similarity search — exploring scalable retrieval without a separate vector database dependency.',
      'Background document processing via Celery + Redis — ingestion and embedding jobs queued asynchronously to keep API responses non-blocking.',
      'Designed multi-tenant document isolation, API rate limiting, and response caching layer for scalability.',
    ],
    note: 'PERSONAL R&D — Core pipeline is functional. Production hardening and multi-tenancy are ongoing.',
  },
];

/* ── Animated pipeline component ──────────────────────── */
const Pipeline = ({ nodes, color, glow }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      alignItems: 'stretch',
      width: '100%',
      maxWidth: '260px',
    }}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            onMouseEnter={() => setHoveredNode(i)}
            onMouseLeave={() => setHoveredNode(null)}
            style={{
              padding: '0.55rem 0.9rem',
              background: hoveredNode === i ? `${color}18` : 'rgba(255,255,255,0.02)',
              border: `1px solid ${hoveredNode === i ? color + '60' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              cursor: 'default',
              transition: 'all 0.2s ease',
              boxShadow: hoveredNode === i ? `0 0 12px ${glow}` : 'none',
            }}
          >
            <span style={{ color, fontSize: '0.6rem', marginTop: '3px', flexShrink: 0 }}>◆</span>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.63rem', color: '#d1d5db', letterSpacing: '0.06em' }}>
                {node.label}
              </p>
              {hoveredNode === i && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#6b7280', marginTop: '2px', lineHeight: 1.5 }}
                >
                  {node.desc}
                </motion.p>
              )}
            </div>
          </motion.div>

          {i < nodes.length - 1 && (
            <div style={{
              width: '1px', height: '16px',
              background: `${color}30`,
              position: 'relative', margin: '0 auto', overflow: 'visible',
            }}>
              <motion.div
                animate={{ top: ['-4px', 'calc(100% + 4px)'] }}
                transition={{ repeat: Infinity, duration: 1.2 + i * 0.12, ease: 'linear', delay: i * 0.18 }}
                style={{
                  position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: color, boxShadow: `0 0 5px ${glow}`,
                }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/* ── Computer Vision Overlay HUD for Project 02 (POPcorn) ── */
const CVScannerHUD = () => (
  <div style={{
    width: '100%',
    maxWidth: '260px',
    background: 'rgba(0, 0, 0, 0.65)',
    border: '1px solid rgba(249, 115, 22, 0.35)',
    borderRadius: '2px',
    padding: '0.75rem 0.9rem',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    position: 'relative',
    boxShadow: '0 0 20px rgba(249, 115, 22, 0.12)',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f97316', marginBottom: '0.4rem', fontWeight: 700 }}>
      <span>[COMPUTER-VISION WORKFLOW]</span>
      <span style={{ color: '#9ca3af', fontSize: '0.55rem' }}>SIMULATION</span>
    </div>
    <div style={{ color: '#9ca3af', fontSize: '0.58rem', lineHeight: 1.6 }}>
      INGESTION: CCTV Frame Streams<br />
      INFERENCE: YOLO-based Computer Vision<br />
      DISPATCH: Django Event API → S3 & DB Audit
    </div>
  </div>
);

/* ── PDF Transformation HUD for Project 03 (Question Bank) ── */
const PDFTransformationHUD = () => (
  <div style={{
    width: '100%',
    maxWidth: '260px',
    background: 'rgba(0, 0, 0, 0.65)',
    border: '1px solid rgba(245, 158, 11, 0.35)',
    borderRadius: '2px',
    padding: '0.75rem 0.9rem',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    position: 'relative',
    boxShadow: '0 0 20px rgba(245, 158, 11, 0.12)',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f59e0b', marginBottom: '0.4rem', fontWeight: 700 }}>
      <span>[PDF EXTRACTION PIPELINE]</span>
      <span style={{ color: '#f59e0b', fontSize: '0.55rem' }}>AUTOMATED</span>
    </div>
    <div style={{ color: '#9ca3af', fontSize: '0.58rem', lineHeight: 1.6 }}>
      INPUT: Unstructured Exam PDFs<br />
      PARSER: Python Text Extraction + Pandas<br />
      EXPORT: Validated Question Bank Schema
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════
   Projects section
══════════════════════════════════════════════════════ */
const Projects = () => {
  const [active, setActive] = useState(0);
  const [showSimulator, setShowSimulator] = useState(false);
  const proj = projects[active];

  const handleTabChange = (index) => {
    setActive(index);
    setShowSimulator(false);
  };

  return (
    <section
      id="projects"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #060608 0%, #08060a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '20%', left: '-5%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(220,38,38,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="scene-label">SCENE 05 — FEATURED PROJECTS</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
            SYSTEMS I'VE<br />
            <span style={{
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ENGINEERED.
            </span>
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '520px', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Enterprise production systems, automation pipelines, and personal R&D — organized by engineering complexity.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', gap: '0', marginBottom: '2.5rem',
          overflowX: 'auto', paddingBottom: '0.5rem',
        }}>
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              style={{
                flex: '0 0 auto',
                padding: '0.6rem 1.25rem',
                background: active === i ? `${p.color}12` : 'transparent',
                border: `1px solid ${active === i ? p.color + '50' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '2px',
                marginRight: '-1px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                color: active === i ? p.color : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              aria-pressed={active === i}
              aria-label={`Project ${p.num}: ${p.name}`}
            >
              {p.num} — {p.badge.includes('R&D') ? 'R&D' : 'ENTERPRISE'}
            </button>
          ))}
        </div>

        {/* Active project card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'rgba(12,8,6,0.8)',
              border: `1px solid ${proj.color}25`,
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: `0 0 60px ${proj.glow}`,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            {/* Top accent */}
            <div style={{ height: '2px', background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}>
              {/* Left — info */}
              <div style={{
                padding: 'clamp(1.5rem, 3vw, 3rem)',
                borderRight: '1px solid rgba(255,255,255,0.04)',
              }}>
                {/* Badge + client */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    background: `${proj.badgeColor}20`,
                    border: `1px solid ${proj.badgeColor}40`,
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                    color: proj.badgeColor,
                  }}>
                    {proj.badge}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#6b7280', letterSpacing: '0.1em' }}>
                    {proj.client.toUpperCase()}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}>
                  {proj.name}
                </h3>

                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}>
                  {proj.tagline}
                </p>

                {/* Bullet points */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.5rem' }}>
                  {proj.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: bi * 0.06 }}
                      style={{
                        display: 'flex', gap: '0.6rem',
                        color: '#9ca3af', lineHeight: 1.7, fontSize: '0.825rem',
                      }}
                    >
                      <span style={{ color: proj.color, fontSize: '0.55rem', marginTop: '5px', flexShrink: 0 }}>▸</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {/* Impact */}
                <div style={{
                  padding: '0.9rem 1rem',
                  background: `${proj.color}08`,
                  border: `1px solid ${proj.color}20`,
                  borderRadius: '2px',
                  marginBottom: '1.25rem',
                }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#6b7280', letterSpacing: '0.15em', marginBottom: '0.2rem' }}>
                    IMPACT
                  </p>
                  <p style={{ fontSize: '0.85rem', color: proj.color, fontWeight: 600 }}>
                    {proj.impact}
                  </p>
                </div>

                {/* R&D note if applicable */}
                {proj.note && (
                  <div style={{
                    padding: '0.7rem 1rem',
                    background: 'rgba(167,139,250,0.06)',
                    border: '1px solid rgba(167,139,250,0.15)',
                    borderRadius: '2px',
                    marginBottom: '1.25rem',
                  }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#a78bfa', lineHeight: 1.6 }}>
                      {proj.note}
                    </p>
                  </div>
                )}

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{
                      padding: '0.2rem 0.55rem',
                      background: `${proj.color}10`,
                      border: `1px solid ${proj.color}22`,
                      borderRadius: '2px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: '#d1d5db',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Demo Simulator Trigger for R&D projects */}
                {(proj.num === '04' || proj.num === '05') && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <button
                      onClick={() => setShowSimulator(prev => !prev)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.55rem 1rem',
                        background: showSimulator ? `${proj.color}25` : `${proj.color}12`,
                        border: `1px solid ${proj.color}60`,
                        borderRadius: '2px',
                        color: '#fff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        cursor: 'pointer',
                        boxShadow: `0 0 14px ${proj.color}20`,
                        transition: 'all 0.2s ease',
                      }}
                      aria-label="Toggle Interactive Demo Simulator"
                    >
                      <span>{showSimulator ? '▲ CLOSE CONCEPT DEMO' : '⚡ EXPLORE CONCEPT / R&D DEMO'}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Right — pipeline */}
              <div style={{
                padding: 'clamp(1.5rem, 3vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.15)',
                gap: '1rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  color: '#4b5563', letterSpacing: '0.2em', alignSelf: 'flex-start',
                }}>
                  SYSTEM ARCHITECTURE
                </p>

                {/* Specialized HUD for Computer Vision and PDF pipelines */}
                {proj.num === '02' && <CVScannerHUD />}
                {proj.num === '03' && <PDFTransformationHUD />}

                <Pipeline nodes={proj.pipeline} color={proj.color} glow={proj.glow} />
              </div>

              {/* Interactive Demo Simulator Drawer */}
              {showSimulator && (proj.num === '04' || proj.num === '05') && (
                <div style={{ gridColumn: '1 / -1', padding: '0 clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 3vw, 3rem)' }}>
                  <ProjectDemoSimulator
                    projectId={proj.num}
                    color={proj.color}
                    onClose={() => setShowSimulator(false)}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
